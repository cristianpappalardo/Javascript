import * as math from "../../07-math-library/js/main.js";

function calculator(num) {
    const half_num = math.halfNumber(num);
    const squared_num = math.squareNumber(half_num);
    const area = math.areaOfCircle(squared_num);
    const percentage = math.percentof(area, squared_num);
}