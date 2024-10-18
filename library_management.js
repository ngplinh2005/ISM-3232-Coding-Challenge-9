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

// Task 2: Create a Section Class
class Section {
    constructor(name, book) {
        this.name = name
        this.books = []
    }
    addBook(book) {
        this.books.push(book)
    }
    getAvailableBooks() {
        return this.books.filter(book => book._isAvailable).length
    }
    listBooks() {
        console.log(`Book's name: ${this.name}`)
        this.books.forEach(book => {
            console.log(`${book.getDetails()} - ${book._isAvailable ? "Available" : "Borrowed"}`)
        })
        }
    }
