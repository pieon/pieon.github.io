import { Box } from '@mui/material';
import About from '../components/sections/About';
import BlogPosts from '../components/sections/BlogPosts';
import Research from '../components/sections/Projects';
import Talks from '../components/sections/Talks';
import Teaching from '../components/sections/Teaching';
import Footer from '../components/Footer';

const Home = () => {
  // Sample data - replace with your actual data
  const aboutData = {
    name: 'Jaehoon Pyon',
    title: 'Ph.D. Student',
    affiliation: 'Virginia Tech',
    bio: `I am a 2nd year Ph.D. student in Computer Science at Virginia Tech. I am a member of the Echo Lab, advised by Prof. Sang Won Lee. My research interests lie in human-computer interaction (HCI), with a focus on behavior change and Human-AI Interaction (HAX).

My current research explores how Conversational Agents (CAs) can be integrated into group reading activities to enhance parent-child interactions and support the development of mathematical skills.`,
    interests: [
      'Human-Computer Interaction',
      'Behavior Change',
      'Human-AI Interaction',
    ],
    education: [
      {
        degree: 'Ph.D. in Computer Science',
        institution: 'Virginia Tech University',
        period: '2024--Present',
      },
      {
        degree: 'B.A. in Computer Science',
        institution: 'Bucknell University',
        period: '2018--2024',
      },
    ],
    social: {
      email: 'pjaehoon@vt.edu',
      github: 'https://github.com/pieon',
      linkedin: 'https://www.linkedin.com/in/jaehoon-pyon-786b33254/',
      scholar: 'https://scholar.google.com/citations?user=KcH5mFgAAAAJ&hl=en',
    },
  };

  const blogPosts = [
    {
      title: 'Welcome to My Blog',
      date: 'Jan 1, 2024',
      readTime: '5 min read',
      excerpt: 'This is a sample blog post excerpt. Replace this with your actual blog post content.',
      link: '#',
    },
    {
      title: 'Another Interesting Topic',
      date: 'Dec 15, 2023',
      readTime: '8 min read',
      excerpt: 'Another sample blog post that demonstrates the blog section. Add your own posts here.',
      link: '#',
    },
  ];

  const research = [
    {
      title: 'TaleMate',
      description: 'A description of your first project. Explain what you built and what technologies you used.',
      link: 'https://github.com/pieon/CA_realtime',
    },
    {
      title: 'The Love–Hate Spectrum of Technology Use in Minimalist Lifestyles',
      description: 'Minimalism as a lifestyle focuses on what is important while removing clutter; practitioners actively reduce excess possessions and engage in mindful consumption to promote sustainability and well-being. This study explores how minimalists extend or fail to extend their lifestyle to technology use and digital spaces, an underexplored relationship. We conducted interviews with 22 self-identified minimalists to understand how they select and utilize technology to sustain their lifestyle.',
      link: 'https://github.com/yourusername/project2',
    },
    {
      title: 'Toysphere',
      description: 'This project aims to address the environmental impact of discarded toys. With 80% of toys ending up in landfills despite their potential for reuse, the project seeks to reduce waste by encouraging children and parents to make more sustainable decisions regarding end-of-life (EoL) toys.',
      link: 'https://icat.vt.edu/projects/supported-research/sead-grants/2024-2025/major/toysphere.html',
    },
    {
      title: '',
      description: 'Another project showcasing your work. Include relevant details and outcomes.',
      link: 'https://github.com/yourusername/project2',
    },
  ];

  const talks = [
    {
      title: 'ICAT Playdate - ToySphere',
      venue: 'Virginia Tech University',
      year: '2025',
      link: 'https://icat.vt.edu/events/2025/10/icat-playdate---toysphere.html',
    },
    {
      title: 'The 2025 CHCI Big Ideas Workshop',
      venue: 'Virginia Tech University',
      year: '2025',
      link: 'https://chci.vt.edu/big-ideas-workshop-2025.html',
    },
  ];

  const teaching = {
    description: 'Teaching Assistant, Virginia Tech:',
    courses: [
      {
        code: 'CS 3724',
        name: 'Introduction to Human-Computer Interaction',
        semester: 'Fall 2025',
      },
      {
        code: 'CS 5244',
        name: 'Web Application Development',
        semester: 'Spring 2025',
      },
    ],
  };

  return (
    <Box>
      <About {...aboutData} />
      <BlogPosts posts={blogPosts} />
      <Research Researches={research} />
      <Talks talks={talks} />
      <Teaching {...teaching} />
      <Footer />
    </Box>
  );
};

export default Home;
