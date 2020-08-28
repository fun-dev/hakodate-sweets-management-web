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
  shopId: number;
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
    large: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
  })
);

export const ShopInformationColumn: React.FC<Props> = ({ shopId }) => {
  const classes = useStyles();
  const { data } = useShop({ id: shopId });

  return (
    <Box height="100%">
      <Paper className={classes.root}>
        <List>
          <Box fontWeight="fontWeightMedium" fontSize="h5.fontSize" margin={2}>
            店舗詳細
          </Box>
          <ListItem>
            <ListItemText className={classes.listItemLabel} primaryTypographyProps={{ variant: 'caption' }}>
              画像
            </ListItemText>
            <ListItemSecondaryAction>
              <ListItemAvatar className={classes.large}>
                <Avatar src={data?.shop.imagePath} />
              </ListItemAvatar>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider variant="middle" />
          <ListItem>
            <ListItemText className={classes.listItemLabel} primaryTypographyProps={{ variant: 'caption' }}>
              店舗紹介
            </ListItemText>
            <ListItemText className={classes.listItemData}>{data?.shop.description}</ListItemText>
          </ListItem>
          <Divider variant="middle" />
          <ListItem>
            <ListItemText className={classes.listItemLabel} primaryTypographyProps={{ variant: 'caption' }}>
              URL
            </ListItemText>
            <ListItemText className={classes.listItemData}>{data?.shop.url}</ListItemText>
          </ListItem>
          <Divider variant="middle" />

          <ListItem>
            <ListItemText className={classes.listItemLabel} primaryTypographyProps={{ variant: 'caption' }}>
              電話番号
            </ListItemText>
            <ListItemText className={classes.listItemData}>{data?.shop.telephone}</ListItemText>
          </ListItem>
          <Divider variant="middle" />

          <ListItem>
            <ListItemText className={classes.listItemLabel} primaryTypographyProps={{ variant: 'caption' }}>
              eメール
            </ListItemText>
            <ListItemText>{data?.shop.email}</ListItemText>
          </ListItem>
          <Divider variant="middle" />
          <ListItem>
            <ListItemText className={classes.listItemLabel} primaryTypographyProps={{ variant: 'caption' }}>
              エリア
            </ListItemText>
            <ListItemText>{data?.shop.area}</ListItemText>
          </ListItem>
          <Divider variant="middle" />
          <ListItem>
            <ListItemText className={classes.listItemLabel} primaryTypographyProps={{ variant: 'caption' }}>
              郵便番号
            </ListItemText>
            <ListItemText>{data?.shop.postcode}</ListItemText>
          </ListItem>
          <Divider variant="middle" />
          <ListItem>
            <ListItemText className={classes.listItemLabel} primaryTypographyProps={{ variant: 'caption' }}>
              住所
            </ListItemText>
            <ListItemText>{data?.shop.address}</ListItemText>
          </ListItem>
          <Divider variant="middle" />

          <ListItem>
            <ListItemText className={classes.listItemLabel} primaryTypographyProps={{ variant: 'caption' }}>
              緯度
            </ListItemText>
            <ListItemText>{data?.shop.latitude}</ListItemText>
          </ListItem>
          <Divider variant="middle" />

          <ListItem>
            <ListItemText className={classes.listItemLabel} primaryTypographyProps={{ variant: 'caption' }}>
              経度
            </ListItemText>
            <ListItemText>{data?.shop.longitude}</ListItemText>
          </ListItem>
          <Divider variant="middle" />
          <ListItem>
            <ListItemText className={classes.listItemLabel} primaryTypographyProps={{ variant: 'caption' }}>
              営業日
            </ListItemText>
            <ListItemText>{data?.shop.openingHoursSpecification}</ListItemText>
          </ListItem>
          <Divider variant="middle" />

          <ListItem>
            <ListItemText className={classes.listItemLabel} primaryTypographyProps={{ variant: 'caption' }}>
              定休日
            </ListItemText>
            <ListItemText>{data?.shop.closed}</ListItemText>
          </ListItem>
          <Divider variant="middle" />

          <ListItem>
            <ListItemText className={classes.listItemLabel} primaryTypographyProps={{ variant: 'caption' }}>
              駐車場
            </ListItemText>
            <ListItemText>{data?.shop.parking}</ListItemText>
          </ListItem>
          <Divider variant="middle" />

          <ListItem>
            <ListItemText className={classes.listItemLabel} primaryTypographyProps={{ variant: 'caption' }}>
              イートイン
            </ListItemText>
            <ListItemText>{data?.shop.eatin}</ListItemText>
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
};
