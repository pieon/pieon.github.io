import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const TaleMate = () => {
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
          TaleMate (In Progress)
        </Typography>

        <Typography variant="h5" color="text.secondary" gutterBottom sx={{ mt: 2 }}>
          Abstract
        </Typography>
        <Typography variant="body1" paragraph>
          Group reading activity requires caregivers’ cognitive and physical efforts, but its benefit for children’s skill development has been proven. 
          Hence, systems supporting group reading between parent and child have been studied, many utilizing a Conversational Agent (CA) to provide personalized experiences. 
          Current systems limit the CA’s role as tutor, but the CA as a tutee can encourage active learning leading to improved engagement and learning. 
          We developed TaleMate to facilitate active learning by providing a tutee CA that allows learn through teaching and assists the caregivers to provide adequate scaffolding for the children. 
          TaleMate provides a learning objective to the parent, and the learning process is facilitated using the Learning by Teaching (LdL) method. 
          For the LdL, the CA acts as a struggling peer requiring help to comprehend the learning objective, and children teach the CA, forcing deeper analysis and construction of knowledge. 
          Meanwhile, peer CA provides guidelines for successful scaffolding to both children and caregivers through a question, with caregivers’ answers serving as scaffolds to aid the children. 
          The children’s engagement is measured by the skip rate of the teaching activity and the time spent on each LdL session. Next, learning progress is measured by the correctness of the children's answers during the LdL activity. 
        </Typography>

        <Typography variant="h5" color="text.secondary" gutterBottom sx={{ mt: 4 }}>
          TaleMate System
        </Typography>
        <Box sx={{ mt: 2, mb: 4, textAlign: 'center' }}>
          <img
            src="/public/TaleMateSample.png"
            alt="TaleMate System Image"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Box>

        <Button
          variant="contained"
          href="https://dl.acm.org/doi/10.1145/3586182.3616699"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ mt: 4 }}
        >
          View Prior Work
        </Button>
      </Container>
    </Box>
  );
};

export default TaleMate;
