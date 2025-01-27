###

use cases

###

GET http://127.0.0.1:8000/users/
Content-Type: application/json

###

POST http://127.0.0.1:8000/users/
Content-Type: application/json

{
"username": "test",
"email": "test@example.com"
}

###

DELETE http://127.0.0.1:8000/users/2/
