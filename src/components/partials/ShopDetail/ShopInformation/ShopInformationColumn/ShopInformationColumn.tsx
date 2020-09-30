import {
  Paper,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useShop } from 'src/lib/api/requests/useShop';
import { Shop } from 'src/lib/api/models/Shop';

type Props = {
  label: string;
  data: string;
};

type keys = keyof Shop;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      //width: '100%',
      //maxWidth: 800,
    },
    listItem: {
      padding: theme.spacing(3),
    },
    listItemLabel: {
      maxWidth: 200,
    },
    listItemData: {
      maxWidth: '80ch',
    },
  })
);

export const ShopInformationColumn: React.FC<Props> = ({ label, data }) => {
  const classes = useStyles();
  //const { data } = useShop({ id: shopId });

  return (
    <Box>
      <ListItem>
        <ListItemText className={classes.listItemLabel} primaryTypographyProps={{ variant: 'caption' }}>
          {label}
        </ListItemText>
        <ListItemText className={classes.listItemData}>{data}</ListItemText>
      </ListItem>
      <Divider variant="middle" />
    </Box>
  );
};
