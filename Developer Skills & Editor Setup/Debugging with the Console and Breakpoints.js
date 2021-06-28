'use strict';

// Manual / Console Debugging
const measureKelvin = function () {
    const kelvinMeasurement = {
        type: 'Temperature',
        unit: 'Celsius',
        /*
            C) FIX bug
                Here kelvinMeasurement.value is a string so we need to convert it to number.
                Then it will work properly fixed the bug.
        */
        value: Number(prompt('Degree Celsius:')),
    };
    const kelvin = kelvinMeasurement.value + 273;
    /*
        B) Bug Find
            If we traceback then we can see that called function return here.
            so check how this return value is generate.
            And traceback the previous code, How previous line of code works.
            Then can also check the datatype.
            We know 273 is number so we can now check the datatype of kelvinMeasurement.value
    */
    // console.log(kelvinMeasurement.value);
    // console.warn(kelvinMeasurement.value);
    // console.error(kelvinMeasurement.value);
    console.table(kelvinMeasurement);

    return kelvin;
};
/*
    A) Identify the starting point of the bug
        When we call the function measureKelvin() here, it will log the result & we see the buggy result.
        So the starting point of the bug we notice first time, we get it from here.
        And the indentitification of the bug start here. Traceback start from here.
*/
console.log(measureKelvin());

/*
    Google Chrome Debugger Debugging System / Breakpoints / Debugh with debugger keyword.
    debugger keyword will automatically open the google chrome debugger with current javascript script.
    Then we can debug our code using google chrome debugging tool.
    This is mainly use when code have single or multiple loops.
    And hard to find the bug with console
*/
const calcTempAmplitudeWithDoubleParameter = function (t1, t2) {
    const temp = t1.concat(t2);
    let max = temp[0]; // Assume that index 0 is the max value.
    let min = temp[0]; // Assume that index 0 is the min value.
    for (let i = 0; i < temp.length; i++) {
        if (typeof temp[i] !== 'number') continue;

        // Debugger keyword Here / Breakpoint
        debugger;

        if (temp[i] > max) max = temp[i]; // Find the Max valu in array

        if (temp[i] < min) min = temp[i]; // Find the Min valu in array
    }
    console.log(max, min);
    return max - min; // Defference between max & min value.
};

console.log(calcTempAmplitudeWithDoubleParameter([1, 2], [3, 4]));
