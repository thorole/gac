import React from "react"

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function AreaC(props) {
    return (
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart
          data={props.data}
          margin={{
            top: 10,
            right: 15,
            left: 0,
            bottom: 0,
          }}
          background="#454545"
        >
          
          <defs>
            <linearGradient id="colorOptOne" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#883683" stopOpacity={1} />
              <stop offset="95%" stopColor="#0d102a" stopOpacity={1} />
            </linearGradient>
            <linearGradient id="colorOptTwo" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#75edcc" stopOpacity={1} />
              <stop offset="95%" stopColor="#060a1e" stopOpacity={1} />
            </linearGradient>
          </defs>
          <XAxis dataKey="label" />
          <YAxis  />
          <Tooltip />
          <Area type="monotone" dataKey="amount" stroke="#8884d8" fill={"url(#" + props.color + ")"} />
        </AreaChart>
      </ResponsiveContainer>
    );
  }

  export default AreaC