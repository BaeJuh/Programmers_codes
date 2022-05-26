function solution(price, money, count) {
    let sum_price = 0;
    
    for (let i=1; i<=count; i++) {
        sum_price += (price*i);
    }
    
    return (sum_price - money) > 0 ? sum_price-money : 0;
}
