from flask import Flask, render_template, request
import requests
import os

app = Flask(__name__)

url = "https://spotify23.p.rapidapi.com/search/"


headers = {
	'X-RapidAPI-Key': os.environ.get('API_KEY'),
	'X-RapidAPI-Host': os.environ.get('API_HOST')
}


@app.route('/music/<artist_name>')
def music_home(artist_name):
    print(artist_name)
    querystring = {"q":artist_name,"type":"songs","offset":"0","limit":"6","numberOfTopResults":"1"}
    api_data = requests.request("GET", url, headers=headers, params=querystring).json()

    songs = []
    for entry in api_data['albums']['items']:
        song = entry['data']
        songs.append({
            'title' : song['name'],
            'artists': [artist['profile']['name'] for artist in song['artists']['items']],
            'url': 'https://open.spotify.com/album/' + song['uri'].split(':')[-1],
            'image': song['coverArt']['sources'][-1]['url'],
        })
        # Height & width 640px

    return songs




if __name__ == '__main__':
    app.run(debug=True)