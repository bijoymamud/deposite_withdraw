//


// step 1: add event handler with the withdraw button

document.getElementById('btn-withdraw').addEventListener('click', function () {


    // step 2: get the withdraw amount from the input
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // console.log(newWithdrawAmountString);

    //step 3: get previous withdraw total 

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


    //step 4: calculate total withdraw amount
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    //step 5: set total with amount

    withdrawTotalElement.innerText = currentWithdrawTotal;


    //step 7: get the previous balance total

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;

    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // console.log(previousBalanceTotal);


    //step 8: set the new balance
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;




    //step : clser the input field

    withdrawField.value = '';


})
