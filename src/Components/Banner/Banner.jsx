import React from 'react';
import bookimage from '../../assets/books.jpg'
const Banner = () => {
    return (
       <div className="hero bg-base-200 p-14 mt-12 rounded-lg">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bookimage}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
 
      <button className="btn bg-green-500 mt-3 text-white">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;