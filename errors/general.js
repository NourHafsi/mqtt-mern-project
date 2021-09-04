/* eslint-disable max-classes-per-file */
class MissingPrameter extends Error {
    constructor(message, param) {
        super(message);
        this.name = 'MissingPrameter';
        this.code = 422;
        this.param = param;
    }
}
class ElementNotFound extends Error {
    constructor(message, param) {
        super(message);
        this.name = 'ElementNotFound';
        this.code = 404;
        this.param = param;
    }
}
class MalformedObjectId extends Error {
    constructor(message, param) {
        super(message);
        this.name = 'MalformedObjectId';
        this.code = 400;
        this.param = param;
    }
}
class UnknownError extends Error {
    constructor(message) {
        super(message);
        this.name = 'UnknownError';
        this.code = 500;
    }
}
class InvalidFile extends Error {
    constructor(message) {
        super(message);
        this.name = 'InvalidFile';
        this.code = 415;
    }
}
class AccountRequireActivation extends Error {
    constructor(message) {
        super(message);
        this.name = 'AccountRequireActivation';
        this.code = 413;
    }
}
class UnAuthorized extends Error {
    constructor(message) {
        super(message);
        this.name = 'UnAuthorized';
        this.code = 401;
    }
}
class UserAttributeExist extends Error {
    constructor(message) {
        super(message);
        this.name = 'UserAttributeExist';
        this.code = 409;
    }
}

module.exports = {
    MissingPrameter,
    ElementNotFound,
    MalformedObjectId,
    UnknownError,
    InvalidFile,
    AccountRequireActivation,
    UnAuthorized,
    UserAttributeExist
};
