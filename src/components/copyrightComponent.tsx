import { Link, Typography } from "@mui/material";

export default function CopyrightComp() {
    return (
      <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 9 }}>
        {'Copyright © '}
        <Link color="inherit" href="https://www.unitedcapitaldr.com/">
        UNITED CAPITAL PUESTO DE BOLSA
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}
