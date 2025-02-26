import React, { useState } from 'react';
import { useStore } from "@/store/storeGlobal";

const ContactForm: React.FC = () => {
    const { myLang } = useStore();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [telefonoError, setTelefonoError] = useState('');
    const [mensajeError, setMensajeError] = useState('');

    const validateUsername = () => {
        if (!username) {
            setUsernameError(myLang ? 'Name is required' : 'El nombre es requerido');
            return false;
        }
        setUsernameError('');
        return true;
    };

    const validateEmail = () => {
        if (!email) {
            setEmailError(myLang ? 'Email is required' : 'El email es requerido');
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError(myLang ? 'Invalid email format' : 'Formato de email inválido');
            return false;
        }
        setEmailError('');
        return true;
    };

    const validateTelefono = () => {
        if (!telefono) {
            setTelefonoError(myLang ? 'Phone number is required' : 'El número de teléfono es requerido');
            return false;
        }
        const telefonoRegex = /^[0-9-]+$/;
        if (!telefonoRegex.test(telefono)) {
            setTelefonoError(myLang ? 'Invalid phone number format' : 'Formato de número de teléfono inválido');
            return false;
        }
        setTelefonoError('');
        return true;
    };

    const validateMensaje = () => {
        if (!mensaje) {
            setMensajeError(myLang ? 'Message is required' : 'El mensaje es requerido');
            return false;
        }
        setMensajeError('');
        return true;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const isUsernameValid = validateUsername();
        const isEmailValid = validateEmail();
        const isTelefonoValid = validateTelefono();
        const isMensajeValid = validateMensaje();

        if (isUsernameValid && isEmailValid && isTelefonoValid && isMensajeValid) {
            // Aquí puedes enviar el formulario
            console.log('Formulario válido');
        } else {
            console.log('Formulario inválido');
        }
    };

    return (
        <aside className='bg-grey relative z-20 text-black p-6 border-b-violet' id="contact">
            <div className='max-w-screen-2xl mx-auto'>
                <form onSubmit={handleSubmit}>
                    <div className='md:grid md:grid-cols-2'>
                        <h2 className='text-4xl font-bold'>
                            {!myLang ? (
                                <span>
                                    Hagamos <br /> un cambio
                                </span>
                            ) : (
                                <span>
                                    Let's make <br /> a change
                                </span>
                            )}
                        </h2>
                        <p className='w-56 leading-5 text-sm pt-2'>
                            {!myLang ? 'Complete el siguiente formulario y nos comunicaremos con usted a la brevedad.' : 'Complete the following form and we will contact you shortly.'}
                        </p>
                    </div>
                    <div className='xl:grid grid-cols-2'>
                        <div className='relative my-10 mb-12'>
                            <input
                                id='username'
                                name='username'
                                type='text'
                                placeholder=''
                                className='border-b bg-grey py-1 focus:border-blue-700 transition-colors focus:outline-none w-full'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                onBlur={validateUsername}
                            />
                            <label htmlFor='username' className='absolute left-0 -bottom-7'>
                                {!myLang ? 'nombre' : 'name'}
                            </label>
                            {usernameError && <p className='text-red-500 text-sm absolute -bottom-12 mid:left-20 mid:-bottom-7 bg-violet text-grey rounded-xl px-5'>{usernameError}</p>}
                        </div>
                        <div className='relative my-10 mb-12'>
                            <input
                                id='email'
                                name='email'
                                type='email'
                                placeholder=''
                                className='border-b bg-grey py-1 focus:border-blue-700 transition-colors focus:outline-none w-full'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={validateEmail}
                            />
                            <label htmlFor='email' className='absolute left-0 -bottom-7'>email</label>
                            {emailError && <p className='text-red-500 text-sm absolute -bottom-12 mid:left-20 mid:-bottom-7 bg-violet text-grey rounded-xl px-5'>{emailError}</p>}
                        </div>
                    </div>
                    <div className='xl:grid grid-cols-2'>
                        <div className='relative my-10 mb-12 xl:pt-4'>
                            <input
                                id='telefono'
                                name='telefono'
                                type='text'
                                placeholder=''
                                className='border-b bg-grey py-1 focus:border-blue-700 transition-colors focus:outline-none w-full'
                                value={telefono}
                                onChange={(e) => setTelefono(e.target.value)}
                                onBlur={validateTelefono}
                            />
                            <label htmlFor='telefono' className='absolute left-0 -bottom-7'>
                                telefono
                            </label>
                            {telefonoError && <p className='text-red-500 text-sm absolute -bottom-12 mid:left-20 mid:-bottom-7 bg-violet text-grey rounded-xl px-5'>{telefonoError}</p>}
                        </div>
                        <div className='relative xl:my-10 my-16 '>
                            <textarea
                                id='mensaje'
                                name='mensaje'
                                placeholder=''
                                className='border-b bg-grey focus:border-blue-700 transition-colors focus:outline-none w-full resize-none'
                                value={mensaje}
                                onChange={(e) => setMensaje(e.target.value)}
                                onBlur={validateMensaje}
                            ></textarea>
                            <label htmlFor='mensaje' className='absolute left-0 -bottom-7'>
                                mensaje
                            </label>
                            {mensajeError && <p className='text-red-500 text-sm absolute -bottom-12 mid:left-20 mid:-bottom-7 bg-violet text-grey rounded-xl px-5'>{mensajeError}</p>}
                        </div>
                    </div>
                    <div className='flex justify-start xl:justify-end items-center mt-10 group hover:cursor-pointer'>
                        <button
                            type='submit'
                            className='bg-backBlack text-grey py-2 px-8 rounded-3xl group-hover:rounded-r-none transition-all duration-1000'
                        >
                            Enviar
                        </button>
                        <div className='h-full'>
                            <div className='bg-backBlack flex justify-center items-center rounded-full group-hover:rounded-l-none p-3 transition-all duration-1000'>
                                <img src='/svg/rightArrow-07.svg' alt='Arrow' className='h-4 w-4' />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </aside>
    );
};

export default ContactForm;