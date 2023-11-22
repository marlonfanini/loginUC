import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import '@/styles/styles.css'
import CarouselComponent from '@/components/Carrousel/CarouselComponent';
import RegisterComponent from '@/components/Register/RegisterComponent';
import FormComponent from '@/components/NewPassword/NewPasswordComp';
import FormComponent2 from '@/components/Register/RegisterComponent';





export default function SignInSide() {
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
        <FormComponent2/>
      </Grid>
    </>
  );
}