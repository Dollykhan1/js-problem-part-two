function multiply(num1,num2){
  const mult = num1 * num2;
  return mult;  

}
const result = multiply(5,'seven');
//console.log(result);
function fullName(first,second){
    if(typeof first !=="string"){
        return 'First name should be a string';
    }
    else if(typeof second !== 'string'){
        return 'second Name should be a string';

    }
    const full = first + '' + second;
    return full;
}
const full =fullName('alma')
//console.log(full);

function getprice(product){
    if(typeof product !=='object'){ 
    const price = product.price;
    return price;
}
//const price = get product price(5) 
const price = getPrice(5)
//console.log(price)
function getSecond(number){
    if(Array.isArray(numbers)===false){
        return'Please provide an array'
    }
    const second = numbers[1];
    return second;

{
    const second = getSecond([45, 61, 2])
    console.log(second)
    
}
}
}