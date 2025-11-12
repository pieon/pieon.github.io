import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

interface Research {
  title: string;
  description: string;
  authors?: string;
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
                    mb: 3,
                    boxShadow: '0 1px 4px rgba(0,0,0,.04)',
                    border: '1px solid rgba(0,0,0,.09)',
                  }}
                >
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
                        {project.isInternal ? (
                          <RouterLink
                            to={project.link}
                            style={{
                              color: '#151515',
                              textDecoration: 'none',
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
                              color: '#151515',
                              textDecoration: 'none',
                            }}
                          >
                            {project.title}
                          </a>
                        )}
                      </Typography>
                      {project.authors && (
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mb: 1 }}
                          dangerouslySetInnerHTML={{ __html: project.authors }}
                        />
                      )}
                      <Typography variant="body1" sx={{ mb: 2 }} color="text.secondary">
                        {project.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Research;
