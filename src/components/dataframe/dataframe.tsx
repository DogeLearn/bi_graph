import React, { CSSProperties, FC } from 'react';

import { Table } from 'antd';

interface DataframeProps {
  data: {
    dataSource: Array<Record<string, any> & { key: string }>;
    columns: Array<{
      key: string;
      title: string;
      dataIndex: string;
    }>;
  };
  style?: CSSProperties;
}

export const Dataframe: FC<DataframeProps> = (props) => {
  const {
    data: { columns, dataSource },
    style,
  } = props;

  return (
    <Table
      size="small"
      style={style}
      columns={columns}
      pagination={false}
      dataSource={dataSource}
    />
  );
};
