import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { Card } from 'react-bootstrap';

const Chart = () => {
  const wasteData = [
    { year: 2018, total_waste: 130000, recycled: 13000, disposed: 117000 },
    { year: 2019, total_waste: 155000, recycled: 20150, disposed: 134850 },
    { year: 2020, total_waste: 170000, recycled: 29750, disposed: 140250 },
    { year: 2021, total_waste: 180000, recycled: 36000, disposed: 144000 },
    { year: 2022, total_waste: 190000, recycled: 45500, disposed: 144500 }
  ];

  return (
    <Card className="shadow-sm">
      <Card.Header className="text-white text-center" style={{backgroundColor: "#00A19B"}}>
        <h3>Evolución de Residuos Electrónicos en Chile</h3>
      </Card.Header>
      <Card.Body>
        <ResponsiveContainer width="100%" height={270}>
          <BarChart data={wasteData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis 
              label={{ 
                value: 'Toneladas', 
                angle: -90, 
                position: 'insideLeft' 
              }} 
            />
            <Tooltip 
              formatter={(value, name) => {
                const labels = {
                  total_waste: 'Total de Residuos',
                  recycled: 'Reciclados',
                  disposed: 'No Reciclados'
                };
                return [`${value} toneladas`, labels[name]];
              }}
            />
            <Legend 
              formatter={(value) => {
                const labels = {
                  total_waste: 'Total de Residuos',
                  recycled: 'Reciclados',
                  disposed: 'No Reciclados'
                };
                return labels[value];
              }}
            />
            <Bar dataKey="total_waste" fill="#8884d8" stackId="a" />
            <Bar dataKey="recycled" fill="#82ca9d" stackId="a" />
            <Bar dataKey="disposed" fill="#ff7300" stackId="a" />
          </BarChart>
        </ResponsiveContainer>
      </Card.Body>
      <Card.Footer className="text-center">
        <p className="text-muted mb-0">
          Datos basados en estimaciones de la campaña Revuelta de RAEE
        </p>
      </Card.Footer>
    </Card>
  );
};

export default Chart;