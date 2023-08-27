class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  // Getter
  get availability() {
    return this.getAvailability();
  }

  // Method
  getAvailability() {
    if (this.numCopies === 0) {
      return "Out of stock";
    } else if (this.numCopies < 10) {
      return "Low stock";
    }
    return "In stock";
  }

  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }
  
  restock(numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
  }
}
class technicalBook extends Book{
  constructor(title, author, ISBN, numCopies, edition){
    super(title,author,ISBN,numCopies);
    this.edition = edition
  }

  getEdition(){
    return `so edition is ${this.edition}`;
  }
}

const technicalBooks = new technicalBook("title", "author", "ISBN",6, 2)
console.log(technicalBooks.getEdition())
