import { TextField } from '@material-ui/core';
import { Sweet } from 'src/lib/api/models/Sweet';

type Props = {
  sweet: Sweet;
  draftDescription: string;
  changeDraftDescription: (draftDescription: string) => void;
};

export const EditableDescription: React.VFC<Props> = ({ sweet, draftDescription, changeDraftDescription }) => {
  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (e) => {
    changeDraftDescription(e.currentTarget.value);
  };

  return (
    <TextField
      multiline
      label="説明"
      defaultValue={sweet.description}
      value={draftDescription}
      onChange={handleChange}
    />
  );
};
