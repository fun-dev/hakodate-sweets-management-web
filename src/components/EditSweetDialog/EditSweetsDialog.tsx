import React, { useState } from 'react';
import {
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  Slide,
  makeStyles,
  Theme,
  createStyles,
  InputLabel,
  Input,
  FormControl,
  Container,
  InputAdornment,
  Select,
  MenuItem,
} from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions/transition';
import { Close } from '@material-ui/icons';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  })
);

type Props = {
  open: boolean;
  handleClose: () => void;
};

type State = {
  name: string;
  description: string;
  price: number;
  large_category_id: number;
};

export const EditSweetDialog: React.FC<Props> = ({ open, handleClose }) => {
  const classes = useStyles();
  const [state, setState] = useState<State>({
    name: '',
    description: '',
    price: 0,
    large_category_id: 0,
  });

  const handleChange = (key: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [key]: event.target.value });
  };

  return (
    <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <Close />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            いちごのショートケーキ
          </Typography>
          <Button autoFocus color="inherit" onClick={handleClose}>
            保存
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <FormControl fullWidth>
          <InputLabel>商品名</InputLabel>
          <Input value={state.name} onChange={handleChange('name')} />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>説明</InputLabel>
          <Input value={state.description} onChange={handleChange('description')} multiline />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>税込価格</InputLabel>
          <Input
            value={state.price}
            onChange={handleChange('price')}
            endAdornment={<InputAdornment position="end">円</InputAdornment>}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>大カテゴリ</InputLabel>
          <Select value={state.large_category_id} onChange={handleChange('large_category_id')}>
            <MenuItem value={0}>和菓子</MenuItem>
            <MenuItem value={1}>洋菓子</MenuItem>
            <MenuItem value={2}>その他</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>小カテゴリ</InputLabel>
          <Select>
            <MenuItem>和菓子</MenuItem>
            <MenuItem>洋菓子</MenuItem>
            <MenuItem>その他</MenuItem>
          </Select>
        </FormControl>
      </Container>
    </Dialog>
  );
};
