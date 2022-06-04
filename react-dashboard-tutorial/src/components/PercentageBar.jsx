import React from 'react'
import Chart from './Chart'
import EChart from './EChart'

export default ({ config, resize }) => {

    const { data } = config

    const colors = ['#2d8cf0', '#FFD60A', '#BF5AF2', '#FF443A', '#FF9F0C', '#31D158']

    let option = {
        color: colors,
    
        legend: {
            x: 'center',
        },
        tooltip: {
            show: true,
            trigger: 'item',
            formatter: "{a} : <br />{c}%",
        },
        polar: {
            center: ['50%', '50%'],
            radius: '150%'
        },
        angleAxis: {
            show: false,
            startAngle: 90,
            min: 0,
            max: 100
        },
        radiusAxis: {
            type: 'category',
            show: false,
            data: ["4级权重媒体", "3级权重媒体", "5级权重媒体"]
        },
        series: data.map(obj => ({
            type: "bar",
            name: obj.title,
            coordinateSystem: "polar",
            barWidth: 20,
            barCategoryGap: "30%",
            data: [obj.value]
        }))
    }

    return (
        <Chart config={config} resize={resize}>
            { data &&
                <EChart option={ option } config={ config } resize={resize}/>
            }
        </Chart>
    )
}