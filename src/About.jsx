import { Link } from "react-router-dom";

function About(){
  return(
    <>
      <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
              <div className="text-center lg:w-2/3  w-full">
                <h1 className="title-font sm:text-5xl  mb-4 font-medium text-gray-900 text-4xl style_header">Here i am!</h1>
                <p className="mb-8 about_sub_title">
                I'm Dhananjay and I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. Since the day I was first introduced to a computer, its working mechanism piqued my curiosity, and growing up I have been engrossed in sharpening my technical skills with the aim of developing something on my own. To fulfill my curiosity, I've chosen my career path as a web developer.
                </p>
                <div className="flex justify-center">
                    <button className="btnTheme"> 
                      <Link to='/work'>
                        My Work
                      </Link>
                    </button>
                </div>
              </div>
          </div>
      </section>
    </>
  )
}

export default About;

