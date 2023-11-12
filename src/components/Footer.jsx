function Footer (){
    return(
        <>
            <footer>
                <div className="footer_footerWrapper text-center">
                    <p className="footer_footerText text-center">Copyright © 2023 All rights reserved | Made With ❤️&amp;🧠 In <span
                        className="fw-bolder text-dark">India</span>
                    </p>
                </div>
                <div className="footer_footerImageWrapper text-center flex justify-center">
                   <img alt="footer-img" width="900" srcSet="./img/footer-bg.png" src="./img/footer-bg.png"></img>
                </div>
            </footer>
        </>
    )
}

export default Footer;