import React from 'react'

function Footer() {
  return (
    <>
     
     <div className="flex flex-col gap-8 py-14 mt-4 text-center w-full px-10 xl:px-56">
        <h2 className="text-4xl lg:text-5xl text-[#e8002c] font-bold">
          What's Theme
        </h2>
        <p className="text-lg lg:text-xl font-thin">
          "SSF Kerala's Sahityotsav is an annual literary festival celebrating
          the rich cultural and literary heritage of Kerala, organized by the
          Sunni Students' Federation (SSF) Kerala. The Kunnamangalam division's
          theme for this year is 'Travel,' inviting participants to delve into
          the literary and cultural dimensions of journeys and voyages. This
          event serves as a vibrant platform for writers, poets, scholars, and
          literary enthusiasts to come together, share their work, and engage in
          meaningful discussions. The festival features a variety of activities
          such as poetry readings, book launches, panel discussions, and
          workshops, all aimed at promoting literature and fostering a love for
          reading and writing among the youth."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-16 px-10 xl:px-56">
        <img
          src="/image.jpg"
          className="object-cover h-full w-full rounded-md"
          alt="Gallery"
        />
        <img
          src="/image1.jpg"
          className="object-cover h-full w-full rounded-md"
          alt="Gallery"
        />
        <img
          src="/image2.jpg"
          className="object-cover h-full w-full rounded-md"
          alt="Gallery"
        />
      </div>

      <footer className="px-5 md:px-10 lg:px-10 xl:px-36 w-full gap-5 sm:max-w-full bg-[#151622] flex flex-col items-center justify-center">
        <h1 className="text-white mt-8 font-semibold text-sm lg:text-base">
          Get connected
        </h1>
        <div className="flex items-center justify-center text-white gap-1">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/ssf_kunnamangalam"
          >
            <span
              className="text-xl lg:text-3xl iconify"
              data-icon="mdi:instagram"
            ></span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/ssf_kunnamangalam"
          >
            <span
              className="text-xl lg:text-3xl iconify"
              data-icon="mdi:facebook"
            ></span>
          </a>
          <a href="https://sahithyolsavkgm.vercel.app">
            <span
              className="text-xl lg:text-3xl iconify"
              data-icon="mdi:web"
            ></span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/channel/ssf_kunnamangalam"
          >
            <span
              className="text-xl lg:text-3xl iconify"
              data-icon="mdi:youtube"
            ></span>
          </a>
        </div>
        <h1 className="text-gray-100 mt-4 mb-2">
          <span className="text-xl">&copy;</span> 2023
        </h1>
      </footer>
 
    </>
  )
}

export default Footer
