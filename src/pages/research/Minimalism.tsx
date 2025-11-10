import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Minimalism = () => {
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
          The Love–Hate Spectrum of Technology Use in Minimalist Lifestyles
        </Typography>

        <Typography variant="h5" color="text.secondary" gutterBottom sx={{ mt: 2 }}>
          Abstract
        </Typography>
        <Typography variant="body1" >
          Minimalism as a lifestyle focuses on what is important while removing clutter; practitioners actively reduce excess possessions and engage in mindful consumption to promote sustainability and well-being.
          This study explores how minimalists extend or fail to extend their lifestyle to technology use and digital spaces, an underexplored relationship.
          We conducted interviews with 22 self-identified minimalists to understand how they select and utilize technology to sustain their lifestyle.
          Findings show that minimalists carefully select technologies aligned with their motivations, adopting them creatively to reduce consumption, organize possessions, and simplify life. 
          Meanwhile, participants saw technology as either a distraction conflicting with Minimalism or a tool for streamlining life.
          While minimalists managed digital data and consumption intentionally, they placed less emphasis on their digital space than on their physical one.
          These findings can inform interaction design that promotes intentional consumption, digital well-being, mindful design, and sustainability.
        </Typography>

        <Typography variant="h5" color="text.secondary" gutterBottom sx={{ mt: 4 }}>
          Research Methodology
        </Typography>
        <Typography variant="body1" >
          We conducted 22 semi-structured interviews with self-identified minimalists, recruited through online minimalist communities and university newsletters. 
          The participants are asked to complete Minimalism Consumer Scale (MCS) by Wilson et al. and the Voluntary Simplicity Engagement Scale (VSES) by Rich et al.
          The MCS provides a focused measure of a consumer value, while the VSES offers a broader assessment of a low-consumption lifestyle, encompassing resource management, 
          ethical procurement, self-sufficiency, community engagement, and a distinctive work-life philosophy, rooted in the actual practices of contemporary voluntary simplifiers.
          The interview questions are divided into two sections. First, exploring how participants use technologies to sustain their lifestyle, focusing on the physical space. 
          The second section explores how a lifestyle Minimalism influences or connects with their behavior in the digital space. We then analyzed the collected data using inductive thematic analysis.
        </Typography>

        <Typography variant="h5" color="text.secondary" gutterBottom sx={{ mt: 4 }}>
          Key Findings
        </Typography>
        <Typography variant="body1" component="div">
          <ul>
            <li>
              Minimalists exhibit a complex relationship with technology, ranging from
              enthusiastic adoption to deliberate rejection
            </li>
            <li>
              Many participants struggle to apply minimalist principles consistently across
              physical and digital spaces
            </li>
            <li>
              Technology serves both as an enabler and a potential obstacle to minimalist
              living
            </li>
            <li>
              Digital clutter is recognized as a significant concern, though less tangible
              than physical clutter
            </li>
          </ul>
        </Typography>

        <Typography variant="h5" color="text.secondary" gutterBottom sx={{ mt: 4 }}>
          Discussion
        </Typography>
        <Typography variant="body1" >
          This research contributes to understanding how sustainable lifestyle choices
          intersect with technology use. The findings have implications for designing
          technologies that support mindful consumption and sustainable living practices,
          as well as for understanding user needs in the growing digital minimalism movement.
        </Typography>

        <Typography variant="h5" color="text.secondary" gutterBottom sx={{ mt: 4 }}>
          Publication Status
        </Typography>
        <Typography variant="body1" >
          Under Revision
        </Typography>
      </Container>
    </Box>
  );
};

export default Minimalism;
