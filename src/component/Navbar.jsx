import { Mail, Notifications, Pets, Search } from "@mui/icons-material";
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import { useState } from "react";

const Navbar = () => {
 const [open, setOpen]  = useState(false)

 const  handleClick = ()=> {
  setOpen(!open);
 }

  const StyleToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));
  const Icons = styled(Box)(({ theme }) => ({
     display:'none',
     gap:'20px',
     alignItems:'center',
     [theme.breakpoints.up('sm')]:{
      display:'flex'
    }
  }));
  const UserBox = styled(Box)(({ theme }) => ({
    display:'flex',
    gap:'10px',
    alignItems:'center',
    [theme.breakpoints.up('sm')]:{
      display:'none'
    }
 }));
  return (
    <AppBar position="sticky">
      <StyleToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Saddam Zafar
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search" />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar onClick={()=>{setOpen(true)}} sx={{width:30, height:30}}  src="photo"/>
        </Icons>
        <UserBox>
        <Avatar  onClick={()=>{setOpen(true)}} sx={{width:30, height:30}}  src="photo"/>
        <Typography>
          Saddam
        </Typography>
        </UserBox>
      </StyleToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        onClose={()=>setOpen(false)}
        open={open}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
