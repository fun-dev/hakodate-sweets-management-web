import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';
import { Shop } from 'src/lib/api/models/Shop';
import Link from 'next/link';
import styled from 'styled-components';
// new change2
type Props = {
  shops: Shop[];
};

export const ShopList: React.FC<Props> = ({ shops }) => {
  return (
    <StyledList>
      {shops.map((shop) => (
        <Link href={`shops/${shop.id}`}>
          <ListItem button alignItems="center">
            <ListItemAvatar>
              <Avatar src={shop.imagePath}></Avatar>
            </ListItemAvatar>
            <ListItemText primary={shop.name} secondary="商品数：1" />
          </ListItem>
        </Link>
      ))}
    </StyledList>
  );
};

const StyledList = styled(List)`
  max-width: 600px;
  margin: 0 auto;
`;
