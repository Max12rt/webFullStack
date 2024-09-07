function getAnonymous(name, alias, affiliation) {
    const privateFields = {
        name,
        alias,
        affiliation,
    };
    return privateFields;
}

module.exports = { getAnonymous };
