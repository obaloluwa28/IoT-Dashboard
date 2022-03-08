import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;
 
class BarChart extends Component {
	addSymbols(e){
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
		if(order > suffixes.length - 1)
			order = suffixes.length - 1;
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
	}
	render() {
		const options = {
			animationEnabled: true,
			// theme: "light2",
			backgroundColor: "#0000",
			// title:{
			// 	text: "Most Popular Social Networking Sites"
			// },
			axisX: {
				title: "Home Systems",
				reversed: true,
				titleFontColor: "white",
				titleFontFamily: 'Fira Sans Condensed',
				titleFontSize: 20,
				labelFontColor: "white",
				labelFontFamily: 'Fira Sans Condensed',
				labelFontSize: 14,
			},
			axisY: {
				title: "Network Consumption",
				labelFormatter: this.addSymbols,
				titleFontColor: "white",
				titleFontFamily: 'Fira Sans Condensed',
				titleFontSize: 20,
				labelFontColor: "white",
				labelFontFamily: 'Fira Sans Condensed',
				labelFontSize: 14,
			},
			height: 500,
			data: [{
				type: "bar",
				dataPoints: [
					{ y:  2200000000, label: "AC" },
					{ y:  1800000000, label: "Router" },
					{ y:  4800000000, label: "Voice System" },
					{ y:  3563000000, label: "Light" },
					{ y:  2376000000, label: "Refrigerator" },
					{ y:  1336000000, label: "Smart TV" },
					{ y:  2800000000, label: "Doorbell" },
					{ y:  1563000000, label: "Washing Machine" },
					{ y:  3746000000, label: "Camera" },
					{ y:  3196000000, label: "Door Lock" }
				]
			}]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default BarChart;