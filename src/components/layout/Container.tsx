import { ReactNode } from 'react';
import { styled } from '@mui/system';
import { Container as MuiContainer, Box } from '@mui/material';
import { Navbar } from './Navbar';

interface Props {
  children: ReactNode;
}

const Content = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    paddingBlock: theme.spacing(2),
    paddingInline: theme.spacing(0),
  },
}));

const Paper = styled(Box)(({ theme }) => ({
  paddingInline: theme.spacing(2),
  paddingBlock: theme.spacing(3),
  color: theme.palette.text.primary,
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

export const Container: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <MuiContainer maxWidth='lg'>
        <Content>
          <Paper>{children}</Paper>
        </Content>
      </MuiContainer>
    </>
  );
};
