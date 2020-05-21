from bs4 import BeautifulSoup
import mechanize
import urllib
import re
import requests
import geocoder
from geopy.geocoders import Nominatim
import geopy
import urllib.request
import json
from geopy.distance import geodesic

address = 'L9E+1G5+Milton,+ON'




def smt():
    return("yes")




def liner(address):
    geolocator = Nominatim(user_agent="myapp")
    location = geolocator.geocode(address)
    print(1,location)
    return (location.latitude, location.longitude)
    
def letgoLiner(address):
    address = address.replace(' ','+')

    endpoint =f'https://maps.googleapis.com/maps/api/geocode/json?address={address}=&key=AIzaSyCjUgUpAnwQ-oZhB3nLwl8aS4EFQdxjqUQ'
    request = endpoint
    response = urllib.request.urlopen(request).read()
    latlong = json.loads(response)
    keysone  = latlong.keys()
    results = latlong['results']
    try:
        geometry = results[0]['geometry']
    except IndexError:
        return('Check Posting')

    location = geometry['location']
    lat = location['lat']
    lng = location['lng']
    return(lat,lng)




def kijijiUrlMaker(address,radius,minprice,maxprice,search):
    accsearch = search.replace(" ","+")
    new = address.replace(" ","+")
    base = f"https://www.kijiji.ca/b-search.html?formSubmit=true&address={new}&adIdRemoved=&adPriceType=&brand=&carproofOnly=false&categoryName=&cpoOnly=false&gpTopAd=false&highlightOnly=false&ll=&locationId=&minPrice={minprice}&maxPrice={maxprice}&origin=&pageNumber=1&radius={radius}&searchView=LIST&sortByName=dateDesc&userId=&urgentOnly=false&keywords={accsearch}&categoryId=0&dc=true"
    return(base)


def postalcode(address):
    geolocator = geopy.Nominatim(user_agent='myapp')
    print('yes')
    zipcode = geolocator.reverse(liner(address))
    return(zipcode.raw['address']['postcode']).replace(' ','')


def craigslistUrlMaker(address,radius,minprice,maxprice,search):
    accsearch = search.replace(" ","+")
    new = postalcode(address)
    base = f'https://toronto.craigslist.org/search/sss?query={accsearch}&sort=rel&search_distance={radius}&postal={new}&min_price={minprice}&max_price={maxprice}'
    print(base)
    return(base)


def numberfinder(num):
    try:
        return(re.findall(r'\d+',num)[0])
    except:
        return(0.0)

print(numberfinder(' ,50km    ')[0])



def sorter(myList,n):
    myList.sort(key = lambda x: x[n])
    for item in myList:
        if item[n] == 0.0:
            item[n] = 'please contact'
        else:
            item[n] = str(item[n]) + '$'
        
    return(myList)





def letgoUrlMaker(address, radius, minprice, maxprice,search):
    lat = liner(address)[0]
    lon = liner(address)[1]
    location = (lat,lon)
    url = f'https://www.letgo.com/en-ca?distance={radius}&latitude={lat}&longitude={lon}&price%5Bmax%5D={maxprice}&price%5Bmin%5D={minprice}&searchTerm={search}'
    print(url)
    response = requests.get(url)
    data = response.text
    soup = BeautifulSoup(data, features='html.parser')
    #print(soup.find('body'))
    listings = soup.find_all('div',class_='sc-fzqNJr fZQQCV')
    i = 0
    for post in listings:
    
        print('Title: ',post.find(class_="sc-fzqMAW lxfBG").text)
        print('Location: ',post.find(class_="sc-fzqMAW ewUxzL").text)
        print('Link: ',post.find(class_="sc-fzqMAW lxfBG").a['href'])
        print('Coordinates: ',letgoLiner(post.find(class_="sc-fzqMAW ewUxzL").text))
        print('ImageLink:' ,post.find(class_="sc-fzqARJ edUkoJ sc-fzoYkl cLtUmm sc-pZaHX hYxXbw"))
        destination = letgoLiner(post.find(class_="sc-fzqMAW ewUxzL").text)
        urltwo = post.find(class_="sc-fzqMAW lxfBG").a['href']
        print('second url', urltwo)
        responsetwo = requests.get(urltwo)
        datatwo = responsetwo.text
        souptwo = BeautifulSoup(datatwo,features='html5lib')
        #print(souptwo)
        try:
            link = souptwo.find(class_="wrapper").find(class_="sc-fzoyAV givzfL").find('img')['src']
        except AttributeError:
            link = 'bleh'

        # #.find(class_="sc-pHIBf hDBhPd")
        print(((link)))
        #link = str(link)
        #print''('link: ',link)
        #print('https://img'+link.split('img')[2]+'img_600')
        #print(souptwo)
        try:
            distance = int(round(geodesic(location,destination).km))
        except ValueError:
            distance = 'N/A'
        print('Distance: ',distance)
        print(i)
        print()
        i +=1
    return(url)


#print(letgoUrlMaker('1367 Chretien Street',10,10,2010,'Xbox'))

#print(letgoLiner('Milton, L9T 0P4'))
#https://www.letgo.com/en-ca?distance=10&latitude=43.4819335&longitude=-79.8491818&price%5Bmax%5D=10&price%5Bmin%5D=20008&searchTerm=PS4
#https://www.letgo.com/en-ca?distance=10&latitude=43.4850031&longitude=-79.8545778&price%5Bmax%5D=2000&price%5Bmin%5D=10&searchTerm=ps4
#



