import React, { FC } from 'react';

import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

import { ColorSet, GraphProps } from './common';

export const BIPieChart: FC<GraphProps> = (props) => {
  const categories = Object.keys(props.data[0]).filter((v) => {
    return v !== 'name';
  });
  const pieChartData = categories.map(() => [] as Record<string, any>[]);
  categories.forEach((category, idx) => {
    props.data.forEach((bullet: Record<string, any>) => {
      pieChartData[idx].push({
        name: bullet.name,
        value: bullet[category],
      });
    });
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        overflowX: 'scroll',
      }}
    >
      {pieChartData.map((v, idx) => {
        return (
          <ResponsiveContainer minWidth={300} minHeight={300} key={idx}>
            <PieChart>
              <Pie
                key={categories[idx]}
                dataKey="value"
                isAnimationActive={false}
                data={v}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill={ColorSet[idx % Object.keys(ColorSet).length]}
                label
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        );
      })}
    </div>
  );
};
