import { Box, Container, Typography, List, ListItem } from '@mui/material';
import { motion } from 'framer-motion';

interface Talk {
  title: string;
  venue: string;
  year: string;
  link?: string;
}

interface TalksProps {
  talks: Talk[];
}

const Talks = ({ talks }: TalksProps) => {
  return (
    <Box
      id="talks"
      sx={{
        py: 8,
        backgroundColor: '#f7f7f7',
        minHeight: '50vh',
      }}
    >
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            <Box sx={{ flex: { xs: '1', md: '0 0 33%' } }}>
              <Typography variant="h3" gutterBottom>
                Talks
              </Typography>
            </Box>

            <Box sx={{ flex: 1 }}>
              <List>
                {talks.map((talk, index) => (
                  <ListItem key={index} sx={{ py: 1, px: 0, display: 'block' }}>
                    {talk.link ? (
                      <a
                        href={talk.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: '#0095eb',
                          textDecoration: 'none',
                        }}
                      >
                        {talk.title}
                      </a>
                    ) : (
                      <Typography variant="body1">{talk.title}</Typography>
                    )}
                    <Typography variant="body2" color="text.secondary">
                      {talk.venue}, {talk.year}
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

export default Talks;
