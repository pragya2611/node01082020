class NoteUnavailableException extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
} 

class InvalidAmountException extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
} 

module.exports = {
    NoteUnavailableException,InvalidAmountException
}