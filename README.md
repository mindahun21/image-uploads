###

POST http://127.0.0.1:8000/register/
Content-Type: application/json

{
"username": "test3",
"password": "testtest"
}

###

POST http://127.0.0.1:8000/login/
Content-Type: application/json

{
"username": "test3",
"password": "testtest"
}

## the response will be like this

{
"message": "Login successful",
"refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczODU3MTU5OSwiaWF0IjoxNzM3OTY2Nzk5LCJqdGkiOiI5NjdiZTE3YjNmNmU0ZDk4OTk1YjgzM2M1NWRhYjgyMiIsInVzZXJfaWQiOjZ9.qPVSrlHRSzCruxfqZJA5FcYNQxtxQx5yw1JI3dBOqh4",
"access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM3OTY4NTk5LCJpYXQiOjE3Mzc5NjY3OTksImp0aSI6IjFmZTk5NTBlZmE3ZjRhNDRhZjEyZjQ1MzdhYTE1NmU0IiwidXNlcl9pZCI6Nn0.9_jBGaSEvzhaAmoku7JIe7CjqleoBUAJrZXLsMC4wHY"
}

###

GET http://127.0.0.1:8000/users/
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM3OTY4MzY2LCJpYXQiOjE3Mzc5NjY1NjYsImp0aSI6ImIyMjJlOGY0MDhiYjQ4M2NiMzg2YzYxZGMzNDdlMjExIiwidXNlcl9pZCI6Nn0.l8vJ3VEvRtES1Pqte4_frrjRsea-xYYrEF7iCVq7QIQ

###

POST http://127.0.0.1:8000/users/
Content-Type: application/json

{
"username": "test",
"email": "test@example.com"
}

###

DELETE http://127.0.0.1:8000/users/2/
