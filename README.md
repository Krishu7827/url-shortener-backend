
# URL Shortener Backend

This Node.js-based backend powers a URL shortener service, offering an API for URL shortening and incorporating user authentication via JWT.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
  - [API Endpoints](#api-endpoints)
    - [Register a User](#register-a-user)
    - [Login](#login)
    - [Shorten a URL](#shorten-a-url)
    - [Redirect to Original URL](#redirect-to-original-url)
- [Authentication](#authentication)
- [Deployed Link](#deployed-link)


## Features

- Shorten long URLs into easily shareable short URLs.
- Secure user authentication using JWT.
- Basic user registration and login functionalities.
- MongoDB database for storing URLs and user information.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (LTS version)
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Krishu7827/url-shortener-backend.git
   ```

2. Install dependencies:

   ```bash
   cd url-shortener-backend
   npm install
   ```

### Configuration

Create a `.env` file in the root of the project and add the following configuration:

```bash
PORT=3000
MONGODB_URI=mongodb://localhost:27017/url_shortener
JWT_SECRET=your_jwt_secret_key
```

Replace `your_jwt_secret_key` with a secure and unique key for JWT.

## Usage

### API Endpoints

#### Register a User

- **Route:** `POST /api/user/register`
- **Request Body:**

  ```json
  {
    "username": "your_username",
    "password": "your_password"
  }
  ```

- **Response:**

  ```json
  {
    "message": "User registered successfully"
  }
  ```

  _Note: During registration, you can use your email instead of a unique username._

#### Login

- **Route:** `POST /api/user/login`
- **Request Body:**

  ```json
  {
    "username": "your_username",
    "password": "your_password"
  }
  ```

- **Response:**

  ```json
  {
    "token": "your_jwt_token",
    "message": "Login successful"
  }
  ```

#### Shorten a URL

- **Route:** `POST /api/url/shorten`
- **Request Body (`Requires JWT Authentication`):**

  ```json
  {
    "originalUrl": "https://www.example.com/long-url"
  }
  ```

- **Response:**

  ```json
  {
    "originalUrl": "https://www.example.com/long-url",
    "shortUrl": "generated_short_url"
  }
  ```

#### Redirect to Original URL

- **Route:** `GET /api/url/:shortUrl`
- **Response:** Redirects to the original URL associated with the short URL.

## Authentication

Include the JWT token in the Authorization header for authenticated requests:

```http
Authorization: your_jwt_token
```

## Deployed Link
- **Here, also provided a deployed link:**
  ```
  https://url-shortener-nfk1.onrender.com/
  ```
