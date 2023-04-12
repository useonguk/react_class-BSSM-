import React from "react";
import Point from "../image/point.png";
import Syd_img from "../image/syd.png";

const Syd = () => (
    <main>
        <div className="main_img">
            <img src={Syd_img}></img>
        </div>
        <section>
            <div className="top">
                <img src={Point}></img>
                <h3>AUSTRALIA</h3>
                <a href="https://source.unsplash.com/JmuyB_LibRo">View on Google Maps</a>
            </div>
            <div className="mid">
                <h1>Sydney Opera House</h1>
                <h2>27 May, 2021 - 8 Jun, 2021</h2>
            </div>
            <div className="bot">
                The Sydney Opera House is a multi-venue performing arts centre<br/>
                in Sydney. Located on the banks of the Sydney Harbour, it is often<br/>
                regarded as one of the 20th century's most famous and distinctive<br/>
                buildings
            </div>
        </section>
    </main>
)
export default Syd;