// interface SendEmailParams {
//     username: string;
//     email: string;
//     telefono: string;
//     mensaje: string;
// }

// export const sendEmail = async ({ username, email, telefono, mensaje }: SendEmailParams): Promise<void> => {  


// }

    
// fetch('/send-email', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ username, email, telefono, mensaje }),
// })
// .then(res => console.log('Email sent: supuestamente'))
// .catch(error => console.error('Error sending email:', error));

// import { Resend } from 'resend';

// const resend = new Resend(import.meta.env.RESEND_APIKEY_EMAIL);


// interface ResendResponse {
//     data: any;
//     error: { message: string } | null;
// }

// export const sendEmail = async ({ username, email, telefono, mensaje }: SendEmailParams): Promise<void> => {
//     const url = 'https://api.resend.com/emails';

//     const payload = {
//       from: 'admin@motionclinic.com.ar',
//       to: 'admin@motionclinic.com.ar',
//       subject: username,
//       html: `
//             <strong>Mensaje</strong>
//             <p>${mensaje}</p>
//             \n
//             <strong>Telefono</strong>
//             <p>${telefono}</p>
//          `,
//     };

//     const headers = {
//       'Authorization': `Bearer ${import.meta.env.RESEND_APIKEY_EMAIL}`,
//       'Content-Type': 'application/json',
//     };
    
    
//     fetch(url, {
//         method: 'POST',
//         headers: headers,
//         body: JSON.stringify(payload),
//     })
//     .then(response =>  response.json())
//     .then(data => {
//         console.log('Success:', data);
//     })
//     .catch(error => console.error('Error sending email:', error));
// }



//     const { data, error }: ResendResponse = await resend.emails.send({
//         from: 'motionclinic.ba@gmail.com',
//         to: 'admin@motionclinic.com.ar',
//         subject: `Mensaje de ${username} desde la web`,
//         html: `
//             <strong>Mensaje</strong>
//             <p>${mensaje}</p>
//             \n
//             <strong>Telefono</strong>
//             <p>${telefono}</p>
//         `,
//     });

//     if (error) {
//         console.error('Error sending email', error);
//         throw new Error('Error sending email');
//     }
// }



// async function sendResendEmail(apiKey: string, from: string, to: string[], subject: string, html: string): Promise<Response> {
//     const url = 'https://api.resend.com/emails';
  
//     const payload = {
//       from: from,
//       to: to,
//       subject: subject,
//       html: html,
//     };
  
//     const headers = {
//       'Authorization': `Bearer ${apiKey}`,
//       'Content-Type': 'application/json',
//     };
  
//     try {
//       const response = await fetch(url, {
//         method: 'POST',
//         headers: headers,
//         body: JSON.stringify(payload),
//       });
  
//       return response;
  
//     } catch (error) {
//       console.error('Error sending email:', error);
//       throw error;
//     }
//   }
  
//   // Ejemplo de uso:
//   async function main() {
//     const apiKey = 're_123456789'; // Reemplaza con tu API key real
//     const from = 'Acme <onboarding@resend.dev>';
//     const to = ['delivered@resend.dev'];
//     const subject = 'hello world';
//     const html = '<p>it works!</p>';
  
//     try {
//       const response = await sendResendEmail(apiKey, from, to, subject, html);
  
//       if (response.ok) {
//         const data = await response.json();
//         console.log('Email sent successfully:', data);
//       } else {
//           console.error(`Email sending failed with status: ${response.status}`);
//           const errorData = await response.json();
//           console.error("Error Details:", errorData);
//       }
//     } catch (error) {
//       console.error('An unexpected error occurred:', error);
//     }
//   }
  
//   main();

// export const sendEmail = async ({ username, email, telefono, mensaje }: SendEmailParams): Promise<void> => {
//     const { data, error }: ResendResponse = await resend.emails.send({
//         from: 'motionclinic.ba@gmail.com',
//         to: 'admin@motionclinic.com.a',
//         subject: `Mensaje de ${username} desde la web`,
//         html: `
//             <strong>Mensaje</strong>
//             <p>${mensaje}</p>
//             \n
//             <strong>Telefono</strong>
//             <p>${telefono}</p>
//         `,
//     });

//     if (error) {
//         console.error('Error sending email', error);
//         throw new Error('Error sending email');
//     }
// }