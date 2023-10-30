import React from "react"
import profile from "../image/profile.jpg"
import mail from "../image/Mail.png"

export default function Main(){
    const email = "melvincheah20@gmail.com"

    return (
        <main className="main">
            <img src={profile} className="main-profile" alt="profile"/>
            <div className="main-detail">
                <h1 className="main-name">Melvin Cheah</h1>
                <h3 className="main-position">Frontend Developer</h3>
                <h4 className="main-email">{email}</h4>
                <a href={`mailto:${email}`} className="main-email-button"><img src={mail} className="main-email-icon"/> Email</a>

                {/* description */}
                <h3 className="main-description-title">About</h3>
                <p className="main-description">
                    I am a frontend developer with a particular interest 
                    in making things simple and automating daily tasks. 
                    I try to keep up with security and best practices, 
                    and am always looking for new things to learn.
                </p>
                <h3 className="main-description-title">Interests</h3>
                <p className="main-description">
                    Food expert. Music scholar. Reader. Internet fanatic. 
                    Bacon buff. Entrepreneur. Travel geek. 
                    Pop culture ninja. Coffee fanatic.
                </p>
            </div>
        </main>
    )
}