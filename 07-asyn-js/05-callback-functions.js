// callback is simply a function thats passed into another funcction and then gets ran inside the 
// function body 
// we have synchronouse and asynchronous callbacks

// settimeout takes in cb function which is asynchronous 

const posts = [
  {title: 'post 1', body: 'this is post 1'},
  {title: 'post 2', body: 'this is post 2'}
]

function createPost(post){
  setTimeout(function(){
    posts.push(post)
  },2000)
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

createPost({{title: 'post 3', body: 'this is post 3'}});
getPosts()

// takes 2 secons to createPost and 1 to get the posts 
// need to handle it asynchronously 

const posts = [
  {title: 'post 1', body: 'this is post 1'},
  {title: 'post 2', body: 'this is post 2'}
]

function createPost(post, callback){
  setTimeout(function(){
    posts.push(post)
    callback()
  },2000)
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

createPost({{title: 'post 3', body: 'this is post 3'}}, getPosts);