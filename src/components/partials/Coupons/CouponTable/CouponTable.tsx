import React from 'react';
import MaterialTable, { MTableToolbar } from 'material-table';
import { useCoupons } from 'src/lib/api/requests/useCoupons';
import { Avatar, Box, ListItemAvatar } from '@material-ui/core';

export const CouponTable: React.FC = () => {
  const { data } = useCoupons();

  return (
    <MaterialTable
      title="クーポン一覧"
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
        { title: '利用可能日', field: 'coupon_beginning', render: (coupon) => <div>{coupon.beginning}</div> },
        { title: '利用期限', field: 'coupon_deadline', render: (coupon) => <div>{coupon.deadline}</div> },
      ]}
      data={data?.coupons ?? []}
    />
  );
};
