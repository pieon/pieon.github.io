import { Box } from '@mui/material';
import About from '../components/sections/About';
import BlogPosts from '../components/sections/BlogPosts';
import Projects from '../components/sections/Projects';
import Talks from '../components/sections/Talks';
import Teaching from '../components/sections/Teaching';
import Footer from '../components/Footer';

const Home = () => {
  // Sample data - replace with your actual data
  const aboutData = {
    name: 'Jaehoon Pyon',
    title: 'Ph.D. Student',
    affiliation: 'Virginia Tech',
    bio: `I am a 1st year Ph.D. student in Computer Science at Virginia Tech. I am a member of the Echo Lab, advised by Prof. Sang Won Lee. My research interests lie in human-computer interaction (HCI), with a focus on sustainable HCI (SHCI) and behavior change.

My current research focuses on studying the nuanced relationship between minimalism and technology by interviewing minimalists.`,
    interests: [
      'Human-Computer Interaction',
      'Sustainable HCI',
      'Behavior Change',
    ],
    education: [
      {
        degree: 'Ph.D. in Computer Science',
        institution: 'Virginia Tech',
        period: '2024--Present',
      },
      {
        degree: 'B.S. in Computer Science',
        institution: 'Your University',
        period: '2020--2024',
      },
    ],
    social: {
      email: 'your.email@example.com',
      github: 'https://github.com/yourusername',
      linkedin: 'https://linkedin.com/in/yourusername',
      scholar: 'https://scholar.google.com/citations?user=YOUR_ID',
    },
  };

  const blogPosts = [
    {
      title: 'Your First Blog Post',
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

  const projects = [
    {
      title: 'Project One',
      description: 'A description of your first project. Explain what you built and what technologies you used.',
      link: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Project Two',
      description: 'Another project showcasing your work. Include relevant details and outcomes.',
      link: 'https://github.com/yourusername/project2',
    },
  ];

  const talks = [
    {
      title: 'Talk Title Here',
      venue: 'Conference or University Name',
      year: '2024',
      link: 'https://example.com/talk',
    },
    {
      title: 'Another Talk',
      venue: 'Another Venue',
      year: '2023',
    },
  ];

  const teaching = {
    description: 'Teaching Assistant, Virginia Tech:',
    courses: [
      {
        code: 'CS 1234',
        name: 'Course Name',
        semester: 'Spring 2024',
      },
      {
        code: 'CS 5678',
        name: 'Another Course',
        semester: 'Fall 2023',
      },
    ],
  };

  return (
    <Box>
      <About {...aboutData} />
      <BlogPosts posts={blogPosts} />
      <Projects projects={projects} />
      <Talks talks={talks} />
      <Teaching {...teaching} />
      <Footer />
    </Box>
  );
};

export default Home;
