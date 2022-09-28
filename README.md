
# Eva Solska || Writer

Eva Solska || Writer is a website-portfolio for the ukrainian author of books for kids and teens.

## 🌟 About the Project
In these days of digital technology, books are becoming increasingly unpopular and children are not reading them. I created a website for a Ukrainian children's and teenage book writer to promote reading and attract the attention of potential readers to Ukrainian literature.

I made the site because I myself am part of these books. The writer is a friend of my family and we are all primary readers and do our part by giving feedback.








## 🛠 Tech Stack

**Client:** React, SASS, HTML

**Server:** Node, Express, MySQL, Knex


## Features

- Responsive design
- Add email address to subscribe to the books news
- Fill the form to contact the author
- Buy book on Amazon
- Read a sample of the book
- "/admin" path gives an opportunity to author to add a new book to website after logged in
## Installation
- ### Client Side
    Clone this repo
    ```bash
    $ git clone git@github.com:mc-nastasya/capstone.git
    ```

    Run npm install from inside the capstone directory.
    ```bash
    $ cd capstone
    $ npm install
    ```
    Create .env file with 2 variables
    ```bash
    REACT_APP_PORT=<port>
    REACT_APP_BASE_URL=<url>
    ```
    Run the app

    ```bash
    npm start
    ```
    
- ### Server Side
    Clone this repo
    ```bash
    $ git clone git@github.com:mc-nastasya/capstone-backend.git
    ``` 

    Run npm install from inside the capstone directory.
    ```bash
    $ cd capstone-backend
    $ npm install
    ```

    Create database using MySql, name it "evasolska"

    Change user and password in knexfile.js

    Create tables in database
    ```bash
    $ npm run migrate
    ```

    Seed database
    ```bash
    $ npm run seed
    ```

    Create .env file with 2 variables
    ```bash
    PORT=<port>
    JWT_KEY=<jwt_key>
    ```

    To get JWT_KEY run command and copy thw key from the terminal to .env file
    ```bash
    $ npm run key
    ```

    Start the app
    ```bash
    $ npm start
    ```



## Future updates

- Add language switching (Ukrainian/English)
- Courses page, Events page, Teachers and Librarians page
- Auto-sending of the email after the customer fills contact form/question form
- Buy course/ buy book functionality on the website
- Filtering by format/language of the book
- Auto-sending newest updates via email
## Authors

- Web developer - Anastasiia Makarenko [@mc-nastasya](https://github.com/mc-nastasya)
- Web designer - Anastasiia Filanovich

