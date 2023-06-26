// You are given a non-negative floating point number rounded to two decimal places celsius, 
// that denotes the temperature in Celsius.

// You should convert Celsius into Kelvin and Fahrenheit and return it as an array 
// ans = [kelvin, fahrenheit].

// Return the array ans. Answers within 10-5 of the actual answer will be accepted.

// Note that:

// Kelvin = Celsius + 273.15
// Fahrenheit = Celsius * 1.80 + 32.00

/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    let arr = [celsius + 273.15, celsius * 1.8 + 32];
    return arr;
};

//We declare the return array arr and immediately perform the necessary functions within its
//initialization. In the first index, we add 273.15 to the given celsius value, as specified
//by the problem to get the Kelvin value. In the second index, we multiply the given celsius
//vaue by 1.8, then add 32 to that to get the Fahrenheit value. We then return the array.