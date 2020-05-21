from django.shortcuts import render
from bs4 import BeautifulSoup
import requests
from requests.compat import quote_plus
from . import models
from .forms import SearchForm
import mechanize
import urllib3
import urllib
from mech import smt, liner, kijijiUrlMaker, sorter, craigslistUrlMaker, numberfinder


BASE_URL = 'https://toronto.craigslist.org/search/sss?query={}&sort=rel'
BASE_IMAGE_URL = 'https://images.craigslist.org/{}_300x300.jpg'
KIJIJI_URL = 'https://www.kijiji.ca/b-gta-greater-toronto-area/{}/k0l1700272?dc=true'


def home(request):
    context = {
        'form': SearchForm(),
    }
    return render(request, 'base.html', context)


fuckup = 'starts'

def new_search(request):
    if request.POST:
        print(request.POST)

        if 'search' in request.POST:
            search = request.POST.get('search')
            address = request.POST.get('address')
            minprice = request.POST.get('minPrice')
            maxprice = request.POST.get('maxPrice')
            if request.POST.get('radius') == '':
                radius = '100'
            else:
                radius = request.POST.get('radius')
            search = request.POST.get('search')
            models.Search.objects.create(search=search)
            final_url = craigslistUrlMaker(address,radius,minprice,maxprice,search)
            response = requests.get(final_url)
            data = response.text
            soup = BeautifulSoup(data, features='html.parser')
            form = SearchForm(request.POST)
            

            post_listings = soup.find_all('li',{'class':'result-row'})

            final_postings = []
            for post in post_listings:
                post_title = post.find(class_='result-title').text
                post_url = post.find('a').get('href')
                if post.find(class_='result-price'):
                    post_price = post.find(class_='result-price').text
                else:
                    post_price = 'N/A'
                if post.find(class_='result-hood'):
                    post_location = post.find(class_='result-hood').text
                else:
                    post_location = 'N/A'
                
                if post.find(class_='result-tags').find(class_='maptag'):
                    post_distance = post.find(class_='result-tags')
                    post_distance = str(post_distance)
                    print(post_distance)
                else:
                    post_distance = 0.0
                    print('no')
                

                if post.find(class_='result-image').get('data-ids'):
                    post_image = post.find(class_='result-image').get('data-ids').split(',')[0][2:]
                    post_image_url = BASE_IMAGE_URL.format(post_image)   
                else:
                    post_image_url="https://cdn.dribbble.com/users/1963449/screenshots/5915645/404_not_found_4x.png?compress=1&resize=1200x900"

                final_postings.append([post_title,post_url,post_price,post_image_url,post_distance,post_location])

            
        
            search = request.POST.get('search')
            address = request.POST.get('address')
            minprice = request.POST.get('minPrice')
            maxprice = request.POST.get('maxPrice')
            if request.POST['radius'] == '':
                radius = '100'
            else:
                radius = request.POST.get('radius')
            models.Search.objects.create(search=search)
            final_url= kijijiUrlMaker(address,radius,minprice,maxprice,search)
            response = requests.get(final_url)
            data = response.text
            print(final_url)
            
            
            soup = BeautifulSoup(data, features='html.parser')
            for post_listings in soup.find_all('div', class_='search-item'):
                post_info = post_listings.find('div', class_='clearfix')
                post_price = post_info.find('div',class_='price').text.strip()
                post_distance = post_info.find('div',class_='distance').text.strip()
                print('distance: ',post_distance)
                link = post_info.a['href']
                post_link = 'https://kijiji.ca' + link
                title = post_info.a.text.strip()
                if post_info.find('div',class_='left-col').find('div',class_='image').picture:
                    post_image_url = post_info.find('div',class_='left-col').find('div',class_='image').picture.img['data-src']
                else:
                    post_image_url="https://cdn.dribbble.com/users/1963449/screenshots/5915645/404_not_found_4x.png?compress=1&resize=1200x900"
                post_location = post_info.find(class_='location').text[:150].strip()
                final_postings.append([title,post_link,post_price,post_image_url,post_distance,post_location])
            i=0
            for post in final_postings:
                post[2] = post[2].replace(',','')
                try:
                    post[2] = float(numberfinder(post[2]))

                except ValueError:
                    post[2] = 0.0
            
            for post in final_postings:
                
                try:
                    post[4] = float(numberfinder(post[4]))
                    print('yes',post[4])
                except ValueError:
                    print(post[4])
                    post[4] = 0.0
                

            if request.POST['filter'] == '3':
                sorter(final_postings,2)
            elif request.POST['filter'] == '5':
                sorter(final_postings,4)

            for post in final_postings:
                if post[2] == 0.0:
                    post[2] = 'Contact Seller'
                else:
                    post[2] = str(post[2])
                if post[4] == 0.0:
                    post[4] = 'Contact Seller'
                else: 
                    post[4] = str(post[4]) + 'km'

            
            stuff_for_front_end = {
                'search':search,
                'final_postings': final_postings,
                'form': SearchForm(),
            }

            return render(request, 'my_app/new_search.html', stuff_for_front_end)

def form(request):
    context = {
        'form': SearchForm(),
    }
    return render(request, 'my_app/form.html', context)
