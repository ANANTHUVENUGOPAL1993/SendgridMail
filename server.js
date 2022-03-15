

const dotenv = require("dotenv")

dotenv.config()

 const sgMail=require('@sendgrid/mail');



const sendGridAPIKey = process.env.send

 
 sgMail.setApiKey(sendGridAPIKey);
 
const msg={
    to:["ananthuvenugopal3@gmail.com"],
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