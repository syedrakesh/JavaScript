'use strict';

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// Calculate Temperature Amplitude With Single Parameter
const calcTempAmplitudeWithSingleParameter = function (temp) {
    let max = temp[0]; // Assume that index 0 is the max value.
    let min = temp[0]; // Assume that index 0 is the min value.
    for (let i = 0; i < temp.length; i++) {
        if (typeof temp[i] !== 'number') continue;

        if (temp[i] > max) max = temp[i]; // Find the Max valu in array

        if (temp[i] < min) min = temp[i]; // Find the Min valu in array
    }
    console.log(max, min);
    return max - min; // Defference between max & min value.
};

console.log(calcTempAmplitudeWithSingleParameter(temperatures));

// Calculate Temperature Amplitude With Double Parameter
const calcTempAmplitudeWithDoubleParameter = function (t1, t2) {
    const temp = t1.concat(t2);
    let max = temp[0]; // Assume that index 0 is the max value.
    let min = temp[0]; // Assume that index 0 is the min value.
    for (let i = 0; i < temp.length; i++) {
        if (typeof temp[i] !== 'number') continue;

        if (temp[i] > max) max = temp[i]; // Find the Max valu in array

        if (temp[i] < min) min = temp[i]; // Find the Min valu in array
    }
    console.log(max, min);
    return max - min; // Defference between max & min value.
};

console.log(calcTempAmplitudeWithDoubleParameter([1, 2], [3, 4]));
