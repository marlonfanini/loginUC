import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Copyright from '@/components/copyrightComponent';
import classNames from 'classnames';
import PwAndEmailComponent from './PWAndEmailComponent';
import '@/styles/styles.css' 

function FormComponent2() {
  return (
    <>
      <Grid item  xs={12} sm={8} md={5}  component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 2,
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
              mt: '130px',
            }
          }}
         
        >
          <img  src='https://i.ibb.co/kychb3f/getsitelogo.png' width={'100px'}  ></img>
          <Typography className='iniciosesion' style={{ marginTop: '20px', color: '#0A233F' }} component="h1" variant="h6">
            CREAR USUARIO
          </Typography>

          <Box  component="form" noValidate sx={{ mt: 3 }}>


            <PwAndEmailComponent />

       
     
            <Grid sx={{ alignItems: 'center' }} item xs>
              <button className={classNames('olvidaste', 'buttonlogin')}><b>Continuar</b></button>
            </Grid>

            <Copyright />
          </Box>
        </Box>
      </Grid>
    </>
  )
}

export default FormComponent2
