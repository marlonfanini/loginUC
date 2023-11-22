'use client'
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import '@/styles/styles.css'
import CarouselComponent from '@/components/Carrousel/CarouselComponent';
import RegisterComponent from '@/components/Register/RegisterComponent';
import FormComponent from '@/components/NewPassword/NewPasswordComp';
import FormComponent2 from '@/components/Register/RegisterComponent';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Copyright from '@/components/copyrightComponent';
import classNames from 'classnames';
import '@/styles/styles.css'
import Link from 'next/link'
import { useState } from 'react';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';




export default function SignInSide() {
    const [password, setPassword] = useState("")
    const [visible, setvisible] = useState(false);
  return (
    <>
     <Grid container component="main">
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(https://i.ibb.co/R7FYmZ3/Screenshot-2023-10-27-131222.png)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            
          }}
        >
         <CarouselComponent/>
        </Grid>
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
          <Typography className='iniciosesion' style={{ marginTop: '20px', color: '#0A233F', fontSize: '13.5px', fontWeight: '500' }} >
          Establece tu nueva contraseña
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
            <div style={{ position: "relative" }}>
              <input
                value={password}
                type={visible ? "text" : "password"}
                className='invierte'
                placeholder="Confirmar contraseña"
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


        
            <Grid sx={{ alignItems: 'center' }} item xs>
              <button style={{width: '220px'}} className={classNames('olvidaste', 'buttonlogin')}><b>Restablecer Contraseña</b></button>
            </Grid>

            <Copyright />
          </Box>
        </Box>
      </Grid>
          </Grid>
    </>
  );
}