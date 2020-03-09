// Power of 
// Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent. 
// This function should mimic the functionality of Math.pow()
// No samples with negative bases and exponents 

function power(a, b) {
    if(b === 0) return 1; 
    return a * power(a, b - 1);
}

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16