import { Container, Typography, Box, Paper, Grid, Divider } from '@mui/material';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <Container maxWidth="md">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" component="h1" gutterBottom sx={{ textAlign: 'center', my: 4 }}>
          Resume
        </Typography>

        <Grid container spacing={4}>
          {/* Experience Section */}
          <Grid item xs={12} component="div">
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Professional Experience
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6">Software Developer Intern</Typography>
                <Typography color="text.secondary">Company Name • Summer 2023</Typography>
                <Typography paragraph>
                  • Developed and maintained web applications using React and Node.js<br />
                  • Collaborated with team members to implement new features<br />
                  • Participated in code reviews and improved code quality
                </Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Education Section */}
          <Grid item xs={12} component="div">
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Education
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6">Bachelor of Science in Computer Science</Typography>
                <Typography color="text.secondary">University Name • Expected Graduation 2024</Typography>
                <Typography paragraph>
                  • GPA: 3.8/4.0<br />
                  • Relevant Coursework: Data Structures, Algorithms, Software Engineering<br />
                  • Dean's List: Fall 2022, Spring 2023
                </Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Skills Section */}
          <Grid item xs={12} component="div">
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Technical Skills
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4} component="div">
                  <Typography variant="h6" gutterBottom>
                    Programming Languages
                  </Typography>
                  <Typography>
                    • Python<br />
                    • Java<br />
                    • JavaScript<br />
                    • TypeScript
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4} component="div">
                  <Typography variant="h6" gutterBottom>
                    Web Technologies
                  </Typography>
                  <Typography>
                    • React<br />
                    • Node.js<br />
                    • HTML/CSS<br />
                    • REST APIs
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4} component="div">
                  <Typography variant="h6" gutterBottom>
                    Tools & Others
                  </Typography>
                  <Typography>
                    • Git<br />
                    • Docker<br />
                    • AWS<br />
                    • Agile Methodologies
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Resume; 