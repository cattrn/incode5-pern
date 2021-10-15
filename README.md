This project was made for INCO Academy's INCODE 5 cohort.

## Technologies

Postgres
Express
React
Node

## Installation

Rename server/.env.sample to server/.env (or make a copy and rename) and fill in with your own Postgres details. The Postgres database being used is currently pern_test. If you'd like to use a different database name, change it in your server/.env file, in the create_db and create_tables scripts in server/package.json, and in server/sql/create_db.sql.

## Backend

```bash
cd server
npm install
npm run create_db
npm run create_tables
npm run dev
```

## Frontend

```bash
cd client
npm install
npm start
```

**NOTE: Both frontend and backend need to be running to work completely. Concurrently hasn't been installed, please use 2 seperate terminals to do this.**