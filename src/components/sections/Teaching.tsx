import { Box, Container, Typography, List, ListItem } from '@mui/material';
import { motion } from 'framer-motion';

interface Course {
  code: string;
  name: string;
  semester: string;
}

interface TeachingProps {
  description?: string;
  courses: Course[];
}

const Teaching = ({ description, courses }: TeachingProps) => {
  return (
    <Box
      id="teaching"
      sx={{
        py: 8,
        backgroundColor: '#fff',
        minHeight: '50vh',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            <Box sx={{ flex: { xs: '1', md: '0 0 33%' } }}>
              <Typography variant="h3" gutterBottom>
                Teaching
              </Typography>
            </Box>

            <Box sx={{ flex: 1 }}>
              {description && (
                <Typography variant="body1" sx={{ mb: 3 }}>
                  {description}
                </Typography>
              )}

              <List>
                {courses.map((course, index) => (
                  <ListItem key={index} sx={{ py: 0.5, px: 0 }}>
                    <Typography variant="body1">
                      {course.code}: {course.name}, {course.semester}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Teaching;
