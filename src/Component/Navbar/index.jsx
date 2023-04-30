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
import { SectionContext } from '../../Context/sectionContext';
import { FormControl, InputLabel, Select } from '@mui/material';

export default function Navbar() {
  const authContext = useContext(AuthContext);
  const { name, auth, LoginGoogle, Logout, role, language, updateLanguage } = authContext;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { setSection } = useContext(SectionContext);

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
            <Button variant="secondary" onClick={() => {
              window.location.href = "/"
            }}>Y4J</Button>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button variant="secondary" onClick={() => {
              window.location.href = "/translation"
            }}>Translations</Button>
          </Typography>

          {/* Update the language select box */}
          <FormControl>
            <InputLabel id="demo-simple-select-label">Language</InputLabel>
            <Select
              sx={{ color: "white", borderColor: 'white', '&:before': { borderColor: 'white' } }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={language}
              label="Language"
              onChange={(e) => {
                updateLanguage(e.target.value)
              }}
            >
              <MenuItem value={"en"}>English</MenuItem>
              <MenuItem value={"as"}>Assamese</MenuItem>
              <MenuItem value={"hi"}>Hindi</MenuItem>
              <MenuItem value={"mr"}>Marathi</MenuItem>
              <MenuItem value={"ta"}>Tamil</MenuItem>
              <MenuItem value={"bn"}>Bengali</MenuItem>
              <MenuItem value={"kn"}>Kannada</MenuItem>
              <MenuItem value={"or"}>Oriya</MenuItem>
              <MenuItem value={"te"}>Telugu</MenuItem>
              <MenuItem value={"gu"}>Gujarati</MenuItem>
              <MenuItem value={"ml"}>Malayalam</MenuItem>
              <MenuItem value={"pa"}>Punjabi</MenuItem>
            </Select>
          </FormControl>

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
                  <Button variant="secondary" onClick={() => {
                    setSection("home")
                  }}>DashBoard</Button>
                </>)
              }
              {role === "admin" &&
                (<>
                  <p>Admin&nbsp;</p>
                  <Button variant="secondary" onClick={() => {
                    setSection("home")
                  }}>DashBoard</Button>
                </>)
              }
              {role === "corporate" &&
                (<>
                  <p>Corporate&nbsp;</p>
                  <Button variant="secondary" onClick={() => {
                    setSection("home")
                  }}
                  >DashBoard</Button>
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
                  {role !== "admin" && (
                    <MenuItem onClick={() => {
                      setSection("profile")
                      handleClose()
                    }}>Profile</MenuItem>
                  )}
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