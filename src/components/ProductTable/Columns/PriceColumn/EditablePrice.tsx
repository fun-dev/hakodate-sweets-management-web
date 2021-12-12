import { TextField } from '@material-ui/core';
import { Sweet } from 'src/lib/api/models/Sweet';

type Props = {
  sweet: Sweet;
  draftPrice: string;
  changeDraftPrice: (draftPrice: string) => void;
};

export const EditablePrice: React.VFC<Props> = ({ sweet, draftPrice, changeDraftPrice }) => {
  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (e) => {
    changeDraftPrice(e.currentTarget.value);
  };

  return <TextField label="価格" defaultValue={sweet.price} value={draftPrice} onChange={handleChange} />;
};
