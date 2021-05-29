import axios from "axios";
const url='http://localhost:8080/books'
class BookService {
  //  1. Fetch All Books From
  getAllBooks() {
    return axios.get(`${url}/allBooks`);
  }

  // 2. Delete a Book based on Book ID
  deleteBook(bid)
  {
    return axios.delete(`${url}/${bid}`)
  }
}

export default new BookService();
