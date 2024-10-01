# SQL-Employee-Tracker

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description
A content management system(CMS) that is a command-line application intended to manage a company's employee database, using Node.js, Inquirer, and PostgreSQL.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
To install this application first navigate to the github repository. Copy either the http or SSH code/url. Then, in your CLI/Gitbash terminal navigate to where you want to place the repository and run "git clone [copied URL]" without brackets or quotations. To fully install and use this you will want to make sure that you have PostgreSQL downloaded and pgAdmin4 set up to be able to store the database properly. Once ensuring you do, navigate to the "main" folder in the directory and run "npm install".  Then run "npm run build". Once built, before starting, you will need to navigate to the "db" directory. Initialize postgreSQL, and then initialize the schema.sql file first with "\i schema.sql". After that, initialize the seeds.sql file with "\i seeds.sql".

## Usage
Now that the sql files have been initalized and the database instantiated, run "npm start". From there the application will start and you should be able to view the initial supplied seed data with the options to view existing employees, departments, and roles. As well as use the additional features for the creation and removal of the respective categories. A detailed walkthrough video illustrating the installation and usage can be viewed below, as well as a link to the walkthrough on screencastify if one so chooses.

## Contribution
Though interest is appreciated, no contributors are being accepted at this time.

## Tests
N/A

## License

This project is licensed under the [MIT](https://opensource.org/licenses/MIT) license.


## Questions
GitHub: [KenKuffler](https://github.com/KenKuffler)
Email: kennethrkuffler@hotmail.com
