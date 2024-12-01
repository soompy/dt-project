import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Place = () => {
  const container = useRef();

  useGSAP(
    () => {
      // gsap code here...
      gsap.to(".visual", { rotation: 180 }); // <-- automatically reverted
    },
    { scope: container }
  );

  return (
    <div className="place">     
      <div ref={container}>
        <section className="visual">
          <div className="wrapper-1400"></div>
          <span className="obj_box">
            <em className="obj _1"></em>
            <em className="obj _2"></em>
            <em className="obj _3"></em>
          </span>
        </section>

        <section className="cont_1 place_cont">
          <div className="wrapper-1400"></div>
        </section>

        <section className="cont_2 place_cont">
          <div className="wrapper-1400"></div>
        </section>

        <section className="cont_3 place_cont">
          <div className="wrapper-1400"></div>
        </section>

        <section className="cont_4 place_cont">
          <div className="wrapper-1400"></div>
        </section>

        <section className="cont_5 place_cont">
          <div className="wrapper-1400"></div>
        </section>
      </div>
    </div>
  );
};

export default Place;
