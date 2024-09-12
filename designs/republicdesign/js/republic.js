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
                display: true,
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

        //  Show data on pie charts 
        // Chart.plugins.register({
        //     afterDatasetsDraw: function (chartInstance, easing) {
        //         // To only draw at the end of animation, check for easing === 1
        //         var ctx = chartInstance.chart.ctx;
        //         chartInstance.data.datasets.forEach(function (dataset, i) {
        //             var meta = chartInstance.getDatasetMeta(i);
        //             if (!meta.hidden) {
        //                 meta.data.forEach(function (element, index) {
        //                     // Draw the text in black, with the specified font
        //                     ctx.fillStyle = 'white';
        //                     var fontSize = 14;
        //                     var fontStyle = 'bold';
        //                     var fontFamily = 'Arial';
        //                     ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
        //                     // Just naively convert to string for now
        //                     var dataString = dataset.data[index].toString();
        //                     // Make sure alignment settings are correct
        //                     ctx.textAlign = 'center';
        //                     ctx.textBaseline = 'center';
        //                     var padding = 0;
        //                     var position = element.tooltipPosition();
        //                     ctx.fillText(dataString + '%', position.x, position.y - (fontSize / 2) - 6);
        //                 });
        //             }
        //         });
        //     }
        // });

        //  Data for Capital 
        var data1 = {
            labels: ["Cash capital", "Non-cash capital"],
            datasets: [{
                fill: true,
                backgroundColor: [
                    '#e86740',
                    '#0079c2'
                ],
                hoverBackgroundColor: [
                    '#e86740',
                    '#0079c2'
                ],
                hoverBorderColor: [
                    '#ffffff',
                    '#ffffff'
                ],
                data: [4, 96]
            }]
        };
        Chart.Doughnut('chart1', {
            data: data1,
            options: options3
        });

        var data2 = {
            labels: ["Paid capital", "Non-paid capital"],
            datasets: [{
                fill: true,
                backgroundColor: [
                    '#e86740',
                    '#0079c2'
                ],
                data: [14, 86]
            }]
        };
        Chart.Doughnut('chart2', {
            data: data2,
            options: options3
        });

        //  Data for Ownership 
        var data3 = {
            labels: ["Knauf Group", "Beatriks Peter - Knauf"],
            datasets: [{
                fill: true,
                backgroundColor: [
                    '#6e5ea5',
                    '#e86740'
                ],
                data: [55, 45]
            }]
        };
        Chart.Doughnut('chart3', {
            data: data3,
            options: options3
        });

        //  Data for COUNTRY OUTLOOK 
        var data4 = {
            labels: ["Macedonia", "Slovenia", "Croatia", "Bosnia and Herzegovina", "Albania", "Romania", "Montenegro"],
            datasets: [{
                fill: true,
                backgroundColor: [
                    'rgba(0,122,194,0.8)',
                    'rgba(60,167,115,0.8)',
                    'rgba(109,94,165,0.8)',
                    'rgba(232,104,67,0.8)',
                    'rgba(214,161,81,0.8)',
                    'rgba(142,198,63,0.8)',
                    'rgba(42,171,228,0.8)',
                    'rgba(51,51,51,0.8)'
                ],
                borderColor: [
                    '#007ac2',
                    '#3ca773',
                    '#6d5ea5',
                    '#e86843',
                    '#d6a151',
                    '#8ec63f',
                    '#2aabe4',
                    '#333333'
                ],
                borderWidth: 3,
                data: [18, 34, 26, 13, 2, 3, 4]
            }]
        };
        Chart.Doughnut('chart4', {
            data: data4,
            options: options3
        });

        var data5 = {
            labels: ["Macedonia", "Slovenia", "Croatia", "Bosnia and Herzegovina", "Albania", "Romania", "Montenegro"],
            datasets: [{
                fill: true,
                backgroundColor: [
                    'rgba(0,122,194,0.5)',
                    'rgba(60,167,115,0.5)',
                    'rgba(109,94,165,0.5)',
                    'rgba(232,104,67,0.5)',
                    'rgba(214,161,81,0.5)',
                    'rgba(142,198,63,0.5)',
                    'rgba(42,171,228,0.5)',
                    'rgba(51,51,51,0.5)'
                ],
                borderColor: [
                    '#007ac2',
                    '#3ca773',
                    '#6d5ea5',
                    '#e86843',
                    '#d6a151',
                    '#8ec63f',
                    '#2aabe4',
                    '#333333'
                ],
                borderWidth: 3,
                data: [12, 31, 24, 16, 3, 6, 11]
            }]
        };
        Chart.Doughnut('chart5', {
            data: data5,
            options: options3
        });

        var data6 = {
            labels: ["Macedonia", "Slovenia", "Croatia", "Bosnia and Herzegovina", "Albania", "Romania", "Montenegro", "Total"],
            datasets: [{
                label: "Total number of employees in the companies owned",
                backgroundColor: "rgba(0,122,194,0.5)",
                borderWidth: 3,
                borderColor: "#007ac2",
                data: [10777, 25273, 14576, 9115, 1241, 1997, 3983, 66673]
            }]
        };
        Chart.Bar('chart6', {
            data: data6,
            options: options
        });

        var data7 = {
            labels: ["Serbia", "Slovenia", "Croatia", "Bosnia", "Ex. Yugoslavia", "Albania", "Romania", "Montenegro"],
            datasets: [{
                fill: true,
                backgroundColor: [
                    '#3CA773',
                    '#007AC2',
                    '#E86741',
                    '#6D5EA5',
                    '#D8A252',
                    '#373B3C',
                    '#808080',
                    '#AAAAAA'
                ],
                data: [30, 33, 24, 5, 1, 4, 1, 2]
            }]
        };
        Chart.Doughnut('chart7', {
            data: data7,
            options: options3
        });

        var data8 = {
            labels: ["Serbia", "Slovenia", "Croatia", "Bosnia", "Ex. Yugoslavia", "Albania", "Romania", "Montenegro"],
            datasets: [{
                fill: true,
                backgroundColor: [
                    '#3CA773',
                    '#007AC2',
                    '#E86741',
                    '#6D5EA5',
                    '#D8A252',
                    '#373B3C',
                    '#808080',
                    '#AAAAAA'
                ],
                data: [39, 21, 17, 5, 7, 8, 2, 1]
            }]
        };
        Chart.Doughnut('chart8', {
            data: data8,
            options: options3
        });

        var data9 = {
            labels: ["Serbia", "Slovenia", "Croatia", "Bosnia", "Ex. Yugoslavia", "Albania", "Romania", "Montenegro", "TOTAL"],
            datasets: [{
                label: "Total number of employees in the companies owned",
                backgroundColor: "#007AC2",
                data: [3588, 1880, 2217, 448, 128, 434, 185, 148, 9029]
            }]
        };
        Chart.Bar('chart9', {
            options: options,
            data: data9
        });


        /*=============================================
                      Home page graphs          
        =============================================*/

        /*----------  UPDATES graphs  ----------*/

        // First graph

        var homeData1a = {
            labels: ["New", "Updated", "Deleted"],
            datasets: [{
                    label: 'Legal entities',
                    data: [3542, 2542, 1542],
                    backgroundColor: "#6D5EA5"
                    // hoverBorderColor: "#000",
                    // borderColor: "#000",
                    // borderWidth: 3,    
                },
                {
                    label: 'Persons',
                    data: [2042, 1542, 999],
                    backgroundColor: "#007AC2"
                }
            ]
        };
        Chart.Bar('homeData1a', {
            options: options3,
            data: homeData1a
        });

        // Second graph

        var homeData1b = {
            labels: ["Agriculture", "Trade", "Finance", "Construction", "Mining", "Agriculture", "Trade", "Finance", "Construction", "Mining", "Agriculture", "Trade", "Finance", "Construction", "Mining", "Agriculture", "Trade", "Finance", "Construction", "Mining"],
            datasets: [{
                label: 'Total number of updates',
                data: [4532, 3214, 2654, 2654, 2364, 2356, 2345, 2134, 1678, 1654, 1632, 1287, 1201, 867, 564, 518, 445, 223, 123, 123],
                backgroundColor: "#D8A252"
            }]
        };
        Chart.Bar('homeData1b', {
            data: homeData1b,
            options: options3
        });

        // var chart2 = document.getElementById('homeData2').getContext('2d');

        // var homeData2 = new Chart(chart2, {
        //     
        //     data: homeData2,
        //     options: options
        // });

        /*----------  COMPANIES graphs  ----------*/

        // First graph

        var homeData2a = {
            labels: ["Total"],
            datasets: [{
                    label: 'Total Active',
                    data: [4543],
                    backgroundColor: "#6D5EA5"
                },
                {
                    label: 'Total Under Bankruptcy',
                    data: [3522],
                    backgroundColor: "#007AC2"
                },
                {
                    label: 'Total Closed',
                    data: [2045],
                    backgroundColor: "#3CA773"
                }
            ]
        };
        Chart.Bar('homeData2a', {
            data: homeData2a,
            options: options
        });

        // Second graph

        var homeData2b = {
            labels: ["Agriculture", "Trade", "Finance", "Construction", "Mining", "Agriculture", "Trade", "Finance", "Construction", "Mining"],
            datasets: [{
                label: 'Top 10 Active',
                data: [2345, 2134, 1678, 1654, 1632, 1287, 1201, 867, 564, 518],
                backgroundColor: "#D8A252"
            }]
        };
        Chart.Bar('homeData2b', {
            data: homeData2b,
            options: options
        });

        // Third graph

        var homeData2c = {
            labels: ["Agriculture", "Trade", "Finance", "Construction", "Mining", "Agriculture", "Trade", "Finance", "Construction", "Mining"],
            datasets: [{
                label: 'Top 10 Under Nankruptcy',
                data: [4532, 3214, 2654, 2654, 2364, 2356, 2345, 2134, 1678, 1654],
                backgroundColor: "#E86741"
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
                backgroundColor: "#373b3c"
            }]
        };
        Chart.Bar('homeData2d', {
            data: homeData2d,
            options: options
        });

        /*----------  FINANCIALS graphs  ----------*/

        // First graph

        // var homeData3a = {
        //     labels: ["Total Assets", "Equity capital", "Total Revenues"],
        //     datasets: [{
        //             label: 'Limited liability Companies',
        //             data: [2543, 3522, 3045],
        //             backgroundColor: "#6D5EA5"
        //         },
        //         {
        //             label: 'Shareholding Companies',
        //             data: [2522, 3456, 2345],
        //             backgroundColor: "#007AC2"
        //         },
        //         {
        //             label: 'Sole Proprietors',
        //             data: [3045, 3065, 2544],
        //             backgroundColor: "#3CA773"
        //         }
        //     ]
        // };
        // Chart.Bar('homeData3a', {
        //     options: options3,
        //     data: homeData3a
        // });

        // Second graph

        var homeData3b = {
            labels: ["Agriculture", "Trade", "Finance", "Construction", "Mining", "Agriculture", "Trade", "Finance", "Construction", "Mining"],
            datasets: [{
                label: 'Top 10 Total Employees',
                data: [4532, 3214, 2654, 2654, 2364, 2356, 2345, 2134, 1678, 1654],
                backgroundColor: "#6D5EA5"
            }]
        };
        Chart.Bar('homeData3b', {
            data: homeData3b,
            options: options3
        });

        // Third graph

        var homeData3c = {
            labels: ["Agriculture", "Trade", "Finance", "Construction", "Mining", "Agriculture", "Trade", "Finance", "Construction", "Mining"],
            datasets: [{
                label: 'Top 10 Total Assets',
                data: [4532, 3214, 2654, 2654, 2364, 2356, 2345, 2134, 1678, 1654],
                backgroundColor: "#007ac2"
            }]
        };
        Chart.Bar('homeData3c', {
            data: homeData3c,
            options: options
        });

        // Forth graph

        var homeData3d = {
            labels: ["Agriculture", "Trade", "Finance", "Construction", "Mining", "Agriculture", "Trade", "Finance", "Construction", "Mining"],
            datasets: [{
                label: 'Top 10 Total Equity Capital',
                data: [1654, 1632, 1287, 1201, 867, 564, 518, 445, 223, 123],
                backgroundColor: "#D8A252"
            }]
        };
        Chart.Bar('homeData3d', {
            data: homeData3d,
            options: options
        });

        // Fifth graph

        var homeData3e = {
            labels: ["Agriculture", "Trade", "Finance", "Construction", "Mining", "Agriculture", "Trade", "Finance", "Construction", "Mining"],
            datasets: [{
                label: 'Top 10 Total Revenues',
                data: [2356, 2345, 2134, 1678, 1654, 1632, 1287, 1201, 867, 564],
                backgroundColor: "#E86741"
            }]
        };
        Chart.Bar('homeData3e', {
            data: homeData3e,
            options: options
        });

        //  Home Pie 1
        var homeDataPie1 = {
            labels: ["Macedonia", "Serbia"],
            datasets: [{
                fill: true,
                backgroundColor: [
                    'rgba(0,122,194,1)',
                    'rgba(60,167,115,1)'
                ],
                borderColor: [
                    '#007AC2',
                    '#3CA773'
                ],
                borderWidth: 3,
                data: [1739, 2074]
            }]
        };
        var hDB1 = document.getElementById("homeDataPie1");
        var homeDataPie1 = new Chart(hDB1, {
            type: 'pie',
            data: homeDataPie1,
            options: options4
        });

        //  Home Pie 2
        var homeDataPie2 = {
            labels: ["Limited Liability Company", "Public Enterprise", "Joint Stock Company", "Public Joint Stock Company", "Private Joint Stock Company", "General partnership", "Limited Partnership", "Subsiduary of a foreign entity", "Foreign representative office", "Sole proprietor", "Non-government organizations", "Cooperative", "Cooperative association"],
            datasets: [{
                fill: true,
                backgroundColor: [
                    'rgba(0,122,194,1)',
                    'rgba(60,167,115,1)',
                    'rgba(109,94,165,1)',
                    'rgba(232,104,67,1)',
                    'rgba(214,161,81,1)',
                    'rgba(142,198,63,1)',
                    'rgba(42,171,228,1)',
                    'rgba(148,148,148,1)',
                    'rgba(145,112,118,1)',
                    'rgba(198,217,112,1)',
                    'rgba(227,187,42,1)',
                    'rgba(87,137,150,1)',
                    'rgba(218,98,120,1)'
                ],
                borderColor: [
                    '#007AC2',
                    '#3CA773',
                    '#6D5EA5',
                    '#E86843',
                    '#D6A151',
                    '#8EC63F',
                    '#2AABE4',
                    '#949494',
                    '#917076',
                    '#C6D970',
                    '#E3BB2A',
                    '#578996',
                    '#DA6278'
                ],
                borderWidth: 3,
                data: [1834, 3426, 2665, 1332, 2345, 3231, 4453, 1824, 3412, 2613, 1356, 2345, 3212]
            }]
        };
        var hDB2 = document.getElementById("homeDataPie2");
        var homeDataPie2 = new Chart(hDB2, {
            type: 'pie',
            data: homeDataPie2,
            options: options4
        });

        var homeDataPie2a = {
            labels: ["Limited Liability Company", "Public Enterprise", "Joint Stock Company", "Public Joint Stock Company", "Private Joint Stock Company", "General partnership", "Limited Partnership", "Subsiduary of a foreign entity", "Foreign representative office", "Sole proprietor", "Non-government organizations", "Cooperative", "Cooperative association"],
            datasets: [{
                fill: true,
                backgroundColor: [
                    'rgba(0,122,194,1)',
                    'rgba(60,167,115,1)',
                    'rgba(109,94,165,1)',
                    'rgba(232,104,67,1)',
                    'rgba(214,161,81,1)',
                    'rgba(142,198,63,1)',
                    'rgba(42,171,228,1)',
                    'rgba(51,51,51,1)',
                    'rgba(148,148,148,1)',
                    'rgba(145,112,118,1)',
                    'rgba(198,217,112,1)',
                    'rgba(247,197,4,1)',
                    'rgba(218,98,120,1)'
                ],
                borderColor: [
                    '#007AC2',
                    '#3CA773',
                    '#6D5EA5',
                    '#E86843',
                    '#D6A151',
                    '#8EC63F',
                    '#2AABE4',
                    '#333333',
                    '#949494',
                    '#917076',
                    '#C6D970',
                    '#F7C504',
                    '#da6278'
                ],
                borderWidth: 3,
                data: [1834, 3426, 2665, 1332, 2345, 3231, 4453, 1824, 3412, 2613, 1356, 2345, 3212]
            }]
        };

        var hDB2a = document.getElementById("homeDataPie2a");
        var homeDataPie2a = new Chart(hDB2a, {
            type: 'pie',
            data: homeDataPie2a,
            options: options4
        });

        //  Home Pie 3
        var homeDataPie3 = {
            labels: ["Active", "Closed", "Under bankruptcy", "Under liquidation"],
            datasets: [{
                fill: true,
                backgroundColor: [
                    'rgba(0,122,194,1)',
                    'rgba(60,167,115,1)',
                    'rgba(109,94,165,1)',
                    'rgba(232,104,67,1)'
                ],
                borderColor: [
                    '#007AC2',
                    '#3CA773',
                    '#6D5EA5',
                    '#E86843'
                ],
                borderWidth: 3,
                data: [1324, 789, 652, 953]
            }]
        };

        var hDB3 = document.getElementById("homeDataPie3");
        var homeDataPie3 = new Chart(hDB3, {
            type: 'pie',
            data: homeDataPie3,
            options: options4
        });

        var homeDataPie3a = {
            labels: ["Active", "Closed", "Under bankruptcy", "Under liquidation"],
            datasets: [{
                fill: true,
                backgroundColor: [
                    'rgba(0,122,194,1)',
                    'rgba(60,167,115,1)',
                    'rgba(109,94,165,1)',
                    'rgba(232,104,67,1)'
                ],
                borderColor: [
                    '#007AC2',
                    '#3CA773',
                    '#6D5EA5',
                    '#E86843'
                ],
                borderWidth: 3,
                data: [1324, 789, 652, 953]
            }]
        };

        var hDB3a = document.getElementById("homeDataPie3a");
        var homeDataPie3a = new Chart(hDB3a, {
            type: 'pie',
            data: homeDataPie3a,
            options: options4
        });

        //  Home Graph 4
        var homeDataBar4 = {
            labels: [
                "Agriculture, forestry and fishing",
                "Mining and quarrying",
                "Manufacturing",
                "Electricity, gas, steam and air conditioning supply",
                "Water supply, sewerage, waste management and remediation activities",
                "Construction",
                "Wholesale and retail trade, repair of motor vehicles and motorcycles",
                "Transportation and storage",
                "Accommodation and food service activities",
                "Information and communication",
                "Financial and insurance activities",
                "Real estate activities",
                "Professional, scientific and technical activities",
                "Administrative and support service activities",
                "Public administration and defence, compulsory social security",
                "Education",
                "Human health and social work activities",
                "Arts, entertainment and recreation",
                "Other service activities",
                "Household activities",
                "Extraterritorial organizations and bodies service activities"
            ],
            datasets: [{
                    label: "Macedonia",
                    data: [727, 589, 234, 254, 876, 945, 234, 123, 537, 234, 123, 234, 254, 876, 945, 234, 123, 254, 123, 537, 234],
                    backgroundColor: 'rgba(0,122,194,1)'
                },
                {
                    label: "Serbia",
                    data: [238, 553, 403, 123, 235, 546, 123, 254, 678, 879, 728, 727, 589, 234, 254, 876, 945, 234, 254, 876, 945],
                    backgroundColor: 'rgba(60,167,115,1)'
                }
            ]
        }
        var hDB4 = document.getElementById("homeDataBar4");
        var homeDataBar4 = new Chart(hDB4, {
            type: 'horizontalBar',
            data: homeDataBar4,
            options: options5
        });


        //  Home Graph 5
        var homeDataBar5 = {
            labels: [
                "Agriculture, forestry and fishing",
                "Mining and quarrying",
                "Manufacturing",
                "Electricity, gas, steam and air conditioning supply",
                "Water supply, sewerage, waste management and remediation activities",
                "Construction",
                "Wholesale and retail trade, repair of motor vehicles and motorcycles",
                "Transportation and storage",
                "Accommodation and food service activities",
                "Information and communication",
                "Financial and insurance activities",
                "Real estate activities",
                "Professional, scientific and technical activities",
                "Administrative and support service activities",
                "Public administration and defence, compulsory social security",
                "Education",
                "Human health and social work activities",
                "Arts, entertainment and recreation",
                "Other service activities",
                "Household activities",
                "Extraterritorial organizations and bodies service activities"
            ],
            datasets: [{
                    label: "Macedonia",
                    data: [727, 589, 234, 254, 876, 945, 234, 123, 537, 234, 123, 234, 254, 876, 945, 234, 123, 254, 123, 537, 234],
                    backgroundColor: 'rgba(0,122,194,1)'
                },
                {
                    label: "Serbia",
                    data: [238, 553, 403, 123, 235, 546, 123, 254, 678, 879, 728, 727, 589, 234, 254, 876, 945, 234, 254, 876, 945],
                    backgroundColor: 'rgba(60,167,115,1)'
                }
            ]
        }
        var hDB5 = document.getElementById("homeDataBar5");
        var homeDataBar5 = new Chart(hDB5, {
            type: 'horizontalBar',
            data: homeDataBar5,
            options: options5
        });

        //  Home Pie 5
        var homeDataPie5 = {
            labels: ["Active Owners", "Active Managers & authorized persons"],
            datasets: [{
                fill: true,
                backgroundColor: [
                    'rgba(0,122,194,1)',
                    'rgba(60,167,115,1)'
                ],
                borderColor: [
                    '#007AC2',
                    '#3CA773'
                ],
                borderWidth: 3,
                data: [1739, 2074]
            }]
        };

        var hDB6 = document.getElementById("homeDataPie5");
        var homeDataPie5 = new Chart(hDB6, {
            type: 'pie',
            data: homeDataPie5,
            options: options4
        });


        //  Home Pie 5
        var homeDataPie5a = {
            labels: ["Active Owners", "Active Managers & authorized persons"],
            datasets: [{
                fill: true,
                backgroundColor: [
                    'rgba(0,122,194,1)',
                    'rgba(60,167,115,1)'
                ],
                borderColor: [
                    '#007AC2',
                    '#3CA773'
                ],
                borderWidth: 3,
                data: [1739, 2074]
            }]
        };

        var hDB6a = document.getElementById("homeDataPie5a");
        var homeDataPie5a = new Chart(hDB6a, {
            type: 'pie',
            data: homeDataPie5a,
            options: options4
        });

    }
}






