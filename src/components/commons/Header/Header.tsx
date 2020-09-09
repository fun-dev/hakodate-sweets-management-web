import React, { useState } from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import { ListItemIcon, Menu, MenuItem } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {
  ChevronLeft,
  ChevronRight,
  Menu as MenuIcon,
  Cake,
  Shop,
  PinDrop,
  QuestionAnswer,
  AccountCircle,
  ExitToApp,
  Person,
} from '@material-ui/icons';
import Link from 'next/link';
import { useAuthContext } from '../Auth';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    contentContainer: {
      flexGrow: 1,
      padding: theme.spacing(3),
      height: '100vh',
    },
    content: {
      width: '100%',
      height: `calc(100vh - ${theme.spacing(3) * 2}px - 64px)`,
    },
    title: {
      flexGrow: 1,
    },
  })
);

type Props = {
  title: string;
};

export const AppDrawer: React.FC<Props> = ({ title, children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [accountMenuAnchorEl, setAccountMenuAnchorEl] = useState<HTMLElement | null>(null);
  const openAccountMenu = !!accountMenuAnchorEl;
  const { operator, logout } = useAuthContext();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleAccountMenuOpen = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAccountMenuAnchorEl(e.currentTarget);
  };

  const handleAccountMenuClose = () => {
    setAccountMenuAnchorEl(null);
  };

  const handleLogout = () => {
    setAccountMenuAnchorEl(null);
    logout();
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            {title}
          </Typography>
          <div>
            <IconButton
              aria-label="アカウント情報"
              aria-controls="menu-app-bar"
              aria-haspopup="true"
              onClick={handleAccountMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-app-bar"
              keepMounted
              disableAutoFocusItem
              anchorEl={accountMenuAnchorEl}
              getContentAnchorEl={null}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={openAccountMenu}
              onClose={handleAccountMenuClose}
            >
              {operator?.email && (
                <MenuItem button={false}>
                  <ListItemIcon>
                    <Person fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary={operator.email} />
                </MenuItem>
              )}
              {operator?.displayName && <MenuItem button={false}>{operator?.displayName}</MenuItem>}
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <ExitToApp fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="ログアウト" />
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link href="/">
            <ListItem button>
              <ListItemIcon>
                <Cake />
              </ListItemIcon>
              <ListItemText primary="商品" />
            </ListItem>
          </Link>
          <Link href="/shops">
            <ListItem button>
              <ListItemIcon>
                <Shop />
              </ListItemIcon>
              <ListItemText primary="店舗" />
            </ListItem>
          </Link>
          <Link href="/coupons">
            <ListItem button>
              <ListItemIcon>
                <PinDrop />
              </ListItemIcon>
              <ListItemText primary="クーポン" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <QuestionAnswer />
            </ListItemIcon>
            <ListItemText primary="本アプリについて" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.contentContainer}>
        <div className={classes.toolbar} />
        <div className={classes.content}>{children}</div>
      </main>
    </div>
  );
};
