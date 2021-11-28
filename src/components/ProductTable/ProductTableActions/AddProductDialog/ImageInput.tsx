import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';

type Props = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const Image = styled.img`
  width: 50%;
  height: auto;
`;

export const ImageInput: React.FC<Props> = ({ onChange }) => {
  const [selectStatus, setSelectStatus] = useState('画像が選択されていません。');
  const [imageSrc, setImageSrc] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files.item(0);
    if (file !== undefined) {
      if (file?.name !== undefined) {
        setSelectStatus(file.name);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          setImageSrc(reader.result as string);
        };
      }
    }

    onChange(e);
  };

  return (
    <>
      <input accept="image/*" style={{ display: 'none' }} id="raised-button-file" type="file" onChange={handleChange} />
      <label htmlFor="raised-button-file">
        <Button variant="outlined" component="span">
          PCから商品画像を選択
        </Button>
      </label>
      <p>{selectStatus}</p>
      <Image src={imageSrc} />
    </>
  );
};
