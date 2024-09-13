# Todo List Backend

This is the backend service for the Todo List application. It provides APIs to manage todo items, including creating, updating, deleting, and retrieving tasks.

## Features

- Create a new todo item
- Update an existing todo item
- Delete a todo item
- Retrieve all todo items
- Retrieve a specific todo item by ID

## Technologies Used

- Node.js
- Express.js
- MongoDB

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB installed and running

### Installation

1. Clone the repository:
  ```sh
  git clone https://github.com/htmtmx/todolist-be.git
  ```
2. Navigate to the project directory:
  ```sh
  cd todolist-be
  ```
3. Install the dependencies:
  ```sh
  npm install
  ```

### Configuration

1. Create a `.env` file in the root directory and add the following environment variables:
  ```env
  PORT=4000
  MONGODB_URI=mongodb://localhost:27017/todolist
  ```

### Running the Application

1. Start the server:
  ```sh
  npm start
  ```
2. The server will be running at `http://localhost:4000`.

## API Endpoints

- `GET /todos` - Retrieve all todo items
- `GET /todos/:id` - Retrieve a specific todo item by ID
- `POST /todos` - Create a new todo item
- `PUT /todos/:id` - Update an existing todo item
- `DELETE /todos/:id` - Delete a todo item

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.