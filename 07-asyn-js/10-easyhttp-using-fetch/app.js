const http = new EasyHTTP;

// get USERS
http.get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(err => console.log(err))

  // USER DATA to post a user
  const data = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'johndoe@gmail.com'
  }

  http.post('https://jsonplaceholder.typicode.com/users', data)
  .then(data => console.log(data))
  .catch(err => console.log(err))