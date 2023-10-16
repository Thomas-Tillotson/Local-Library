function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}

function findBookById(books, id) {
  return books.find(title => title.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const checkedOutBooks = books.filter(book => !book.borrows[0].returned);
  const returnedBooks = books.filter(book => book.borrows[0].returned);

  return [checkedOutBooks, returnedBooks];
}

function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}

function getBorrowersForBook(book, accounts) {
   const transactions = book.borrows.slice(0, 10);

  return transactions.map(transaction => {
    const account = findAccountById(accounts, transaction.id);
    return {
      ...account,
      returned: transaction.returned
    };
  });
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
