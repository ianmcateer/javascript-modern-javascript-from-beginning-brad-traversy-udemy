// document object part of window object

// window is global object client side javascript
// node runs on computer system as standalone process
// compue=ter system is enviornemnt 
// client side javascript the window or browser is the global envrionemrnt
// chrome and node js both use same js engine
// window object has alot to it - local storage, fetch api, geolocation, alert proot confirm

// type window in console and see all the methods

// WINDOW METHODS OBJECTS AND PROPERTIES
// console.log(123)
// window.console.log(123)

// alert('hello world')

// prompt takes an input
// const input = prompt()
// alert(input)

// confirm
// if(confirm('are you sure')){
//   console.log('YES')
// } else {
//   console.log('no')
// }

let val 

// outer height and width
val = window.outerHeight
val = window.outerWidth

// inner height and width
val = window.innerWidth
val = window.innerHeight

// scroll points
val = window.scrollY 
// val = window.scrollX

// location object
val = window.location  //can get host, port, pathname, href, origin, protocol
val = window.location.hostname
val = window.location.port
val = window.location.href
val = window.location.search // try entering in search terms in url search bar

// redirect
// window.location.href = 'http://google.com'

// reload
// window.location.reload()

// HISTORY OBJECT
// window.history.go(-1)
// val = window.history.length


// navigator object- browser not the window, chrome, firefox
val = window.navigator
val = window.navigator.appName //returns netscape
val = window.navigator.appCodeName
val = window.navigator.userAgent
val = window.navigator.platform
val = window.navigator.language

console.log(val)