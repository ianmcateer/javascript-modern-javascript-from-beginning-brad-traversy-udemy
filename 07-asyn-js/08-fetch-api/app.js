// fetch is now part of the window object
// recreating easyHttp to use promsies

document.getElementById('button1').addEventListener('click', getText)
document.getElementById('button1').addEventListener('click', getJson)
document.getElementById('button1').addEventListener('click', getExternal)

// get local text file data
function getText(){
  //pass in whatever you want to get
  fetch('test.txt')
  .then(function(res){
    return (res.text())
  })
  .then(function(data){
    console.log(data)
    document.getElementById('output').innerHTML = data;
  })
  .catch(function(err){
    console.log(err)
  })
}

// get local json data
function getJson(){
  fetch('posts.json')
  .then(function(res){
    return (res.json())
  })
  .then(function(data){
    console.log(data)
    let output = ''
    data.forEach(post => {
      output += `<li>${post.title}</li>`
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(function(err){
    console.log(err)
  })
}

// get from external api
function getExternal(){
  fetch('https://api.github.com/users')
  .then(function(res){
    return (res.json())
  })
  .then(function(data){
    console.log(data)
    let output = ''
    data.forEach(user => {
      output += `<li>${user.login}</li>`
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(function(err){
    console.log(err)
  })
}
