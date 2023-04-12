import React from "react";
import Point from "../image/point.png";
import Mount_img from "../image/mount.png";

const Mount = () => (
    <main>
        <div className="main_img">
            <img src={Mount_img}></img>
        </div>
        <section>
            <div className="top">
                <img src={Point}></img>
                <h3>J A P A N</h3>
                <a href="https://source.unsplash.com/WLxQvbMyfas">View on Google Maps</a>
            </div>
            <div className="mid">
                <h1>Mount Fuji</h1>
                <h2>12 Jan, 2021 - 24 Jan, 2021</h2>
            </div>
            <div className="bot">
            Mount Fuji is the tallest mountain in Japan, standing at 3,776<br/>
            meters (12,380 feet). Mount Fuji is the single most popular tourist <br/>
            site in Japan, for both Japanese and foreign tourists.
            </div>
        </section>
    </main>
)
export default Mount;