
# Doclane Documentation

DocLane is a web application built using the MERN stack (MongoDB, Express.js, React, and Node.js) that allows users to manage documents and spreadsheets. This documentation provides an overview of the project, its features, and instructions on how to set up and use the application.

## Table of Contents
1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [API Reference](#api-reference)
5. [Contributing](#contributing)
6. [License](#license)

## Features<a name="features"></a>
- User authentication: Users can sign up, log in, and manage their accounts.
- Document management: Users can create, view, update, and delete documents.
- Spreadsheet management: Users can create, view, update, and delete spreadsheets.
- File upload: Users can upload documents and spreadsheets in various file formats.
- Search functionality: Users can search for documents and spreadsheets based on keywords.
- Tagging system: Users can assign tags to categorize their documents and spreadsheets.
- User permissions: Administrators can assign different access levels to users (e.g., read-only, read-write) for better collaboration.
- Responsive design: The application is designed to work seamlessly on different devices and screen sizes.

## Installation<a name="installation"></a>

To install and run DocLane on your local machine, follow these steps:

### Prerequisites

- Node.js (version 14 or later)
- MongoDB (locally installed or a remote MongoDB server)

### Step 1: Clone the repository

```
git clone https://github.com/your-username/doclane.git
```

### Step 2: Install dependencies

Navigate to the project directory and install the dependencies for both the server and client:

```
cd doclane
npm install
cd client
npm install
cd ..
```

### Step 3: Configure the environment variables

Create a `.env` file in the project root directory and specify the following environment variables:

```
# Server configuration
PORT=3000
MONGODB_URI=mongodb://localhost:27017/doclane
SECRET_KEY=your_secret_key

# Client configuration
REACT_APP_API_URL=http://localhost:3000/api
```

Make sure to replace `your_secret_key` with a secure secret key of your choice.

### Step 4: Start the development server

In the project root directory, run the following command to start the server and client concurrently:

```
npm run dev
```

This will start the development server on `http://localhost:3000`.

## Usage<a name="usage"></a>

### User Registration

1. Open your web browser and go to `http://localhost:3000`.
2. Click on the "Sign Up" link to create a new account.
3. Fill in the required details, such as username, email, and password.
4. Click on the "Sign Up" button to register.

### User Login

1. Open your web browser and go to `http://localhost:3000`.
2. Click on the "Login" link to access the login page.
3. Enter your email and password.
4. Click on the "Login" button to authenticate.

### Document Management

1. After logging in, you will be redirected to the dashboard.
2. Click on the "Documents" tab to view your existing documents.
3. To create a new document, click on the "New Document" button.
4. Fill in the document details, such as title, description, and tags.
5. Click on the "Save" button to create the document.
6. To view or edit an existing document, click on

 its title in the document list.
7. To update a document, make the necessary changes and click on the "Save" button.
8. To delete a document, click on the "Delete" button next to it.

### Spreadsheet Management

1. After logging in, you will be redirected to the dashboard.
2. Click on the "Spreadsheets" tab to view your existing spreadsheets.
3. To create a new spreadsheet, click on the "New Spreadsheet" button.
4. Fill in the spreadsheet details, such as title, description, and tags.
5. Click on the "Save" button to create the spreadsheet.
6. To view or edit an existing spreadsheet, click on its title in the spreadsheet list.
7. To update a spreadsheet, make the necessary changes and click on the "Save" button.
8. To delete a spreadsheet, click on the "Delete" button next to it.

## API Reference<a name="api-reference"></a>

The following are the main API endpoints used in the DocLane application:

- `POST /api/auth/register` - Register a new user.
- `POST /api/auth/login` - Authenticate a user and generate a token.
- `GET /api/documents` - Get all documents.
- `POST /api/documents` - Create a new document.
- `GET /api/documents/:id` - Get a specific document by ID.
- `PUT /api/documents/:id` - Update a specific document by ID.
- `DELETE /api/documents/:id` - Delete a specific document by ID.
- `GET /api/spreadsheets` - Get all spreadsheets.
- `POST /api/spreadsheets` - Create a new spreadsheet.
- `GET /api/spreadsheets/:id` - Get a specific spreadsheet by ID.
- `PUT /api/spreadsheets/:id` - Update a specific spreadsheet by ID.
- `DELETE /api/spreadsheets/:id` - Delete a specific spreadsheet by ID.

For more detailed API documentation, please refer to the server codebase.

## Contributing<a name="contributing"></a>

Contributions to DocLane are welcome! If you want to contribute to the project, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request to the main repository.

Please ensure that your code adheres to the project's coding standards and includes appropriate tests.

## License<a name="license"></a>

DocLane is open-source software released under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the codebase. However, remember to include the original license file and attribute the authors.


<!-- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. -->
