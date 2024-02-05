const numbers = [700,300,400,600,800,100];


const products = [ 
    {name:'shampoo',price:700},
    {name:'creme',price:300},
    {name:'lotion',price:400},
    {name:'shirt',price:600},
    {name:'pant',price:800},
    {name:'vaseline',price:100},
]
function getShoppingTotal(products){
    for(const product of products){
        console.log(product);
    }

}
const total = getShoppingTotal(products);
console.log('total all money:',total);