import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', uv: 4000 },
  { name: 'Feb', uv: 3000 },
  { name: 'Mar', uv: 2000 },
  { name: 'Apr', uv: 2780 },
  { name: 'May', uv: 1890 },
  { name: 'Jun', uv: 2390 },
  { name: 'Jul', uv: 3490 },
];

export default function GraphComponent() {
  return (
    <div style={{ width: '100%', height: 400, marginTop: 20 }}>
      <h2>Graph Data</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
