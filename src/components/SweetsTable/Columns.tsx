import { Column } from 'material-table';
import { Sweet } from 'src/lib/api/models/Sweet';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

export const columns: Array<Column<Sweet>> = [
  {
    title: '商品名',
    field: 'name',
    align: 'left',
    editable: 'never',
    render: (sweet) => (
      <Box display="flex; align-items:center">
        <Box marginRight={2} clone>
          <Avatar src={sweet.imagePath} />
        </Box>
        <p>{sweet.name}</p>
      </Box>
    ),
  },
  {
    title: '価格',
    field: 'price',
    align: 'left',
    editable: 'onUpdate',
  },
  {
    title: '説明',
    field: 'description',
    align: 'left',
    editable: 'never',
  },
  {
    title: '大カテゴリ',
    field: 'large_category',
    align: 'left',
    render: (sweet) => <Box>{sweet.small_categories[0]?.large_category_id}</Box>,
    editComponent: (props) => <Box>{props.rowData.small_categories[0]?.large_category_id}</Box>,
  },
  {
    title: '小カテゴリ',
    field: 'small_categories',
    align: 'left',
    render: (sweet) => (
      <Box>
        {sweet.small_categories.map((smc) => (
          <span>{smc.name}</span>
        ))}
      </Box>
    ),
    editComponent: (props) => (
      <Box>
        {props.rowData.small_categories.map((smc) => (
          <span>{smc.name}</span>
        ))}
      </Box>
    ),
  },
];
