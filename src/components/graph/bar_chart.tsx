import React, { FC } from 'react';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { ColorSet, GraphProps } from './common';

export const BIBarChart: FC<GraphProps> = (props) => {
  const categories = Object.keys(props.data[0]).filter((v) => {
    return v !== 'name';
  });

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        width={500}
        height={300}
        data={props.data as any[]}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {categories.map((categoryName, idx) => {
          return (
            <Bar
              key={idx}
              dataKey={categoryName}
              fill={ColorSet[idx % Object.keys(ColorSet).length]}
            />
          );
        })}
      </BarChart>
    </ResponsiveContainer>
  );
};
