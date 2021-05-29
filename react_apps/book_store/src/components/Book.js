import React, { Component } from "react";
import BookService from "../services/BookService";
class book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      msg:''
    };
  }

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks() {
    BookService.getAllBooks()
      .then((response) => {
        this.setState({ books: response.data });
      })
      .catch((error) => console.log(error));
  }

  deleteBookById(bid)
  {
   BookService.deleteBook(bid).then(response=>
    {
        this.setState({msg:response.data})
        this.getAllBooks()
    })
   
  }

  handleAddBook=()=>
  {
    window.location.href()
  }

  render() {
    return (
      <div>
       
        <hr />
        <button onClick={this.handleAddBook} className='btn btn-success m-2'>Add Book</button>
        <table className="table table-bordered table-hover table-striped">
          <thead className="bg-info text-white">
            <tr>
              <th>Book ID</th>
              <th>Book Name</th>
              <th>Book Author</th>
              <th>Book Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.books.map((book) => (
              <tr key={book.bid}>
                <td>{book.bid}</td>
                <td>{book.bname}</td>
                <td>{book.bauthor}</td>
                <td>{book.bprice}</td>
                <td>
                  <button onClick={()=>this.deleteBookById(book.bid)} className="btn btn-danger p-2 m-2">Delete</button>
                  <button className="btn btn-primary p-2">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr/>
        {
        this.state.msg&&(<h6 className='alert alert-danger'>{this.state.msg}</h6>)
        }
        </div>
    );
  }
}

export default book;
