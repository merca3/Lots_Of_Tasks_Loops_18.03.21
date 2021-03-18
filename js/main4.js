let counter = 1;
while (counter <= 500) {
    let sum = 0;
    for (let i = 1; i < counter; i++) {
        if (counter % i == 0 && counter !== i) {
            sum += i;
        }
    }
    if (sum == counter) {
        console.log(`${counter} is a perfect number`);
    }
    counter++;
};