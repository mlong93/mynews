from urllib.request import urlopen
from bs4 import BeautifulSoup
import json
import ssl

try:
    from googlesearch import search
except ImportError:
    print('No module named \'google\' found')

query = input('What do you want to search?')

# clear previous contents
f = open('data.json', 'w')
f.close()

ssl._create_default_https_context = ssl._create_unverified_context

websites = {}
websites['results'] = []

for link in search(query,tbs='qdr:d',num=1,stop=10,pause=2):
    curr_link = {}
    curr_link['link'] = link

    try:
        url = urlopen(link)
        print('url opened')
    except:
        print('could not open link')
        break

    data = url.read()

    soup = BeautifulSoup(data,'html.parser')
    curr_link['title'] = str(soup.find('title'))

    data = ''
    for i in soup.find_all('p'):
        data += i.get_text()

    curr_link['text'] = data

    websites['results'].append(curr_link)
    # search_results.write('-------------------------------------------------------------------------')
    # search_results.close()

with open('data.json', 'w') as outfile:
    json.dump(websites, outfile)
