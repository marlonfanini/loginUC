'use client'
import ButtonAuth from "@/components/ButtonAuth";
import CssBaseline from '@mui/material/CssBaseline';
import '@/styles/styles.css'
import CarouselComponent from '@/components/Carrousel/CarouselComponent';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Copyright from '@/components/copyrightComponent';
import '@/styles/styles.css'
import Link from 'next/link'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import CircularProgress from '@mui/material/CircularProgress';



const HomePage = () => {

  const [errors, setErrors] = useState("");
  const [visible, setvisible] = useState(false);
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const router = useRouter();
  const { data: session, status } = useSession()
  console.log({ session, status })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(username, password)

    const responseNextAuth = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    console.log(responseNextAuth)
    if (responseNextAuth?.error) {
      setErrors(responseNextAuth.error)
      return;
    }

    console.log(errors)
    setPassword("")
    setUsername("")

    router.push("/register");

  };

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
          <CarouselComponent />
        </Grid>

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
          <Box
            sx={{
              my: 6,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
  
              '@media (max-width: 600px)': {
                mt: 18,
              },
              '@media (min-width: 1366px)': {
                mt: 7
              },
              '@media (min-width: 1920px)': {
                mt: '200px',
                mb: '200px'
              }
            }}

          >
            <img src='https://i.ibb.co/kychb3f/getsitelogo.png' width={'100px'}  ></img>
            <Typography className='iniciosesion' style={{ marginTop: '20px', color: '#0A233F' }} component="h1" variant="h6">
              INICIO DE SESIÓN
            </Typography>


            <Box sx={{ mt: 3 }}>

              {status === "loading" ? (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <CircularProgress />
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <input
                    className="invierte"
                    required
                    placeholder="Correo electrónico"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <div style={{ position: "relative" }}>
                    <input
                      required
                      value={password}
                      type={visible ? "text" : "password"}
                      className="invierte"
                      placeholder="Contraseña"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {visible ? (
                      <VisibilityOff
                        style={{
                          color: "white",
                          marginRight: "8px",
                          marginTop: "7px",
                          position: "absolute",
                          top: 0,
                          right: 5,
                          cursor: "pointer",
                        }}
                        onClick={() => setvisible(!visible)}
                      />
                    ) : (
                      <Visibility
                        style={{
                          color: "white",
                          marginRight: "8px",
                          marginTop: "7px",
                          position: "absolute",
                          top: 0,
                          right: 5,
                          cursor: "pointer",
                        }}
                        onClick={() => setvisible(!visible)}
                      />
                    )}
                  </div>

                  <Grid container>
                    <Grid sx={{ textAlign: "center" }} item xs>
                      <Link
                        className="olvidaste"
                        style={{
                          color: "#0A233F",
                          textDecorationColor: "#0A233F",
                          fontWeight: "bold",
                          fontSize: "14px",
                        }}
                        href="/rememberPassword"
                      >
                        ¿Olvidaste tu contraseña?
                      </Link>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid className="olvidaste" sx={{ mt: 2, textAlign: "center" }} item xs>
                      <span className="olvidaste1" style={{ textDecoration: "none" }}>
                        {" "}
                        ¿No tienes una cuenta?{" "}
                      </span>

                      <Link
                        className="olvidaste"
                        style={{
                          color: "#0A233F",
                          textDecorationColor: "#0A233F",
                          fontWeight: "bold",
                          fontSize: "14px",
                        }}
                        href="/register"
                      >
                        Regístrate aquí
                      </Link>
                    </Grid>
                  </Grid>
                  <Grid sx={{ alignItems: "center" }} item xs>
                    <button
                      type="submit"
                      style={{ fontWeight: "500", fontSize: "14px" }}
                      className="olvidaste buttonlogin"
                    >
                      <b>Iniciar Sesión</b>
                    </button>
                  </Grid>
                </form>
              )}
              <Copyright />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default HomePage;
