import React from "react"

import { AreaChart, Area, XAxis, YAxis, Legend, Tooltip, ResponsiveContainer } from 'recharts';


function AreaC(props) {
  return (
    <ResponsiveContainer width="100%" height={210}>
      <AreaChart
        data={props.data}
        margin={{
          top: 10,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorOptOne" x1="0" y1="0" x2="0" y2="1">
            <stop offset="1%" stopColor="#FCE300" stopOpacity={1} />
            <stop offset="99%" stopColor="#9c9a00" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorOptTwo" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#E03E52" stopOpacity={1} />
            <stop offset="95%" stopColor="#7d2530" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="label" axisLine={false} tick={{ fontSize: 13 }} mirror={true} tickSize="0" />
        <YAxis axisLine={false} mirror={true} tick={{ fontSize: 13 }} tickSize="0" />
        <Tooltip />
        <Legend verticalAlign="top" stroke="black" height={36} />
        <Area type="monotone" name={props.legend} fillOpacity={1} dataKey="amount" strokeWidth={.2} stroke="black" fill={"url(#" + props.color + ")"} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default AreaC