import React from 'react';
import { Container } from '../layout/Container';
import { styled } from '@mui/system';
import { Box, Typography, Link, Divider as MuiDivider } from '@mui/material';
import { PROJECTS, WEBSITES } from '../../const';

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
        {WEBSITES.map((website) => (
          <Item key={website.url}>
            <Typography variant='h6'>{website.title}</Typography>
            <Typography variant='subtitle1'>{website.summary}</Typography>
            <Box>
              <Label variant='body1'>Link:</Label>
              <Link
                href={website.url}
                target='_blank'
                rel='noopener noreferrer'
                color='text.secondary'
              >
                {website.url}
              </Link>
            </Box>
            {website.github && (
              <Box>
                <Label variant='body1'>Project:</Label>
                <Link
                  href={website.github}
                  rel='noopener noreferrer'
                  color='text.secondary'
                >
                  {website.github}
                </Link>
              </Box>
            )}
            <Divider light />
          </Item>
        ))}
      </List>
      <List>
        {PROJECTS.map((project, i) => (
          <Item key={project.url}>
            <Typography variant='h6'>{project.title}</Typography>
            <Typography variant='subtitle1'>{project.summary}</Typography>
            <Box>
              <Label variant='body1'>Demo:</Label>
              <Link
                href={project.url}
                rel='noopener noreferrer'
                color='text.secondary'
              >
                {project.url}
              </Link>
            </Box>
            <Box>
              <Label variant='body1'>Source code:</Label>
              <Link
                href={project.github}
                rel='noopener noreferrer'
                color='text.secondary'
              >
                {project.github}
              </Link>
            </Box>
            {i + 1 < PROJECTS.length && <Divider light />}
          </Item>
        ))}
      </List>
    </Container>
  );
};
