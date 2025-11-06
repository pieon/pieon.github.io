import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const isHomePage = location.pathname === '/';

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 70;
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  const homeNavItems = [
    { label: 'Home', id: 'about' },
    { label: 'Posts', id: 'posts' },
    { label: 'Research', id: 'research' },
    { label: 'Talks', id: 'talks' },
    { label: 'Teaching', id: 'teaching' },
  ];

  const regularNavItems = [
    { label: 'Home', path: '/' },
    { label: 'Resume', path: '/resume' },
    { label: 'Academic', path: '/academic' },
    { label: 'Contact', path: '/contact' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 'bold' }}>
        Jaehoon Pyon
      </Typography>
      <List>
        {isHomePage
          ? homeNavItems.map((item) => (
              <ListItem key={item.id} onClick={() => scrollToSection(item.id)}>
                <ListItemText primary={item.label} />
              </ListItem>
            ))
          : regularNavItems.map((item) => (
              <ListItem key={item.path} component={RouterLink} to={item.path}>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled ? '#fff' : '#fff',
          boxShadow: scrolled
            ? '0 0.125rem 0.25rem 0 rgba(0,0,0,.11)'
            : '0 0.125rem 0.25rem 0 rgba(0,0,0,.11)',
          transition: 'all 0.3s ease',
        }}
      >
        <Toolbar sx={{ minHeight: { xs: '50px', md: '70px' } }}>
          <Typography
            variant="h5"
            fontWeight="bold"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: '#2b2b2b',
              textTransform: 'uppercase',
              fontSize: { xs: '1rem', md: '1.2rem' },
            }}
          >
            Jaehoon Pyon
          </Typography>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: '#34495e' }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box>
              {isHomePage
                ? homeNavItems.map((item) => (
                    <Button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      sx={{
                        color: '#34495e',
                        fontWeight: 600,
                        '&:hover': {
                          color: '#0095eb',
                          backgroundColor: 'transparent',
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  ))
                : regularNavItems.map((item) => (
                    <Button
                      key={item.path}
                      component={RouterLink}
                      to={item.path}
                      sx={{
                        color: '#34495e',
                        fontWeight: 600,
                        '&:hover': {
                          color: '#0095eb',
                          backgroundColor: 'transparent',
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar sx={{ minHeight: { xs: '50px', md: '70px' } }} /> {/* Spacer */}

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
