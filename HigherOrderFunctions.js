
// library of books
const library = [
    { 
        title: "The Great Gatsby", 
        author: "F. Scott Fitzgerald", 
        year: 1925,
        pages: 180 
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee", 
        year: 1960, 
        pages: 281
    },
    {
        title: "1984", 
        author: "George Orwell", 
        year: 1949, 
        pages: 328 
    },
    {
    title: "Pride and Prejudice", 
    author: "Jane Austen", 
    year: 1813,
    pages: 432 
    } 
]

// test
// console.log(library);

// Template code for higher order functions

// For a given array of objects
        //  const arrayOfObjects = [
        //     { property: value1 },
        //     { property: value2 },
        //     { property: value3 },
        //     // ... more objects
        // ];

// Template code for map
        // const transformedArray = arrayOfObjects.map(unitObjectofArray => {
        //     // Perform transformations on unitObject.property here
        //     return unitObjectofArray.property ;
        // });

        // console.log(transformedArray);
        
// Template code for filter
        // const filteredArray = arrayOfObjects.filter(unitObjectofArray => {
        //     // Add your filtering condition here
        //     return unitObject.property /* condition based on unitObject.property */;
        // });

        // console.log(filteredArray);

// Template code for reduce
        // const initializeAccumulatorValue = 0; // in case of sum it is 0 and for multiplication it is 1

        // let reducedValue = ArrayofObjects.reduce( function(accumulator, UnitObjectofArray) {
        //     return accumulator + UnitObjectofArray.property;
        // }, initializeAccumulatorValue );
        // console.log(reducedValue);


// let getTotalPages = library.reduce( (total, library.pages) => total + library.pages, 0);
// cant use library, should use the unit of library i.e a book
let getTotalPages = library.reduce( (total, BookObject) => total + BookObject.pages, 0);
console.log("3. Total Number of Pages: Write a function getTotalPages that calculates and returns the total number of pages in the library.");
console.log(`A: ${getTotalPages}`); // 1221


const transformedArray = library.map(book => {
        //     // Perform transformations on unitObject.property here
        delete book.author;
        delete book.year;
        delete book.pages;
        //     return unitObjectofArray.property ;
        return book.title;
});

console.log("4. List of Book Titles: Write a function getBookTitles that returns an array containing only the titles of the books in the library.");
console.log(transformedArray);
// console.log(`A: ${transformedArray}`); // 
        
const bookCount = library.length;
//console.log(bookCount);
//let getTotalPages = library.reduce( (total, BookObject) => total + BookObject.pages, 0);
let AvgPages = getTotalPages/bookCount;
console.log("6. Average Number of Pages: Write a function getAveragePages that calculates and returns the average number of pages across all books in the library.");
console.log(`A: ${AvgPages}`); // 305.25





