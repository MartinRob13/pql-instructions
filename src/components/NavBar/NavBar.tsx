import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material"
import { useState } from "react";
import { Menu } from "@mui/icons-material";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Teams",
    route: "/teams",
  },
  {
    name: "Players",
    route: "/players",
  },
];


export const NavBar = (props: Props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          PQL
        </Typography>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
      <Box sx={{ display: 'flex' }}>
        <AppBar
            position="fixed"
            component="nav"
            sx={{ 

            }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <Menu />
            </IconButton>
            <Typography variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
              Premier Quidditch League
            </Typography>
            <Divider />
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((item) => (
                  <Button key={item.name} href={item.route} sx={{ color: '#fff' }}>
                    {item.name}
                  </Button>
                ))}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      </Box>
    );
}