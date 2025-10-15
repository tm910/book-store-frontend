import { useState } from "react";
import { BookCard } from "../books/BookCard";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules';
 
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useFetchAllBooksQuery } from "../../redux/features/book/booksApi";

const categories = ["Choose a genre", "Business", "Fiction", "Horror", "Adventure"]
const TopSellers = () => {
    const [selectedCategory, setSelectedCategory] = useState("Choose a genre")
    
    const { data: books = [] } = useFetchAllBooksQuery();
    const filteredBooks = selectedCategory === "Choose a genre" ? books :
        books.filter(book => book.category === selectedCategory.toLowerCase())
      return (
      <div className='py-10'>
          <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>
          {/* Category Filter */}
          <div className="mb-8 flex items-center">
              <select onChange={(e) => setSelectedCategory(e.target.value)} name="category" id="category"
                  className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none">
                  {
                      categories.map((category, index) => {
                          return <option value={category} key={index}>{category}</option>
                      })
                  }
              </select>
          </div>


          {/* Books  */}
          <Swiper
              slidesPerView={1}
              spaceBetween={40}
              navigation={true}
             breakpoints={{
                640: {
                slidesPerView: 1,
                spaceBetween: 20,
                },
                768: {
                slidesPerView: 2,
                spaceBetween: 30,
                },
                1024: {
                slidesPerView: 2,
                spaceBetween: 50,
                 },
                 1180: {
                slidesPerView: 3,
                spaceBetween: 50,
                }
          }} modules={[Pagination, Navigation]} className="mySwiper mb-10">
              {filteredBooks.length > 0 && filteredBooks.map((book, index) => (
                  <SwiperSlide key={index}>
                    <BookCard book={book}/>
                  </SwiperSlide>
                    
                ))}
            </Swiper>

      </div>
  )
}

export default TopSellers;
