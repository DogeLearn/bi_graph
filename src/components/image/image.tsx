import React, { CSSProperties, FC } from 'react';

interface ImageProps {
  data: {
    url: string;
  };
  style: CSSProperties;
}

export const Image: FC<ImageProps> = (props) => {
  const { data, style } = props;

  const { url } = data;

  return <img src={url} style={style} />;
};
