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
    addBookToLibrary(author,title,pages);
    displayBooks();
    

})

class Book{
    constructor(author,title,pages){
        this.author = author;
        this.title = title;
        this.pages = pages;
        
    }
}

function addBookToLibrary(author,title,pages){
    const instance = new Book (author,title,pages)
    myLibrary.push(instance);
}



function displayBooks(){
    const container = document.querySelector(".books");
    container.innerHTML = "";

    myLibrary.forEach(Book => {
        const bookCard = document.createElement("div")
        bookCard.classList.add("book-card");

        const square = document.createElement("div");
        square.textContent = `${Book.title} by ${Book.author}, ${Book.pages} pages.`;

        const label = document.createElement("label");
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode("Read?"));

        
        const btn = document.createElement('button');
        btn.innerText = "Delete";
        btn.addEventListener('click',()=>{
            const index = myLibrary.indexOf(Book);
            if (index !== -1){
                myLibrary.splice(index,1);
                displayBooks;
            }
        })

        bookCard.appendChild(square);
        bookCard.appendChild(label);
        bookCard.appendChild(btn);

        container.appendChild(bookCard);
    });

    
}

