import React from 'react';
import { CategoriesSelect } from 'src/components/commons/CategoriesSelect';
import { SmallCategory } from 'src/lib/api/models/Category';

type Props = {
  columnDef: {
    title: string;
    field: string;
    align: string;
    editable: string;
    width: number;
    sorting: boolean;
    filtering: boolean;
    tableData: {
      columnOrder: number;
      filterValue: string;
      groupSort: string;
      width: number;
      id: number;
    };
  };
  onFilterChanged: (rowId: string, value: any) => void;
};

export const FilterComponent: React.FC<Props> = ({ columnDef, onFilterChanged }) => {
  const handleMenuClose = (selectedCategories: SmallCategory[]) => {
    onFilterChanged(columnDef.tableData.id.toString(), selectedCategories);
  };

  return (
    <th>
      <CategoriesSelect handleMenuClose={handleMenuClose} filterAdornment />
    </th>
  );
};
