import footer_img from '../footer_img.png';
function Footer (){
    return(
        <>
            <footer>
                <div className="footer_footerWrapper text-center">
                    <p className="footer_footerText text-center">Copyright © 2023 All rights reserved | Made With ❤️&amp;🧠 In <span
                        className="fw-bolder text-dark">India</span>
                    </p>
                </div>
                <div className="text-center flex justify-center">
                   <img width="900" srcSet={footer_img} src={footer_img} ></img>
                </div>
            </footer>
        </>
    )
}

export default Footer;