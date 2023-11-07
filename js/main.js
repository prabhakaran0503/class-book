class Book{
    constructor(title,author,publication){
        this.title=title,
        this.author=author,
        this.publication=publication
    }
    book(){
        document.write(`The book name is ${this.title} <br>`)
        document.write(`The author name is ${this.author} <br>`)
        document.write(`The published year in ${this.publication} <br>`)

    }
}
class Ebook extends Book{
    constructor(title,author,publication,price){
        super(title,author,publication)
        this.price=price
    }
    display(){
        document.write(`The book price is ${this.price}`)
    }
}
let ans=new Book("Ponniyin Selvan","Kalki Krishnamurthy",1955);
ans.book()
let anss=new Ebook("Ponniyin Selvan","Kalki Krishnamurthy",1955,200)
anss.display()