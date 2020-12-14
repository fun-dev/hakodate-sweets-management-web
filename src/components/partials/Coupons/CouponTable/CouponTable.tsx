import React, { useCallback, useState } from 'react';
import MaterialTable, { MTableToolbar } from 'material-table';
import { useCoupons } from 'src/lib/api/requests/useCoupons';
import { Avatar, Box, ListItemAvatar } from '@material-ui/core';
import { theme } from 'src/styles/theme';
import { tableIcons } from 'src/components/ProductTable/TableIcons';
import dayjs from 'dayjs'

//UI確定後TableIconsへ
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const appHeaderHeight = 64;
const padding = theme.spacing(3);
const tableContainerHeight = `calc(100vh - ${appHeaderHeight}px - ${padding * 2}px)`;
const tableHeaderHeight = 121;
const tableBodyHeight = `calc(100vh - ${appHeaderHeight}px - ${padding * 2}px - ${tableHeaderHeight}px)`;

export const CouponTable: React.FC = () => {

  const { data } = useCoupons();

  return (
    <Box height={tableContainerHeight} clone>
    <MaterialTable
      title="クーポン一覧"
      icons={tableIcons}
      columns={[
        {
          title: 'クーポン名',
          field: 'coupon_name',
          render: (coupon) => (
            <div>
              <Box display="inline-flex" alignItems="center">
                <ListItemAvatar>
                  <Avatar src={coupon.imagePath} />
                </ListItemAvatar>
                {coupon.description}
              </Box>
            </div>
          ),
        },
        { title: '利用条件', field: 'coupon_condition', render: (coupon) => <div>{coupon.condition}</div> },
        { title: '利用可能日', field: 'coupon_beginning', render: (coupon) => <div>{dayjs(coupon.beginning).format('YYYY/MM/DD HH:mm:ss')} から</div>},
        { title: '利用期限', field: 'coupon_deadline', render: (coupon) => <div>{dayjs(coupon.deadline).format('YYYY/MM/DD HH:mm:ss')} まで</div> },
      ]}
      data={data?.coupons ?? []}
      options={{
        search: false,
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
      editable={{
        onRowUpdate: (newData, oldData) =>
          new Promise(async (resolve, reject) => {
  
          }),
        editTooltip: (coupon) => `${coupon.condition}を編集`,
      }}
    />
    </Box>
  );
};
