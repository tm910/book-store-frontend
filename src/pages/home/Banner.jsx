import bannerImage from '../../assets/banner.png'
const Banner = () => {
  return (
      <div className='container mx-auto flex flex-col md:flex-row-reverse justify-between items-center gap-12 py-10'>
          <div className='md:w-1/2 w-full flex items-center md:justify-end'>
              <img src={bannerImage} alt="" className='mx-auto' />
          </div>
          <div className='md:w-1/2 w-full'>
              <h1 className="md:text-5xl text-2xl font-medium mb-7">New Releases This Week</h1>
              <p className="mb-10">It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivation memoirs, this week's new releases offer something for everyone.</p>
              <button className="bg-primary text-white py-2 px-4 rounded">Subscribe</button>
          </div>
      </div>
  )
}

export default Banner;
