const myLibrary = []

const books = document.querySelector('.books')

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
const title = document.querySelector('#title').value
const author = document.querySelector('#author').value
const pages = document.querySelector('#pages').value
const read = document.querySelector('#read').value
const submitBtn = document.querySelector('#submit')



function addBookToLibrary() {
    myLibrary.forEach(book => {
        book.addEventListener('click',)
    })
    }
    

    
function displayBooks() {
}

const book1 = new Book("Deep work", "Cal Newport", 333, true)
// books.innerHTML = `<h2>${book.title}</h2>
// <p>Author: ${book.author}</p>    make the loop first
// <p>Pages: ${book.pages}</p>
// <p>Read: ${book.read ? "Yes" : "No"}</p>`
console.log(book1.info())