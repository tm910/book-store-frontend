import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getImageUrl } from '../../utils/getImageUrl'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/features/cart/cartSlice'
import { FiShoppingCart } from 'react-icons/fi'
import { AiFillStar, AiOutlineArrowLeft } from 'react-icons/ai'
import { useFetchBookByIdQuery } from '../../redux/features/book/booksApi'

const SingleBook = () => {
  const { id } = useParams()
//   const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {data: book, isLoading, isError } = useFetchBookByIdQuery(id)

    console.log(book)
  function handleAddToCart() {
    if (!book) return
    dispatch(addToCart(book))
    }
    
  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-sm text-gray-600 hover:text-gray-800 mb-4"
      >
        <AiOutlineArrowLeft className="mr-2" />
        Back
      </button>

      {isLoading ? (
        <div className="bg-white rounded-lg shadow-md p-8 flex items-center justify-center">
          <div className="text-gray-500">Loading...</div>
        </div>
      ) : !book ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-xl font-semibold mb-2">Book not found</h2>
          <p className="text-gray-500 mb-4">We couldn't find the book you're looking for.</p>
          <Link to="/" className="btn-primary inline-block">
            Go home
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden md:flex md:gap-1 p-3 md:py-10">
          <div className="md:w-1/3 flex justify-center items-start">
            <img
              src={`${getImageUrl(book.coverImage)}`}
              alt={book.title}
              className="w-36 md:w-64 lg:w-52 rounded-lg shadow-md object-cover"
            />
          </div>

          <div className="md:flex-1 mt-6 md:mt-0">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{book.title}</h1>
            <p className="text-sm text-gray-500 mb-4">by <span className="text-gray-700 font-medium">Unknown Author</span></p>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <AiFillStar key={i} className={i < 4 ? 'text-yellow-400' : 'text-yellow-300'} />
                ))}
              </div>
              <span className="text-sm text-gray-500">4.0 · {Math.floor(Math.random() * 200) + 20} reviews</span>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">{book.description}</p>

            <div className="flex items-end justify-between gap-4">
              <div>
                <div className="text-2xl font-semibold text-gray-900">${book.newPrice}</div>
                <div className="text-sm text-gray-400 line-through">${book.oldPrice}</div>
              </div>

              <div className="flex items-center gap-3">
                <button onClick={handleAddToCart} className="btn-primary px-5 py-3 flex items-center gap-2">
                  <FiShoppingCart />
                  Add to cart
                </button>
              </div>
            </div>

            <div className="mt-6 text-sm text-gray-500">
              <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full mr-2">{book.category}</span>
              {book.trending && (
                <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full">Trending</span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SingleBook