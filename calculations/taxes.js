const nations = require("./nationinfo").nations;
const conversionRates = require('./nationinfo').conversionRates;


const convertedData = [];

convertData(nations);


function getAverageTax(nation){
    return getTaxForIncome(nation, getNation(nation).averageIncome);
}

function getTaxForIncome(nation, income){
    console.log(`Getting Tax for ${nation} with income ${income}`);

    let nationInfo = getNation(nation);
    if(!nationInfo){
        return;
    }

    var taxValue = -1;
    for(var i=0;i<nationInfo.taxBrackets.length;i++){
        let bracket = nationInfo.taxBrackets[i];
        if(bracket.lower < income && bracket.upper > income){
            taxValue =  bracket.taxRate;
        }
    }
    console.log(` --- Tax Rate: ${taxValue}`);
    return taxValue;
}

function getNation(nation){
    for(var i=0;i<convertedData.length;i++){
        if(convertedData[i].nationCode == nation){
            return convertedData[i];
        }
    }
}

function convertData(inputData){
    for(var nation in inputData){
       nation = inputData[nation];

       console.log(`Parsing nation: ${nation.nationCode} - ${nation.currency}`)

       if(nation.currency != 'USD'){

            console.log(` --- Converting Income from ${nation.currency} to USD.`)
            console.log(` ------ ${nation.currency} ${nation.averageIncome}`)
            nation.averageIncome = convertToUSD(nation.currency, nation.averageIncome);
            console.log(` ------ USD ${nation.averageIncome}`)

            console.log(` --- Converting Tax Brackets from ${nation.currency} to USD.`)
            
            for(var i=0;i<nation.taxBrackets.length;i++){
                var bracket = nation.taxBrackets[i];
                console.log(` ------ Converting Lower Income`)
                console.log(` ---------- ${nation.currency} ${bracket.lower}`)
                bracket.lower = convertToUSD(nation.currency, bracket.lower);
                console.log(` ---------- USD ${bracket.lower}`);

                console.log(` ------ Converting Upper Income`)
                console.log(` ---------- ${nation.currency} ${bracket.upper}`)
                bracket.upper = convertToUSD(nation.currency, bracket.upper);
                console.log(` ---------- USD ${bracket.upper}`)
            }

            convertedData.push(nation);
       }else{
        convertedData.push(nation);
       }
    }
}

function convertToUSD(currency, value){
    if(!conversionRates[currency]){
        return;
    }

    return conversionRates[currency] * value;
}