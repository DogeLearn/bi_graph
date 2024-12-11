import React, { CSSProperties, FC, useState } from 'react';

import { Select } from 'antd';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

enum ChartType {
  BarChart,
  PieChart,
  LineChart,
}

interface GraphProps {
  data: Record<string, any>;
  style?: CSSProperties;
}

const classPrefix = 'bi-graph';

export const Graph: FC<GraphProps> = (props) => {
  const [chartType, setChartType] = useState<ChartType>(ChartType.BarChart);
  const categories = Object.keys(props.data[0]).filter((v) => {
    return v !== 'name';
  });
  const pieChartData = categories.map(() => [] as Record<string, any>[]);
  categories.forEach((category, idx) => {
    props.data.forEach((bullet: Record<string, any>) => {
      pieChartData[idx].push({
        // @ts-ignore
        name: bullet.name,
        value: bullet[category],
      });
    });
  });

  return (
    <div className={`${classPrefix}`} style={props?.style}>
      <div
        className={`${classPrefix}-action`}
        style={{ paddingBottom: '30px' }}
      >
        <Select
          className={`${classPrefix}-action-select`}
          style={{ maxWidth: 100 }}
          defaultValue={ChartType.BarChart}
          onChange={(value: ChartType) => {
            setChartType(value);
          }}
          options={[
            { label: '柱状图', value: ChartType.BarChart },
            { label: '饼状图', value: ChartType.PieChart },
            { label: '折线图', value: ChartType.LineChart },
          ]}
        />
      </div>
      <div className={`${classPrefix}-graph`}>
        {chartType === ChartType.BarChart && (
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
              <Bar
                dataKey="pv"
                fill="#8884d8"
                activeBar={<Rectangle fill="pink" stroke="blue" />}
              />
              <Bar
                dataKey="uv"
                fill="#82ca9d"
                activeBar={<Rectangle fill="gold" stroke="purple" />}
              />
            </BarChart>
          </ResponsiveContainer>
        )}
        {chartType === ChartType.LineChart && (
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
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        )}
        {chartType === ChartType.PieChart && (
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
                      fill="#8884d8"
                      label
                    />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
