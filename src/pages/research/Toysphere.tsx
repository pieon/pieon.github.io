import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Toysphere = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 8, minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/')}
          sx={{ mb: 4 }}
        >
          Back to Home
        </Button>

        <Typography variant="h2" gutterBottom>
          Toysphere
        </Typography>

        <Typography variant="h5" color="text.secondary" gutterBottom sx={{ mt: 2 }}>
          Project Overview
        </Typography>
        <Typography variant="body1" >
          This project aims to address the environmental impact of discarded toys. With 80% of toys ending up in landfills despite their potential for reuse, the project seeks to reduce waste by encouraging children and parents to make more sustainable decisions regarding end-of-life (EoL) toys. 
          A study discovered that while more than half of purchased children’s toys are kept, they often fall into disuse shortly after purchase as children's interest quickly fades. 
          Consequently, a surplus of toys accumulates; these items, unused yet not broken and kept by their owners—referred to as EoL toys—are frequently disposed of during major domestic changes, such as moving houses, despite being in perfectly good condition. 
          In this research, we explore ways to promote  children and parents’ toy reuse and sharing behaviors using virtual reality technology. Our team will develop a system where children can digitize their old toys, creating 3D virtual replicas that can be displayed and interacted with on various digital platforms, forming new emotional connections with their virtual toys. 
          By fostering these new connections, we hope to make it easier for children to part with physical toys they no longer use while they still have high value, encouraging donation or sharing. The project will include  community engagement through interactive exhibitions, aiming to raise awareness about toy waste and foster sustainable behaviors. 
          This interdisciplinary effort combines expertise in sustainable design, virtual reality, and interactive exhibitions to reimagine the lifecycle of toys and contribute to a more circular economy.
        </Typography>

        <Typography variant="h5" color="text.secondary" gutterBottom sx={{ mt: 4 }}>
          Research Methodology
        </Typography>
        <Typography variant="body1" >
          The team carried out a survey involving 101 participants and conducted ten contextual inquiry visits with families in Blacksburg, engaging parents and children in meaningful discussions about the reasons behind keeping toys that are no longer in use.
          As part of the contextual visits, participants were invited to share unneeded, disused, or end-of-use toys, which were then 3D scanned and transformed into digital assets.
          The scanned files have been cleaned and visually enhanced by the design team, making them suitable for integration into a virtual environment.
          This digital space was developed and designed as a personalized experience, with individual virtual rooms labeled with each child’s name to showcase their toys.
          This space served as a reflective zone, allowing children to interact with familiar objects in new, imaginative ways. 
          In addition, a common space is developed within the digital environment, where children can, with permission, bring their virtual toys to interact with others and listen to other children’s stories. 
          This zone was designed to promote social interaction, empathy, and play, while also showcasing stories associated with different toys.
        </Typography>

        <Typography variant="h5" color="text.secondary" gutterBottom sx={{ mt: 4 }}>
          Video Demonstration
        </Typography>
        <Box sx={{ mt: 2, mb: 4 }}>
          <iframe
            width="100%"
            height="480"
            src="https://youtu.be/wxHIrP86aOg"
            title="Toysphere Project Demonstration"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>

        <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            href="https://icat.vt.edu/projects/supported-research/sead-grants/2024-2025/major/toysphere.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            View ICAT Project Page
          </Button>
          <Button
            variant="outlined"
            href="https://icat.vt.edu/events/2025/10/icat-playdate---toysphere.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            ICAT Playdate Event
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Toysphere;