if (window.XMLHttpRequest) {
    var fileReq = new XMLHttpRequest();
    var xhr = new XMLHttpRequest();
} else {
    var fileReq = new XDomainRequest();
    var xhr = new XDomainRequest();
}

// if ('withCredentials' in fileReq) {
//     console.log('Browser supports CORS.');
// } else {
//     console.log('Browser does not support CORS.');
// }

var method = "GET";
var url = "https://jsonblob.com/api/jsonBlob/98e6c747-68cf-11e8-94d5-33dc905f8e41"; // API or url to send the request to
// Edit address: https://jsonblob.com/98e6c747-68cf-11e8-94d5-33dc905f8e41

fileReq.onreadystatechange = function () {
    // KNowing the readyState and status outputs we can check for sucessfull finished request
    if (this.readyState == 4 && this.status == 200) {
        var toObject = JSON.parse(fileReq.responseText) // Convert the string from JSON to object
        // console.log(toObject); // Check the result in browser's console
        document.getElementById('content2').innerHTML = toObject.subjects[1].lib + ' uses ' + toObject.subjects[0].lang + '.' + ' The teacher is ' + toObject.teachers[0].first;
    }
};

fileReq.open(method, url);

// fileReq.withCredentials = true;
// fileReq.setRequestHeader('Content-Type', 'application/json'); 

