# Full-Stack Auth Starter

A simple, lightweight boilerplate for implementing user authentication in a full-stack application. This project demonstrates a complete authentication flow—including user sign-up, sign-in, and access to protected data—using a **Node.js/Express** backend with **JSON Web Tokens (JWT)** and a **vanilla JavaScript** frontend.

> **Note:** This project uses a simple in-memory array to store user data, which means all registered users will be **lost** when the server is restarted. It is intended for educational and demonstration purposes, not for production use.

---

## ✨ Features

- **User Sign-Up**: Register new users.
- **User Sign-In**: Authenticate existing users.
- **JWT-Based Sessions**: Uses JSON Web Tokens for managing user sessions.
- **Protected Routes**: An example middleware protects server endpoints from unauthorized access.
- **Frontend Token Handling**: Stores the JWT in `localStorage` and sends it in request headers.
- **Minimal Dependencies**: Built with a focus on simplicity.

---

## 🛠️ Tech Stack

- **Backend**:
  - [Node.js](https://nodejs.org/)
  - [Express](https://expressjs.com/)
  - [JSON Web Token (jsonwebtoken)](https://github.com/auth0/node-jsonwebtoken)
  - [CORS](https://github.com/expressjs/cors)
- **Frontend**:
  - HTML
  - Vanilla JavaScript
  - [Axios](https://axios-http.com/) (via CDN)

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You need to have [Node.js](https://nodejs.org/en/download/) and npm installed on your computer.

### Installation & Setup

1.  **Clone the repository:**

    ```sh
    git clone [https://github.com/shivamngpal/fullstack-auth-starter.git](https://github.com/shivamngpal/fullstack-auth-starter.git)
    ```

2.  **Navigate to the project directory:**

    ```sh
    cd fullstack-auth-starter
    ```

3.  **Install backend dependencies:**

    ```sh
    npm install
    ```

4.  **Start the backend server:**
    The server will run on `http://localhost:3000`.

    ```sh
    node index.js
    ```

5.  **Open the frontend:**
    Open the `index.html` file in your web browser. You can usually do this by double-clicking the file.

Now you can test the Sign-Up, Sign-In, and other features!

---

## ⚙️ How It Works

The authentication flow is straightforward:

1.  A user **signs up** or **signs in** via the frontend.
2.  The Express server validates the user's credentials.
3.  Upon successful sign-in, the server generates a **JWT** containing user information (like their email) and sends it back to the client.
4.  The frontend client receives the token and stores it in the browser's **`localStorage`**.
5.  To access a protected route (like `/me`), the client sends a request with the JWT in the `Authorization` header.
6.  A middleware on the server intercepts the request, verifies the token's authenticity, and grants access if the token is valid.
