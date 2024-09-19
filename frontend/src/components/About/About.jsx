import React from "react";
import aboutImg from "../../assets/images/aboutimg.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex  justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row ">
          {/**===============ABOUT IMAGE================ */}
          <div className="relative w-3/4 lg:w1/2  xl:w-[700px] z-10 order-2 lg:order-1 ">
            <img className="w-[75%] h-auto" src={aboutImg} alt="" />
          </div>

          {/**===============ABOUT CONTENT=============== */}

          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Proud to be one of the nations best</h2>
            <p className="text__para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iusto
              ipsa necessitatibus mollitia maxime libero ipsam debitis maiores
              impedit sunt vero, dolores natus exercitationem, praesentium vitae
              ex laboriosam? Veniam, ullam.
            </p>
            <p className="text__para mt-[30px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
              explicabo incidunt adipisci ullam laborum sunt eaque sit ad
              voluptatibus molestiae! Nostrum eos nisi quos quidem recusandae
              odio tempora reprehenderit delectus!
              
            </p>
            <Link ><button className="btn" to="/">Learn more</button></Link>

            
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
