function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((account1, account2 ) => {
    const lastName1 = account1.name.last.toLowerCase();
    const lastName2 = account2.name.last.toLowerCase();

    return lastName1.localeCompare(lastName2);  });
}

function getTotalNumberOfBorrows(account, books) {
   return books.reduce((totalBorrows, book) => {
  const borrowCount = book.borrows.filter(borrow => borrow.id === account.id).length;
  return totalBorrows + borrowCount;
}, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books.filter(book => {
    const currentBorrow = book.borrows[0];
    return currentBorrow.id === account.id && !currentBorrow.returned;
  }).map(book => {
    const author = authors.find(author => author.id === book.authorId);
    return {
      ...book,
      author
    };
  });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
