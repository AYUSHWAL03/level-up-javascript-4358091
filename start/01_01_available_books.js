// Write your code here
class Books{
  constructor(title,author,isbn,numCopies){
    this.title = title;
    this.author = author;
    this.isbn=isbn;
    this.numCopies=numCopies;
  }

  getAvailability(){
    if(this.numCopies == 0){
      console.log("out of stock")
    }
    if(this.numCopies < 10){
      console.log("low stock")
    }
    else{
      console.log("in stock");
    }
  }

  sellCopies (numCopiesSold = 1){
    this.numCopies = this.numCopies - numCopiesSold;
  }

  restock(numCopiesAdded = 5){
    this.numCopies = this.numCopies + numCopiesAdded;
  }
}

let bookManagement = new Books("title","author","isbn",6);
bookManagement.getAvailability();
bookManagement.restock();
bookManagement.getAvailability();
bookManagement.sellCopies(4);
bookManagement.getAvailability();
console.log(bookManagement.numCopies);