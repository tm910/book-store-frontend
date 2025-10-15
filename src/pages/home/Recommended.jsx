import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules';
import { BookCard } from "../books/BookCard";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useFetchAllBooksQuery } from "../../redux/features/book/booksApi";
 const Recommended = () => {
           const { data: books = [] } = useFetchAllBooksQuery();       
  return (
      <div>
          <h2 className="text-3xl font-semibold mb-6">Recommended for You</h2>
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
                {books.length > 0 && books.slice(8, 16).map((book, index) =>
                  <SwiperSlide key={index} virtualIndex={index}>
                    <BookCard book={book}/>
                  </SwiperSlide>
              )}
            </Swiper>

    </div>
  )
}

export default Recommended;