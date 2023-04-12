import React from "react";
import Point from "../image/point.png";
import Enj_img from "../image/enj.png";

const Geiranger = () => (
    <main>
        <div className="main_img">
            <img src={Enj_img}></img>
        </div>
        <section>
            <div className="top">
                <img src={Point}></img>
                <h3>NORWAY</h3>
                <a href="https://source.unsplash.com/3PeSjpLVtLg">View on Google Maps</a>
            </div>
            <div className="mid">
                <h1>Geirangerfjord</h1>
                <h2>01 Oct, 2021 - 18 Nov, 2021</h2>
            </div>
            <div className="bot">
                The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og<br/>
                Romsdal county, Norway. It is located entirely in the Stranda<br/>
                Municipality.
            </div>
        </section>
    </main>
)
export default Geiranger;