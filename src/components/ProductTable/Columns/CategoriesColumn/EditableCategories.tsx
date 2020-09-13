import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Sweet } from 'src/lib/api/models/Sweet';
import {
  Box,
  FormControl as MaterialFormControl,
  Select,
  Chip,
  MenuItem,
  Input,
  Checkbox,
  ListItemText,
  ListSubheader,
} from '@material-ui/core';
import { useCategories } from 'src/lib/api/requests/useCategories';
import { SmallCategory } from 'src/lib/api/models/Category';

const FormControl = styled(MaterialFormControl)`
  min-width: 200px;
  width: 100%;
`;

type Props = {
  sweet: Sweet;
  changeDraftCategories: (newCategories: any) => void;
};

export const EditableCategories: React.FC<Props> = ({ sweet, changeDraftCategories }) => {
  const { classifiedCategories } = useCategories();
  const [selectedCategories, setSelectedCategories] = useState<SmallCategory[]>(sweet.small_categories);

  useEffect(() => {
    setSelectedCategories(sweet.small_categories);
  }, [setSelectedCategories, sweet.small_categories]);

  const handleMenuItemClick = (selectedCategory: SmallCategory) => (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const index = selectedCategories.findIndex((category) => category.id === selectedCategory.id);
    if (index < 0) {
      setSelectedCategories((categories) => [...categories, selectedCategory]);
    } else {
      setSelectedCategories((categories) => [...categories.slice(0, index), ...categories.slice(index + 1)]);
    }
  };

  const handleMenuClose = () => {
    changeDraftCategories(selectedCategories);
  };

  return (
    <FormControl>
      <Select
        multiple
        value={selectedCategories}
        input={<Input />}
        renderValue={(selected) => (
          <Box display="flex" flexWrap="wrap" height="100%">
            {(selected as SmallCategory[]).map((category) => (
              <Box key={`editable-category-selected-item-${category.id}`} margin={0.5} clone>
                <Chip label={category.name} />
              </Box>
            ))}
          </Box>
        )}
        onClose={handleMenuClose}
        MenuProps={{
          PaperProps: {
            style: {
              width: 250,
              maxHeight: '80vh',
            },
          },
        }}
      >
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
