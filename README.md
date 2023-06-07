<h1>Connect App</h1>

Connect App is a web application built with React.js for the frontend and Node.js for the backend. It is an automation react-web-app employed by companies for sharing their latest activities, chatting with other employees, and organizing events. The app enables users to stay connected and collaborate with each other in a social networking style platform. In addition to the current features, the Connect App also has plans to introduce new event-sharing functionalities in the future.

<h2>Installation</h2>

1-Install MySQL
First, you need to install MySQL. Visit the following link to download MySQL:
<a href="https://dev.mysql.com/downloads/mysql/">MySQL Downloads</a>

2-Create a MySQL Schema
Once MySQL is installed, create a new schema with the name "connect-app" in your MySQL database.and import all data from "connect-app-db" folder.

3-Clone the Connect App Repository
Clone the Connect App repository from GitHub using the following command:

<pre><code>git clone https://github.com/sorousch9/connect.git</code></pre>

4-Import Tables
In the cloned repository, locate the "tables" directory. Import all the tables from this directory into your MySQL database.

<h3>Install Backend Dependencies</h3>

5-Navigate to the API directory within the project by running the following command:

<pre><code>cd connect-api</code></pre>

6-Install the project dependencies by running the following command:

<pre><code>npm install</code></pre>

7-Start the Backend Server
To run the backend server, use the following command:

<pre><code>npm start</code></pre>

<h3>Install Frontend Dependencies</h3>
8-Navigate to the client directory within the project by running the following command:

<pre><code>cd connect-client</code></pre>

9-Install the project dependencies by running the following command:

<pre><code>npm install</code></pre>

10-Start the Frontend Application
To start the frontend application, use the following command:

<pre><code>npm start</code></pre>

Congratulations! You have successfully installed and started the Connect App.

  <h2>Dependencies</h2>

  <h3>Backend Dependencies</h3>
  <ul>
    <li>bcryptjs: A library for hashing and comparing passwords securely.</li>
    <li>cookie-parser: A middleware for parsing HTTP cookies.</li>
    <li>cors: A middleware for enabling Cross-Origin Resource Sharing.</li>
    <li>express: A web application framework for Node.js.</li>
    <li>jsonwebtoken: A library for generating and verifying JSON web tokens (JWT).</li>
    <li>moment: A library for parsing, validating, manipulating, and formatting dates and times.</li>
    <li>multer: A middleware for handling multipart/form-data, primarily used for file uploads.</li>
    <li>mysql: A library for interacting with MySQL databases.</li>
    <li>nodemon: A development utility that automatically restarts the server when changes are detected.</li>
  </ul>

  <h3>Frontend Dependencies</h3>
  <ul>
    <li>antd: A UI library for React applications, providing a set of customizable components.</li>
    <li>axios: A library for making HTTP requests from the browser and Node.js.</li>
    <li>moment: A library for parsing, validating, manipulating, and formatting dates and times.</li>
    <li>react-query: A library for managing and caching server state in React applications.</li>
    <li>react-icons: A library that provides a wide range of icons as React components.</li>
    <li>react-router-dom: A library for handling routing in React applications.</li>
    <li>react-slick: A carousel component for React applications.</li>
    <li>sass: A preprocessor for CSS, allowing the use of variables, mixins, and more.</li>
    <li>typescript: A superset of JavaScript that adds static types to the language.</li>
  </ul>

Each of these dependencies plays a crucial role in enabling the functionality and user experience of the Connect App. Please refer to their respective documentation for more information on how they are used within the project.

Thank you for using the Connect App! If you have any further questions or need assistance, please don't hesitate to reach out. Happy connecting!

![full Home Page](/144220.png?raw=true "full Home Page")
