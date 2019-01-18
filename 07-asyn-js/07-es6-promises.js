// editing previous code to consume promises

const posts = [
  {title: 'post 1', body: 'this is post 1'},
  {title: 'post 2', body: 'this is post 2'}
]

function createPost(post){
  return new Promise(function(resolve, reject){
      
  })

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

createPost({title: 'post 3', body: 'this is post 3'});
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
  }, 3000)
}

createPost({title: 'post 3', body: 'this is post 3'}, getPosts);