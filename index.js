// Code your solution here
function findMatching(array,string) {
    return array.filter(element => element.toLowerCase()===string.toLowerCase());
}

function fuzzyMatch(array,string) {
    return array.filter(element => element.substring(0,string.length) === string);
}

function matchName(array,string) {
    return array.filter(element => element.name === string);
}