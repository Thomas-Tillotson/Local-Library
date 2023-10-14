function getTotalBooksCount(books) {
    return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
    const currentlyBorrowedBooks = books.filter(book => !book.borrows[0].returned);
  return currentlyBorrowedBooks.length;
}

function getMostCommonGenres(books) {
  const genreCounts = {};

  books.forEach(book => {
    const genre = book.genre;
    if(genreCounts[genre]) {
      genreCounts[genre]++;
    } else {
      genreCounts[genre] = 1;
    }
  });
  const genreArray = Object.entries(genreCounts).map(([name, count]) => ({name , count}));
  const sortedGenres = genreArray.sort((a, b) => b.count - a.count).slice(0,5);

  return sortedGenres;
}

function getMostPopularBooks(books) {
   const sortedBooks = books
  .map(book => ({name: book.title, count: book.borrows.length}))
  .sort((a,b) => b.count -a.count);

  return sortedBooks.slice(0,5)
}

function getMostPopularAuthors(books, authors) {
    const authorBorrowCounts = {};

  books.forEach(book => {
    const author = authors.find(author => author.id === book.authorId);
    if (author) {
      const authorName = `${author.name.first} ${author.name.last}`;
      if (authorBorrowCounts[authorName]) {
        authorBorrowCounts[authorName] += book.borrows.length;
      } else {
        authorBorrowCounts[authorName] = book.borrows.length;
      }
    }
  });

  const authorArray = Object.entries(authorBorrowCounts).map(([name, count]) => ({ name, count }));

  const sortedAuthors = authorArray.sort((a, b) => b.count - a.count).slice(0, 5);

  return sortedAuthors;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
