'use client'

import '@/styles/styles.css'
import ReCAPTCHA from 'react-google-recaptcha';






export default function PwAndEmailComponentRegister() {


    return (
        <>

            <input
                className='invierte'
                type='email'
                placeholder='Correo electrónico'
            />


            <div className='my-recaptcha' style={{ marginTop: '3px' }}>
                <ReCAPTCHA
                    sitekey="6LdKIggpAAAAAGWOyp0NsFxneeE4hG1oqUzIAMA3"
                />
            </div>


        </>
    );
}