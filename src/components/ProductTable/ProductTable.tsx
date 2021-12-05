import React, { useState, useCallback } from 'react';
import { Box, TableContainer, Typography } from '@material-ui/core';
import MaterialTable from 'material-table';
import { useSweets } from 'src/lib/api/requests/useSweets';
import { columns } from './Columns';
import { tableIcons } from './TableIcons';
import { theme } from 'src/styles/theme';
import { localization } from './Localization';
import { AddBox } from '@material-ui/icons';
import { updateSweetRequest } from 'src/lib/api/requests/updateSweetRequest';
import { useSnackbar } from 'notistack';
import { AddProductDialog } from './ProductTableActions/AddProductDialog';
import { useMutateSweet } from 'src/lib/api/requests/useMutateSweet';

const appHeaderHeight = 64;
const padding = theme.spacing(3);
const tableContainerHeight = `calc(100vh - ${appHeaderHeight}px - ${padding * 2}px)`;
const tableHeaderHeight = 121;
const tableBodyHeight = `calc(100vh - ${appHeaderHeight}px - ${padding * 2}px - ${tableHeaderHeight}px)`;

export const ProductTable: React.FC = () => {
  const { data, mutate } = useSweets();
  const { deleteSweet } = useMutateSweet();
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const handleClose = useCallback(async () => {
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
            onFilterChange={() => {
              // revalidate();
            }}
            actions={[
              {
                icon: () => (
                  <Box display="flex">
                    <AddBox />
                    <Typography>商品を追加する</Typography>
                  </Box>
                ),
                isFreeAction: true,
                position: 'toolbar',
                onClick: handleClickOpen,
              },
            ]}
            components={{}}
            options={{
              search: false,
              filtering: true,
              headerStyle: {
                position: 'sticky',
                top: 0,
              },
              filterRowStyle: {},
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
                    resolve(null);
                  }
                }),
              editTooltip: (sweet) => `${sweet.name}を編集する`,
              onRowDelete: (oldData) =>
                new Promise(async (resolve, reject) => {
                  const deleteSweetResult = await deleteSweet({ id: oldData.id });
                  if (deleteSweetResult.status === 204) {
                    resolve(null);
                    enqueueSnackbar(`${oldData.name}の削除に成功しました。`, {
                      variant: 'success',
                      anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'center',
                      },
                    });
                  } else if (deleteSweetResult.status === 401) {
                    reject();
                    enqueueSnackbar('権限がありません。', {
                      variant: 'error',
                      anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'center',
                      },
                    });
                  } else {
                    reject();
                    enqueueSnackbar('削除に失敗しました。', {
                      variant: 'error',
                      anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'center',
                      },
                    });
                  }
                }),
              isDeletable: (rowData) => !rowData.from_rdf,
              deleteTooltip: (sweet) =>
                sweet.from_rdf
                  ? `${sweet.name}は公式サイトに掲載されているため削除できません。`
                  : `${sweet.name}を削除する`,
            }}
          />
        </TableContainer>
      </Box>
      <AddProductDialog open={open} handleClose={handleClose} onSucceedCreate={() => {}} onFailureCreate={() => {}} />
    </>
  );
};
