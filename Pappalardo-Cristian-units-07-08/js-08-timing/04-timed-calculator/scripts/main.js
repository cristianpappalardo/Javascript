import * as math from "../../../../Pappalardo-Cristian-units-01-03/js-03-functions/07-math-library/scripts/main.js";

function timedCalculator(num) {
    setTimeout(() => {
        const half_num = math.halfNumber(num);
        setTimeout(() => {
                const squared_num = math.squareNumber(half_num);
            setTimeout(() => {
                    const area = math.areaOfCircle(squared_num);
                setTimeout(() => {
                    const percentage = math.percentof(area, squared_num);
                }, 3000);
            }, 3000);
        }, 3000);
    }, 3000);
}

// Example usage:
timedCalculator(10);