fileReq.send('{"people":["fred", "mark", "jovica"]}'); // Sends the request



// var Promise = new Promise(function (resolve, reject) {

//     resolve = "I am true, I will pass";
//     reject = "Promisse didn't execute"
//     console.log(resolve)
//     console.log(reject); // Hell yeah

// })



// })
// chainPromisses.then(function (takesResolveArgument) { // Can take a callback .then(callback).then(callback)
//     console.log(takesResolveArgument) // Everything was finished
// }).catch(function (takesRejectArgument) {
//     console.log(takesRejectArgument) // Something was not finished
// })




// // let chainPromisses = function(value) {
// //     return new Promise(function (resolve, reject) {
// //         setTimeout(function () {
// //             if (typeof value === 'number') {
// //                 resolve(value + 1);
// //             } else {
// //                 reject('Arguments must be numbers');
// //             }
// //         }, 5000);
// //     });
// // };

// // chainPromisses(0)
// //     .then(function (result) {
// //         console.log(result);
// //         return chainPromisses(result);
// //     })
// //     .then(function (result) {
// //         console.log(result);
// //         return chainPromisses(result);
// //     })
// //     .then(function (result) {
// //         console.log(result);
// //         return chainPromisses(result);
// //     })
// //     .catch(function (errorMessage) {
// //         console.log(errorMessage);
// //     })

