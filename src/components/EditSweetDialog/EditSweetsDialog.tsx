import React from 'react';
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
export const EditSweetDialog: React.FC<Props> = ({ open, handleClose }) => {
  const classes = useStyles();

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
    </Dialog>
  );
};
