
function stringCalculator(str) {

    if (!str.length) return 0;

    let delimeter = ',';

    const arr = str.split(delimeter);
    let nagativeNums = [];
    let res = 0;

    arr.map((ele, idx) => {
        if (!Number.isNaN(parseInt(ele))) {
            if (parseInt(ele) < 0) {
                nagativeNums.push(ele)
            } else {
                res += parseInt(ele)
            }
        }
    })

    return nagativeNums.length ? `negative numbers not allowed ${nagativeNums}` : res;
}


module.exports = { stringCalculator }