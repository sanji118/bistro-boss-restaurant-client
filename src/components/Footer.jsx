import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const socialIcons = [
    {icon: FaFacebookF},
    {icon: FaInstagram},
    {icon: FaTwitter},
    {icon: FaYoutube}
]

const Footer = () => {
  return (
    <footer class=" text-white">
        <div className="footer sm:footer-horizontal gap-0">
            <div className=" p-10 bg-gray-700 w-full flex justify-around">
                <nav>
                    <h6 class="footer-title">Services</h6>
                    <div className="flex flex-col gap-2">
                        <a class="link link-hover">Branding</a>
                        <a class="link link-hover">Design</a>
                        <a class="link link-hover">Marketing</a>
                        <a class="link link-hover">Advertisement</a>
                    </div>
                </nav>
                <nav>
                    <h6 class="footer-title">Company</h6>
                    <div className="flex flex-col gap-2">
                        <a class="link link-hover">About us</a>
                        <a class="link link-hover">Contact</a>
                        <a class="link link-hover">Jobs</a>
                        <a class="link link-hover">Press kit</a>
                    </div>
                </nav>
            </div>
            <div className="p-10 bg-gray-900 w-full text-center">
                <nav>
                    <h6 class="footer-title text-white">Follow Us</h6>
                    <p>Join us on social media</p>
                    <div class=" flex justify-center gap-4">
                    {
                        socialIcons.map(({icon: Icon}, i)=>(
                            <a key={i}><Icon className="text-xl my-4 mb-12"></Icon></a>
                        ))
                    }
                    </div>
                </nav>
            </div>
        </div>
        <div class="footer sm:footer-horizontal footer-center bg-black  text-white p-4 ">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
            </aside>
        </div>
    </footer>
  )
}

export default Footer