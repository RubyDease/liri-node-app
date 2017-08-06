// -------------first function-----------------//

function movieThis() {
    const omdb = require('omdbapi');
    var requestedMovie = process.argv[2];
    var movieName = "";

    for (var i = 2; i < requestedMovie.length; i++) {

        if (i > 2 && i < requestedMovie.length) {

            movieName = movieName + "+" + requestedMovie[i];

        } else {

            movieName += requestedMovie[i];

        }
    }

    // run a request to the OMDB API with the movie specified
    var queryUrl = "http://www.omdbapi.com/?i=" + movieName + "&y=&plot=short&apikey=3a3447f7";
    console.log(queryUrl);
    request(queryUrl, function(error, response, body) {

        // If the request is successful
        if (!error && response.statusCode === 200) {

            // Parse the body of the site and recover just the imdbRating
            // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
            console.log("Release Year: " + JSON.parse(body).Year);
        };
    });
    // call the function 
    movieThis()

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
    };

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

        spotify.search({ type: 'track', query: songName },
            function(err, data) {
                if (err) {
                    return console.log('Error occurred: ' + err);
                }

                console.log(data.tracks.items);
            };
        });
    // calling the function
    spotifyThisSong(songName)