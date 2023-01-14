// code your solution here
function superbowlWin(arr) {
    const found = arr.find(item => item.result === "W")
    if (found !== undefined) {
        return found.year;
    } else {
        return undefined;
    }
}

