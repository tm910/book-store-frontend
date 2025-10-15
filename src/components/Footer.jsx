import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault()
    const email = e.target.elements.email?.value?.trim()
    if (!email) return
    // temporary handler - replace with API call when ready
    console.log('Subscribe request:', email)
    e.target.reset()
  }

  return (
    <footer className="bg-[#0b2545] text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-md bg-white/10 flex items-center justify-center">
              {/* simple book icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-white">
                <path d="M7 4a2 2 0 00-2 2v12a1 1 0 001.447.894L12 16.618l5.553 2.276A1 1 0 0019 18V6a2 2 0 00-2-2H7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold">BookStore</h3>
              <p className="text-sm text-white/80">Your digital library — books, articles, and recommendations</p>
            </div>
          </div>

          {/* newsletter input + button */}
          <form onSubmit={handleSubscribe} className="flex items-center gap-3">
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              required
              className="w-96 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#1f4a7a]"
            />
            <button
              type="submit"
              className="bg-primary rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-[#0f2a49] focus:outline-none focus:ring-2 focus:ring-[#1f4a7a] "
            >
              Subscribe
            </button>
          </form>

          <div className="flex items-center gap-3">
            <a href="https://twitter.com" className="rounded-md p-2 text-white/90 hover:bg-white/10" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M8 19c7.732 0 11.955-6.416 11.955-11.97 0-.183 0-.366-.012-.548A8.558 8.558 0 0022 4.92a8.272 8.272 0 01-2.357.646 4.12 4.12 0 001.804-2.27 8.224 8.224 0 01-2.605.995A4.11 4.11 0 0015.447 3c-2.27 0-4.108 1.82-4.108 4.063 0 .318.036.627.105.924C7.728 7.86 4.1 5.97 1.67 3.12a4.03 4.03 0 00-.555 2.043c0 1.41.73 2.655 1.84 3.383a4.095 4.095 0 01-1.86-.513v.05c0 1.966 1.398 3.606 3.254 3.98a4.14 4.14 0 01-1.852.07c.524 1.6 2.042 2.766 3.84 2.8A8.242 8.242 0 012 17.59a11.62 11.62 0 006 1.76" />
              </svg>
            </a>
            <a href="https://github.com" className="rounded-md p-2 text-white/90 hover:bg-white/10" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.36-1.2-3.36-1.2-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.05 1.53 1.05.9 1.54 2.36 1.1 2.94.84.09-.66.35-1.1.63-1.35-2.21-.25-4.54-1.11-4.54-4.95 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.11 2.51.32 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.69 1.03 1.58 1.03 2.67 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0012 2z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-white/70">
          © {new Date().getFullYear()} BookStore. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer