'use client'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Copyright from '@/components/copyrightComponent';
import classNames from 'classnames';
import '@/styles/styles.css'
import Link from 'next/link'
import ButtonAuth from '../ButtonAuth';
import { useState } from 'react';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';



function FormComponent() {
  const [password, setPassword] = useState("")
  const [visible, setvisible] = useState(false);


  return (
    <>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '@media (max-width: 300px)': {
              mt: 3,
            },
            '@media (max-width: 600px)': {
              mt: 2,
            },
            '@media (min-width: 1366px)': {
              mt: 7.5
            },
            '@media (min-width: 1920px)': {
              mt: '200px',
              mb: '200px'
            }
          }}

        >
          <img src='https://i.ibb.co/kychb3f/getsitelogo.png' width={'100px'}  ></img>
          <Typography className='iniciosesion' style={{ marginTop: '20px', color: '#0A233F' }} component="h1" variant="h6">
          NUEVA CONSTRASEÑA
          </Typography>

          <Box component="form" noValidate sx={{ mt: 3 }}>



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


            <Grid container >
              <Grid sx={{ textAlign: 'center' }} item xs>
                <Link
                  className='olvidaste'
                  style={{
                    color: '#0A233F',
                    textDecorationColor: '#0A233F',
                    fontWeight: 'bold',
                    fontSize: '14px'
                  }} href="/RememberPassword" >
                  ¿Olvidaste tu contraseña?
                </Link>
              </Grid>
            </Grid>
            <Grid container>
              <Grid className='olvidaste' sx={{ mt: 2, textAlign: 'center' }} item xs>
                <span className='olvidaste1' style={{ textDecoration: 'none' }}>  ¿No tienes una cuenta? </span>

                <Link className='olvidaste' style={{
                  color: '#0A233F',
                  textDecorationColor: '#0A233F',
                  fontWeight: 'bold',
                  fontSize: '14px'
                }}
                  href="/register" >Registrate aquí</Link>
              </Grid>
            </Grid>
            <Grid sx={{ alignItems: 'center' }} item xs>
              <button style={{width: '220px'}} className={classNames('olvidaste', 'buttonlogin')}><b>Restablecer Contrasena</b></button>
            </Grid>

            <Copyright />
          </Box>
        </Box>
      </Grid>
    </>
  )
}

export default FormComponent

