class EasyHTTP {
  // make a HTTP get request
  get(url){
    return new Promise((resolve, reject)=> {
      //fetch itself returns a promise
      fetch(url)
      //map it to json
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
    })
  }

  post(url, data){
    return new Promise((resolve, reject)=> {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
    })
  }

}
