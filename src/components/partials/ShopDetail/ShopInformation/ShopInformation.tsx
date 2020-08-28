import { Paper, Box, List, ListItem, ListItemText } from '@material-ui/core';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import { ShopInformationColumn } from '../ShopInformationColumn';
import { useShop } from 'src/lib/api/requests/useShop';

type Props = {
  shopId: number;
};

export const ShopInformation: React.FC<Props> = ({ shopId }) => {
  return (
    <Box height="100%" clone>
      <Paper>
        <ShopInformationColumn shopId={shopId} />
      </Paper>
    </Box>
  );
};
