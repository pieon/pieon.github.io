import { Container, Typography, Box, Paper } from '@mui/material';
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

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {/* Experience Section */}
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Professional Experience
            </Typography>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6">Software Developer Intern</Typography>
              <Typography color="text.secondary">Company Name • Summer 2023</Typography>
              <Typography sx={{ mt: 1 }}>
                • Developed and maintained web applications using React and Node.js<br />
                • Collaborated with team members to implement new features<br />
                • Participated in code reviews and improved code quality
              </Typography>
            </Box>
          </Paper>

          {/* Education Section */}
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Education
            </Typography>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6">Bachelor of Science in Computer Science</Typography>
              <Typography color="text.secondary">University Name • Expected Graduation 2024</Typography>
              <Typography sx={{ mt: 1 }}>
                • GPA: 3.8/4.0<br />
                • Relevant Coursework: Data Structures, Algorithms, Software Engineering<br />
                • Dean's List: Fall 2022, Spring 2023
              </Typography>
            </Box>
          </Paper>

          {/* Skills Section */}
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Technical Skills
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" gutterBottom>
                  Programming Languages
                </Typography>
                <Typography>
                  • Python<br />
                  • Java<br />
                  • JavaScript<br />
                  • TypeScript
                </Typography>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" gutterBottom>
                  Web Technologies
                </Typography>
                <Typography>
                  • React<br />
                  • Node.js<br />
                  • HTML/CSS<br />
                  • REST APIs
                </Typography>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" gutterBottom>
                  Tools & Others
                </Typography>
                <Typography>
                  • Git<br />
                  • Docker<br />
                  • AWS<br />
                  • Agile Methodologies
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Resume;
