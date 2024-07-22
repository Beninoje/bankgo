"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({accounts}: DoughnutChartProps) => {
    const data = {
        datasets:[
            {
                label:'Banks',
                data: [1250, 2500, 3750,750],
                backgroundColor: ['#FF9B85', '#FFAC99', '#FFBCAD','#FFDED6']
            }
        ],
    }
  return (
    <Doughnut 
     data={data}
     options={{
        cutout: '60%',
     }}
    />
  )
}

export default DoughnutChart