const BatteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

//reducer() batteries should have 'totalBatteries'
const batteryBatches = [
    {batch:1, amount:100},
    {batch:2, amount:200},
    {batch:3, amount:300}
];
//reducer should have a number as a result
const totalBatteries = batteryBatches.reduce((total, currentBatch) =>{
    return total + currentBatch.amount;
}, 0);
// reducer should have made sum of all assembled batteries
console.log(totalBatteries);


