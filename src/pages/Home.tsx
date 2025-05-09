import { Container, Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <Container maxWidth="md">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ my: 4, textAlign: 'center' }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to My Portfolio
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Computer Science Student & Aspiring Software Developer
          </Typography>
        </Box>

        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            About Me
          </Typography>
          <Typography paragraph>
            I am a passionate computer science student with a strong interest in software development
            and problem-solving. My academic journey has equipped me with a solid foundation in
            programming, algorithms, and software engineering principles.
          </Typography>
          <Typography paragraph>
            Through this website, you can explore my professional experience, academic achievements,
            and get in touch with me for potential opportunities.
          </Typography>
        </Paper>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Paper elevation={3} sx={{ p: 3, flex: 1, textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Skills
            </Typography>
            <Typography>
              • Programming Languages: Python, Java, JavaScript<br />
              • Web Development: React, HTML, CSS<br />
              • Tools & Technologies: Git, Docker, AWS
            </Typography>
          </Paper>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Home; 