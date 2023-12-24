# Welcome to this broomees Airline booking form task backend

## project setup

-   clone this project to the local.
-   Execute `npm install` on the same path as your root directory of the downloaded project.
-   Create a `.env` file in the root directory and add the following environment variables:
    -   `PORT=3000`
-   Inside the src/config folder create a new file `config.json` and then the following peace of json:

```
 {
"development": {
 "username": "<YOUR_DB_LOGIN_NAME",
 "password": "<YOUR_DB_PASSWORD>",
 "database": "broomees_task_DEV",
 "host": "127.0.0.1",
 "dialect": "mysql"
}
}

```

Once You have added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`



AS we just have to do authenticate the user ,so we only need User modal as of now.

we are using bcrpot for hashing our passswords, but one more imp. question is where we should do the hashing , so we ae doing hashing in our User modal using the before create event using the sequelize hooks.