import React from 'react';
import './Graphics.scss';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

export const Graphics = ({data, actives}) => {
    return (
        <div className='graphics'>
            <LineChart
                width={1000}
                height={500}
                data={data}
            >
                <CartesianGrid stroke="#6fb1eb" strokeDasharray="1 5" />
                <XAxis dataKey="name" stroke="#6fb1eb" />
                <YAxis stroke="#6fb1eb" />
                <Tooltip />
                <Legend />
                {actives.heap ? <Line type="monotone" dataKey="Heap sort" stroke="#56f556" activeDot={{ r: 5 }} /> : null}
                {actives.gnome ? <Line type="monotone" dataKey="Gnome sort" stroke="#ad56f5" activeDot={{ r: 5 }} /> : null}
            </LineChart>
        </div >
    )
}
