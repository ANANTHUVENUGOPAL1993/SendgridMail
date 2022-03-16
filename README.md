![sendgrid](https://user-images.githubusercontent.com/92742169/158395144-8fa08a3b-fa9d-44f9-b1de-56fb1c92e042.png)


# Project Title
SendGrid via Node.js.

## Description
Sending  Mail with the help of Sendgrid via Node.js

### Steps -1 
### Create an account in sendgrid

* Signup in the sendgrid
* Authenticate Sender email address to verify and confirm , who is sending the mail.
* Generate the api key using ‘Create API Key’ in the sendgrid dashboard page.This API key is used for communicating between Node.js and Sendgrid . The request from the node.js is send through this API key.

### Steps -2 
### Create a new Node.js project
* Create a folder in your system 
* Create a new Node.js project using the command   
 ```
 npm init 
```
* Create a file app.js .We will be running the node from the file server.js 

### Steps -3 
### Install the dependencies for SendGrid
* Install one dependency for sendgrid in our node project using the command
```
npm install @sendgrid/mail
```
*Now the dependency is installed can be seen the package.json file

### Steps -4
### Install the dependencies for Environment Variable
* Install one dependency for Environment Variable in our node project using the command
```
npm install dotenv
```
*Now the dependency is installed can be seen the package.json file
* Environment Variable is used to store the API Key

### Steps -5
### Create a .env file in the folder and set the sendgrid api.
```
Send=*****your api key********************* 
```
### Steps -6
### Import 
```
Send=*****your api key********************* 
```







### Executing program

* How to run the program
* Step-by-step bullets
```
code blocks for commands
```

## Help

Any advise for common problems or issues.
```
command to run if program contains helper info
```

## Authors

Contributors names and contact info

ex. Dominique Pizzie  
ex. [@DomPizzie](https://twitter.com/dompizzie)

## Version History

* 0.2
    * Various bug fixes and optimizations
    * See [commit change]() or See [release history]()
* 0.1
    * Initial Release

## License

This project is licensed under the [NAME HERE] License - see the LICENSE.md file for details

## Acknowledgments

Inspiration, code snippets, etc.
* [awesome-readme](https://github.com/matiassingers/awesome-readme)
* [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
* [dbader](https://github.com/dbader/readme-template)
* [zenorocha](https://gist.github.com/zenorocha/4526327)
* [fvcproductions](https://gist.github.com/fvcproductions/1bfc2d4aecb01a834b46)

