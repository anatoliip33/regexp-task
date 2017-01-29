var addresses = require('./addresses');

var result = [];

for (let value of addresses ) {
    let houseNumber = value.match(/[^ул]+[а-я],?(\s)(дом\s+)?([\b0-9\b]([0-9]+)?-?[А-Я]?)/);
    houseNumber = houseNumber ? houseNumber[3] : "";
    let flatNumber = value.match(/(кв.\s+|[/])(\d+)/);
    flatNumber = flatNumber ? flatNumber[2] : "";
    let streetName = value.match(/[\b(А-Я)|(0-9)\b].?([а-я])?([0-9]+)?-?[а-я]*\s?([А-Яа-я]*)?/)[0];
    let address = {
        "street": streetName,
        "house": houseNumber,
        "flat": flatNumber
    };
    result.push(address);
}

/*
приклад структури масиву result
>>> result
[
  ...
  {
    "street": 'Юности', //string
    "house": '25',      //string
    "flat": '6'         //string
  }
 ...
]
*/
module.exports = result;








