const myLibrary = []

class Book{
    constructor(author,title,pages,read){
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary(author,title,pages,read){
    const instance = new Book (author,title,pages,read)
    myLibrary.push(instance);
}

addBookToLibrary("J.R.R  Tolkien","The Hobbit",295,"not read yet");
