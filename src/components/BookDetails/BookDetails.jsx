import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const book = books.find(book => book.bookId === id);
  const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Book details layout */}
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={image} alt={bookName} className="w-full h-auto rounded-lg shadow-lg" />
        </div>

        {/* Book Info Section */}
        <div className="w-full md:w-1/2 text-left space-y-6">
          {/* Book Name and Author */}
          <div>
            <h1 className="text-5xl font-bold text-gray-900">{bookName}</h1>
            <p className="text-xl text-gray-700 mt-2">By {author}</p>
          </div>

          {/* Tags Section */}
          <div className="flex flex-wrap gap-3 mt-4">
            {tags.map((tag, index) => (
              <span key={index} className="bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded-full border border-blue-300">
                {tag}
              </span>
            ))}
          </div>

          {/* Book Info */}
          <div className="mt-6 space-y-2">
            <p className="text-lg text-gray-700"><strong>Category:</strong> {category}</p>
            <p className="text-lg text-gray-700"><strong>Published by:</strong> {publisher} ({yearOfPublishing})</p>
            <p className="text-lg text-gray-700"><strong>Total Pages:</strong> {totalPages}</p>
            <p className="text-lg text-gray-700"><strong>Rating:</strong> {rating} / 5</p>
          </div>

          {/* Review */}
          <div className="mt-6 text-lg text-gray-800">
            <h3 className="font-semibold text-gray-900">Review:</h3>
            <p>{review}</p>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex space-x-4">
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">
              Read
            </button>
            <button className="bg-gray-300 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-400 transition">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
