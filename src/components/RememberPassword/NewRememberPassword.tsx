import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Copyright from '@/components/copyrightComponent';
import classNames from 'classnames';
import PwAndEmailComponent from './PWAndEmailComponent';
import '@/styles/styles.css'
import Link from 'next/link'
import ButtonAuth from '../ButtonAuth';
import PwAndEmailComponentRegister from './PWAndEmailComponent';


function NewRemember() {
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
                        RECORDAR CONSTRASEÑA
                    </Typography>
                    <Typography className='invierte' style={{ justifyContent: 'center', marginTop: '20px', color: '#0A233F', fontSize: '13.5px', width: '400px' }} component="h1" variant="h6">
                        Vamos a crear una nueva contraseña. Por favor digita tu correo electrónico
                    </Typography>

                    <Box component="form" noValidate sx={{ mt: 3 }}>
                        <PwAndEmailComponentRegister/>
                        <Grid sx={{ alignItems: 'center' }} item xs>
                            <Link href='/nPassword' style={{ textDecoration: 'none' }}>
                                <button className={classNames('olvidaste', 'buttonlogin')} style={{ width: '140px' }}><b>Enviar</b></button>
                            </Link>
                        </Grid>
                        <Grid className='olvidaste' sx={{ mt: 4, textAlign: 'center' }} item xs>
                            <span className='olvidaste1' style={{ textDecoration: 'none', fontSize: '14px' }}>  He recordado mi contraseña, </span>

                            <Link className='olvidaste' style={{
                                color: '#0A233F',
                                textDecorationColor: '#0A233F',
                                fontWeight: 'bold',
                                fontSize: '14px'
                            }}
                                href="/" >Quiero acceder</Link>
                        </Grid>
                        <Copyright />
                    </Box>
                </Box>
            </Grid>
        </>
    )
}

export default NewRemember;

