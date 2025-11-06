import { Box, Container, Typography, List, ListItem } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';

interface AboutProps {
  name: string;
  title: string;
  affiliation: string;
  bio: string;
  interests: string[];
  education: {
    degree: string;
    institution: string;
    period: string;
  }[];
  social: {
    email?: string;
    github?: string;
    linkedin?: string;
    scholar?: string;
  };
}

const About = ({
  name,
  title,
  affiliation,
  bio,
  interests,
  education,
  social,
}: AboutProps) => {
  return (
    <Box
      id="about"
      sx={{
        py: 8,
        backgroundColor: '#fff',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
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
            {/* Profile Column */}
            <Box sx={{ flex: { xs: '1', md: '0 0 33%' } }}>
              <Box sx={{ textAlign: 'center', p: 3 }}>
                {/* Profile Picture Placeholder */}
                <Box
                  sx={{
                    width: 200,
                    height: 200,
                    borderRadius: '50%',
                    backgroundColor: '#e0e0e0',
                    margin: '0 auto',
                    mb: 2,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />

                <Typography variant="h4" fontWeight={300} gutterBottom>
                  {name}
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight={300}
                  color="text.secondary"
                  gutterBottom
                >
                  {title}
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight={300}
                  color="text.secondary"
                >
                  {affiliation}
                </Typography>

                {/* Social Icons */}
                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 1 }}>
                  {social.email && (
                    <a
                      href={`mailto:${social.email}`}
                      style={{ color: 'inherit' }}
                    >
                      <EmailIcon sx={{ fontSize: 32, '&:hover': { transform: 'scale(1.2)' } }} />
                    </a>
                  )}
                  {social.linkedin && (
                    <a
                      href={social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'inherit' }}
                    >
                      <LinkedInIcon sx={{ fontSize: 32, '&:hover': { transform: 'scale(1.2)' } }} />
                    </a>
                  )}
                  {social.github && (
                    <a
                      href={social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'inherit' }}
                    >
                      <GitHubIcon sx={{ fontSize: 32, '&:hover': { transform: 'scale(1.2)' } }} />
                    </a>
                  )}
                  {social.scholar && (
                    <a
                      href={social.scholar}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'inherit' }}
                    >
                      <SchoolIcon sx={{ fontSize: 32, '&:hover': { transform: 'scale(1.2)' } }} />
                    </a>
                  )}
                </Box>
              </Box>
            </Box>

            {/* Bio and Details Column */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h3" gutterBottom sx={{ mb: 3 }}>
                Biography
              </Typography>

              <Typography
                variant="body1"
                sx={{ lineHeight: 1.8, mb: 3, whiteSpace: 'pre-line' }}
              >
                {bio}
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 4, mt: 2 }}>
                {/* Interests */}
                <Box sx={{ flex: { xs: '1', sm: '0 0 42%' } }}>
                  <Typography variant="h5" gutterBottom>
                    Interests
                  </Typography>
                  <List>
                    {interests.map((interest, index) => (
                      <ListItem key={index} sx={{ py: 0.5, px: 0 }}>
                        <Typography variant="body2">{interest}</Typography>
                      </ListItem>
                    ))}
                  </List>
                </Box>

                {/* Education */}
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h5" gutterBottom>
                    Education
                  </Typography>
                  <List>
                    {education.map((edu, index) => (
                      <ListItem key={index} sx={{ py: 1, px: 0, display: 'block' }}>
                        <Typography variant="body2" fontWeight="medium">
                          {edu.degree}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {edu.institution}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {edu.period}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
