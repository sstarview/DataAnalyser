import React from 'react';
import {
    PieChart, Pie, Sector, Cell,
} from 'recharts';


// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];


class Chart extends React.Component {
    //static jsfiddleUrl = 'https://jsfiddle.net/alidingling/3Leoa7f4/';

    onPieEnter(e) {
        //if (!e.onClick === 'long distance ')
        alert(`entered `);
    }

    render() {
        const cData = this.props.chartData;
        console.log('Chart render', cData);


        const travelType = cData.slice(0, 2400); // 15 array of all data 
        console.log('Chart render', travelType);

        // count travel type property for each travel
        const longDistance = travelType.filter(travel => travel.travel_type_id === '1').length;
        const p2p = travelType.filter(travel => travel.travel_type_id === '2').length;
        const hourlyRent = travelType.filter(travel => travel.travel_type_id === '3').length;

        console.log('longDistance', longDistance);
        console.log('p2p', p2p);
        console.log('hourlyRent', hourlyRent);


        const data = [
            { name: 'long distance', value: longDistance }, // value should be total no of long distance user
            { name: 'point to point', value: p2p },//value should be total no of point to point user
            { name: 'hourly renta', value: hourlyRent }, //value should be total no of hourly rental user
            // { name: 'Group D', value: 200 },
        ];

        return (
            <PieChart width={800} height={400}  >
                <Pie
                    data={data}
                    cx={120}
                    cy={200}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    onClick={this.onPieEnter}
                >
                    {
                        data.map((entry, index) => <Cell key={`cell - ${index}`} fill={COLORS[index % COLORS.length]} />)
                    }
                </ Pie>

            </PieChart >
        );
    }
}

export default Chart;