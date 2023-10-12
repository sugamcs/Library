const myLibrary = [];
const bookForm = document.querySelector('form');
const bookList = document.querySelector('.books');

function addBookToLibrary(title, author, pages, read) {
    const book = { title, author, pages, read };
    myLibrary.push(book);
    displayBooks();
}


function displayBooks() {
    bookList.innerHTML = ''; 
    myLibrary.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML = `
            <h2>${book.title}</h2>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.read ? 'Yes' : 'No'}</p>
        `;
        bookList.appendChild(bookCard);
    });
}


bookForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read');

    addBookToLibrary(title, author, pages, read);
    bookForm.reset();
});


addBookToLibrary('Deep Work', 'Cal Newport', 248, 'Yes');
addBookToLibrary('The Catcher in the Rye', 'J.D. Salinger', 214, 'No');