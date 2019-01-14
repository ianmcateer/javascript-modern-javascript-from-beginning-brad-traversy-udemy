function easyHTTP(){
  this.http = new XMLHttpRequest();
}

// Make an http GET reuqest 
easyHTTP.prototype.get = function(url){
  this.http.open('GET', url, true)
  this.http.onload = function(){
    if(this.http.status === 200){
      console.log(this.http.response)
    }
  }
  this.http.send()
}
// Make an http POST reuqest 
// Make an http PUT reuqest 
// Make an http DELETE reuqest 
