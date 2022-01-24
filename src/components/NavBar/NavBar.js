import CartWidget from "../CartWidget/CartWidget";
import {Link} from 'react-router-dom'
import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';


const pages = [ 
  {cat: "Home", link: "/category/home"},
  {cat: "Empresa", link: "/category/business"},
  {cat: "Gamer", link: "/category/gamer"}
];

const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);    
   
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };

  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    }; 


    const logo = "https://res.cloudinary.com/ds3gb0bqn/image/upload/v1642111434/logo_ysbytb.jpg";


    return (
        <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              <Link to="/">
                <Avatar 
                  src={logo} 
                  alt="logo"
                  sx={{ width: 48, height: 48 }} />
              </Link>
            </Typography>
  
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >

              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Link to={page.link}>
                <Button
                  key={page.cat}                  
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                 {page.cat}
                </Button>
                </Link>
              ))}
            </Box>
  
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Carrito de compras">                
                    <Link to="/cart"><CartWidget /></Link>            
                </Tooltip>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>      



        
    )
}

export default NavBar;