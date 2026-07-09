var dd = {

    // pageSize: {height: 595.28, width: 841.89},
    // All sizes here https://github.com/bpampuch/pdfmake/blob/7b5675d5b9d5d7b815bd721e00504b16560a6382/src/standardPageSizes.js
    pageMargins: [30, 60, 30, 30],
    pageOrientation: 'landscape',

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
                        text: 'BIFIDEX',
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
            text: 'INVOICE',
            alignment: 'center',
            style: 'header'
        },
        {
            text: '(ALREADY PAID)',
            alignment: 'center',
            style: 'subheader'
        },

        /*----------  Table titles  ----------*/
        {
            text: 'General Invoice Information:',
            alignment: 'center',
            style: 'sectionTableTitle'
        },

        /*----------  Filters Applied  ----------*/
        {
            style: 'tableCustom',
            table: {
                widths: ['*', '*', '*', '*', '*'],
                body: [
                    [{
                        colSpan: 5,
                        alignment: 'center',
                        stack: [{
                            text: [
                                'Supplier name: ',
                                {
                                    text: 'REGIONAL REGISTRY PORTAL LTD',
                                    style: 'smallBold'
                                }
                            ]
                        },
                        {
                            text: [
                                'Supplier address: ',
                                {
                                    text: 'RAMPO LEVKATA br.13A SKOPJE, Macedonia',
                                    style: 'smallBold'
                                }
                            ]
                        },
                        {
                            text: [
                                'Supplier VAT No: ',
                                {
                                    text: '123456789123',
                                    style: 'smallBold'
                                }
                            ]
                        }
                        ]
                    },
                    {},
                    {},
                    {},
                    {}
                    ],
                    [{
                        stack: [{
                            text: [
                                'Invoice number: ',
                                {
                                    text: '\n23',
                                    style: 'smallBold'
                                }
                            ]
                        }]
                    },
                    {
                        stack: [{
                            text: [
                                'Order ID: ',
                                {
                                    text: '\n26DS3',
                                    style: 'smallBold'
                                }
                            ]
                        }]
                    },
                    {
                        stack: [{
                            text: [
                                'Performance date: ',
                                {
                                    text: '\n20.03.2018',
                                    style: 'smallBold'
                                }
                            ]
                        }]
                    },
                    {
                        stack: [{
                            text: [
                                'Due date: ',
                                {
                                    text: '\n20.04.2018',
                                    style: 'smallBold'
                                }
                            ]
                        }]
                    },
                    {
                        stack: [{
                            text: [
                                'Payment date: ',
                                {
                                    text: '\n20.04.2018 14:50',
                                    style: 'smallBold'
                                }
                            ]
                        }]
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
                    return 5;
                },
                paddingRight: function (i, node) {
                    return 5;
                },
                paddingTop: function (i, node) {
                    return 5;
                },
                paddingBottom: function (i, node) {
                    return 5;
                },
                fillColor: function (i, node) {
                    return '#FCFCFC';
                }
            }
        },

        /*----------  Table titles  ----------*/
        {
            text: 'Client Information:',
            alignment: 'center',
            style: 'sectionTableTitle'
        },

        /*----------  Filters Applied  ----------*/
        {
            style: 'tableCustom',
            table: {
                widths: ['*', '*', '*', '*', '*'],
                body: [
                    [{
                        stack: [{
                            text: [
                                'Client: ',
                                {
                                    text: '\nREAKTIV',
                                    style: 'smallBold'
                                }
                            ]
                        }]
                    },
                    {
                        stack: [{
                            text: [
                                'Client’s address: ',
                                {
                                    text: '\nRAMPO LEVKATA br.13A SKOPJE, Macedonia',
                                    style: 'smallBold'
                                }
                            ]
                        }]
                    },
                    {
                        stack: [{
                            text: [
                                'Client’s contact person: ',
                                {
                                    text: '\nDEJAN DAMJANOVIKJ\ndejan@reaktiv.com.mk',
                                    style: 'smallBold'
                                }
                            ]
                        }]
                    },
                    {
                        stack: [{
                            text: [
                                'Billing address: ',
                                {
                                    text: '\nRAMPO LEVKATA br.13A SKOPJE, Macedonia',
                                    style: 'smallBold'
                                }
                            ]
                        }]
                    },
                    {
                        stack: [{
                            text: [
                                'Client’s VAT No: ',
                                {
                                    text: '\n123456789123',
                                    style: 'smallBold'
                                }
                            ]
                        }]
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
                    return 5;
                },
                paddingRight: function (i, node) {
                    return 5;
                },
                paddingTop: function (i, node) {
                    return 5;
                },
                paddingBottom: function (i, node) {
                    return 5;
                },
                fillColor: function (i, node) {
                    return '#FCFCFC';
                }
            }
        },


        /*----------  Table titles  ----------*/
        {
            text: 'Main Invoce Information',
            alignment: 'center',
            style: 'sectionTableTitle'
        },

        /*----------  Main Data Table  ----------*/
        {
            style: 'tableCustom',
            table: {
                // widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
                body: [

                    [{
                        text: 'Transaction ID',
                        style: 'normalBold'
                    },
                    {
                        text: 'Transaction type',
                        style: 'normalBold'
                    },
                    {
                        text: 'Service name',
                        style: 'normalBold'
                    },
                    {
                        text: 'Quantity',
                        style: 'normalBold'
                    },
                    {
                        text: 'Unit  price',
                        style: 'normalBold'
                    },
                    {
                        text: 'VAT %',
                        noWrap: true,
                        style: 'normalBold'
                    },
                    {
                        text: 'Total excluding VAT',
                        style: 'normalBold'
                    },
                    {
                        text: 'Total VAT',
                        style: 'normalBold'
                    },
                    {
                        text: 'Total including VAT',
                        style: 'normalBold'
                    },
                    {
                        text: 'Currency',
                        style: 'normalBold'
                    }
                    ],
                    [
                        '2365D',
                        'Subscription',
                        'Know Your Customer:\n\nKYC basic',
                        '1',
                        '50 EUR',
                        '20%',
                        '20%',
                        '100 EUR',
                        '100 EUR',
                        'EUR'
                    ],
                    [
                        '2365D',
                        'Subscription',
                        'Know Your Customer:\n\nKYC basic',
                        '1',
                        '50 EUR',
                        '20%',
                        '20%',
                        '100 EUR',
                        '100 EUR',
                        'EUR'
                    ],
                    [
                        '2365D',
                        'Subscription',
                        'Know Your Customer:\n\nKYC basic',
                        '1',
                        '50 EUR',
                        '20%',
                        '20%',
                        '100 EUR',
                        '100 EUR',
                        'EUR'
                    ],
                    [{
                        colSpan: 6,
                        text: 'GRAND TOTAL',
                        style: 'normalBold'
                    },
                    {},
                    {},
                    {},
                    {},
                    {},
                    {
                        text: '20%',
                        noWrap: true,
                        style: 'normalBold'
                    },

                    {
                        text: '123 EUR',
                        noWrap: true,
                        style: 'normalBold'
                    },
                    {
                        text: '123 EUR',
                        noWrap: true,
                        style: 'normalBold'
                    },
                    {
                        text: '123 EUR',
                        noWrap: true,
                        style: 'normalBold'
                    }
                    ]

                ],

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
                    return 5;
                },
                paddingRight: function (i, node) {
                    return 5;
                },
                paddingTop: function (i, node) {
                    return 5;
                },
                paddingBottom: function (i, node) {
                    return 5;
                },
                fillColor: function (i, node) {
                    return (i % 2 === 0) ? null : '#FCFCFC';
                }
            }
        },
        /*----------  Table titles  ----------*/
        {
            text: 'Payment Information:',
            alignment: 'center',
            style: 'sectionTableTitle'
        },

        /*----------  Filters Applied  ----------*/
        {
            style: 'tableCustom',
            table: {
                widths: ['*', '*', '*', '*', '*', '*'],
                body: [
                    [{
                        stack: [{
                            text: [
                                'Paid by: ',
                                {
                                    text: '\nCredit Card',
                                    style: 'smallBold'
                                }
                            ]
                        }]
                    },
                    {
                        stack: [{
                            text: [
                                'Credit card type: ',
                                {
                                    text: '\nVISA',
                                    style: 'smallBold'
                                }
                            ]
                        }]
                    },
                    {
                        stack: [{
                            text: [
                                'Name on card: ',
                                {
                                    text: '\nDEJAN DAMJANOVIKJ',
                                    style: 'smallBold'
                                }
                            ]
                        }]
                    },
                    {
                        stack: [{
                            text: [
                                'Address on card: ',
                                {
                                    text: '\nRAMPO LEVKATA br.13A SKOPJE, Macedonia',
                                    style: 'smallBold'
                                }
                            ]
                        }]
                    },
                    {
                        stack: [{
                            text: [
                                'Card number: ',
                                {
                                    text: '\nXXX-XXXX-XXXX-1234',
                                    style: 'smallBold'
                                }
                            ]
                        }]
                    },
                    {
                        stack: [{
                            text: [
                                'Expiry date: ',
                                {
                                    text: '\n12/20',
                                    style: 'smallBold'
                                }
                            ]
                        }]
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
                    return 5;
                },
                paddingRight: function (i, node) {
                    return 5;
                },
                paddingTop: function (i, node) {
                    return 5;
                },
                paddingBottom: function (i, node) {
                    return 5;
                },
                fillColor: function (i, node) {
                    return '#FCFCFC';
                }
            }
        },
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