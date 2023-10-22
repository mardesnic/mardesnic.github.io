import React from 'react';
import { Container } from '../layout/Container';
import { Stack, styled } from '@mui/system';
import {
  Box,
  Typography,
  Grid,
  Paper,
  IconButton,
  Link,
  Chip,
} from '@mui/material';
import { PROJECTS } from '../../const';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const Item = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: theme.spacing(1),
  padding: theme.spacing(2),
  minHeight: 215,
}));

export const Portfolio: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        {PROJECTS.map((project) => (
          <Grid item key={project.url} sm={12} md={6} lg={4}>
            <Item>
              <div>
                <Stack
                  direction='row'
                  gap={1}
                  justifyContent='space-between'
                  alignItems='center'
                  sx={{ width: '100%' }}
                >
                  <Typography variant='h6'>
                    <Link
                      href={project.url}
                      color={'secondary'}
                      sx={{ textDecoration: 'none' }}
                    >
                      {project.title}
                    </Link>
                  </Typography>
                  <Stack direction='row' gap={1}>
                    {project.github && (
                      <Box>
                        <IconButton
                          href={project.github}
                          target='_blank'
                          rel='noopener noreferrer'
                          size='small'
                        >
                          <GitHubIcon />
                        </IconButton>
                      </Box>
                    )}
                    {project.url && (
                      <Box>
                        <IconButton
                          href={project.url}
                          target='_blank'
                          rel='noopener noreferrer'
                          size='small'
                        >
                          <LaunchIcon />
                        </IconButton>
                      </Box>
                    )}
                  </Stack>
                </Stack>
                <Typography sx={{ mt: 2 }} variant='subtitle1'>
                  {project.summary}
                </Typography>
              </div>
              <Stack direction='row' gap={1} flexWrap='wrap'>
                {project.technologies.map((item) => (
                  <Chip label={item} variant='outlined' size='small' />
                ))}
              </Stack>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
