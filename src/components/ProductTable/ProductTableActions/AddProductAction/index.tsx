import {
  AppBar,
  Dialog,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  Input,
  OutlinedInput,
  Box,
  Container,
  FormControl as MaterialFormControl,
  InputLabel,
  Chip,
  Select,
  ListSubheader,
  MenuItem,
  ListItemText,
  Checkbox,
  Button,
  TextField as MaterialTextField,
  Paper,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { TransitionProps } from '@material-ui/core/transitions/transition';
import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { SmallCategory } from 'src/lib/api/models/Category';
import { useCategories } from 'src/lib/api/requests/useCategories';

type Props = {
  open: boolean;
  handleClose: () => void;
};

type State = {
  name: string;
  description: string;
  price: string;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FormControl = styled(MaterialFormControl)`
  margin: ${({ theme }) => theme.spacing(1)}px;
  min-width: 200px;
`;

const TextField = styled(MaterialTextField)`
  margin: ${({ theme }) => theme.spacing(1)}px;
`;

export const AddProductDialog: React.FC<Props> = ({ open, handleClose }) => {
  const [state, setState] = useState<State>({ name: '', description: '', price: '' });
  const [selectedCategories, setSelectedCategories] = useState<SmallCategory[]>([]);
  const { classifiedCategories } = useCategories();

  const handleInputChange = (key: keyof State) => (e: ChangeEvent<HTMLInputElement>) => {
    setState((state) => ({ ...state, [key]: e.currentTarget.value }));
  };

  const handleMenuItemClick = (selectedCategory: SmallCategory) => (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const index = selectedCategories.findIndex((category) => category.id === selectedCategory.id);
    if (index < 0) {
      setSelectedCategories((categories) => [...categories, selectedCategory]);
    } else {
      setSelectedCategories((categories) => [...categories.slice(0, index), ...categories.slice(index + 1)]);
    }
  };

  const handleAddText = () => {};

  return (
    <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
      <Box position="relative" clone>
        <AppBar>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <Close />
            </IconButton>
            <Typography variant="h6">商品追加</Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" height="inherit">
        <Box width="50%" padding={3} clone>
          <Paper>
            <Container maxWidth="sm">
              <Box display="flex" flexDirection="column" clone>
                <form>
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="name">商品名</InputLabel>
                    <OutlinedInput id="name" value={state.name} onChange={handleInputChange('name')} labelWidth={48} />
                  </FormControl>
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="price">価格</InputLabel>
                    <OutlinedInput
                      id="price"
                      value={state.price}
                      onChange={handleInputChange('price')}
                      labelWidth={32}
                    />
                  </FormControl>

                  <TextField
                    id="description"
                    label="説明"
                    multiline
                    rows={4}
                    value={state.description}
                    onChange={handleInputChange('description')}
                    variant="outlined"
                  />

                  <FormControl variant="outlined">
                    <InputLabel>カテゴリ</InputLabel>
                    <Select
                      multiple
                      value={selectedCategories}
                      input={<OutlinedInput labelWidth={64} />}
                      renderValue={(selected) => (
                        <Box display="flex" flexWrap="wrap" height="100%">
                          {(selected as SmallCategory[]).map((category) => (
                            <Box key={`add-product-category-selected-item-${category.id}`} margin={0.5} clone>
                              <Chip label={category.name} />
                            </Box>
                          ))}
                        </Box>
                      )}
                    >
                      <ListSubheader disableSticky>和菓子</ListSubheader>
                      {classifiedCategories.japanese?.map((category) => (
                        <MenuItem
                          key={`add-product-category-menu-item-japanese-${category.id}`}
                          onClick={handleMenuItemClick(category)}
                        >
                          <Checkbox checked={selectedCategories.findIndex((c) => c.id === category.id) > -1} />
                          <ListItemText primary={category.name} />
                        </MenuItem>
                      ))}

                      <ListSubheader disableSticky>洋菓子</ListSubheader>
                      {classifiedCategories.western?.map((category) => (
                        <MenuItem
                          key={`add-product-category-menu-item-western-style-${category.id}`}
                          onClick={handleMenuItemClick(category)}
                        >
                          <Checkbox checked={selectedCategories.findIndex((c) => c.id === category.id) > -1} />
                          <ListItemText primary={category.name} />
                        </MenuItem>
                      ))}

                      <ListSubheader disableSticky>その他</ListSubheader>
                      {classifiedCategories.other?.map((category) => (
                        <MenuItem
                          key={`add-product-category-menu-item-other-${category.id}`}
                          onClick={handleMenuItemClick(category)}
                        >
                          <Checkbox checked={selectedCategories.findIndex((c) => c.id === category.id) > -1} />
                          <ListItemText primary={category.name} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <Box display="flex" justifyContent="center">
                    <Box margin={1} maxWidth="280px" clone>
                      <Button variant="contained" color="primary" onClick={handleAddText}>
                        追加
                      </Button>
                    </Box>
                  </Box>
                </form>
              </Box>
            </Container>
          </Paper>
        </Box>
      </Box>
    </Dialog>
  );
};