// // function chainPromisses(value) {
// //     return new Promise(function (resolve, reject) {
// //         if (typeof value === 'number') {
// //             resolve(value);
// //         } else {
// //             reject('Arguments must be numbers');
// //         }
// //     });
// // }

// // chainPromisses(1)
// //     .then(executeFirst)
// //     .then(executeSecond)
// //     .then(executeThird)
// //     .catch(function (errorMessage) {
// //         console.log(errorMessage);
// //     })


// // function executeFirst(value) {
// //     console.log(value);
// //     return new Promise(function (resolve, reject) {
// //         setTimeout(function () {
// //             resolve(value + 1);
// //         }, 5000);
// //     });
// // }

// // function executeSecond(da) {
// //     console.log(da);
// //     return new Promise(function (resolve, reject) {
// //         setTimeout(function () {
// //             resolve(da + 1);
// //         }, 5000);
// //     });
// // }

// // function executeThird(ne) {
// //     console.log(ne);
// //     return new Promise(function (resolve, reject) {
// //         setTimeout(function () {
// //             resolve(ne + 1);
// //         }, 5000);
// //     });
// // }

// // function chainPromisses(value) {
// //     return new Promise(function (resolve, reject) {
// //         if (typeof value === 'number') {
// //             resolve(value);
// //         } else {
// //             reject('Arguments must be numbers');
// //         }
// //     });
// // }


