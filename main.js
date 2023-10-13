const myLibrary = [];
const bookForm = document.querySelector('form');
const bookList = document.querySelector('.books');

function addBookToLibrary(title, author, pages, read) {
    const normalizedRead = read.toLowerCase();
    
    // Check if the normalized input is 'yes', 'no', 'y', or 'n'
    if (normalizedRead === 'yes' || normalizedRead === 'y') {
        read = 'Yes';
    } else if (normalizedRead === 'no' || normalizedRead === 'n') {
        read = 'No';
    } else {
        // Default to 'No' if not recognized as 'Yes' or 'No'
        read = 'No';
    }
    const book = { title, author, pages, read };
    myLibrary.push(book);
    displayBooks();
}

function displayBooks() {
    bookList.innerHTML = '';
    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML = `
            <h2>${book.title}</h2>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read(yes/no): ${book.read}</p>
            <button class="delete-button" data-index="${index}">Delete</button>
        `;
        bookList.appendChild(bookCard);
    });

    // Select all "Delete" buttons after displaying the books and add event listeners
    const deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            deleteBook(index);
        });
    });
}

function deleteBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

bookForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value;

    addBookToLibrary(title, author, pages, read);
    bookForm.reset();
});

addBookToLibrary('Deep Work', 'Cal Newport', 248, 'Yes');
addBookToLibrary('The Catcher in the Rye', 'J.D. Salinger', 214, 'No');
