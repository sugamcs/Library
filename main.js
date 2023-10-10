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

const addBooksButton = document.querySelector('#add-book')

function addBookToLibrary() {
    const title = prompt("Book title: ")
    const author = prompt('Author: ')
    const pages = prompt('Pages: ')
    const read = prompt('Read status(yes/no): ')

    const newBook = new Book(title,author,pages,read)
    myLibrary.push(newBook)
    displayBook()

}
function displayBook() {
    const books = document.querySelector('.books');
    books.innerHTML = "";
    

}













// const book1 = new Book("Deep work", "Cal Newport", "248", false)
// myLibrary.push(book1)
// console.log(myLibrary)
// console.log(book1.info())


// what do i wanna do next:
// ask for book prompts and push to array
// then display it to the htmml