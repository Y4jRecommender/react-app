import * as React from 'react';
import { useContext } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import { AuthContext } from "../../Context/authContext";
import { useGoogleLogin } from "@react-oauth/google";

export default function Navbar() {
  const authContext = useContext(AuthContext);
  const { name, auth, LoginGoogle, Logout, role } = authContext;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const GoogleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      LoginGoogle(tokenResponse.access_token);
    },
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Y4J
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {name} &nbsp;
          </Typography>
          {/* Login Button */}
          {!auth && (
            <Button variant="secondary" onClick={() => {
              GoogleLogin()
            }}>Login</Button>
          )}
          {auth && (
            <>
              {role === "user" &&
                (<>
                  <p>User&nbsp;</p>
                  {/* <Button variant="secondary" href="/dashboard">DashBoard</Button> */}
                </>)
              }
              {role === "admin" &&
                (<>
                  <p>Admin&nbsp;</p>
                  {/* <Button variant="secondary" href="/admin/dashboard">DashBoard</Button> */}
                </>)
              }
              {role === "corporate" &&
                (<>
                  <p>Corporate&nbsp;</p>
                  {/* <Button variant="secondary" href="/corporate/dashboard">DashBoard</Button> */}
                </>)
              }

              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={() => {
                    Logout()
                    handleClose()
                  }}>Logout</MenuItem>
                </Menu>
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}