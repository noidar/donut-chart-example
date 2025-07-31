import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const DonutChart = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const colors = Highcharts.getOptions().colors;
    const categories = ['Aktien', 'ETFs', 'Derivate', 'Cash'];
    
    const data = [
      {
        y: 44.02,
        color: colors[0],
        drilldown: {
          name: 'Aktien',
          categories: [
            'Booking Holdings',
            'Givaudan',
            'Hermes International',
            'MercadoLibre',
            'Samsung',
            'ASML Holding',
            'Nvidia',
            'Alphabet',
            'Tesla',
            'Microsoft',
            'Apple',
            'Amazon',
            'Other Stocks'
          ],
          data: [2.21, 1.68, 1.03, 0.94, 0.80, 0.76, 0.72, 0.68, 0.65, 0.62, 0.58, 0.55, 33.00]
        }
      },
      {
        y: 3.49,
        color: colors[1],
        drilldown: {
          name: 'ETFs',
          categories: [
            'VANECK SPACE UC.ETF',
            'iShares Nasdaq 100',
            'iShares Core S&P 500',
            'VANECKETFSDFNS ADLA',
            '21SHARES BITCOIN ETP',
            'iShares MSCI World',
            'Vanguard S&P 500',
            'SPDR S&P 500',
            'iShares Core MSCI EM',
            'Other ETFs'
          ],
          data: [0.86, 0.53, 0.27, 0.25, 0.24, 0.22, 0.21, 0.19, 0.18, 0.54]
        }
      },
      {
        y: 41.79,
        color: colors[2],
        drilldown: {
          name: 'Derivate',
          categories: [
            'Inline DAX 18800-29800',
            'Long Mini Future Bitcoin',
            'Inline DAX 17800-27200',
            'Long Mini Future Gold',
            'Call Option Tesla',
            'Put Option S&P 500',
            'Turbo Long DAX',
            'Other Derivatives'
          ],
          data: [17.71, 12.70, 2.95, 1.95, 1.85, 1.75, 1.65, 1.23]
        }
      },
      {
        y: 10.70,
        color: colors[3],
        drilldown: {
          name: 'Cash',
          categories: ['Cash Position'],
          data: [10.70]
        }
      }
    ];

    const portfolioData = [];
    const holdingsData = [];
    const dataLen = data.length;

    let i, j, drillDataLen, brightness;

    // Build the data arrays
    for (i = 0; i < dataLen; i += 1) {
      // add portfolio category data
      portfolioData.push({
        name: categories[i],
        y: data[i].y,
        color: data[i].color
      });

      // add holdings data
      drillDataLen = data[i].drilldown.data.length;
      for (j = 0; j < drillDataLen; j += 1) {
        const name = data[i].drilldown.categories[j];
        brightness = 0.2 - (j / drillDataLen) / 5;
        holdingsData.push({
          name,
          y: data[i].drilldown.data[j],
          color: Highcharts.color(data[i].color).brighten(brightness).get()
        });
      }
    }

    setData({ portfolio: portfolioData, holdings: holdingsData });
    setLoading(false);
  }, []);

  const options = {
    chart: {
      type: 'pie',
      width: 500,
      height: 500,
      backgroundColor: 'transparent'
    },
    title: {
      text: 'Portfolio Allocation',
      style: {
        fontSize: '18px',
        fontWeight: 'bold'
      }
    },
    subtitle: {
      text: 'Inner ring shows categories, outer ring shows individual holdings'
    },
    plotOptions: {
      pie: {
        shadow: false,
        center: ['50%', '50%']
      }
    },
    tooltip: {
      valueSuffix: '%'
    },
    series: [{
      name: 'Categories',
      data: data?.portfolio || [],
      size: '50%',
      dataLabels: {
        color: '#ffffff',
        distance: '-40%',
        style: {
          fontWeight: 'bold'
        }
      }
    }, {
      name: 'Holdings',
      data: data?.holdings || [],
      size: '85%',
      innerSize: '60%',
      dataLabels: {
        format: '<b>{point.name}:</b> <span style="opacity: 0.5">{y}%</span>',
        filter: {
          property: 'y',
          operator: '>',
          value: 0.5
        },
        style: {
          fontWeight: 'normal',
          fontSize: '11px'
        }
      },
      id: 'holdings'
    }],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 400
        },
        chartOptions: {
          series: [{
          }, {
            id: 'holdings',
            dataLabels: {
              distance: 10,
              filter: {
                property: 'y',
                operator: '>',
                value: 1
              }
            }
          }]
        }
      }]
    },
    credits: {
      enabled: false
    }
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px' }}>
        <div>Loading portfolio data...</div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};

export default DonutChart;
