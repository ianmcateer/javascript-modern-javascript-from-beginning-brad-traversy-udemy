// AJAX AND XHR
// ajax is the engine- XHR is the type of request
//
// ajax isnt a language or a framework or library
// it stands for asynchornous javascript ad xml- but xml rarely uses anymore- now json
// its a set of  web technology to send and recieve data asynchronously
//
// type in url or click a link
// this will initiate a common request - a common http request to the server
// and get a common response back including entire webpage with the headers and data
//
// ajax allows us to make requests asynchronously - do this in the background without
// refreshingthe whole web page
// so if wanted to just update one little section of text can do that with ajax
// and its much much faster than reloading the entire web page
//
// it does this by making an asynchrnous javascript call
// this goes through an ajax engine and uses xhr(xmlhttpreqeust) object
// which is part of the browser- server returns json or xml or plan text
// parse and use that data in the application - this is done without any page refresh
// when we send and recieve requests it can be from something like our local machine
// or on our local server
// or from somehting like a public api like google maps
// these apis have to have permissions - CORS enabled- cross domain communicaiton
// means we can have access to their api even though we are not on the same domain name
// as them
// some apis do require auth- oauth
//
// XHR (XML HTTP REQUEST) OBJECT
// this is the core technology in ajax
// xml provided by the browser js enviornment - all browsers have this api
// method transfer between client/server
// other libararies and methods
// can work with data other than xml
//
// while the standard HTTP request makes a 'synchronous' call and must wait for the response and makes
// a page-reload (you always get a new html-page to display) a XMLHttpRequest may be used sync (not typical)
// and async (the better way) without a page-reload. you may ask for the response with javascript and the response
// is usually xml- or json-data that you may process with js and update parts of your page through
// the use of dom-methods that manipulate your document ... so you don't need an entire page-reload
// because all of that is running in the 'background'
//
//
// LIBRARIES AND OTHER METHODS to make http requests
// fetch api- core javascript
// axios- library
// superagent- library
// jquery - library
// node http
//
// To understand the difference between those two methods, let's step back and examine
//  how HTTP works. Each time you want to reach a resource on the Web, the browser sends
//  a request to a URL. An HTTP request consists of two parts: a header that contains a set
//   of global metadata about the browser's capabilities, and a body that can contain
//   information necessary for the server to process the specific request.
