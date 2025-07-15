class Book{
    constructor(author,title,pages,read){
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.read = read;
    }

    info(){
        console.log(this.title + " by " + this.author +", " +this.pages +" pages, "+ this.read);
    }
}

const book1 = new Book ("J.R.R Tolkien","The Hobbit",295,"Not Read Yet")
book1.info();