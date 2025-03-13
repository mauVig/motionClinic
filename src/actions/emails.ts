import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_APIKEY_EMAIL);

interface SendEmailParams {
    username: string;
    email: string;
    telefono: string;
    mensaje: string;
}

interface ResendResponse {
    data: any;
    error: { message: string } | null;
}

export const sendEmail = async ({ username, email, telefono, mensaje }: SendEmailParams): Promise<void> => {
    const { data, error }: ResendResponse = await resend.emails.send({
        from: email,
        to: 'motionclinic.ba@gmail.com',
        subject: `Mensaje de ${username} desde la web`,
        html: `
            <strong>Mensaje</strong>
            <p>${mensaje}</p>
            \n
            <strong>Telefono</strong>
            <p>${telefono}</p>
        `,
    });

    if (error) {
        console.error('Error sending email', error);
        throw new Error('Error sending email');
    }
}


