import React from 'react';
import Card from './Card';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { FiMaximize2, FiMoreHorizontal } from 'react-icons/fi';

const profileData = [
  { pressure: 0, temperature: 31, salinity: 34.2 },
  { pressure: 100, temperature: 28, salinity: 34.5 },
  { pressure: 250, temperature: 24, salinity: 34.8 },
  { pressure: 500, temperature: 18, salinity: 34.9 },
  { pressure: 1000, temperature: 10, salinity: 34.6 },
  { pressure: 1500, temperature: 6, salinity: 34.4 },
  { pressure: 2000, temperature: 4, salinity: 34.3 },
];

const ProfileChart = () => {
  const chartMenu = (
    <>
      <FiMaximize2 />
      <FiMoreHorizontal />
    </>
  );

  return (
    <Card title="Temperature & Salinity Profile" menu={chartMenu} className="flex-1">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={profileData} margin={{ top: 5, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
          <XAxis 
            dataKey="pressure"
            type="number" 
            domain={[0, 2000]}
            label={{ value: 'Pressure / Depth (m)', position: 'insideBottom', offset: -10, fill: '#8b949e' }}
            stroke="#8b949e"
          />
          <YAxis 
            yAxisId="left"
            orientation="left"
            dataKey="temperature"
            label={{ value: 'Temperature (°C)', angle: -90, position: 'insideLeft', fill: '#8b949e' }}
            stroke="#f85149"
            domain={[0, 32]}
          />
          <YAxis 
            yAxisId="right"
            orientation="right"
            dataKey="salinity"
            label={{ value: 'Salinity (PSU)', angle: 90, position: 'insideRight', fill: '#8b949e' }}
            stroke="#58a6ff"
            domain={[34, 35.2]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--card-background)',
              borderColor: 'var(--border-color)',
            }}
          />
          <Legend verticalAlign="top" height={36}/>
          <Line yAxisId="left" type="monotone" dataKey="temperature" stroke="var(--primary-red)" strokeWidth={2} name="Temperature" dot={false} />
          <Line yAxisId="right" type="monotone" dataKey="salinity" stroke="var(--primary-blue)" strokeWidth={2} name="Salinity" dot={false}/>
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default ProfileChart;