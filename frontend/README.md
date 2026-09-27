Mini Task Board

A simple full-stack task management application built with Next.js, TypeScript, React, and MySQL.

Getting Started

1. Clone the Repository

Clone the repository using Git:

git clone YOUR_GITHUB_REPOSITORY_URL

Go to the project directory:

cd task/frontend

2. Install Dependencies

Install all required dependencies:

npm install

3. Setup Environment Variables

Create a .env file inside the frontend folder.

You can use .env.example as a reference.

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=task_board

Replace your_mysql_password with your own MySQL password.

Do not commit the actual .env file to GitHub. Keep it in .gitignore.

4. Setup MySQL Database

The project contains the database schema in:

database/schema.sql

Open schema.sql in MySQL Workbench and execute it.

This will create:

task_board database

Tasks table

5. Run the Project

Make sure you are inside the frontend folder:

cd task/frontend

Start the development server:

npm run dev

Open the application in your browser:

http://localhost:3000

Features

View all tasks

Add a new task

Update task status

Delete a task

Validate empty task titles

Loading state

Error handling

MySQL database

TypeScript types

REST API

Responsive basic UI

Tech Stack

Frontend

Next.js

React

TypeScript

Tailwind CSS

Axios

Backend

Next.js API Routes

Node.js

Database

MySQL

Project Structure

task/
├── frontend/
│ ├── app/
│ │ ├── api/
│ │ │ └── tasks/
│ │ │ └── [id]/
│ │ │ └── route.ts
│ │ ├── layout.tsx
│ │ └── page.tsx
│ │
│ ├── components/
│ │ ├── TaskForm.tsx
│ │ ├── TaskList.tsx
│ │ └── TaskItem.tsx
│ │
│ ├── lib/
│ │ └── db.ts
│ │
│ ├── types/
│ │ └── task.ts
│ │
│ ├── .env.example
│ └── package.json
│
├── database/
│ └── schema.sql
│
└── README.md

API Endpoints

Method

Endpoint

Description

GET

/api/tasks

Get all tasks

POST

/api/tasks

Create a new task

PATCH

/api/tasks/:id

Update task status

DELETE

/api/tasks/:id

Delete a task

Task Status

Tasks can have the following statuses:

todo

in-progress

done

Validation and Error Handling

Empty task titles are rejected.

Invalid task statuses are rejected.

Task not found errors are handled.

Loading state is displayed while fetching tasks.

API errors are handled and displayed.

Database

The application uses MySQL to store tasks.

Each task contains:

id

title

status

created_at

Environment Variables

The project requires the following environment variables:

DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=

The actual .env file contains local database credentials and should not be committed to GitHub.

Running the Project on Another System

After cloning the repository, follow these steps:

git clone YOUR_GITHUB_REPOSITORY_URL
cd task/frontend
npm install

Create the .env file and add your own MySQL credentials.

Then open and execute:

database/schema.sql

in MySQL Workbench.

Finally, start the development server:

npm run dev

The application will be available at:

http://localhost:3000

The Mini Task Board is now ready to use.
