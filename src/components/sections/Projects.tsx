import { Box, Container, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  image?: string;
  link: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <Box
      id="projects"
      sx={{
        py: 8,
        backgroundColor: '#fff',
        minHeight: '100vh',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          <Box sx={{ flex: { xs: '1', md: '0 0 33%' } }}>
            <Typography variant="h3" gutterBottom>
              Projects
            </Typography>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: '0 2px 4px 0 rgba(0,0,0,0.2)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    {project.image && (
                      <CardMedia
                        component="a"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          height: 200,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundColor: '#e0e0e0',
                          textDecoration: 'none',
                        }}
                        image={project.image}
                      />
                    )}
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                          textTransform: 'uppercase',
                          fontWeight: 700,
                        }}
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: '#000',
                            textDecoration: 'none',
                            borderBottom: 'solid 1px transparent',
                          }}
                        >
                          {project.title}
                        </a>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {project.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
