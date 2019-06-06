// callback is simply a function thats passed into another funcction and then gets ran inside the 
// function body 
// we have synchronouse and asynchronous callbacks
// settimeout takes in cb function which is asynchronous
// so things can happen while thats running
// here going to mimic fetching blog posts on a server
// the server may return the posts before your new post is added
// and your new post wont be included
// ie get posts get run before post posts

{
  const posts = [
    {title: 'post 1', body: 'this is post 1'},
    {title: 'post 2', body: 'this is post 2'}
  ]

  function createPost(post) {
    setTimeout(function () {
      posts.push(post)
    }, 2000)
  }

  function getPosts() {
    setTimeout(function () {
      let output = '';
      posts.forEach(function (post) {
        output += `<li>${post.title}</li>`
      });
      document.body.innerHTML = output
    }, 1000)
  }
}

createPost({title: 'post 3', body: 'this is post 3'});
getPosts()

// takes 2 seconds to createPost but only 1 to get the posts
// need to handle it asynchronously 

const posts = [
  {title: 'post 1', body: 'this is post 1'},
  {title: 'post 2', body: 'this is post 2'}
]

function createPost(post, callback){
  setTimeout(function(){
    posts.push(post)
    callback()
  //  will call get posts within that two seconds
  },2000)
}

function getPosts(){
  setTimeout(function(){
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`
    });
    document.body.innerHTML = output
  }, 9000)
}

createPost({title: 'post 3', body: 'this is post 3'}, getPosts);
