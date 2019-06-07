// editing previous code to consume promises
//promises bc while handling async operations they can promise to do something when that operation
// finishes
//a promise is an object with properties and methods
//represents the eventual completion or failure of an asynchronous operation
// provides a returning value

const posts = [
  {title: 'post 1', body: 'this is post 1'},
  {title: 'post 2', body: 'this is post 2'}
]

// function createPost(post, callback){
//   setTimeout(function(){
//     posts.push(post)
//     callback()
//     //  will call get posts within that two seconds
//   },2000)
// }

function createPost(post){
  //this creates a new promise
  //the function pass to promise takes in two things, resolve and reject
  //call resolve when we are dne with what we are doing
  //reject if there is some kind of error
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      posts.push(post);
      resolve()
    },2000)
  })
}

function getPosts(){
  setTimeout(function(){
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`
    });
    document.body.innerHTML = output
  }, 1000)
}

createPost({title: 'post 3', body: 'this is post 3'}).then(getPosts);
