import { AccountBox, Home, ModeNight, People, Settings } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";

const Sidebar = () => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
    <Box position="fixed">   
      <List>
        <ListItem disablePadding>
          <ListItemButton component='a' href="#home">
            <ListItemIcon>
                <Home />
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton component='a' href="#settings">
            <ListItemIcon>
                <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton component='a' href="#Profile">
            <ListItemIcon>
                <AccountBox />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton component='a' href="#Friend">
            <ListItemIcon>
                <People />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton component='a' href="#Friend">
            <ListItemIcon>
                <People />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>
      </List>

      <List>
        <ListItem disablePadding>
          <ListItemButton component='a' href="#Friend">
            <ListItemIcon>
                <ModeNight />
            </ListItemIcon>
            <Switch />
          </ListItemButton>
        </ListItem>
      </List>
      </Box> 

    </Box>
  );
};

export default Sidebar;
