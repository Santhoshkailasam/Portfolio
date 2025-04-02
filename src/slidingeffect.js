import React, { useState } from "react";
import "../src/slidingeffect.css";
import Innothon from "./asserts/Kcg-innothon.jpg";
import Webquest from "./asserts/kcg-webquest.jpg";
import Hackathon from "./asserts/kcg-hackathon.jpg";

function SlidingEffect() {
    const certificates = [
        {
            id: 1,
            title: "App Project",
            description: "This is a certificate of contribution received from the app project.",
            image: Hackathon,
        },
        {
            id: 2,
            title: "Web Quest",
            description: "This is a certificate of contribution received from the web quest project.",
            image: Webquest,
        },
        {
            id: 3,
            title: "KCG Innothon",
            description: "This is a certificate of contribution received from the Innothon project.",
            image: Innothon,
        },
    ];

    const [activeIndex, setActiveIndex] = useState(1);

    const prevSlide = () => {
        setActiveIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setActiveIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="sliding-effect-container">
            <h3 className="certification-title">Certification</h3>
            <div className="carousel-container">
                <button className="carousel-arrow left" onClick={prevSlide}>&lt;</button>
                <div className="carousel">
                    {certificates.map((certificate, index) => (
                        <div
                            key={certificate.id}
                            className={`certificate-card ${index === activeIndex ? "active" : index === (activeIndex - 1 + certificates.length) % certificates.length ? "left" : index === (activeIndex + 1) % certificates.length ? "right" : "hidden"}`}
                        >
                            <h3 className="card-text">{certificate.title}</h3>
                            <img
                                src={certificate.image}
                                alt={certificate.title}
                                className="certificate-img"
                            />
                            <p className="para">{certificate.description}</p>
                        </div>
                    ))}
                </div>
                <button className="carousel-arrow right" onClick={nextSlide}>&gt;</button>
            </div>
            <div className="pagination">
                {certificates.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === activeIndex ? "active" : ""}`}
                        onClick={() => setActiveIndex(index)}
                    ></span>
                ))}
            </div>
            <button className="btn-explore">Explore More &gt;&gt;</button>
        </div>
    );
}

export default SlidingEffect;