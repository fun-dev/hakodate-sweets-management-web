import React from 'react';
import styled from 'styled-components';
import {
  FormControl as MaterialFormControl,
  Select,
  OutlinedInput,
  Box,
  ListSubheader,
  MenuItem,
  ListItemText,
  Typography,
  InputLabel,
} from '@material-ui/core';
import { Shop } from 'src/lib/api/models/Shop';
import { useShops } from 'src/lib/api/requests/useShops';

const FormControl = styled(MaterialFormControl)`
  min-width: 200px;
  width: 100%;
  display: inline-flex;
`;

type Props = {
  initialValue?: Shop;
  handleMenuClose: (selectedShop: Shop) => void;
};

let id = 1;
export const ShopSelect: React.FC<Props> = ({ initialValue, handleMenuClose }) => {
  const { data } = useShops();

  const handleMenuItemClick = (selectedShop: Shop) => (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    handleMenuClose(selectedShop);
  };

  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor={`shop-input-${id}`}>店舗</InputLabel>
      <Select
        value={initialValue}
        input={<OutlinedInput id={`shop-input-${id++}`} labelWidth={44} />}
        renderValue={(selected: Shop | null) => (
          <Box display="flex" flexWrap="wrap" height="100%">
            <Box key={`editable-shop-selected-item-${selected?.id ?? 'none'}`} margin={0.5} clone>
              <Typography>{selected?.name ?? ''}</Typography>
            </Box>
          </Box>
        )}
        MenuProps={{
          PaperProps: {
            style: {
              width: 'max-content',
              maxHeight: '80vh',
            },
          },
        }}
      >
        <ListSubheader disableSticky>店舗</ListSubheader>
        {data?.shops.map((shop) => (
          <MenuItem key={`shop-menu-item-${shop.id}`} onClick={handleMenuItemClick(shop)}>
            <ListItemText primary={shop.name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
