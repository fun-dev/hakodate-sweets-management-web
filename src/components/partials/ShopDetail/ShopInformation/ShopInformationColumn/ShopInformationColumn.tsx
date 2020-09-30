import { Box, ListItem, ListItemText, Divider } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Shop } from 'src/lib/api/models/Shop';

type Props = {
  label: string;
  data: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
