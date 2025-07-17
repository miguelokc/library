const myLibrary = []

const showBtn = document.getElementById("show-dialog");
const dialog = document.getElementById("dialog");
const submitBtn = document.getElementById("submit")

showBtn.addEventListener ("click",() =>{
    dialog.showModal();
})

submitBtn.addEventListener ("click" , ()=>{
    
    const author = document.getElementById("author-input").value;
    const title = document.getElementById("book-input").value;
    const pages = document.getElementById("pages-input").value;
    const read = document.getElementById("read-input").checked;
    addBookToLibrary(author,title,pages,read);
    displayBooks();
    

})

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



function displayBooks(){
    const container = document.querySelector(".books");
    container.innerHTML = "";
    myLibrary.forEach(Book => {
        const btn = document.createElement('button');
        const square = document.createElement("div")
        square.textContent = `${Book.title} by ${Book.author}, ${Book.pages} pages,${Book.read}`;
        container.appendChild(square);
        btn.innerText = "Read Status";
        container.appendChild(btn)
    });
    
}

