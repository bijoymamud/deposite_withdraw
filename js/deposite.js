//step-1: add event listener to the deposite button

document.getElementById('btn-deposite').addEventListener('click', function () {


    // step 2: get the deposite amount from deposite input 

    const depositeField = document.getElementById('deposite-input');
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);

    //step 3: get the current deposite total

    const depositeTotalElement = document.getElementById('deposite-total');
    const previousDeposteTotalString = depositeTotalElement.innerText;
    const previousDeposteTotal = parseFloat(previousDeposteTotalString);

    // step 4: add numbers to set the total deposte
    const currentDepositeTotal = previousDeposteTotal + newDepositeAmount;
    //console.log(deposteTotal);
    depositeTotalElement.innerText = currentDepositeTotal;

    //step 5: get ballance current total

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    //step 6: Calculate current balance

    const currentBalaneTotal = previousBalanceTotal + newDepositeAmount;

    balanceTotalElement.innerText = currentBalaneTotal;



    //
    depositeField.value = '';
})