import { TextField } from '@material-ui/core';
import { Sweet } from 'src/lib/api/models/Sweet';

type Props = {
  sweet: Sweet;
  draftProductName: string;
  changeDraftProductName: (newProductName: string) => void;
};

export const EditableProductName: React.VFC<Props> = ({ sweet, draftProductName, changeDraftProductName }) => {
  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (e) => {
    changeDraftProductName(e.currentTarget.value);
  };

  return <TextField label="商品名" defaultValue={sweet.name} value={draftProductName} onChange={handleChange} />;
};
