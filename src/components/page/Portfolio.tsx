import React from 'react';
import { Container } from '../layout/Container';
import { styled } from '@mui/system';
import { Box, Typography, Link, Divider as MuiDivider } from '@mui/material';
import { PROJECTS } from '../../const';

const List = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  marginTop: theme.spacing(3),
}));

const Item = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));

const Label = styled(Typography)(({ theme }) => ({
  display: 'inline',
  marginRight: theme.spacing(1),
}));

const Divider = styled(MuiDivider)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

export const Portfolio: React.FC = () => {
  return (
    <Container>
      <Typography variant='h5'>Welcome to My Coding Playground!</Typography>
      <List>
        {PROJECTS.map((project) => (
          <Item key={project.githubLink}>
            <Typography variant='h6'>{project.title}</Typography>
            <Typography variant='subtitle1'>{project.summary}</Typography>
            <Box>
              <Label variant='body1'>Demo:</Label>
              <Link
                href={project.demoLink}
                target='_blank'
                rel='noopener noreferrer'
                color='text.secondary'
              >
                {project.demoLink}
              </Link>
            </Box>
            <Box>
              <Label variant='body1'>Project:</Label>
              <Link
                href={project.githubLink}
                target='_blank'
                rel='noopener noreferrer'
                color='text.secondary'
              >
                {project.githubLink}
              </Link>
            </Box>
            <Divider light />
          </Item>
        ))}
      </List>
    </Container>
  );
};