// // function testPromisse(argument) {
// //     return new Promise(function (resolve, reject) {
// //         resolve(argument);
// //         reject("Some error happened")
// //     });
// // }

// // function executeNext(catchResponse) {
// //     console.log(catchResponse);
// //     return catchResponse + 1
// // }

// // testPromisse(1)
// //     .then(executeNext)
// //     .then(function (catchResponse2) {
// //         console.log(catchResponse2);
// //     })
// //     .catch(function (errorMessage) {
// //         console.log(errorMessage);
// //     })

// // function myPromisse(argument) {
// //     return new Promise(function (resolve, reject) {
// //         resolve(argument);
// //         reject("Some error happened");
// //     });
// // }

// // function executeNext(catchResponse) {
// //     console.log(catchResponse);
// //     return catchResponse[1] + catchResponse[2]
// // }

// // myPromisse([1, 2, 3])
// //     .then(executeNext)
// //     .then(function (catchResponse2) {
// //         console.log(catchResponse2);
// //     })
// //     .catch(function (errorMessage) {
// //         console.log(errorMessage);
// //     })



// // var myPromisse = function () {
// //     return Promise.resolve([1, 2, 3])
// // }

// // function executeNext(catchResponse) {
// //     console.log(catchResponse);
// //     return catchResponse[1] + catchResponse[2]
// // }

