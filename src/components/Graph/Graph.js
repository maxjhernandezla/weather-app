import { Box } from '@chakra-ui/react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const Graph = () => {
  const data = [
    {
      time: '6 p.m.',
      temp: 22,
    },
    {
      time: '9 p.m.',
      temp: 21,
    },
    {
      time: '12 a.m.',
      temp: 19,
    },
    {
      time: '3 a.m.',
      temp: 19,
    },
    {
      time: '6 a.m.',
      temp: 18,
    },
    {
      time: '9 a.m.',
      temp: 18,
    },
    {
      time: '12 p.m.',
      temp: 20,
    },
    {
      time: '3 p.m.',
      temp: 21,
    },
  ];

  return (
    <Box padding="0" width="100%" marginTop="25px">
      <AreaChart
        width={1230}
        height={150}
        style={{ paddingRight: '20px', marginLeft: '0' }}
        data={data}
      >
        <CartesianGrid strokeDasharray="none" stroke="transparent" />
        <XAxis dataKey="time" />
        <YAxis dataKey="temp" domain={[0, 100]} axisLine={false} tick={false} />
        <Tooltip />
        <Area type="monotone" dataKey="temp" stroke="#ffcc37" fill="#554821" />
      </AreaChart>
    </Box>
  );
};

export default Graph;
