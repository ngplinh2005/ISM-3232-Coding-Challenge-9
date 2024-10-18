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
    get isAvailable() {
        return this._isAvailable
    }
    set isAvailable(status) {
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
        return this.books.filter(book => book.isAvailable).length
    }
    listBooks() {
        console.log(`Book's name: ${this.name}`)
        this.books.forEach(book => {
            console.log(`${book.getDetails()} - ${book.isAvailable ? "Available" : "Borrowed"}`)
        })
    }
    // Task 5: Handle Books Borrowing and Returning
    calculateTotalBooksAvailable() {
        return this.getAvailableBooks() 
    } 
}

// Task 3: Create a Patron class
class Patron {
    constructor(name) {
        this.name = name
        this.borrowedBooks = []
    }
    borrowBook(book) {
        if (book.isAvailable) {
            this.borrowedBooks.push(book)
            book.isAvailable = false
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

// Task 4: Create a VIPPatron Class that Inherits from Patron
class VIPPatron extends Patron {
    constructor(name, priority) {
      super(name)
      this.priority = priority
    }
    borrowBook(book) {
      if (book.isAvailable || this.priority) {
        super.borrowBook(book)
      } 
      else {
        console.log(`${book.title} is already borrowed`)
      }
    }
}

// Task 6: Create and Manage Sections and Patrons
const history = new Section("History")
const technology = new Section("Technology")

const book1 = new Book("Sapiens", "Yuval Noah Harari", "1112223334")
const book2 = new Book("Guns, Germs, and Steel", "Jared Diamond", "2223334445")
const book3 = new Book("Clean Code", "Robert C. Martin", "3334445556")
const book4 = new Book("The Pragmatic Programmer", "Andrew Hunt", "4445556667")
const book5 = new Book("Introduction to Algorithms", "Thomas H. Cormen", "5556667778")

history.addBook(book1)
history.addBook(book2)
technology.addBook(book3)
technology.addBook(book4)
technology.addBook(book5)

const regularPatron = new Patron("Alex Johnson")
const vipPatron = new VIPPatron("Sarah Lee", true)

regularPatron.borrowBook(book1)

vipPatron.borrowBook(book1)

regularPatron.returnBook(book1)

history.listBooks()
technology.listBooks()

console.log(`Total available books in History: ${history.getAvailableBooks()}`)
console.log(`Total available books in Technology: ${technology.getAvailableBooks()}`)