import React, { useState } from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import { ListItemIcon, Menu, MenuItem, Box } from '@material-ui/core';
import { Modal } from './Overrides';
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
  AccountCircle,
  ExitToApp,
  Person,
} from '@material-ui/icons';
import Link from 'next/link';
import StoreIcon from '@material-ui/icons/Store';
import NoteIcon from '@material-ui/icons/Note';
import InfoIcon from '@material-ui/icons/Info';
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
    paper: {
      position: 'absolute',
      width: 600,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(3),
    },
  })
);

type Props = {
  title: string;
};

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 43 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export const AppDrawer: React.FC<Props> = ({ title, children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [accountMenuAnchorEl, setAccountMenuAnchorEl] = useState<HTMLElement | null>(null);
  const openAccountMenu = !!accountMenuAnchorEl;
  const { operator, logout } = useAuthContext();
  const [modalStyle] = React.useState(getModalStyle); //後で書き換える

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleInfoOpen = () => {
    setInfoOpen(true);
  };

  const handleInfoClose = () => {
    setInfoOpen(false);
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
            <IconButton onClick={handleInfoOpen} color="inherit">
              <InfoIcon />
            </IconButton>
            <Modal open={infoOpen} onClose={handleInfoClose}>
              <div className={classes.paper}>
                <Typography variant="h4" component="h2">
                  あまはこ商品情報管理アプリ
                </Typography>
                <Box mt={2}>
                  <Typography variant="body1" component="p">
                    本アプリは，モバイルアプリ「あまはこ」に掲載する商品や店舗の情報を追加・編集することを目的としています．本アプリで追加・編集した情報は，モバイルアプリ「あまはこ」に反映されますので，追加・編集の際は，情報に不備がないようご注意いただきますようお願い申し上げます．
                    また，本アプリは，「函館スイーツ推進協議会」並びに「函館市」と共同で作成しております．アプリについてのお問い合わせは，下記Facebookページよりお願い致します．
                  </Typography>
                </Box>
                <Box mt={2}>
                  <Typography variant="body1" component="p">
                    「公立はこだて未来大学 高度ICT演習 観光系プロジェクト
                    Facebookページ」：https://www.facebook.com/FUNTourismProject/
                  </Typography>
                </Box>
              </div>
            </Modal>
          </div>
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
                <StoreIcon />
              </ListItemIcon>
              <ListItemText primary="店舗" />
            </ListItem>
          </Link>
          <Link href="/coupons">
            <ListItem button>
              <ListItemIcon>
                <NoteIcon />
              </ListItemIcon>
              <ListItemText primary="クーポン" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <main className={classes.contentContainer}>
        <div className={classes.toolbar} />
        <div className={classes.content}>{children}</div>
      </main>
    </div>
  );
};
