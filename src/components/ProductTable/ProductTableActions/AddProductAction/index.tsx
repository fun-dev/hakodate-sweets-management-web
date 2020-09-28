import {
  AppBar,
  Dialog,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  Input,
  Box,
  Container,
  FormControl as MaterialFormControl,
  InputLabel,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { TransitionProps } from '@material-ui/core/transitions/transition';
import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';

type Props = {
  open: boolean;
  handleClose: () => void;
};

type State = {
  name: string;
  description: string;
  price: string;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FormControl = styled(MaterialFormControl)`
  margin: ${({ theme }) => theme.spacing(1)}px;
`;

export const AddProductDialog: React.FC<Props> = ({ open, handleClose }) => {
  const [state, setState] = useState<State>({ name: '', description: '', price: '' });

  const handleInputChange = (key: keyof State) => (e: ChangeEvent<HTMLInputElement>) => {
    setState((state) => ({ ...state, [key]: e.currentTarget.value }));
  };

  return (
    <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
      <Box position="relative" clone>
        <AppBar>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <Close />
            </IconButton>
            <Typography variant="h6">商品追加</Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="sm">
        <Box display="flex" flexDirection="column" paddingTop={3} clone>
          <form>
            <FormControl>
              <InputLabel htmlFor="name">商品名</InputLabel>
              <Input id="name" value={state.name} onChange={handleInputChange('name')} />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="price">価格</InputLabel>
              <Input id="price" value={state.price} onChange={handleInputChange('price')} />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="description">説明</InputLabel>
              <Input id="description" value={state.description} onChange={handleInputChange('description')} />
            </FormControl>
          </form>
        </Box>
      </Container>
    </Dialog>
  );
};
