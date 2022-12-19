// email validation
exports.validateEmail = (email) => {
    const validationFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    return String(email).toLowerCase().match(validationFormat);
};

// text length validation
exports.validateLength = (text, min, max) => {
    if (text.length < min || text.length > max) {
        return false;
    } else {
        return true;
    }
}