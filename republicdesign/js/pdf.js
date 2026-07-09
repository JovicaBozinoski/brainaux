var dd = {

    // pageSize: {height: 595.28, width: 841.89},
    // All sizes here https://github.com/bpampuch/pdfmake/blob/7b5675d5b9d5d7b815bd721e00504b16560a6382/src/standardPageSizes.js
    pageMargins: [30, 60, 30, 30],

    /*=============================================
                  Main Document Header       
     =============================================*/

    header: {
        style: 'tableHeader',
        table: {
            widths: ['*'],
            body: [
                [{
                    columns: [{
                            text: 'Regional Registry Portal',
                            style: 'sectionMainTitle'
                        },
                        {
                            text: [
                                'www.rrportal.com'
                            ],
                            style: 'normalWhite'
                        }
                    ],
                    margin: [10, 10, 10, 10]
                }]
            ]
        },
        layout: 'noBorders'
    },

    content: [

        /*=============================================
                      Main table Content       
        =============================================*/

        {
            text: 'Basic company profile',
            style: 'header'
        },
        {
            text: 'BIZNIS TRADE DOO BEOGRAD, OLGE ALKALAJ 5/1',
            style: 'subheader'
        },

        /*----------  Table titles  ----------*/

        {
            text: 'Filters applied:',
            style: 'sectionTableTitle'
        },

        /*----------  Filters Applied  ----------*/
        {
            style: 'tableCustom',
            table: {
                widths: ['*', '*', '*', '*'],
                body: [
                    [{
                            colSpan: 4,
                            stack: [{
                                    text: [
                                        'Language: ',
                                        {
                                            text: 'English',
                                            style: 'smallBold'
                                        }
                                    ]
                                },
                                {
                                    text: [
                                        'Currency: ',
                                        {
                                            text: 'EUR',
                                            style: 'smallBold'
                                        }
                                    ]
                                },
                                {
                                    text: [
                                        'Units: ',
                                        {
                                            text: 'Thousands',
                                            style: 'smallBold'
                                        }
                                    ]
                                }
                            ]
                        },
                        {},
                        {},
                        {}
                    ],
                    [{
                            stack: [{
                                    text: [
                                        'Country: ',
                                        {
                                            text: 'All',
                                            style: 'smallBold'
                                        }
                                    ]
                                },
                                {
                                    text: [
                                        'Sector: ',
                                        {
                                            text: 'All',
                                            style: 'smallBold'
                                        }
                                    ]
                                },
                                {
                                    text: [
                                        'Activity: ',
                                        {
                                            text: 'All',
                                            style: 'smallBold'
                                        }
                                    ]
                                },
                                {
                                    text: [
                                        'Size: ',
                                        {
                                            text: 'All',
                                            style: 'smallBold'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            stack: [{
                                    text: [
                                        'Total assets: ',
                                        {
                                            text: 'All',
                                            style: 'smallBold'
                                        }
                                    ]
                                },
                                {
                                    text: [
                                        'Equity capital: ',
                                        {
                                            text: 'All',
                                            style: 'smallBold'
                                        }
                                    ]
                                },
                                {
                                    text: [
                                        'Net profit (loss): ',
                                        {
                                            text: 'All',
                                            style: 'smallBold'
                                        }
                                    ]
                                },
                                {
                                    text: [
                                        'No. of employees:: ',
                                        {
                                            text: 'All',
                                            style: 'smallBold'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            stack: [{
                                    text: [
                                        'Total revenues:: ',
                                        {
                                            text: 'All',
                                            style: 'smallBold'
                                        }
                                    ]
                                },
                                {
                                    text: [
                                        'Operating revenues:: ',
                                        {
                                            text: 'All',
                                            style: 'smallBold'
                                        }
                                    ]
                                },
                                {
                                    text: [
                                        'ROE: ',
                                        {
                                            text: 'All',
                                            style: 'smallBold'
                                        }
                                    ]
                                },
                                {
                                    text: [
                                        'ROA: ',
                                        {
                                            text: 'All',
                                            style: 'smallBold'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            stack: [{
                                    text: [
                                        'Net sales per employee: ',
                                        {
                                            text: 'All',
                                            style: 'smallBold'
                                        }
                                    ]
                                },
                                {
                                    text: [
                                        'Net profit (loss) per employee: ',
                                        {
                                            text: 'All',
                                            style: 'smallBold'
                                        }
                                    ]
                                },
                                {
                                    text: [
                                        'Debt to Equity ratio: ',
                                        {
                                            text: 'All',
                                            style: 'smallBold'
                                        }
                                    ]
                                },
                                {
                                    text: [
                                        'Current ratio: ',
                                        {
                                            text: 'All',
                                            style: 'smallBold'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                ]
            },

            /*----------  Filters Applied table styles  ----------*/
            layout: {
                hLineWidth: function (i, node) {
                    return (i === 0 || i === node.table.body.length) ? 1 : 1;
                },
                vLineWidth: function (i, node) {
                    return (i === 0 || i === node.table.widths.length) ? 1 : 1;
                },
                hLineColor: function (i, node) {
                    return (i === 0 || i === node.table.body.length) ? '#CCCCCC' : '#DDDDDD';
                },
                vLineColor: function (i, node) {
                    return (i === 0 || i === node.table.widths.length) ? '#CCCCCC' : '#DDDDDD';
                },
                paddingLeft: function (i, node) {
                    return 10;
                },
                paddingRight: function (i, node) {
                    return 10;
                },
                paddingTop: function (i, node) {
                    return 10;
                },
                paddingBottom: function (i, node) {
                    return 10;
                },
                fillColor: function (i, node) {
                    return '#FCFCFC';
                }
            }
        },

        /*----------  Table titles  ----------*/
        {
            text: 'Main Report Table',
            style: 'sectionTableTitle'
        },

        /*----------  Main Report Table  ----------*/
        {
            style: 'tableCustom',
            table: {
                widths: ['*'],
                body: [
                    [{
                        stack: [{
                                text: 'Identification',
                                style: 'sectionTitle'
                            },
                            {
                                text: [
                                    'Country: ',
                                    {
                                        text: 'Serbia',
                                        style: 'normalBold'
                                    }
                                ],
                                style: 'normal'
                            },
                            {
                                text: [
                                    'Authorized register: ',
                                    {
                                        text: 'Company register',
                                        style: 'normalBold'
                                    }
                                ],
                                style: 'normal'
                            },
                            {
                                text: [
                                    'Legal Entity Identification number (LEID): ',
                                    {
                                        text: '20330058',
                                        style: 'normalBold'
                                    }
                                ],
                                style: 'normal'
                            },
                            {
                                text: [
                                    'Tax registration number: ',
                                    {
                                        text: '105162446',
                                        style: 'normalBold'
                                    }
                                ],
                                style: 'normal'
                            }

                        ]
                    }],

                    [{
                        stack: [{
                                text: 'Legal status:',
                                style: 'sectionTitle'
                            },
                            {
                                text: [
                                    'Legal status:: ',
                                    {
                                        text: 'Active',
                                        style: 'normalBoldGreen'
                                    }
                                ],
                                style: 'normal'
                            }

                        ]
                    }],

                    [{
                        stack: [{
                                text: 'Image graph:',
                                style: 'sectionTitle'
                            },
                            {
                                image: 'sampleImage.jpg',
                                fit: [510, 100000]
                            }

                        ]
                    }]

                ]
            },

            /*----------  Main table styles  ----------*/
            layout: {
                hLineWidth: function (i, node) {
                    return (i === 0 || i === node.table.body.length) ? 1 : 1;
                },
                vLineWidth: function (i, node) {
                    return (i === 0 || i === node.table.widths.length) ? 1 : 1;
                },
                hLineColor: function (i, node) {
                    return (i === 0 || i === node.table.body.length) ? '#CCCCCC' : '#DDDDDD';
                },
                vLineColor: function (i, node) {
                    return (i === 0 || i === node.table.widths.length) ? '#CCCCCC' : '#DDDDDD';
                },
                paddingLeft: function (i, node) {
                    return 10;
                },
                paddingRight: function (i, node) {
                    return 10;
                },
                paddingTop: function (i, node) {
                    return 10;
                },
                paddingBottom: function (i, node) {
                    return 10;
                },
                fillColor: function (i, node) {
                    return (i % 2 === 0) ? null : '#FCFCFC';
                }
            }
        },

        /*----------  Table titles  ----------*/
        {
            pageBreak: "before", // or after if needed
            text: 'Main Data Table',
            style: 'sectionTableTitle'
        },

        /*----------  Main Data Table  ----------*/
        {
            style: 'tableCustom',
            table: {
                widths: ['*', '*', '*'],
                body: [
                    [{
                            colSpan: 2,
                            text: 'Header with Colspan = 2',
                            style: 'normalBold'
                        },
                        {},
                        {
                            text: 'Header 3',
                            style: 'normalBold'
                        }
                    ],
                    [{
                            text: 'Header 1',
                            style: 'normalBold'
                        },
                        {
                            text: 'Header 2',
                            style: 'normalBold'
                        },
                        {
                            text: 'Header 3',
                            style: 'normalBold'
                        }
                    ],
                    [
                        'Morbi in nibh gravida, egestas eros in, imperdiet diam.',
                        'Quisque nec mi at lorem condimentum semper quis quis neque.',
                        'Vestibulum vel sem sit amet est scelerisque gravida.'
                    ],
                    [{
                            rowSpan: 3,
                            text: 'rowSpan set to 3'
                        },
                        'Fusce et nisi at eros eleifend consectetur.',
                        'Sample value 3'
                    ],
                    [
                        '',
                        'Nulla sed ante in massa volutpat porta.',
                        'Praesent varius orci sed rhoncus efficitur.'
                    ],
                    [
                        'In tincidunt ante eu nulla cursus molestie.',
                        'In non velit tempor a et ligula.',
                        'Donec vulputate mi quis semper.'
                    ],
                    [
                        'Sample value 1',
                        {
                            colSpan: 2,
                            rowSpan: 2,
                            text: 'Info:\nnew line here'
                        }
                    ],
                    ['Sample value']
                ]
            },

            /*----------  Main table styles  ----------*/
            layout: {
                hLineWidth: function (i, node) {
                    return (i === 0 || i === node.table.body.length) ? 1 : 1;
                },
                vLineWidth: function (i, node) {
                    return (i === 0 || i === node.table.widths.length) ? 1 : 1;
                },
                hLineColor: function (i, node) {
                    return (i === 0 || i === node.table.body.length) ? '#CCCCCC' : '#DDDDDD';
                },
                vLineColor: function (i, node) {
                    return (i === 0 || i === node.table.widths.length) ? '#CCCCCC' : '#DDDDDD';
                },
                paddingLeft: function (i, node) {
                    return 4;
                },
                paddingRight: function (i, node) {
                    return 4;
                },
                paddingTop: function (i, node) {
                    return 4;
                },
                paddingBottom: function (i, node) {
                    return 4;
                }
            }
        }
    ],

    /*=============================================
                   Content styles      
    =============================================*/

    styles: {
        sectionMainTitle: {
            fontSize: 16,
            bold: true,
            color: 'white'
        },
        header: {
            fontSize: 18,
            bold: true
        },
        subheader: {
            fontSize: 15,
            bold: false,
            margin: [0, 0, 0, 20],
        },
        sectionTableTitle: {
            fontSize: 12,
            bold: true,
            color: '#3CA773',
            margin: [0, 0, 0, 10],
        },
        sectionTitle: {
            fontSize: 13,
            bold: true,
            margin: [0, 0, 0, 10],
        },
        normal: {
            fontSize: 11,
            bold: false
        },
        normalBold: {
            fontSize: 11,
            bold: true
        },
        small: {
            fontSize: 10,
            bold: false
        },
        smallBold: {
            fontSize: 10,
            bold: true
        },
        normalWhite: {
            fontSize: 11,
            bold: true,
            color: 'white',
            alignment: 'right',
            margin: [0, 2, 0, 0]
        },
        normalBoldGreen: {
            fontSize: 11,
            bold: true,
            color: 'green'
        },
        normalBoldRed: {
            fontSize: 11,
            bold: true,
            color: 'red'
        },
        tableCustom: {
            fontSize: 9,
            margin: [0, 0, 0, 20],
        },
        tableCustomSmall: {
            fontSize: 8,
            margin: [0, 0, 0, 20],
        },
        tableHeader: {
            height: 200,
            fillColor: '#3ca773'
        }
    }
};