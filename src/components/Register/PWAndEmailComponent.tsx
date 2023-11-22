'use client'

import * as React from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import '@/styles/styles.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import classNames from 'classnames';
import ReCAPTCHA from 'react-google-recaptcha';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import CheckBoxComponent from './CheckBoxComponent';





export default function PwAndEmailComponentRegister() {

  const [visible, setvisible] = useState(false);
  const [visibleContact, setvisibleContact] = useState(false);
  const [password, setPassword] = useState("")
  const [contacto, setcontacto] = useState('Seleccione quien desea que lo asista')
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const nombres = [
    'Manuel Eduardo Mesa Guzman',
    'Alejandra Maria Perez Bermudez',
    'Rosa Virginia Espaillat Harper',
    'Penelope Rancier Perez',
    'Miguel Jose Iglesias Betances',
    'Shary Ninoska Elivo de Contreras',
    'Mariana Georgina Reynoso Fernandez'
  ];

  function SetDropDown() {
    setDropdownVisible(!visibleContact)
    setDropdownVisible(!isDropdownVisible)
  }

  function handleClick(contact: any) {
    return () => {
      setcontacto(contact);
      setDropdownVisible(!isDropdownVisible);
    };
  }

  function onChange() {
    console.log('Hubo un cambio')
  }

  return (
    <>
      <input
        className='invierte'
        type='email'
        placeholder='Correo electrónico'
      />
      <div style={{ position: "relative" }}>
        <input
          value={password}
          type={visible ? "text" : "password"}
          className='invierte'
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />
        {visible ?
          <VisibilityOff
            style={{
              color: "white",
              marginRight: "8px",
              marginTop: "7px",
              position: "absolute",
              top: 0,
              right: 5,
              cursor: "pointer"
            }}
            onClick={() => setvisible(!visible)}
          /> :
          <Visibility
            style={{
              color: "white",
              marginRight: "8px",
              marginTop: "7px",
              position: "absolute",
              top: 0,
              right: 5,
              cursor: "pointer"
            }}
            onClick={() => setvisible(!visible)}
          />}
      </div>

      <div style={{ position: "relative", marginBottom: '0px' }}>
        <input
          value={password}
          type={visible ? "text" : "password"}
          className='invierte'
          placeholder="Confirme su contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />
        {visible ?
          <VisibilityOff
            style={{
              color: "white",
              marginRight: "8px",
              marginTop: "7px",
              position: "absolute",
              top: 0,
              right: 5,
              cursor: "pointer"
            }}
            onClick={() => setvisible(!visible)}
          /> :
          <Visibility
            style={{
              color: "white",
              marginRight: "8px",
              marginTop: "7px",
              position: "absolute",
              top: 0,
              right: 5,
              cursor: "pointer"
            }}
            onClick={() => setvisible(!visible)}
          />}
      </div>



      <div onClick={SetDropDown} style={{ position: "relative", cursor: 'pointer', height: '20px' }}>
        <input
          style={{ fontSize: '13px', fontWeight: 600 }}
          value={contacto}
          type={'text'}
          className='invierte'
          placeholder="Seleccione quien desea que lo asista"
          onChange={(e) => e.preventDefault()}
          readOnly
        />
        {visibleContact ?
          <KeyboardArrowUpIcon
            style={{
              color: "white",
              marginRight: "8px",
              marginTop: "7px",
              position: "absolute",
              top: 0,
              right: 5,
              cursor: "pointer"
            }}
          /> :
          <KeyboardArrowDownIcon
            style={{
              color: "white",
              marginRight: "8px",
              marginTop: "7px",
              position: "absolute",
              top: 0,
              right: 5,
              cursor: "pointer"
            }}
          />}
      </div>


      <div className='contenedor1'>

        {
          isDropdownVisible && (
            <div className="dropdownContainer">
              {
                nombres.map((name: any) => (
                  <button onClick={handleClick(name)} className={classNames('invierte', 'buttonRef1', 'animate__animated animate__fadeInDown')}>{name}</button>
                ))
              }
            </div>)
        }

      </div>

      <Grid className='olvidaste' sx={{ mt: 4, textAlign: 'center' }} item xs>
                <span className='olvidaste1' style={{ textDecoration: 'none'}}>  ¿Ya tiene una cuenta? </span>

                <Link className='olvidaste' style={{
                  color: '#0A233F',
                  textDecorationColor: '#0A233F',
                  fontWeight: 'bold',
                  fontSize: '14px'
                }}
                  href="/" >Inicie sesion aqui</Link>
              </Grid>

            
      <div className='my-recaptcha' style={{ marginTop: '40px' }}>
        <ReCAPTCHA
          sitekey="6LdKIggpAAAAAGWOyp0NsFxneeE4hG1oqUzIAMA3"
        />
      </div>

      <CheckBoxComponent/>

    </>
  );
}