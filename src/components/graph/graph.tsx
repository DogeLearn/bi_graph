import React, { CSSProperties, FC, useState } from 'react';

import { Select } from 'antd';

enum ChartType {
  BarChart,
  PieChart,
  LineChart,
}

import { BIBarChart } from './bar_chart';

import { BILineChart } from './line_chart';

import { BIPieChart } from './pie_chart';

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
        {chartType === ChartType.BarChart && <BIBarChart data={props.data} />}
        {chartType === ChartType.LineChart && <BILineChart data={props.data} />}
        {chartType === ChartType.PieChart && <BIPieChart data={props.data} />}
      </div>
    </div>
  );
};
