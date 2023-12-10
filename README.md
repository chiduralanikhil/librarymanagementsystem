This is a simple library management system with functions adding book, updating book and getting all books.

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Getting Started

1. **Clone the Repository:**
   
   git clone https://github.com/chiduralanikhil/librarymanagementsystem
   
   cd librarymanagementsystem

2. **Install Dependencies:**
   
   npm install

3. **SetUp Environment Vaiables**
   
   PORT = 5000

   MONGO_URL = "your mongodb cluster url"
  
4. **Using Postman to use Get, Post, Put requests to the given end points**

   Create a Account in postman.
   
   Click new option on the left top corner.

   **Get All Books**
   
     Get request to the given end point will give all books in database.

   **Add new Book**
   
     Add new book data like id, title, author and published_date in the body section of post request.
   
     Then make a Post request to the given end point with data of new book.

   **Update Book**

     Put Request to the end point with id will update the Book details.
   
   




