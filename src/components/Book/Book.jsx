import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
  const {bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = book;
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg border p-4 hover:shadow-xl transition-shadow duration-300">
      <Link to={`/book-details/${bookId}`} className="block">
        {/* Book Image */}
        <img className="w-full h-48 object-cover" src={image} alt={bookName} />
        
        <div className="mt-4">
          {/* Book Name */}
          <h2 className="text-xl font-semibold text-gray-800">{bookName}</h2>

          {/* Author */}
          <p className="text-sm text-gray-600">{author}</p>

          {/* Category */}
          <p className="text-sm text-gray-500 mt-1">{category}</p>

          {/* Rating */}
          <div className="flex items-center mt-2">
            <span className="text-yellow-500">{'★'.repeat(Math.round(rating))}</span>
            <span className="ml-2 text-gray-600">({rating})</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <span key={index} className="text-sm bg-gray-200 text-gray-800 px-2 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object
};

export default Book;