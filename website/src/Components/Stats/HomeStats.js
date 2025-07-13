import React, { useEffect, useState, forwardRef } from "react";
import "./HomeStats.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const HomeStats = forwardRef((props, ref) => {
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  useEffect(() => {
    if (!ref?.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setTriggerAnimation(entry.isIntersecting);
      },
      { threshold: 0.6 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  const testimonials = [
    {
      quote:
        "Always available, always professional. Great experience working with them.",
      author: "Alice T.",
    },
    {
      quote:
        "Excellent support, clear updates, and solid results. Exactly what we needed.",
      author: "Naadia J.",
    },
    {
      quote: "If you need a tech partner you can trust, choose NetroxIT.",
      author: "Bilal P.",
    },
    {
      quote:
        "NetroxIT delivered exactly what we asked for — fast, reliable, no hassle. We’ll definitely work with them again!",
      author: "Jason K.",
    },
    {
      quote:
        "Professional, responsive, and exceeded our expectations. NetroxIT is our go-to tech partner.",
      author: "Azlaan M.",
    },
  ];

  return (
    <div className="stats-section">
      <h2 className="stats-heading">Our Trusted Clients</h2>
      <div className="stats-container" id="reviews" ref={ref}>
        <div className="stats-content">
          {/* Left: Stats */}
          <div className="stats-left">
            <div className="stat-item">
              <p>Years of Experience</p>
              <h2>{triggerAnimation ? <AnimatedNumber key="1" value={7} /> : 0}+</h2>
            </div>
            <div className="stat-item">
              <p>Projects Delivered</p>
              <h2>{triggerAnimation ? <AnimatedNumber key="2" value={80} /> : 0}+</h2>
            </div>
            <div className="stat-item">
              <p>Happy Clients</p>
              <h2>{triggerAnimation ? <AnimatedNumber key="3" value={100} /> : 0}%</h2>
            </div>
          </div>

          {/* Right: Carousel */}
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
});


const AnimatedNumber = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1500;
    const stepTime = Math.max(20, Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}</span>;
};

export default HomeStats;
