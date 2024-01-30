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


            <div style={{ width: 'fit-content', margin: '0 auto', transform: 'scale(0.8)', transformOrigin: 'center' }}>
                <ReCAPTCHA
                    sitekey="6LdKIggpAAAAAGWOyp0NsFxneeE4hG1oqUzIAMA3"
                />
            </div>


        </>
    );
}