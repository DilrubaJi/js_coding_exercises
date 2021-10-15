// Spread Syntax Bonus activity

function printColours(colours) {
    if (!colours) throw new Error("colour is required");
    let colours2 = [...colours];
    return colours2;
}

function shoppingList(list, newItem) {
    if (!list) throw new Error("list is required");
    if (!newItem) throw new Error("newItem is required");
    let list2 = [...list, ...newItem];
    return list2;
}

function highestNumber(numbers) {
    if (!numbers) throw new Error("numbers are required");
    return Math.max(...numbers);
}

function splitThatString(string) {
    if (!string) throw new Error("string is required");
    const splitStr = [...string];
    return splitStr;
}


// Optional Chaining Bonus activity!

function addressLookUp(user) {
    if (!user) throw new Error("user is required");
    return user.address?.postcode;
}


module.exports = {
    printColours,
    shoppingList,
    highestNumber,
    splitThatString,
    addressLookUp
};