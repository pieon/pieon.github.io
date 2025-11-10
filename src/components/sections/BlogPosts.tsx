import { Box, Container, Typography, Card, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';

interface BlogPost {
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  link: string;
}

interface BlogPostsProps {
  posts: BlogPost[];
}

const BlogPosts = ({ posts }: BlogPostsProps) => {
  return (
    <Box
      id="posts"
      sx={{
        py: 8,
        backgroundColor: '#f7f7f7',
        minHeight: '100vh',
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2.75 }}>
          <Box sx={{ flex: { xs: '1', md: '0 0 33%' } }}>
            <Typography variant="h3" gutterBottom>
              Blog Posts
            </Typography>
          </Box>

          <Box sx={{ flex: 1 }}>
            {posts.map((post, index) => (
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
                    <Box sx={{ mb: 2 }}>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ mr: 2 }}
                      >
                        {post.date}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {post.readTime}
                      </Typography>
                    </Box>

                    <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
                      <a
                        href={post.link}
                        style={{
                          color: '#151515',
                          textDecoration: 'none',
                        }}
                      >
                        {post.title}
                      </a>
                    </Typography>

                    <Typography variant="body1" sx={{ mb: 2 }} color="text.secondary">
                      {post.excerpt}
                    </Typography>

                    <Button
                      variant="outlined"
                      color="primary"
                      href={post.link}
                      sx={{ mt: 1 }}
                    >
                      Continue Reading
                    </Button>
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

export default BlogPosts;
