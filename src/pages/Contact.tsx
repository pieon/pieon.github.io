import { Container, Typography, Box, Paper, TextField, Button, Grid, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add form submission logic here
  };

  return (
    <Container maxWidth="md">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" component="h1" gutterBottom sx={{ textAlign: 'center', my: 4 }}>
          Contact Me
        </Typography>

        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Send a Message
              </Typography>
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  required
                  type="email"
                />
                <TextField
                  fullWidth
                  label="Subject"
                  variant="outlined"
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  margin="normal"
                  required
                  multiline
                  rows={4}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ mt: 2 }}
                >
                  Send Message
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Get in Touch
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Connect with me on social media:
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                  <IconButton
                    color="primary"
                    aria-label="LinkedIn"
                    component="a"
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                  >
                    <LinkedInIcon fontSize="large" />
                  </IconButton>
                  <IconButton
                    color="primary"
                    aria-label="GitHub"
                    component="a"
                    href="https://github.com/yourusername"
                    target="_blank"
                  >
                    <GitHubIcon fontSize="large" />
                  </IconButton>
                  <IconButton
                    color="primary"
                    aria-label="Email"
                    component="a"
                    href="mailto:your.email@example.com"
                  >
                    <EmailIcon fontSize="large" />
                  </IconButton>
                </Box>

                <Typography variant="h6" gutterBottom>
                  Contact Information:
                </Typography>
                <Typography paragraph>
                  Email: your.email@example.com<br />
                  Location: City, State<br />
                  Available for: Full-time positions, Internships, Freelance work
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Contact; 