exports.succesResponse = (action, status, data) => {
    let response = {
        action: action,
        status: status,
        data: data
    }
    return response;
}

exports.errorResponse = (action, status, message) => {
    let response = {
        action: action,
        status: status,
        message: message
    }
    return response;
}