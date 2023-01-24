<div id="top"></div>
<br />
<div align="center">
  
<h1 align="center">My own project</h1>

<h3 align="center">
    This project is intended to hone my skills further as well as present myself as an eligible job applicant. <br />
<br />
</div>

### Technologies used

- [Mariadb](https://mariadb.org/)
- [Node](https://nodejs.org/en/)
- [Winston Logger](https://www.npmjs.com/package//winston)
- [Express-validator](https://www.npmjs.com/package/express-validator)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Express](https://www.npmjs.com/package/express)
- [Body-parser](https://www.npmjs.com/package/body-parser)
- [Cors](https://www.npmjs.com/package/cors)
- [Mysql](https://www.mysql.com/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [JSON Web Token](https://www.npmjs.com/package/jsonwebtoken)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)

<p align="right">(<a href="#top">back to top</a>)</p>

## Get started

Backend installation instructions

### Installation

1. Install [Mariadb](https://www.mariadbtutorial.com/getting-started/install-mariadb/) version 10.x or newer

2. Install visual SQL-editor: [DBeaver](https://dbeaver.io/) or [MySQL Workbench](https://www.mysql.com/products/workbench/)

3. In the sql editor of your choice, create a database schema with the name own_project. Run [01_table.sql](https://github.com/JanitaJT/own-project-be/blob/main/database/01_table.sql) script to create data in database

4. Clone repository
   ```sh
   git clone https://github.com/JanitaJT/own-project-be.git
   ```
5. Install packages

   ```sh
   npm install
   ```

6. Env. file addition. Add the .env file to the root directory of the repository

   ```
   BE_API_URL_PREFIX=/api
   BE_SERVER_PORT=3001
   DB_DRIVER_MODULE=mysql
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=<<DB username>>
   DB_PASSWORD=<<DB password>>
   DB_DATABASE=own_project
   DB_DEBUG=true
   DB_MULTIPLE_STATEMENTS=true
   DB_CONNECTION_POOL_MIN=1
   DB_CONNECTION_POOL_MAX=7
   JWT_SECRET=<<YOUR SECRET>>
   ```

7. Launch application

   ```sh
   nodemon
   ```

   Note! If application won't start, install:

   ```sh
   npm install -g nodemon
   ```

8. Note! Follow [Frontend repository](https://github.com/JanitaJT/own-project-fe) installation instructions also

<p align="right">(<a href="#top">back to top</a>)</p>
