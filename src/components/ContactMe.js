import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactMe = () => {

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_xnh8mts', 
        'template_kaxkqel',
        form.current,
        'De_K581KL-j--sn4C'
        )
        .then((result) => {
            console.log(result.text);
            console.log("message sent")
            e.target.reset()
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <>
        <section className='contact-me' id='contact-me'>
            <h1 className='contact-me-header'>Contact Me</h1>
            <div className='form-container'>
                <form ref={form} onSubmit={sendEmail}>
                    <label className='label' >Name</label>
                    <input className='textarea' type="text" name="user_name" />
                    <label className='label'>Email</label>
                    <input className='textarea' type="email" name="user_email" />
                    <label className='label' >Message</label>
                    <textarea className='textarea' name="message" />
                    <input className='input' type="submit" value="Send" />
                </form>
            </div>
        </section>
        </>
    );
};


export default ContactMe