import React, { Component } from 'react';


class Books extends Component {
  render() {
    let bookItems;
    if (this.props.books) {
      bookItems = this.props.books.map(book => {
        let title = book.volumeInfo.title;
        let thumbnail;
        try{ thumbnail =book.volumeInfo.imageLinks.thumbnail;}catch(err){}
        let categories = book.volumeInfo.categories;
        let authors = book.volumeInfo.authors;
        let publisher = book.volumeInfo.publisher;
        let description = book.volumeInfo.description;
        let pageCount = book.volumeInfo.pageCount;
        let publishedDate = book.volumeInfo.publishedDate;
        let averageRating = book.volumeInfo.averageRating;
        let buyLink = book.saleInfo.buyLink; 
        return (
          <div className="card" key={book.id}>
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <button className="btn btn-link collapsed" type="button" data-toggle="collapse"  data-target={'#'+book.id}  >
                  {title}
               </button>
              </h5>
            </div>
            <div id={book.id} className="collapse show" data-parent="#accordionExample">
              <div className="card-body">
               <div className="row">
                  <div className="col-sm-3 col-md-3 col-3">
                    <img src={thumbnail} alt="presentation"/>
                  </div>
                  <div className="col-sm-8 col-md-8 col-8">
                    <ul className="list-group">
                      <div className="list-group-item"><strong>Category:</strong> {categories}</div>
                      <div className="list-group-item"><strong>Authors:</strong> {authors}</div>
                      <div className="list-group-item"><strong>Publisher:</strong> {publisher}</div>
                      <div className="list-group-item"><strong>publishedDate:</strong> {publishedDate}</div>
                      <div className="list-group-item"><strong>Page Count:</strong> {pageCount}</div>
                      <div className="list-group-item"><strong>Average Rating:</strong> {averageRating}</div>
                    </ul>
                  </div>
               </div>
               <div className="row">
                  <div className="col-sm-11 col-md-11 col-11"><h3>Book Description</h3>{description} <hr/> <button href={buyLink}>Buy Now</button></div>
                  <div className="col-sm-11 col-md-11 col-11"></div>
               </div>
              </div>
            </div>
          </div>
        )
      })
    }
    return (
      <div className="accordion" id="accordionExample">
        {bookItems}
      </div>
    );
  }
}

export default Books;