// Task 1: Create a Book Class
class Book {
    constructor(title, author, ISBN, _isAvailable) {
        this.title = title
        this.author = author
        this.ISBN = ISBN
        this._isAvailable = true
    }
    getDetails() {
        return `Book's title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}`
    }
    get _isAvailable() {
        return this._isAvailable
    }
    set _isAvailable(status) {
        this._isAvailable = status
    }
}