import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const Academic = () => {
  return (
    <Container maxWidth="md">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" component="h1" gutterBottom sx={{ textAlign: 'center', my: 4 }}>
          Academic Journey
        </Typography>

        <Grid container spacing={4}>
          {/* Current Studies */}
          <Grid item xs={12} component="div">
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Current Studies
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6">Bachelor of Science in Computer Science</Typography>
                <Typography color="text.secondary">University Name</Typography>
                <Typography paragraph>
                  • Expected Graduation: 2024<br />
                  • Major GPA: 3.8/4.0<br />
                  • Dean's List: Fall 2022, Spring 2023
                </Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Coursework */}
          <Grid item xs={12} component="div">
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Relevant Coursework
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} component="div">
                  <Typography variant="h6" gutterBottom>
                    Core Computer Science
                  </Typography>
                  <Typography>
                    • Data Structures and Algorithms<br />
                    • Software Engineering<br />
                    • Database Systems<br />
                    • Operating Systems
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6} component="div">
                  <Typography variant="h6" gutterBottom>
                    Advanced Topics
                  </Typography>
                  <Typography>
                    • Machine Learning<br />
                    • Computer Networks<br />
                    • Cloud Computing<br />
                    • Web Development
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* Academic Projects */}
          <Grid item xs={12} component="div">
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Academic Projects
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6">Machine Learning Research Project</Typography>
                <Typography color="text.secondary">Spring 2023</Typography>
                <Typography paragraph>
                  • Developed a novel algorithm for image classification<br />
                  • Achieved 95% accuracy on benchmark datasets<br />
                  • Published research paper in university journal
                </Typography>

                <Typography variant="h6">Web Application Development</Typography>
                <Typography color="text.secondary">Fall 2022</Typography>
                <Typography paragraph>
                  • Built a full-stack web application using React and Node.js<br />
                  • Implemented user authentication and database integration<br />
                  • Deployed application using AWS services
                </Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Achievements */}
          <Grid item xs={12} component="div">
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Academic Achievements
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Typography>
                  • Dean's List: Fall 2022, Spring 2023<br />
                  • Computer Science Department Scholarship<br />
                  • Hackathon Winner: University Tech Challenge 2023<br />
                  • Research Grant Recipient: Undergraduate Research Program
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Academic; 