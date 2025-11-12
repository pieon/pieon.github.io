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
    profileImage: '/profile.jpg', // Change this to your image filename
  };

  const blogPosts = [
    {
      title: 'Exploring take-back recovery strategies in the Circular Economy',
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
      description: 'A conversational agent designed to enhance parent-child interactions during shared reading activities, with a focus on developing mathematical skills.',
      link: '/research/talemate',
      isInternal: true,
    },
    {
      title: 'The Love–Hate Spectrum of Technology Use in Minimalist Lifestyles',
      authors: '<b>Jaehoon Pyon</b>, Carlos Augusto Bautista Isaza, Yoon Jung Choi, Eunjeong Cheon, Sang Won Lee',
      description: 'This study explores the nuanced relationship between technology and minimalist lifestyles, examining both the benefits and challenges that technology presents',
      link: '/research/minimalism',
      isInternal: true,
    },
    {
      title: 'Exploring take-back recovery strategies in the Circular Economy',
      authors: 'Yoon Jung Choi, Jiayuan Dong, <b>Jaehoon Pyon</b>',
      description: 'This research investigates various take-back recovery strategies within the framework of the Circular Economy, aiming to enhance sustainability and resource efficiency.',
      link: '/research/takeback-recovery-strategies',
      isInternal: false,
    },
    {
      title: 'Toysphere',
      description: 'This project aims to address the environmental impact of discarded toys. With 80% of toys ending up in landfills despite their potential for reuse, the project seeks to reduce waste by encouraging children and parents to make more sustainable decisions regarding end-of-life (EoL) toys.',
      link: '/research/toysphere',
      isInternal: true,
    }
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
      link: 'https://hci.icat.vt.edu/workshops/chci-ninth-annual-workshop.html',
    },
  ];

  const teaching = {
    description: 'Graduate Teaching Assistant, Virginia Tech:',
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
