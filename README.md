# Installation Project

Run: (all commands must work at library-service directory)
1. docker-compose up (Run Dynamo Db locally)
2. npm install
3. npm run migrate (Migrate tables to Dynamo Db)
4. sls offline

## Routes

Add User to db:  POST /users ``` Body: {
"name": "test",
"age": 56
}```

Delete User: DELETE /users/{id}

Get All Users: GET /users

Get User By Id Users: GET /users/{id}

Update User's age : PUT users/{id} ```Body: {
"age": 56
}```

Add Book to db:  POST /books ``` Body: {
"title": "test",
"author": "test"
}```

Assign Book to user db:  POST /users/{id}/book ``` Body: {
"bookId": "test",
}```

Delete user's book DELETE  /users/{userId}/book/{bookId}

Get All Books GET /books

Get All Books assigned to User GET /users/{id}/book
