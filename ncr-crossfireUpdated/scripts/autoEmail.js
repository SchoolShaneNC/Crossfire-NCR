
export const QIEmail = (message, parmNCR, username) =>
 {
     console.log('firing qiemail')
     emailjs.init({
     publicKey: 'YwDeaUeS7CNQTIjj7',
       });
    
       var templateParams = {
         message: message,
         ncr_number: parmNCR,
         user_name: username,
         user_email: "email@email.com"
       };
      
       emailjs.send('Contact_Service', 'template_6891csa', templateParams).then(
         (response) => {
           console.log('SUCCESS!', response.status, response.text);
         },
         (error) => {
           console.log('FAILED...', error);
         },
       );
 }; 