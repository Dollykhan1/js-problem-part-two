/**
 * chair-->3 cft
 * table-->10 cft
 * bed -->50 cft
 */
function woodQuantity(chairQuantity,tableQuantity,bedQuantity){
const perChairWood = 3;
const perTablewood = 10;
const perBedwood = 50;
const chairTotalWood = chairQuantity * perChairWood;
const tableTotalwood = tableQuantity * perTablewood;
const bedTotalwood = bedQuantity * perBedwood;

const totalwood = chairTotalWood + tableTotalwood+bedTotalwood;
return totalwood;
}
const wood = woodQuantity(2, 1, 4);
console.log('wood needed',wood);

/*
shirt price -->500
pant price -->300
shoes price -->900

*/
