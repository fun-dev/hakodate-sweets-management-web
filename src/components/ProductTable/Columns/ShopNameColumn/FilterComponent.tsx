import { ShopsSelect } from 'src/components/commons/ShopsSelect';
import { Shop } from 'src/lib/api/models/Shop';

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
  const handleMenuClose = (selectedShops: Shop[]) => {
    onFilterChanged(columnDef.tableData.id.toString(), selectedShops);
  };

  return (
    <th>
      <ShopsSelect handleMenuClose={handleMenuClose} filterAdornment />
    </th>
  );
};
