import { useLocation } from "react-router-dom";
import "./../Style/bookDetails.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import BookService from "../Services/BookService";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Link } from "react-router-dom";

function BookDetails() {
  const location = useLocation();
  const { book, bookImage } = location.state;
  const token = localStorage.getItem("token") || "";

  const addToCart = async () => {
    await BookService.addCartItem(token, book._id);
    alert("Book added to cart");
  };

  const handleAddToWishlist = async () => {
    if (token) {
      try {
        await BookService.addToWishlist(token, book._id);
        alert("Book added to wishlist");
      } catch (error) {
        console.error("Failed to add to wishlist", error);
        alert("Failed to add to wishlist");
      }
    } else {
      alert("Please log in to add to wishlist");
    }
  };

  return (
    <div className="book-details">
      <div className="breadcrumb">
        <Link to="/home">Home</Link> / Book(01)
      </div>
      <div className="content">
        <div className="image-gallery">
          <img src={bookImage} alt="Book Cover" className="thumbnail" />
          <img src={bookImage} alt="Book Cover" className="thumbnail" />
        </div>
        <div className="main-image">
          <div className="book-image">
            <img src={bookImage} alt="Book Cover Main" />
          </div>
          <div className="wishlist">
            <button className="cart-button" type="button" onClick={addToCart}>
              Add to Cart
            </button>
            <button
              className="wishlist-button"
              type="button"
              onClick={handleAddToWishlist}
            >
              WISHLIST
            </button>
          </div>
        </div>
        <div className="details">
          <h1>{book.bookName}</h1>
          <h2>by {book.author}</h2>
          <div className="detailpgbookRate">
            <div className="detailpgbookRating">
              4.5 <StarBorderIcon className="starIcon" />
            </div>
            <div className="detailpgbookCount">(20)</div>
          </div>

          <div className="detailpgbookPrice">
            <span className="detailpgofferPrice">Rs.{book.discountPrice}</span>
            <span className="detailpgoriginalPrice">Rs.{book.price}</span>
          </div>

          <div className="bookdetailspara">
            <h4 className="heading">Book Details:</h4>
            <p className="para">{book.description}</p>
          </div>

          <div className="customerFeedback">
            <h3>Customer Feedback</h3>
            <div className="review-container">
              <h4>Overall rating</h4>
              <StarBorderIcon className="starIcons" />
              <StarBorderIcon className="starIcons" />
              <StarBorderIcon className="starIcons" />
              <StarBorderIcon className="starIcons" />
              <StarBorderIcon className="starIcons" />
              <div>
                <textarea placeholder="Write your review"></textarea>
                <button>Submit</button>
              </div>
            </div>
          </div>

          <div className="review">
            <div className="review-content">
              <div className="review1">Dipti Borke</div>
              <StarBorderIcon
                className="starIconss"
                style={{ color: "yellow" }}
              />
              <StarBorderIcon
                className="starIconss"
                style={{ color: "yellow" }}
              />
              <StarBorderIcon
                className="starIconss"
                style={{ color: "yellow" }}
              />
              <StarBorderIcon className="starIconss" />
              <StarBorderIcon className="starIconss" />
              <p className="reviewcomment">
                Stephen Chbosky’s coming-of-age novel offers a poignant
                exploration of identity, mental health, and acceptance. Through
                the eyes of the protagonist, Charlie,
              </p>
            </div>

            <div className="review2">Akshata Dhanwade</div>
            <StarBorderIcon
              className="starIconss"
              style={{ color: "yellow" }}
            />
            <StarBorderIcon
              className="starIconss"
              style={{ color: "yellow" }}
            />
            <StarBorderIcon
              className="starIconss"
              style={{ color: "yellow" }}
            />
            <StarBorderIcon
              className="starIconss"
              style={{ color: "yellow" }}
            />
            <StarBorderIcon className="starIconss" />
            <p className="reviewcomment">
              Michio Kaku’s exploration of seemingly impossible technologies
              offers a fascinating glimpse into the future of science. Through
              accessible prose and engaging examples.
            </p>
          </div>

          <div className="spacer"></div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
