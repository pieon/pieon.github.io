import { Box, Container, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

interface Research {
  title: string;
  description: string;
  image?: string;
  link: string;
  isInternal?: boolean;
}

interface ResearchProps {
  Researches: Research[];
}

const Research = ({ Researches }: ResearchProps) => {
  return (
    <Box
      id="Research"
      sx={{
        py: 8,
        backgroundColor: '#fff',
        minHeight: '100vh',
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2.75 }}>
          <Box sx={{ flex: { xs: '1', md: '0 0 33%' } }}>
            <Typography variant="h3" gutterBottom>
              Research
            </Typography>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
              {Researches.map((project, index) => (
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
                        component={project.isInternal ? RouterLink : 'a'}
                        to={project.isInternal ? project.link : undefined}
                        href={!project.isInternal ? project.link : undefined}
                        target={!project.isInternal ? '_blank' : undefined}
                        rel={!project.isInternal ? 'noopener noreferrer' : undefined}
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
                        {project.isInternal ? (
                          <RouterLink
                            to={project.link}
                            style={{
                              color: '#000',
                              textDecoration: 'none',
                              borderBottom: 'solid 1px transparent',
                            }}
                          >
                            {project.title}
                          </RouterLink>
                        ) : (
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
                        )}
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

export default Research;
