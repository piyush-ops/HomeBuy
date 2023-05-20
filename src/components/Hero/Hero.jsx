import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import {motion} from 'framer-motion';
import "./Hero.css";
import CountUp from "react-countup";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            initial={{y:'2rem',opacity:0}}
            animate={{y:'0',opacity:'1'}}
            transition={{
              duration:2,
              type: 'spring'
            }}
            >
              Discover
              <br /> Most Suitable <br /> Property
            </motion.h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">Find a variety of properties that suit you very easilty</span>
            <span className="secondaryText">Forget all difficulties in finding a residence for you</span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="stats flexCenter">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>
        </div>
        {/* right side */}
        <motion.div
          initial={{x:'7rem',opacity:0}}
            animate={{x:'0',opacity:'1'}}
            transition={{
              duration:2,
              type: 'spring'
            }}
         className="hero-right flexCenter">
          <div className="image-container">
            <img src="./hero-image.png" alt="image of a house" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
