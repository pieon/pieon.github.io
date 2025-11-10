import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Academic from './pages/Academic';
import Contact from './pages/Contact';
import TaleMate from './pages/research/TaleMate';
import Minimalism from './pages/research/Minimalism';
import Toysphere from './pages/research/Toysphere';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/research/talemate" element={<TaleMate />} />
          <Route path="/research/minimalism" element={<Minimalism />} />
          <Route path="/research/toysphere" element={<Toysphere />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
