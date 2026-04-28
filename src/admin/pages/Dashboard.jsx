import React from 'react'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'
import AdminHeader from '../components/AdminHeader';

import { FaBook } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";

import HighchartsReact from 'highcharts-react-official';
import HighCharts from 'highcharts'

function DashBoard() {

  const graphOptions = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Added vs Purchased'
    },
    
    xAxis: {
        categories: ['User1', 'User2', 'User3', 'User4', 'User5'],
        crosshair: true,
        accessibility: {
            description: 'Users'
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Books'
        }
    },
    // tooltip: {
    //     valueSuffix: ' (1000 MT)'
    // },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [
        {
            name: 'Users',
            data: [387749, 280000, 129000, 64300, 54000, 34300]
        },
        {
            name: 'Books',
            data: [45321, 140000, 10000, 140500, 19500, 113500]
        }
    ]
  };

 const pieOptions = {
    chart: {
        type: 'pie',
        zooming: {
            type: 'xy'
        },
        panning: {
            enabled: true,
            type: 'xy'
        },
        panKey: 'shift'
    },
    title: {
        text: 'Egg Yolk Composition'
    },
    tooltip: {
        valueSuffix: '%'
    },
  
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: [{
                enabled: true,
                distance: 20
            }, {
                enabled: true,
                distance: -40,
                format: '{point.percentage:.1f}%',
                style: {
                    fontSize: '1.2em',
                    textOutline: 'none',
                    opacity: 0.7
                },
                filter: {
                    operator: '>',
                    property: 'percentage',
                    value: 10
                }
            }]
        }
    },
    series: [
        {
            name: 'Percentage',
            colorByPoint: true,
            data: [
                {
                    name: 'Water',
                    y: 55.02
                },
                {
                    name: 'Fat',
                    sliced: true,
                    selected: true,
                    y: 26.71
                },
                {
                    name: 'Carbohydrates',
                    y: 1.09
                },
                {
                    name: 'Protein',
                    y: 15.5
                },
                {
                    name: 'Ash',
                    y: 1.68
                }
            ]
        }
    ]
};



  return (
    <>
      <AdminHeader/>
      <div className='min-h-[60vh] md:grid grid-cols-4'>
          <div className='col-span-1'>
              <AdminSidebar/>
          </div>
          <div className='col-span-3 p-5'>
            <div className='md:grid grid-cols-3 gap-3 p-5'>

              <div className='w-full bg-violet-600/70 py-10 text-white rounded-sm mb-3'>
                <h1 className='text-xl flex justify-center gap-3 items-center'>
                  <FaBook className='text-3xl'/>
                  Total Number of Users</h1>
                <h1 className='text-center text-lg font-bold'>100+</h1>
              </div>

              <div className='w-full bg-green-500/90 py-10 text-white rounded-sm mb-3'>
                <h1 className='text-xl flex justify-center gap-3 items-center'>
                  <h1 className='text-2xl'/>
                  <FaUsers className='text-4xl'/>
                  Total Number of Users</h1>
                <h1 className='text-center text-lg font-bold'>100+</h1>
              </div>

              <div className='w-full bg-yellow-400/80 py-10 text-white rounded-sm mb-3'>
                <h1 className='text-xl flex justify-center gap-3 items-center'>
                  <h1 className='text-2xl'/>
                  <GrUserWorker className='text-3xl'/>
                  Total Number of Employees</h1>
                <h1 className='text-center text-lg font-bold'>100+</h1>
              </div>
            </div>

            <div className='md:grid grid-cols-2'>
              <div>
                <HighchartsReact
                highcharts={HighCharts}
                options={graphOptions}
                />
              </div>
              <div>
                <HighchartsReact
                highcharts={HighCharts}
                options={pieOptions}
                />
              </div>
            </div>
          </div>
      </div>
      <Footer/>
    </>
  )
}

export default DashBoard