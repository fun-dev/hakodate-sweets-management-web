import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
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
  Drawer as MaterialDrawer,
  CircularProgress,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React, { useState, ChangeEvent, useRef, FormEventHandler } from 'react';
import styled from 'styled-components';
import { SmallCategory } from 'src/lib/api/models/Category';
import { useCategories } from 'src/lib/api/requests/useCategories';
import { Shop } from 'src/lib/api/models/Shop';
import { ImageInput } from './ImageInput';
import { useMutateSweet } from 'src/lib/api/requests/useMutateSweet';
import { useSweets } from 'src/lib/api/requests/useSweets';
import { useShops } from 'src/lib/api/requests/useShops';

type Props = {
  open: boolean;
  handleClose: () => void;
  onSucceedCreate: () => void;
  onFailureCreate: () => void;
};

type State = {
  name: string;
  description: string;
  price: string;
};

const FormControl = styled(MaterialFormControl)`
  margin-top: ${({ theme }) => theme.spacing(1)}px;
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
  min-width: 200px;
`;

const TextField = styled(MaterialTextField)`
  margin-top: ${({ theme }) => theme.spacing(1)}px;
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
`;

const drawerWidth = 600;
const Drawer = styled(MaterialDrawer)`
  width: ${drawerWidth}px;
  .MuiPaper-root {
    width: ${drawerWidth}px;
  }
`;

export const AddProductDialog: React.FC<Props> = ({ open, handleClose }) => {
  const [state, setState] = useState<State>({ name: '', description: '', price: '' });
  const [selectedCategories, setSelectedCategories] = useState<SmallCategory[]>([]);
  const [selectedShop, setSelectedShop] = useState<Shop | null>(null);
  const [productImageFile, setProductImageFile] = useState<File | null>(null);
  const { classifiedCategories } = useCategories();
  const { createSweet } = useMutateSweet();
  const { revalidate } = useSweets();
  const [loadingCreate, setLoadingCreate] = useState(false);
  const { data: shopData } = useShops();
  const ref = useRef<HTMLDivElement>(null);

  const handleInputChange = (key: keyof State) => (e: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [key]: e.currentTarget.value });
  };

  const handleMenuItemClick = (selectedCategory: SmallCategory) => (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const index = selectedCategories.findIndex((category) => category.id === selectedCategory.id);
    if (index < 0) {
      setSelectedCategories((categories) => [...categories, selectedCategory]);
    } else {
      setSelectedCategories((categories) => [...categories.slice(0, index), ...categories.slice(index + 1)]);
    }
  };

  const handleShopSelect = (selected: Shop) => (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setSelectedShop(selected);
    ref.current.click();
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoadingCreate(true);

    const created = await createSweet({
      shopId: selectedShop.id,
      name: state.name,
      description: state.description,
      price: state.price,
      small_category_ids: selectedCategories.map((c) => c.id),
      productImageFile,
    });

    if (created) {
      await revalidate();
      onClose();
    }

    setLoadingCreate(false);
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    setProductImageFile(file);
  };

  const onClose = () => {
    setState({
      name: '',
      description: '',
      price: '',
    });
    setSelectedCategories([]);
    setSelectedShop(null);
    setProductImageFile(null);
    handleClose();
  };

  const disabledCreateButton =
    !state.name || !state.description || !state.price || selectedCategories.length === 0 || !selectedShop;

  return (
    <Drawer open={open} onClose={onClose} anchor="right">
      <Box position="relative" clone>
        <AppBar color="inherit" position="fixed">
          <Box display="flex" clone>
            <Toolbar>
              <Box flexGrow={1} clone>
                <Typography variant="h6">商品を追加する</Typography>
              </Box>
              <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close">
                <Close />
              </IconButton>
            </Toolbar>
          </Box>
        </AppBar>
      </Box>
      <Box display="flex" justifyContent="center" height="inherit" pt={10}>
        <Box width="50%" padding={3} clone>
          <Paper>
            <Container maxWidth="sm">
              <Box display="flex" flexDirection="column" clone>
                <form onSubmit={handleSubmit}>
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
                  <FormControl variant="outlined" error={false}>
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
                  <FormControl variant="outlined">
                    {!selectedShop && <InputLabel htmlFor="shop">店舗</InputLabel>}
                    <Select
                      id="shop"
                      value={selectedShop}
                      input={<OutlinedInput id="shop" />}
                      renderValue={(selected: Shop) => (
                        <Box display="flex" flexWrap="wrap" height="100%">
                          <Box key={`editable-shop-selected-item-${selected?.id ?? 'none'}`} margin={0.5} clone>
                            <Typography>{selected?.name ?? ''}</Typography>
                          </Box>
                        </Box>
                      )}
                    >
                      <ListSubheader disableSticky>店舗</ListSubheader>
                      {shopData?.shops.map((shop) => (
                        <MenuItem key={`shop-menu-item-${shop.id}`} onClick={handleShopSelect(shop)}>
                          <ListItemText primary={shop.name} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <ImageInput onChange={handleImageChange} />
                  <Box display="flex" justifyContent="center">
                    <Box margin={1} minHeight={36} width="100%" clone>
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={disabledCreateButton || loadingCreate}
                      >
                        {!loadingCreate ? (
                          '商品を追加する'
                        ) : (
                          <Box position="absolute" top="50%" left="50%" marginTop={-1.5} marginLeft={-1.5}>
                            <CircularProgress size={24} />
                          </Box>
                        )}
                      </Button>
                    </Box>
                  </Box>
                </form>
              </Box>
            </Container>
          </Paper>
        </Box>
      </Box>
    </Drawer>
  );
};
