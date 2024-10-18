// Task 1: Create a Book Class
class Book {
    constructor(title, author, ISBN) {
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
    constructor(name) {
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

// Task 3: Create a Patron class
class Patron {
    constructor(name) {
        this.name = name
        this.borrowedBooks = []
    }
    borrowBook(book) {
        if (book._isAvailable) {
            this.borrowedBooks.push(book)
            book._isAvailable = false
            console.log(`${this.name} borrowed ${book.title}`)
        }
        else {
            console.log(`${book.title} is not available at this time`)
        }
    }
    returnBook(book) {
        let found = false
        for (let i = 0; i < this.borrowedBooks.length; i++) {
            if (this.borrowedBooks[i] === book) {
                this.borrowedBooks[i].isAvailable = true
                console.log(`${this.name} returned "${book.title}"`)
                found = true
                this.borrowedBooks = this.borrowedBooks.filter(b => b !== book)
                break
            }
        }
        if (!found) {
            console.log(`${this.name} doesn't have "${book.title}" borrowed.`)
        }
    }
}
