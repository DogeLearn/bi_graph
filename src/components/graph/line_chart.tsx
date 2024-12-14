import React, { FC } from 'react';

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { ColorSet, GraphProps } from './common';

export const BILineChart: FC<GraphProps> = (props) => {
  const categories = Object.keys(props.data[0]).filter((v) => {
    return v !== 'name';
  });

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
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
            <Line
              key={idx}
              type="monotone"
              dataKey={categoryName}
              stroke={ColorSet[idx % Object.keys(ColorSet).length]}
            />
          );
        })}
      </LineChart>
    </ResponsiveContainer>
  );
};
