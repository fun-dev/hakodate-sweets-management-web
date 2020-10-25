import React, { useState, useCallback } from 'react';
import { Box, TableContainer } from '@material-ui/core';
import MaterialTable from 'material-table';
import { useSweets } from 'src/lib/api/requests/useSweets';
import { columns } from './Columns';
import { tableIcons } from './TableIcons';
import { theme } from 'src/styles/theme';
import { localization } from './Localization';
import { AddBox } from '@material-ui/icons';
import { updateSweetRequest } from 'src/lib/api/requests/updateSweetRequest';
import { useSnackbar } from 'notistack';
import { AddProductDialog } from './ProductTableActions/AddProductAction';

const appHeaderHeight = 64;
const padding = theme.spacing(3);
const tableContainerHeight = `calc(100vh - ${appHeaderHeight}px - ${padding * 2}px)`;
const tableHeaderHeight = 121;
const tableBodyHeight = `calc(100vh - ${appHeaderHeight}px - ${padding * 2}px - ${tableHeaderHeight}px)`;

export const ProductTable: React.FC = () => {
  const { data, mutate } = useSweets();
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <>
      <Box height={tableContainerHeight} clone>
        <TableContainer>
          <MaterialTable
            title="商品"
            columns={columns}
            data={data?.sweets ?? []}
            icons={tableIcons}
            isLoading={!data}
            actions={[
              {
                icon: () => <AddBox />,
                isFreeAction: true,
                position: 'toolbar',
                onClick: handleClickOpen,
              },
            ]}
            components={{}}
            options={{
              headerStyle: {
                position: 'sticky',
                top: 0,
              },
              maxBodyHeight: tableBodyHeight,
              minBodyHeight: tableBodyHeight,
              draggable: false,
              pageSize: 10,
              pageSizeOptions: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
            }}
            localization={localization}
            editable={{
              onRowUpdate: (newData, oldData) =>
                new Promise(async (resolve, reject) => {
                  console.log('newData', newData);
                  console.log('oldData', oldData);
                  const result = await updateSweetRequest(
                    { id: newData.id },
                    { sweet: { small_category_ids: newData.small_categories.map((x) => x.id) } }
                  );
                  if (!result) {
                    enqueueSnackbar('編集権限がありません。', {
                      variant: 'error',
                      anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'center',
                      },
                    });
                    reject();
                  } else if (result.status === 200) {
                    mutate((data) => ({
                      ...data,
                      sweets: data.sweets.map((sweet) => {
                        if (sweet.id === newData.id) {
                          return newData;
                        } else {
                          return sweet;
                        }
                      }),
                    }));
                    enqueueSnackbar('更新されました。', {
                      variant: 'success',
                      anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'center',
                      },
                    });
                    resolve();
                  }
                }),
              editTooltip: (sweet) => `${sweet.name}を編集`,
            }}
          />
        </TableContainer>
      </Box>
      <AddProductDialog open={open} handleClose={handleClose} />
    </>
  );
};
