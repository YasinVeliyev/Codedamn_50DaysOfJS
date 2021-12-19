const timeToMixJuice = (name) => {
    return timeForPrepare[name] || 2.5;
};

const limesToCut = (wedgesNeeded, limes) => {
    let limesCount = { small: 6, medium: 8, large: 10 };
    let count = 0;
    while (wedgesNeeded > 0) {
        wedgesNeeded -= limesCount[limes[0]];
        count++;
        limes = limes.slice(1);
    }
    return count;
};

const remainingOrders = (timeLeft, orders) => {
    // code here
    while (timeLeft > 0) {
        timeLeft -= timeForPrepare[orders[0]];
        orders = orders.slice(1);
    }
    return orders;
};
