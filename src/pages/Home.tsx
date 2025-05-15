import { Container, Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import theme from '../theme';

const Home = () => {
  return (
    <Container maxWidth="md">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ my: 4, textAlign: 'center' }}>
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Hello! I'm Jaehoon Pyon
          </Typography>
        </Box>

        <Box sx={{ p: 2, mb: 4 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            About Me
          </Typography>
          
          <Typography variant="body1" fontSize="1.5rem" gutterBottom>
            I am a 1st year Ph.D. student in Computer Science at Virginia Tech. I am a member of the <a href="https://echolab.cs.vt.edu/" target="_blank" rel="noopener noreferrer">Echo Lab</a>, advised by <a href="https://echolab.cs.vt.edu/sangwonlee/" target="_blank" rel="noopener noreferrer">Prof. Sang Won Lee</a>. My research interests lie in human-computer interaction (HCI), with a focus on sustainable HCI (SHCI) and behavior change.
            <br />
            <br />
            My current research focuses on studying the nuanced relationship between minimalism and technology by interviewing minimalists.
          </Typography>
        </Box>

        <Box sx={{ p: 2, mb: 4 }}>
          
        </Box>
      </motion.div>
    </Container>
  );
};

export default Home; 