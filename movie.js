console.log("connected");
var movies = [
    {
        title : "In Bruges",
        hasWatched : false,
        rating : 5
    },
    {
        title : "Forzen",
        hasWatched : true,
        rating : 3.5
    },
    {
        title : "7elm elomer",
        hasWatched : true,
        rating : 5
    }
];
// movies.forEach( function(movie){
//     var result = "You have ";
//     if (movie.hasWatched){
//         result += "watched "
//     } else {
//         result += "not seen "
//     }
//     result += "\"" + movie.title + "\"" + " - " + movie.rating + " stars"
//     // console.log(result + "\"" + movie.title + "\"" + "- " + movie.rating + " stars")
//     console.log(result);
// });

function builtString(movie){
    var result = "You have ";
    if (movie.hasWatched){
        result += "watched "
    } else {
        result += "not seen "
    }
    result += "\"" + movie.title + "\"" + " - " + movie.rating + " stars"
    // console.log(result + "\"" + movie.title + "\"" + "- " + movie.rating + " stars")
    return result;
}
movies.forEach(function(movie){
    console.log(builtString(movie));
});