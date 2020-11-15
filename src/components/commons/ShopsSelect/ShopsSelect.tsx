import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  FormControl as MaterialFormControl,
  Select,
  Input,
  Box,
  Chip,
  ListSubheader,
  MenuItem,
  Checkbox,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import { FilterList, ClearAll } from '@material-ui/icons';
import { Shop } from 'src/lib/api/models/Shop';
import { useShops } from 'src/lib/api/requests/useShops';

const FormControl = styled(MaterialFormControl)`
  min-width: 200px;
  width: 100%;
  display: inline-flex;
`;

const StickyMenuItem = styled(MenuItem)`
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: rgba(255, 255, 255, 1);
  &.Mui-disabled {
    color: ${({ theme }) => theme.palette.grey[500]};
    opacity: 1;
  }
`;

type Props = {
  initialValue?: Shop[];
  handleMenuClose: (selectedShops: Shop[]) => void;
  filterAdornment?: boolean;
};

export const ShopsSelect: React.FC<Props> = ({ initialValue, handleMenuClose, filterAdornment }) => {
  const { data } = useShops();
  const [selectedShops, setSelectedShops] = useState<Shop[]>(initialValue ?? []);

  useEffect(() => {
    setSelectedShops(initialValue ?? []);
  }, [setSelectedShops, initialValue]);

  const handleMenuItemClick = (selectedShop: Shop) => (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const index = selectedShops.findIndex((shop) => shop.id === selectedShop.id);
    if (index < 0) {
      setSelectedShops((shops) => [...shops, selectedShop]);
    } else {
      setSelectedShops((shops) => [...shops.slice(0, index), ...shops.slice(index + 1)]);
    }
  };

  const onClose = () => {
    handleMenuClose(selectedShops);
  };

  const onReset = () => {
    setSelectedShops([]);
  };

  const disabledResetAllButton = selectedShops.length === 0;

  return (
    <FormControl>
      <Select
        multiple
        value={selectedShops}
        input={<Input />}
        startAdornment={filterAdornment ? <FilterList /> : null}
        renderValue={(selected) => (
          <Box display="flex" flexWrap="wrap" height="100%">
            {(selected as Shop[]).map((shop) => (
              <Box key={`editable-shop-selected-item-${shop.id}`} margin={0.5} clone>
                <Chip label={shop.name} />
              </Box>
            ))}
          </Box>
        )}
        onClose={onClose}
        MenuProps={{
          PaperProps: {
            style: {
              width: 'max-content',
              maxHeight: '80vh',
            },
          },
        }}
      >
        <StickyMenuItem onClick={onReset} disabled={disabledResetAllButton}>
          <ListItemIcon>
            <ClearAll />
          </ListItemIcon>
          <ListItemText primary="全ての選択を解除" />
        </StickyMenuItem>
        <ListSubheader disableSticky>店舗</ListSubheader>
        {data?.shops.map((shop) => (
          <MenuItem key={`shop-menu-item-${shop.id}`} onClick={handleMenuItemClick(shop)}>
            <Checkbox checked={selectedShops.findIndex((c) => c.id === shop.id) > -1} />
            <ListItemText primary={shop.name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
