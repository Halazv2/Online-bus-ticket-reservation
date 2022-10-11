# Online-bus-ticket-reservation

## Introduction

Hello everyone, this is a project that I have done for assignment. This project is a simple online bus ticket reservation system. <br />

## Technologies and libraries

<table>
    <tr>
        <th>Technologies || libraries</th>
        <th>why</th>
    </tr>
    <tr>
        <td>express</td>
        <td>I have used express to create a server and to create a REST API.</td>
    </tr>
    <tr>
        <td>mongoose</td>
        <td>I have used mongoose to connect to the database.</td>
    </tr>
    <tr>
        <td>body-parser</td>
        <td>Used body-parser to parse the body of the request.</td>
    </tr>
    <tr>
        <td>cors</td>
        <td>Used cors to allow cross-origin requests.</td>
    </tr>
    <tr>
        <td>nodemon</td>
        <td>Used nodemon to automatically restart the server when the file changes.</td>
    </tr>
    <tr>
        <td>bcrypt</td>
        <td>Used bcrypt to hash the password.</td>
    </tr>
    <tr>
        <td>jsonwebtoken</td>
        <td>Used jsonwebtoken to create a token.</td>
    </tr>
    <tr>
        <td>dotenv</td>
        <td>Used dotenv to load environment variables from a .env file.</td>
    </tr>

</table>

## Endpoints

<table>
    <tr>
        <th>Method</th>
        <th>Endpoint</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>POST</td>
        <td>/api/v1/mekna7/signup</td>
        <td>Register a user</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>/api/v1/mekna7/signin</td>
        <td>Login a user</td>
    </tr>
</table>

## How to run the project

1. Clone the project

```bash
git clone
```

2. Install dependencies

```bash
npm install
```

3. Run the project

```bash
npm run dev
```

## How to use the project

1. Open postman <br />
2. Send a POST request to `/api/v1/mekna7/signup` to register a user <br />

   - The request body should be in JSON format <br />
   - The request body should contain the following fields: <br />
     - full_name <br />
     - email <br />
     - age <br />
     - password <br />

3. Send a POST request to `/api/v1/mekna7/signin` to login a user <br />
   - The request body should be in JSON format <br />
   - The request body should contain the following fields: <br />
     - email <br />
     - password <br />

## Author

- [Halazv2](https://github.com/Halazv2 "Halazv2")

