const library = {
    name: "City Library",
    books: [],
    addBook(title, author, isbn) {
        const book = {
            title,
            author,
            isbn
        };
        this.books.push(book);
    },
    findBookByTitle(title) {
        return this.books.find(book => book.title === title);
    },

    listAllBooks() {
        this.books.forEach(book => console.log(book.title)); 
    }
};

const universityLibrary = Object.create(library);
universityLibrary.courses = [];
universityLibrary.addCourseBook = function(courseName, title, author, isbn) {
    this.courses.push(courseName);
    this.addBook(title, author, isbn);
};

console.log("Testing universityLibrary object:");
library.addBook('The Great Gatsby', 'F. Scott Fitzgerald', '978-0743273565');
library.addBook('1984', 'George Orwell', '978-0451524935');
library.addBook('Animal Farm', 'George Orwell', '978-0451526342');

universityLibrary.addCourseBook('CMPS2212', 'Eloquent JavaScript', 'Marijn Haverbeke', '978-1593279509');

library.listAllBooks();
console.log(library.findBookByTitle('1984'));