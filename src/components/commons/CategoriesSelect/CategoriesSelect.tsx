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
import { SmallCategory } from 'src/lib/api/models/Category';
import { useCategories } from 'src/lib/api/requests/useCategories';
import { FilterList, ClearAll } from '@material-ui/icons';

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
  &.MuiListItem-button:hover {
    background-color: ${({ theme }) => theme.palette.secondary.contrastText};
  }
`;

type Props = {
  initialValue?: SmallCategory[];
  handleMenuClose: (selectedCategories: SmallCategory[]) => void;
  filterAdornment?: boolean;
};

export const CategoriesSelect: React.FC<Props> = ({ initialValue, handleMenuClose, filterAdornment }) => {
  const { classifiedCategories } = useCategories();
  const [selectedCategories, setSelectedCategories] = useState<SmallCategory[]>(initialValue ?? []);

  useEffect(() => {
    setSelectedCategories(initialValue ?? []);
  }, [setSelectedCategories, initialValue]);

  const handleMenuItemClick = (selectedCategory: SmallCategory) => (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const index = selectedCategories.findIndex((category) => category.id === selectedCategory.id);
    if (index < 0) {
      setSelectedCategories((categories) => [...categories, selectedCategory]);
    } else {
      setSelectedCategories((categories) => [...categories.slice(0, index), ...categories.slice(index + 1)]);
    }
  };

  const onClose = () => {
    handleMenuClose(selectedCategories);
  };

  const onReset = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedCategories([]);
  };

  const disabledResetAllButton = selectedCategories.length === 0;

  return (
    <FormControl>
      <Select
        multiple
        value={selectedCategories}
        input={<Input />}
        startAdornment={filterAdornment ? <FilterList /> : null}
        renderValue={(selected) => (
          <Box display="flex" flexWrap="wrap" height="100%">
            {(selected as SmallCategory[]).map((category) => (
              <Box key={`editable-category-selected-item-${category.id}`} margin={0.5} clone>
                <Chip label={category.name} />
              </Box>
            ))}
          </Box>
        )}
        onClose={onClose}
        MenuProps={{
          PaperProps: {
            style: {
              width: 250,
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
        <ListSubheader disableSticky>和菓子</ListSubheader>
        {classifiedCategories.japanese?.map((category) => (
          <MenuItem key={`editable-category-menu-item-japanese-${category.id}`} onClick={handleMenuItemClick(category)}>
            <Checkbox checked={selectedCategories.findIndex((c) => c.id === category.id) > -1} />
            <ListItemText primary={category.name} />
          </MenuItem>
        ))}
        <ListSubheader disableSticky>洋菓子</ListSubheader>
        {classifiedCategories.western?.map((category) => (
          <MenuItem
            key={`editable-category-menu-item-western-style-${category.id}`}
            onClick={handleMenuItemClick(category)}
          >
            <Checkbox checked={selectedCategories.findIndex((c) => c.id === category.id) > -1} />
            <ListItemText primary={category.name} />
          </MenuItem>
        ))}
        <ListSubheader disableSticky>その他</ListSubheader>
        {classifiedCategories.other?.map((category) => (
          <MenuItem key={`editable-category-menu-item-other-${category.id}`} onClick={handleMenuItemClick(category)}>
            <Checkbox checked={selectedCategories.findIndex((c) => c.id === category.id) > -1} />
            <ListItemText primary={category.name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
