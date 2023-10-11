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


function addBookToLibrary() {
    const title = prompt("Book title: ")
    const author = prompt('Author: ')
    const pages = prompt('Pages: ')
    const read = prompt('Read status(yes/no): ')

    const newBook = new Book(title,author,pages,read)
    myLibrary.push(newBook)
    displayBooks()

}
function displayBooks() {
    const booksContainer = document.querySelector(".books");

    // Clear the previous content in the books container
    booksContainer.innerHTML = "";

    // Iterate through myLibrary and create elements for each book
    myLibrary.forEach((book, index) => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        bookDiv.innerHTML = `
            <h2>${book.title}</h2>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.read ? "Yes" : "No"}</p>
        `;

        booksContainer.appendChild(bookDiv);
    });
}

const addBooksButton = document.querySelector('#add-book');
addBooksButton.addEventListener("click", addBookToLibrary);

// You can manually add some books for testing:
const book1 = new Book("Deep Work", "Cal Newport", 248, false);
const book2 = new Book("The Catcher in the Rye", "J.D. Salinger", 214, true);
myLibrary.push(book1, book2);

// Display the initial books
displayBooks();









