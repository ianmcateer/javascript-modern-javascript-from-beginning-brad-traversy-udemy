// working with technologies like ajax and fetch api
// which used to make http requests to files, apis and services whetehr your own 
// or external rest api
// ajax and xml older technologies but reliable
// fetch is newer standard- we will work with both 

// syncronous code 
posts = loadPostsSync();
// wait till posts fetched 
// ...do something with posts 

doNextThing() // has to wait until posts load 
// this is blocking code which slows things down

// asynchronous code 
// passing callback function- allows us to fetch posts
loadPostsAsync(function(){
  // wait till posts fetched
  // do something with posts
})
// do next thing
// this is much faster 

// most async code is going to come from api, axios, fetch api, node fs
// XMLHttpRequest and fetch
// axios and other http libraries 
// node.js fs

// few ways to work with async code 
// callabcks 
// promises es6
// async/await new as well- looks like syn code but is async
