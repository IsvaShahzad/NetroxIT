import React, { useEffect, useState, useRef } from "react";
import "./HomeStats.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const HomeStats = () => {
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    if (!statsRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggerAnimation(true);
          observer.disconnect(); // Only trigger once!
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    { quote: "Always available, always professional. Great experience working with them.", author: "Alice T." },
    { quote: "Excellent support, clear updates, and solid results. Exactly what we needed.", author: "Naadia J." },
    { quote: "If you need a tech partner you can trust, choose NetroxIT.", author: "Bilal P." },
    { quote: "NetroxIT delivered exactly what we asked for — fast, reliable, no hassle. We’ll definitely work with them again!", author: "Jason K." },
    { quote: "Professional, responsive, and exceeded our expectations. NetroxIT is our go-to tech partner.", author: "Azlaan M." },
  ];

  return (
    <div id="reviews" className="stats-section">
      <h2 className="stats-heading">Our Trusted Clients</h2>
      <div className="stats-container" ref={statsRef}>
        <div className="stats-content">
          <div className="stats-left">
            <div className="stat-item">
              <p>Years of Experience</p>
              <h2>{triggerAnimation ? <AnimatedNumber value={7} /> : 0}+</h2>
            </div>
            <div className="stat-item">
              <p>Projects Delivered</p>
              <h2>{triggerAnimation ? <AnimatedNumber value={80} /> : 0}+</h2>
            </div>
            <div className="stat-item">
              <p>Happy Clients</p>
              <h2>{triggerAnimation ? <AnimatedNumber value={100} /> : 0}%</h2>
            </div>
          </div>

          <div className="stats-carousel">
            <Swiper
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              modules={[Pagination, Autoplay]}
              className="testimonial-swiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-card">
                    <p className="quote">“{testimonial.quote}”</p>
                    <p className="author">– {testimonial.author}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

const AnimatedNumber = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(duration / value);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= value) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}</span>;
};

export default HomeStats;
