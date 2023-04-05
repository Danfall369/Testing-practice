function capitalize(string) {
    const strUpp =string.charAt(0).toUpperCase() + string.slice(1);;
    return strUpp;
}

module.exports = capitalize;