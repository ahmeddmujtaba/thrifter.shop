from bs4 import BeautifulSoup
import requests
import csv

source = requests.get('http://coreyms.com').text
soup = BeautifulSoup(source, 'lxml')

csv_file = open('scraper.csv','w')
csv_writer = csv.writer(csv_file)
csv_writer.writerow(['headline','link'])

for article in soup.find_all('article'):
    try:
        headline = article.h2.a.text
        videoSource = article.find('iframe',class_='youtube-player')['src']
        videoID = videoSource.split('/')[4].split('?')[0]
        link = f'https://youtube.com/watch?v={videoID}'   
    except Exception as identifier:
        link = 'None'
    print(headline,link)
    print()
    csv_writer.writerow([headline,link])

csv_file.close()