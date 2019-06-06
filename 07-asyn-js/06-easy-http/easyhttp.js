function easyHTTP() {
	// http exists on the global object
	this.http = new XMLHttpRequest();
}

// onload() function process the response what we receive and send() function sends
// a request to server. So onload() has to be written after send() function as per my understanding.
// so need to register a handler to handle the request before it sends

// The read-only XMLHttpRequest property responseText returns the text received from a
// server following a request being sent.

// Make an http GET reuqest
easyHTTP.prototype.get = function(url, callback) {
	this.http.open("GET", url, true);
	let self = this;
	this.http.onload = function() {
		if (self.http.status === 200) {
			callback(null, self.http.response);
		} else {
			callback("Error: " + self.http.status);
		}
	};
	this.http.send();
};


// Make an http POST request
// HTTP headers, which do things like: tell the web server
// what website to retrieve, based on the domain (Host:); report 
// the user-agent and acceptable encoding and language; and other 
// browser-specific options.

easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open("POST", url, true);
  //setting the header
  this.http.setRequestHeader('Content-type', 'application/json');
  let self = this;
  this.http.onload = function(){
    callback(null, self.http.responseText)
  }
  //send the data formatted as JSON
  this.http.send(JSON.stringify(data))
};

// Make an http PUT request
// this will update a post
easyHTTP.prototype.put = function(url, data, callback){
  this.http.open('PUT', url, true)
  this.http.setRequestHeader('Content-type', 'application/json');
  let self = this;
  this.http.onload = function(){
    callback(null, self.http.responseText)
  }
  this.http.send(JSON.stringify(data))
}

// Make an http DELETE request
easyHTTP.prototype.delete = function(url, callback) {
	this.http.open("DELETE", url, true);
	let self = this;
	this.http.onload = function() {
		if (self.http.status === 200) {
			callback(null, 'Post deleted');
		} else {
			callback("Error: " + self.http.status);
		}
	};
	this.http.send();
};
