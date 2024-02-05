const numbers = [700,300,400,600,800,100];


const products = [ 
    {name:'shampoo',price:700,Quantity:4},
    {name:'creme',price:300, Quantity:3},
    {name:'lotion',price:400,Quantity:2},
    {name:'shirt',price:600,Quantity:5},
    {name:'pant',price:800,Quantity:7},
    {name:'vaseline',price:100,Quantity:1},
]
function cartTotal(products){
    let total=0;
    for(const product of products){
        const thisproductCost = product.price * product.Quantity;
    total = total +thisproductCost;
    }
    return total;
}
const thisproductCost = cartTotal(products)
console.log(thisproductCost);