import { Box, Container, Typography, IconButton } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: '#fff',
        borderTop: '1px solid #e0e0e0',
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()}
          </Typography>

          <IconButton
            onClick={scrollToTop}
            sx={{
              '&:hover': {
                backgroundColor: 'transparent',
                color: 'primary.main',
              },
            }}
          >
            <KeyboardArrowUpIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
