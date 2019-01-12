API?
Application program interface

essentially a contract provided by one pice of software to another
some funcitonality somehwere else that you want to use

REST
representational state transfer
almost always http
treats server objects as resources that can be updated or destroyed
can be used with virtually any programming language
API sends the message REST allows us to use http requests to format that message

GET : retrieve data from specified resource
POST : submit data to be processed to a speciic resource 
PUT : update a specific resource 
DELETE  : delete a specific resource

HEAD: 
OPTIONS
PATCH

GET : http://someurl/com/api/users get all users
POST : http://someurl/com/api/users add user
PUT : http://someurl/com/api/users/1 update user
DELETE : http://someurl/com/api/users/1 delete user

endpoints are the urls you access to do certain things