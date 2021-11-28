import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';
import Link from 'next/link';
import { useShops } from 'src/lib/api/requests/useShops';
import { pathResolver } from 'src/lib/image/pathResolver';

export const ShopList: React.FC = () => {
  const { data } = useShops();

  return (
    <List>
      {data?.shops.map((shop) => (
        <Link href="/shops/[id]" as={`/shops/${shop.id}`}>
          <ListItem button alignItems="center">
            <ListItemAvatar>
              <Avatar src={pathResolver(shop.imagePath)} />
            </ListItemAvatar>
            <ListItemText primary={shop.name} secondary="商品数：1" />
          </ListItem>
        </Link>
      ))}
    </List>
  );
};
