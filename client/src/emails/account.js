const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRIDAPI_KEY)

const sendRequestEmail=(firstname, lastname, email, company, designation, phonenumber, message)=>{
    sgMail.send({
        to: 'receiver mail id',
        from:'sender mail id',
        subject: `product request by ${firstname}`,
        text:`Requesting for the product demo by  ${firstname}
        Folowing are the details:
        First Name:${firstname}
        Last Name: ${lastname}
        Company: ${company}
        Designation: ${designation}
        Email id: ${email}
        Phone number: ${phonenumber}
        Message: ${message}`
    })
}

module.exports = {
    sendRequestEmail
}