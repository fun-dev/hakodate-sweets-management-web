import { Paper, Box, List, ListItem, ListItemText, ListItemSecondaryAction, Divider, Avatar } from '@material-ui/core';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import { ShopInformationColumn } from './ShopInformationColumn';
import { useShop } from 'src/lib/api/requests/useShop';
import { ListItemAvatar as MaterialListItemAvatar } from '@material-ui/core';
import styled from 'styled-components';

type Props = {
  shopId: number;
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
    large: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
  })
);

const ListItemAvatar = styled(MaterialListItemAvatar)``;

export const ShopInformation: React.FC<Props> = ({ shopId }) => {
  const classes = useStyles();
  const { data } = useShop({ id: shopId });

  return (
    <Box height="100%" clone>
      <Paper>
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
          <ShopInformationColumn label="店舗紹介" data={data?.shop.description} />
          <ShopInformationColumn label="URL" data={data?.shop.url} />
          <ShopInformationColumn label="電話番号" data={data?.shop.telephone} />
          <ShopInformationColumn label="eメール" data={data?.shop.email} />
          <ShopInformationColumn label="エリア" data={data?.shop.area} />
          <ShopInformationColumn label="郵便番号" data={data?.shop.postcode} />
          <ShopInformationColumn label="住所" data={data?.shop.address} />
          <ShopInformationColumn label="緯度" data={data?.shop.latitude} />
          <ShopInformationColumn label="軽度" data={data?.shop.longitude} />
          <ShopInformationColumn label="営業日" data={data?.shop.openingHoursSpecification} />
          <ShopInformationColumn label="定休日" data={data?.shop.closed} />
          <ShopInformationColumn label="駐車場" data={data?.shop.parking} />
          <ShopInformationColumn label="イートイン" data={data?.shop.eatin} />
        </List>
      </Paper>
    </Box>
  );
};
