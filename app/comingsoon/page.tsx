'use client';

import { Box, Typography, Button } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

export default function ComingSoonPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#ffffff',
        color: '#6c6c6c',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 4,
        textAlign: 'center',
        flexDirection: 'column',
        gap: 3,
      }}
    >
      <AccessTimeIcon sx={{ fontSize: 80, color: '#dcbc23' }} />
      <Typography
        variant="h3"
        sx={{
          color: '#bb8732',
          fontWeight: 'bold',
          mb: 2,
        }}
      >
        Coming Soon
      </Typography>
      <Typography variant="body1" sx={{ color: '#6a6a6a', maxWidth: 500 }}>
        The content you’re trying to access is currently under preparation. Please check back soon, In shaa Allah.
      </Typography>
      <Link href="/duroos" passHref>
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          sx={{
            mt: 3,
            bgcolor: '#bb8732',
            color: '#ffffff',
            '&:hover': {
              bgcolor: '#a7772d',
            },
          }}
        >
          Go to Duroos
        </Button>
      </Link>
    </Box>
  );
}
