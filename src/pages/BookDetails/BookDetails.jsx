import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../Utility/AddToDB';

const BookDetails = () => {
    const {id} =useParams();
    const bookId =parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);
    const {bookName , image} = singleBook || {}; 

   const handleMarkAsRead = id =>{
       addToStoredDB(id);
   }


    return (
        <div className='border-2 w-2/3 mx-auto'>
            <img src={image} alt="" />
            <h5>{bookName}</h5>
            <button onClick={() => handleMarkAsRead(id)} className="btn btn-active btn-accent m-2">Mark as Read</button>
<button className="btn btn-active btn-info m-2"> Add To WishList</button>
        </div>
    );
};

export default BookDetails;