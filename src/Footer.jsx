import React from 'react'

function Footer() {
  return (
    <>

      <div className="flex flex-col gap-8 py-14 mt-4 text-center w-full px-10 xl:px-56">
        <h2 className="text-4xl lg:text-5xl  font-bold">
          What's Theme
        </h2>
        <p className="text-lg lg:text-xl font-thin">
          The Jubilo Life Festival is a celebration of creativity, faith, and knowledge, providing a space where participants can express their talents and reflect on the deeper aspects of life. The fourth edition, with the theme "Key; Opens and Closes," highlights the significance of choices, opportunities, and transitions in our journey.

          A key symbolizes access and restriction—it grants entry to new possibilities while also enabling us to close doors that no longer serve us. In the context of life, this represents:

          Personal Growth – Unlocking one's potential through learning, self-improvement, and perseverance.

          Faith and Spirituality – Opening hearts to wisdom and guidance while closing paths that lead to distractions or negativity.

          Creativity and Expression – Using art, poetry, and performances to explore life's complexities and transitions.

          Community and Unity – Strengthening bonds through shared experiences, cultural appreciation, and dialogue.


          At Al Irshad Dawa College, Thechiyad, this festival serves as a platform for students and participants to reflect on their journey, embrace transformation, and celebrate the diverse expressions of life through various arts competitions.

          Ultimately, Jubilo Life Festival invites everyone to hold their own key—to open doors to success, creativity, and enlightenment while mindfully closing those that hinder progress.
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
        <h1 className="text-white mt-8 font-semibold text-sm lg:text-xl">
          JUBILO Program committe
        </h1>
        {/* <div className="flex items-center justify-center text-white gap-1">
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
        </div> */}
        <h1 className="text-gray-100  -mt-3 mb-5">
          <span className="text-xl">&copy;</span> Designed <a href='https://wa.link/m0k31s'>By Shafeeque Sa'adi</a>
        </h1>
      </footer>

    </>
  )
}

export default Footer
