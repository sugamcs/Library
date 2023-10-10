const myLibrary = []

function Book(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.info = function(){
        return this.title + " is a book written by " + this.author + " of length " + this.pages
        + " pages and your status on this book read is "+  this.read
    }

}

const books = document.querySelector(".books");
const addBooksButton = document.querySelector('#add-book')


function addBookToLibrary() {

}



const book1 = new Book("Deep work", "Cal Newport", "248", false)
myLibrary.push(book1)
console.log(myLibrary)
console.log(book1.info())