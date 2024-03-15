console.log("EXERCISE 1: FOR LOOP:");

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        continue
    } else {
        console.log(i);
    }
}

console.log("EXERCISE 1: WHILE LOOP:");

let i = 1;
while (i <= 100) {
    if (i % 2 == 0) {
        i++
        continue;
    } else {
        console.log(i);
    } i++;
}


console.log("---------------------------");



console.log("EXERCISE 2: FOR LOOP:");

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`FIZZBUZZ`);
    } else if (i % 3 == 0) {
        console.log(`FIZZ`);
    } else if (i % 5 == 0) {
        console.log(`BUZZ`);
    } else {
        console.log(i);
    }
}

console.log("EXERCISE 2: WHILE LOOP:");

let j = 1;

while (j <= 100) {
    if (j % 3 == 0 && j % 5 == 0) {
        console.log(`FIZZBUZZ`);
    } else if (j % 3 == 0) {
        console.log(`FIZZ`);
    } else if (j % 5 == 0) {
        console.log(`BUZZ`);
    } else {
        console.log(j);
    } 
    j++;
}