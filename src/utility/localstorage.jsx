
const getStoredBook = (buttonId) => {
  const storedBook = localStorage.getItem(buttonId === 0 ? "readBook" : "wishlist");
  if (storedBook) {
    return JSON.parse(storedBook)
  }
  return [];
}

const saveBook = (id, buttonId) => {
  const storedBooks = getStoredBook(buttonId);
  const exists = storedBooks.find((bookId) => bookId === id)

  if(!exists) {
    storedBooks.push(id);
    localStorage.setItem(buttonId === 0 ? "readBook" : "wishlist", JSON.stringify(storedBooks))
  }
}

export { getStoredBook, saveBook }