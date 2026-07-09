document.onreadystatechange = function () {
    if (document.readyState == "complete") {


        // Global settings for all graphs
        var general = {
            // responsive: false,
            maintainAspectRatio: false,
            categorySpacing: 0,
            elements: {
                line: {
                    tension: 0, // Disables bezier curves
                }
            },
            layout: {
                padding: {
                    left: 0,
                    right: 25,
                    top: 0,
                    bottom: 0
                }
            },
            legend: {
                display: false,
                position: 'bottom',
                onClick: function () {
                    alert("The label was clicked");
                },
                labels: {
                    fontSize: 14,
                    fontColor: '#000',
                    usePointStyle: true
                }
            },
            tooltips: {
                xPadding: 10,
                yPadding: 10,
                intersect: false, // If true, the hover mode only applies when the mouse position intersects an item on the chart
                bodyFontSize: 13,
                caretSize: 15,
                titleFontSize: 15,
                titleMarginBottom: 5,
                custom: function (tooltip) {
                    tooltip.displayColors = false; // disable displaying the color box;
                }
            }
        }

        // Unique settings for first set of graphs
        var unique = {
            scales: {
                yAxes: [{
                    stacked: false,
                    ticks: {
                        beginAtZero: true,
                        autoSkip: false
                    }
                }],
                xAxes: [{
                    stacked: false,
                    ticks: {
                        beginAtZero: true,
                        autoSkip: false
                    }
                    //     gridLines: {
                    //         color: 'transparent' // If you want to remove lines
                    //     }
                }]
            }
        };

        // Unique settings for second set of graphs
        var unique2 = {
            scales: {
                yAxes: [{
                    stacked: false,
                    ticks: {
                        beginAtZero: true
                        // mirror: true // To mirror values
                    }
                }],
                xAxes: [{
                    stacked: false,
                    barThickness: 40,
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        };

        // Unique settings for third set of graphs
        var unique3 = {
            cutoutPercentage: 30,
            plugins: {
                labels: {
                    render: 'percentage',
                    fontSize: 16,
                    fontStyle: 'bold',
                    fontColor: '#FFF',
                    fontFamily: 'Arial, Monaco, monospace'
                }
            }

        };
        var unique4 = {
            cutoutPercentage: 30,
            legend: {
                display: false
            },
            plugins: {
                labels: {
                    render: 'percentage',
                    fontSize: 16,
                    fontStyle: 'bold',
                    fontColor: '#FFF',
                    fontFamily: 'Arial, Monaco, monospace'
                }
            }
        };

        var unique5 = {
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                    stacked: false
                }],
                yAxes: [{
                    stacked: false
                }]
            },
            plugins: {
                labels: {
                    render: 'value'
                }
            }
        };

        // Join global settings with first set unique settings 
        var options = Object.assign({}, general, unique);
        var options2 = Object.assign({}, general, unique2);
        var options3 = Object.assign({}, general, unique3);
        var options4 = Object.assign({}, general, unique4);
        var options5 = Object.assign({}, general, unique5);

        /*----------  COMPANIES graphs  ----------*/

        // 1 graph

        var homeData2b = {
            labels: ["Agriculture", "Trade", "Finance", "Construction", "Mining", "Agriculture", "Trade", "Finance", "Construction", "Mining"],
            datasets: [{
                label: 'Top 10 Active',
                data: [2345, 2134, 1678, 1654, 1632, 1287, 1201, 867, 564, 518],
                backgroundColor: "#288ad6"
            }]
        };
        Chart.Bar('homeData2b', {
            data: homeData2b,
            options: options
        });

        // 2 graph

        var homeData2c = {
            labels: ["Agriculture", "Trade", "Finance", "Construction", "Mining", "Agriculture", "Trade", "Finance", "Construction", "Mining"],
            datasets: [{
                label: 'Top 10 Under Nankruptcy',
                data: [4532, 3214, 2654, 2654, 2364, 2356, 2345, 2134, 1678, 1654],
                backgroundColor: "#18bc9c"
            }]
        };
        Chart.Bar('homeData2c', {
            data: homeData2c,
            options: options
        });

        // Fourth graph

        var homeData2d = {
            labels: ["Agriculture", "Trade", "Finance", "Construction", "Mining", "Agriculture", "Trade", "Finance", "Construction", "Mining"],
            datasets: [{
                label: 'Top 10 Closed',
                data: [2345, 2134, 1678, 1654, 1632, 1287, 1201, 867, 564, 518],
                backgroundColor: "#f39c12"
            }]
        };
        Chart.Bar('homeData2d', {
            data: homeData2d,
            options: options
        });




    }
}