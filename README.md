# Library System API

A comprehensive REST API for managing a library system built with Node.js, Express, and MongoDB. This system allows users to manage books, authors, students, and library attendants with full CRUD operations and book borrowing functionality.

## Features

- 📚 **Book Management** - Create, read, update, and delete books
- ✍️ **Author Management** - Manage book authors with full CRUD operations
- 👨‍🎓 **Student Management** - Track students with borrowing history
- 👤 **Attendant Management** - Manage library staff members
- 📖 **Book Borrowing** - Borrow and return books with tracking
- ✅ **Input Validation** - MongoDB ObjectId validation middleware
- 🔄 **CORS Support** - Cross-Origin Resource Sharing enabled
- 📦 **Environment Configuration** - Secure configuration management with dotenv

## Prerequisites

Before running this project, make sure you have installed:

- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)
- **MongoDB** (Local)

## Installation

1. **Clone the repository** (if applicable)
   ```bash
   git clone <repository-url>
   cd LIBRARY-SYSTEM
   ```

2. **Install dependencies**
   
   npm install
 

3. **Create a `.env` file** in the root directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/library-system
   NODE_ENV=development
   ```

## Running the Application

### Development Mode (with auto-restart on file changes)
npm run dev


### Production Mode
node app.js


The server will start and display a message indicating the port it's running on (default: 5000).

## API Endpoints

### Authors
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/authors` | Create a new author |
| GET | `/api/authors` | Get all authors |
| GET | `/api/authors/:id` | Get a specific author |
| PUT | `/api/authors/:id` | Update an author |
| DELETE | `/api/authors/:id` | Delete an author |

### Books
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/books` | Create a new book |
| GET | `/api/books` | Get all books |
| GET | `/api/books/:id` | Get a specific book |
| PUT | `/api/books/:id` | Update a book |
| DELETE | `/api/books/:id` | Delete a book |
| POST | `/api/books/:id/borrow` | Borrow a book |
| POST | `/api/books/:id/return` | Return a borrowed book |

### Students
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/students` | Create a new student |
| GET | `/api/students` | Get all students |
| GET | `/api/students/:id` | Get a specific student |
| PUT | `/api/students/:id` | Update a student |
| DELETE | `/api/students/:id` | Delete a student |

### Attendants
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/attendants` | Create a new attendant |
| GET | `/api/attendants` | Get all attendants |
| GET | `/api/attendants/:id` | Get a specific attendant |
| PUT | `/api/attendants/:id` | Update an attendant |
| DELETE | `/api/attendants/:id` | Delete an attendant |

## Project Structure

```
LIBRARY-SYSTEM/
├── app.js                      # Main application entry point
├── package.json                # Project dependencies and scripts
├── README.md                   # This file
├── config/
│   └── db.js                  # MongoDB connection configuration
├── controllers/
│   ├── authorController.js    # Author CRUD operations
│   ├── bookController.js      # Book CRUD and borrowing logic
│   ├── studentController.js   # Student CRUD operations
│   └── attendantController.js # Attendant CRUD operations
├── middleware/
│   └── validate.js            # Validation middleware (ObjectId validation)
├── models/
│   ├── Author.js              # Author schema
│   ├── Book.js                # Book schema
│   ├── Student.js             # Student schema
│   └── Attendant.js           # Attendant schema
└── routes/
    ├── authorRoutes.js        # Author endpoints
    ├── bookRoutes.js          # Book endpoints
    ├── studentRoutes.js       # Student endpoints
    └── attendantRoutes.js     # Attendant endpoints
```

## Technologies Used

- **Backend Framework:** Express.js v5.2.1
- **Database:** MongoDB with Mongoose ODM v7.8.9
- **Database Driver:** MongoDB v7.1.1
- **Development Tool:** Nodemon v3.1.14
- **CORS:** cors v2.8.6
- **Environment Variables:** dotenv v16.0.3

## Sample Requests

### Create an Author
POST /api/authors
Content-Type: application/json

{
  "name": "J.K. Rowling",
  "bio": "British author"
}

### Create a Book
POST /api/books
Content-Type: application/json

{
  "title": "Harry Potter and the Philosopher's Stone",
  "author": "<author-id>",
  "isbn": "9780747532699",
}

### Create a Student
POST /api/students
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "studentId": "STU001"
}

### Borrow a Book
POST /api/books/<book-id>/borrow
Content-Type: application/json

{
  "studentId": "<student-id>"
}


### Return a Book
POST /api/books/<book-id>/return
Content-Type: application/json

{
  "studentId": "<student-id>"
}
```

## Error Handling

The API includes validation middleware to handle:
- Invalid MongoDB ObjectId formats
- Missing required fields
- Invalid request data

All errors are returned with appropriate HTTP status codes.



## Author
DAVID MATTHEW
TS Academy Phoenix Cohort Assignment

