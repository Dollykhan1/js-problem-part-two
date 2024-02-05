const mobiles = [
    {name: 'apple',price:'120000', camera:'12mp', color:'black'},
    {name: 'samsung',price:'20000', camera:'12mp', color:'black'},
    {name: 'nokia',price:'20000', camera:'12mp', color:'black'},
    {name: 'oneplus',price:'20000', camera:'12mp', color:'black'},
    {name: 'vivo',price:'20000', camera:'12mp', color:'black'},
    {name: 'motorola',price:'20000', camera:'12mp', color:'black'},
]

function getCheapestphone(phones){
 let min = phones[0];
 for(const phone of phones){
 //console.log(phone);
 if(phone.price < min.price){
    min = phone
}
}

return min;
}


const cheap = getCheapestphone(phones);
console.log('Cheapest phone is:',cheap);