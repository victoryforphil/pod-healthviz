module.exports.nations = [
    {
        nationCode: "FR",
        currency: "EUR",
        sources: [
            "https://www.french-property.com/guides/france/finance-taxation/taxation/calculation-tax-liability/rates/",
            "http://www.oecdbetterlifeindex.org/countries/france/",
            "http://www.who.int/countries/fra/en/"
        ],
        averageIncome: 26789.19,
        lifeExpectancy: 83,
        healthCostGDP: 11.5,
        taxBrackets: [
            {
                lower: 0,
                upper: 9807,
                taxRate: 0
            },
            {
                lower: 9808,
                upper: 27086,
                taxRate: 14
            },
            {
                lower: 27087,
                upper: 72617,
                taxRate: 30
            },
            {
                lower: 72618,
                upper: 153783,
                taxRate: 41
            },
            {
                lower: 153784,
                upper: 1000000,
                taxRate: 45
            }
        ]
    },
    {
        nationCode: "US",
        currency: "USD",
        sources: [
            "https://files.taxfoundation.org/20180207142513/TaxFoundation-FF567-Updated.pdf",
            "https://www.census.gov/library/visualizations/2017/comm/well-being.html",
            "http://www.who.int/countries/usa/en/"
        ],
        averageIncome: 59039,
        lifeExpectancy: 77.5,
        healthCostGDP: 17.1,
        taxBrackets: [
            {
                lower: 0,
                upper: 9525,
                taxRate: 10
            },
            {
                lower: 9526,
                upper: 38700,
                taxRate: 12
            },
            {
                lower: 38701,
                upper: 82500,
                taxRate: 22
            },
            {
                lower: 82501,
                upper: 157500,
                taxRate: 24
            },
            {
                lower: 157501,
                upper: 200000,
                taxRate: 32
            },
            {
                lower: 200001,
                upper: 500000,
                taxRate: 35
            },
            {
                lower: 500001,
                upper: 1000000,
                taxRate: 37
            }
        ]
    }
]

module.exports.conversionRates = {
    "EUR": 1.16
}