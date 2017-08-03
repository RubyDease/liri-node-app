var request = require("request");
var requestedMovie = process.argv[2];

//  run a request to the OMDB API with the movie specified
request(" http://www.omdbapi.com/?i=tt3896198&apikey=3a3447f7", function(error, response, body) {

    // If the request is successful (i.e. if the response status code is 200)
    if (!error && response.statusCode === 200) {

        console.log(JSON.parse(body).Rated);

        // Parse the body of the site and recover just the imdbRating
        // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
        console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
        process.exit(0);
    }

});


//=============================================================================================
// twiter application


var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'oZEMB4iDN31BElciZJit6rUdv',
    consumer_secret: 'N6783yn43qMNa5ekcAmC606gCv8Nu42lTI5U6KdRUgJWlbSwZb',
    access_token_key: '892143535662694405-bzu0aARqiYaibfpfPN3mfrsTY6Haxg7',
    access_token_secret: 'kXrp7EsVVvmuB2mGWqhuRQiryF8Qo8Rs78VzUDwEDiqUB',
});

var params = { screen_name: 'nodejs' };
client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        console.log(tweets);
        process.exit(0);
    }
});

//======================================================
// spotify application using API

var spotify = require('node-spotify-api');
var spotify = new Spotify({
    id: 'b2a51e2b7ba24a44b88c8ca2384840fa',
    secret: '7f7b281f873d4ccc92e9346a4e50a653',
});

spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }

    console.log(data);
    process.exit(0);
})