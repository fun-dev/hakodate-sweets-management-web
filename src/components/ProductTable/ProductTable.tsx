import React from 'react';
import { Box, TableContainer } from '@material-ui/core';
import MaterialTable from 'material-table';
import { useSweets } from 'src/lib/api/requests/useSweets';
import { columns } from './Columns';
import { tableIcons } from './TableIcons';
import { theme } from 'src/styles/theme';

const appHeaderHeight = 64;
const padding = theme.spacing(3);
const tableContainerHeight = `calc(100vh - ${appHeaderHeight}px - ${padding * 2}px)`;
const tableHeaderHeight = 121;
const tableBodyHeight = `calc(100vh - ${appHeaderHeight}px - ${padding * 2}px - ${tableHeaderHeight}px)`;

export const ProductTable: React.FC = () => {
  const { data } = useSweets();

  return (
    <Box height={tableContainerHeight} clone>
      <TableContainer>
        <MaterialTable
          title="商品"
          columns={columns}
          data={data?.sweets ?? []}
          icons={tableIcons}
          components={{}}
          options={{
            headerStyle: {
              position: 'sticky',
              top: 0,
            },
            maxBodyHeight: tableBodyHeight,
            minBodyHeight: tableBodyHeight,
          }}
          localization={{
            pagination: {
              labelDisplayedRows: '{from}-{to}件 / {count}件',
              labelRowsSelect: '行',
              firstTooltip: '最初のページ',
              previousTooltip: '前のページ',
              nextTooltip: '次のページ',
              lastTooltip: '最後のページ',
            },
            toolbar: {
              nRowsSelected: '{0} row(s) selected',
              searchTooltip: '検索',
              searchPlaceholder: '検索',
            },
            header: {
              actions: <Box minWidth={120}>操作</Box>,
            },
            body: {
              emptyDataSourceMessage: 'No records to display',
              filterRow: {
                filterTooltip: 'Filter',
              },
            },
          }}
          editable={{
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                resolve();
              }),
            editTooltip: (sweet) => `${sweet.name}を編集`,
          }}
        />
      </TableContainer>
    </Box>
  );
};
