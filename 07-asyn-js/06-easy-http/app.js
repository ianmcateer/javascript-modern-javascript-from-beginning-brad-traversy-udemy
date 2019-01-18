const http = new easyHTTP();

// get posts
http.get("https://jsonplaceholder.typicode.com/posts", function(error, posts) {
	if (error) {
		console.log(error);
	} else {
		console.log;
	}
});

// create post
const data = {
	title: "custom post",
	body: "this is a custom post"
};
http.post("https://jsonplaceholder.typicode.com/posts", data, function(error, post){
  if (error){
    console.log(error)
  } else {
    console.log(post)
  }
})

// UPDATE POST
http.put("https://jsonplaceholder.typicode.com/posts/1", data, function(error, post){
  if (error){
    console.log(error)
  } else {
    console.log(post)
  }
})

// DELETE POST
http.delete("https://jsonplaceholder.typicode.com/posts/1", data, function(error, response){
  if (error){
    console.log(error)
  } else {
    console.log(response)
  }
})