

const Banner = () => {
  return (
    <div
      className="bg-cover bg-no-repeat flex flex-col md:flex-row items-center justify-between py-12 md:py-24 w-9/10 mx-auto px-12"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1512820790803-83ca734da794")`,
        backgroundPosition: "right center", // Positions the image on the right
      }}
    >
      {/* Left: Text and Button */}
      <div className="text-center md:text-left md:w-1/2 text-white">
        <h1 className="text-4xl font-bold mb-4">Books to freshen up your bookshelf</h1>
        <p className="text-lg mb-6">
          Discover new stories, genres, and authors to make your reading journey exciting.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
          View the List
        </button>
      </div>
    </div>
  );
};

export default Banner;
