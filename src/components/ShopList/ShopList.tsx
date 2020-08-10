import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Box } from '@material-ui/core';
import Link from 'next/link';
import { useShops } from 'src/lib/api/requests/useShops';

export const ShopList: React.FC = () => {
  const { data } = useShops();

  return (
    <List>
      {data?.shops.map((shop) => (
        <Link href="/shops/[id]" as={`/shops/${shop.id}`}>
          <ListItem button alignItems="center">
            <ListItemAvatar>
              <Avatar src={shop.imagePath} />
            </ListItemAvatar>
            <ListItemText primary={shop.name} secondary="商品数：1" />
          </ListItem>
        </Link>
      ))}
    </List>
  );
};
