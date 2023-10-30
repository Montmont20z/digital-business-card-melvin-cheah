import React from "react"
import facebook_icon from "../image/Facebook Icon.png"
import twitter_icon from "../image/Twitter Icon.png"
import instagram_icon from "../image/Instagram Icon.png"
import github_icon from "../image/GitHub Icon.png"
import linkedin_icon from "../image/Linkedin Icon.png"

export default function Footer(){
    return (
        <footer className="footer">
            <a href="https://www.twitter.com"><img src={twitter_icon} className="twitter_icon" alt="" /></a>
            <a href="https://www.facebook.com/"><img src={facebook_icon} className="facebook_icon" alt=""/></a>
            <a href="https://www.instagram.com/" ><img src={instagram_icon} className="instagram_icon" alt=""/></a>
            <a href="https://www.linkedin.com/" ><img src={linkedin_icon} className="linkedin_icon" alt=""/></a>
            <a href="https://www.github.com/montmont20z" ><img src={github_icon} className="github_icon" alt=""/></a>
        </footer>
    )
}