class EasyHTTP {
  // make a HTTP get request
  get(url){
    return new Promise((resolve, reject)=> {
      fetch(url)
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