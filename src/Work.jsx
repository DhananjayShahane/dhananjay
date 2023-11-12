import netflix_logo from './assets/img/netflix_logo.png';
import colors_logo from './assets/img/colors_logo.png';

export default function Work() {
  return (
    <>
      <section className="text-gray-600 body-font  px-5 py-24 mx-auto w-7xl w-full">
        <div className="flex flex-col text-center text_animation w-full mb-10">
          <h1 className="sm:text-5xl text-4xl font-medium title-font letters mb-4 text-gray-900 style_header">Work</h1>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">

          {/*netflix website ::start */}
          <a href="https://netflix-website-2023.vercel.app" className="group relative block h-50 sm:h-60 sm:max-max-w-[300px]">
            <div
              className="relative flex h-full transform items-end border-4 rounded-3xl border-slate-100 bg-white transition-transform "
            >
                <div
                  className="p-4 pt-2 sm:p-6 lg:p-8"
                >
                  <img src={netflix_logo} className="rounded-full h-10 w-10 sm:h-12 sm:w-12" alt="" />

                  <h2 className="mt-4 text-xl font-medium sm:text-2xl">Netflix Website Clone</h2>
                  <p className="mt-4 text-sm sm:text-base">
                     A project that replicates the design and.....
                  </p>
                  <p className="mt-2 flex gap-3">
                     <span className="  rounded-full">
                       HTML
                     </span>
                     <span className="  rounded-full">
                       CSS
                     </span>
                     <span className="  rounded-full">
                       JAVASCRIPT
                     </span>
                  </p>
                </div>
            </div>
          </a>
          {/*netflix website ::end */}
          
          {/* color.io website :: start */}
          <a href="https://colors-website-2023.vercel.app" className="group relative block h-50 sm:h-60 sm:max-w-[400px]">
            <div
              className="relative flex h-full transform items-end border-4 rounded-3xl border-slate-100 bg-white transition-transform "
            >
                <div
                  className="p-4 pt-2 sm:p-6 lg:p-8"
                >
                  <img src={colors_logo} className="rounded-full h-10 w-10 sm:h-12 sm:w-12" alt="" />

                  <h2 className="mt-4 text-xl font-medium sm:text-2xl">Colors.io Website</h2>
                    <p className="mt-4 text-sm sm:text-base">
                      Color.io website is a clone of ....                  </p>
                    <p className="mt-2 flex gap-3">
                     <span className="text-center  rounded-full">
                       HTML
                     </span>
                     <span className="  rounded-full">
                       TAILWIND CSS
                     </span>
                     <span className="  rounded-full">
                       JAVASCRIPT
                     </span>
                  </p>
                </div>
            </div>
          </a>
          {/* color.io website :: end */}

        </div>
      </section>
    </>
  )
}

