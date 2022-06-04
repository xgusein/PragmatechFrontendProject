import React from 'react'
import Chart from './Chart'
import EChart from './EChart'

export default ({ config, resize }) => {
    const { data } = config

    let option = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        grid: {
            left: '10%'
        },
        series: [
            {
                type: 'tree',

                data: [data],

                top: '1%',
                left: config.left,
                bottom: '1%',
                right: '20%',

                symbolSize: 7,

                label: {
                    normal: {
                        position: 'left',
                        verticalAlign: 'middle',
                        align: 'right',
                        fontSize: 9
                    }
                },

                leaves: {
                    label: {
                        normal: {
                            position: 'right',
                            verticalAlign: 'middle',
                            align: 'left'
                        }
                    }
                },

                expandAndCollapse: true,
                animationDuration: 550,
                animationDurationUpdate: 750
            }
        ]
    }

    return (
        <Chart config={config} resize={resize}>
            { data &&
                <EChart option={ option } config={ config } resize={resize}/>
            }
        </Chart>
    )
}