// // myPromisse()
// //     .then(executeNext)
// //     .then(function (catchResponse2) {
// //         console.log(catchResponse2);
// //     })
// //     .catch(function (errorMessage) {
// //         console.log(errorMessage);
// //     })

// // var promise1 = Promise.resolve(1);

// // promise1.then(function (value) {
// //     console.log(value);
// // });




// let promise = new Promise(function (resolve, reject) {
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
// });

// function promise() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => reject(new Error("Whoops!")), 1000); // Ne 
//     });
// }







// var myPromise = new Promise(function (resolve, reject) {
//     resolve('Promise value');
//     reject('Unable to fulfill promise');
// });

// // myPromise
// //     .then(function (catchResolveValue, throwError) {
// //         console.log(catchResolveValue);
// //     }).catch(function (catchRejectError) {
// //         console.log(catchRejectError)
// //     })


// // 02
// // function myPromise(argument) {
// //     return new Promise(function (resolve, reject) {
// //         resolve(argument);
// //         reject('Unable to fulfill promise');
// //     });
// // }
// // myPromise('Promise value')
// //     .then(function (catchResolveValue) {
// //         console.log(catchResolveValue);
// //     }).catch(function (catchRejectError) {
// //         console.log(catchRejectError)
// //     })


// // 03
// // function myPromise(argument1, argument2) {
// //     return new Promise(function (resolve, reject) {
// //         var double = (argument1 + argument2) * 2;
// //         resolve(double);
// //         reject('Unable to fulfill promise');
// //     });
// // }
// // myPromise(2, 3)
// //     .then(function (catchResolveValue) {
// //         console.log(catchResolveValue);
// //     }).catch(function (catchRejectError) {
// //         console.log(catchRejectError)
// //     })


