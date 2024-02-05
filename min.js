const prices = [20000, 30000, 22000, 100000, 30000];
    function getMin(numbers){
        let min = numbers[0];
for( const num of numbers){
if(num < min){
    min = num;

}
}
return min;
    }
   const cheap = getMin(prices);
   console.log('cheapest one is cheap',cheap);      
        
    

