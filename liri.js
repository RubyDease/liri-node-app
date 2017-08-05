switch (expr) {
    case 'movie-this':
        output += 'would you like to look for a movie?';
        return (movieThis);
        break;
    case 'My-Tweets':
        output += 'would you like to see my last tweets';
        break;
    case 'Spotify-this-song':
        output += 'would you like to look for a song?';
        break;

}

// -------------first function-----------------//

function movieThis() {
    const omdb = require('omdbapi');
    var requestedMovie = process.argv[2];

    // run a request to the OMDB API with the movie specified
    request(" http://www.omdbapi.com/?i=tt3896198&apikey=3a3447f7", function(error, movie) {

        omdb.get({
            id: 'tt0485947',
            title: 'Mr. Nobody',
            type: 'movie',
            plot: 'full',
            tomatoes: true,
            year: '2009'
        }).then(res => {
            console.log('got response:', res);
        }).catch(console.error);


    })

};
// call the function 
movieThis();

//=============================================================================================

// twiter application using API key

function myTweets() {

    var Twitter = require('twitter');
    // request keys
    var keys = require('./keys.js');

    var client = new Twitter(keys.twitterKeys);
    // call back tweets 
    var params = { screen_name: 'nodejs' };
    client.stream('statuses/user_timeline', params, function(error, tweets) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        // call the function show my tweets
        console.log(myTweets);
    });
}

//======================================================
// spotify application using APIkey

var songName = process.argv[2];

function spotifyThisSong(songName) {
    var Spotify = require('node-spotify-api');
    var spotify = new Spotify({
        id: 'b2a51e2b7ba24a44b88c8ca2384840fa',
        secret: '7f7b281f873d4ccc92e9346a4e50a653',
    });

    var songName = songName;

    spotify.search({ type: 'track', query: songName }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(data.tracks.items);

    });
};
// calling the function
spotifyThisSong(songName)