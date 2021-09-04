/* eslint-disable max-classes-per-file */
class UknownRole extends Error {
    constructor(message) {
        super(message);
        this.name = 'UknownRole';
        this.code = 405;
    }
}
class UserEmailExist extends Error {
    constructor(message) {
        super(message);
        this.name = 'UserEmailExist';
        this.code = 409;
    }
}
class InvalidFile extends Error {
    constructor(message) {
        super(message);
        this.name = 'InvalidFile';
        this.code = 415;
    }
}
module.exports = {
    UknownRole,
    UserEmailExist,
    InvalidFile,
};