// // 04
// // var myPromise = Promise.resolve('Promise value');

// // myPromise
// //     .then(function (catchResolveValue) {
// //         console.log(catchResolveValue);
// //     }).catch(function (catchRejectError) {
// //         console.log(catchRejectError)
// //     })

// // 05
// // var myPromise = new Promise(function (resolve, reject) {

// //     if (window.XMLHttpRequest) {
// //         var fileReq = new XMLHttpRequest();
// //     } else {
// //         var fileReq = new XDomainRequest();
// //     }
// //     if ('withCredentials' in fileReq) {
// //         console.log('Browser supports CORS.');
// //     } else {
// //         console.log('Browser does not support CORS.');
// //     }
// //     var method = "GET";
// //     var url = "https://jsonblob.com/api/jsonBlob/98e6c747-68cf-11e8-94d5-33dc905f8e4";

// //     fileReq.onreadystatechange = function () {
// //         if (this.readyState == 4 && this.status == 404) {
// //             reject('Unable to fulfill promise with status ' + this.status);
// //         } else if (this.readyState == 4 && this.status == 200) {
// //             var toObject = JSON.parse(fileReq.responseText);
// //             resolve(toObject);
// //         }
// //     };

// //     fileReq.open(method, url);
// //     fileReq.send();
// // });

// myPromise
//     .then(function (catchResolveValue) {
//         console.log('We got the JSON file, here it is:');
//         console.log(catchResolveValue);
//     }).catch(function (catchRejectError) {
//         console.log(catchRejectError)
//     })

// function a(parameter) {
//     if (parameter || func()) { // Logical or || checks for true statement 
//         console.log("Function executed");
//     }
// }