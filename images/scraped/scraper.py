#!/bin/python3

import os
from bs4 import BeautifulSoup as bs
import requests

def get_page(link):
    return bs(requests.get(link).text,'html.parser')

if __name__ == "__main__":
    link = 'https://www.flipkart.com'
    page = get_page(link)
    download_links =list(map(lambda x: x.get('src'),page.find_all('img')))

    images_links = []
    for i in download_links:
        if(i != '' and str(i).startswith('https')):
            images_links.append(i)
    for i in images_links:
        os.system('wget {}'.format(i))
