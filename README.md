![sendgrid](https://user-images.githubusercontent.com/92742169/158395144-8fa08a3b-fa9d-44f9-b1de-56fb1c92e042.png)

#  16 March 2022

# Sendgrid-Email API Quickstart for Node.js


## Description
Sending  Mail with the help of Sendgrid using Node.js

## Software name and version
Node.js v16.14.0 

## Installation 
Install Node.js

## Detailed Steps with code and instructions

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
* Now the dependency is installed can be seen the package.json file

### Steps -4
### Install the dependencies for Environment Variable
* Install one dependency for Environment Variable in our node project using the command
```
npm install dotenv
```
* Now the dependency is installed can be seen the package.json file
* Environment Variable is used to store the API Key

### Steps -5
### Create a .env file in the folder and set the sendgrid api.
```
Send=*****your api key********************* 
```
### Steps -6
### Import all the dependencies to the file service.js 
```
const sgMail=require('@sendgrid/mail');
const dotenv = require("dotenv")

```

### Steps -7
### Set the API key 
 * Remember, the API key is stored in an environment variable, so you can use dotenv.config() and  process.env() methods to access and assign it using the helper library's setApiKey() method. The helper library will pass your key to the API in an Authorization header using Bearer token authentication.
```
const sendGridAPIKey = process.env.send
 sgMail.setApiKey(sendGridAPIKey);

```

### Steps -8
### Creating a email body and sending it.
* The following Node.js block contains all the code needed to successfully deliver a message with the SendGrid Mail Send API. 
```
const msg={
    to:["ananthuvenugopal1993@gmail.com"],
    from:"ananthu.venugopal@urolime.com",
    subject:"Hi This is a test mail from Ananthu Venugopal via sendgrid using nodejs",
    text:"Hi This is a test mail from Ananthu Venugopal via sendgrid using nodejs"
}
 sgMail.send(msg)
 .then((res)=>{
     console.log("Successfully sent");
 }).catch((err)=>{
     console.log("failed");
 })
```

### Executing program
* The code block is now complete. To send the message, you can run the service.js file in Node.js.
```
node service.js
```

## Help

Check out Sentgrid documentations

## Author
* Ananthu Venugopal
## Version History
* 0.1
    * Initial Release

## License

This project is open source.

## Contact information -Developer

Mail- ananthu.venugopal@urolime.com

## Acknowledgments

https://sendgrid.com/
 

