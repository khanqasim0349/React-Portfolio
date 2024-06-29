import React from "react";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Contact = () =>{
    return(
        <>
            <div className="container contact" id={"contact"}>
                <h1>CONTACT ME</h1>
                <div className="contact-icon">
                    <a href="https://www.instagram.com/muhmmadqasim019/" className="items" target="_blank">
                        <FiInstagram className="icons"/>
                    </a>
                    <a href="" className="items" target="_blank">
                        <FaLinkedinIn className="icons"/>
                    </a>
                    <a href="https://www.facebook.com/muhmmad.qasim.790" className="items" target="_blank">
                        <FaFacebookF className="icons"/>
                    </a>
                    <a href="https://x.com/home" className="items" target="_blank">
                        <FaXTwitter className="icons"/>
                    </a>
                    <a href="https://github.com/khanqasim0349" className="items" target="_blank">
                        <FaGithub className="icons"/>
                    </a>
                    <a href="mailto:khanqasim0349@gmail.com" className="items" target="_blank">
                        <MdEmail className="icons"/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Contact;