function firstUpper(string){
    if (!string || string.trim() === "")
        return "";

    const newString = string.trim();
    return newString.charAt(0).toUpperCase() + newString.slice(1).toLowerCase();
}

module.exports = { firstUpper };
