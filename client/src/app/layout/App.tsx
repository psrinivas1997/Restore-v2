
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../store/store";



function App() {
  const{darkMode} = useAppSelector(state => state.ui);
   // const darkMode = true;
    const palleteType = darkMode? 'dark' : 'light'
    const theme =createTheme({
      palette : {
        mode: palleteType,
        background: {
          default : (palleteType === 'light') ? '#eaeaea' :'#121212'
        }
      }
    });


   

 return (

    <ThemeProvider theme={theme}>
 <CssBaseline />

      <NavBar />
      <Box 
      sx={{
        minHeight : '100vh',
        background: darkMode 
        ? 'radial-gradient(circle,rgb(39, 60, 176),rgb(3, 3, 54))' 
        : 'radial-gradient(circle, #baecf9, #f0f9ff)' ,
     
        py :6

      }}
      >
      <Container maxWidth='xl' sx={{ mt: 8 }}>
       <Outlet/>
      </Container>
      </Box>

    </ThemeProvider>
     
      
  )
}

export default App;


//import { Palette } from "@mui/icons-material";