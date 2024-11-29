import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Place = () => {  
  const container = useRef();

    useGSAP(
        () => {
            // gsap code here...
            gsap.to('.box', { rotation: 180 }); // <-- automatically reverted
        },
        { scope: container }
    ); 

  return (


    <div className="place">
      
      <section className="wrapper-1400">
        {/* <p className="txt txt1">txt1</p>
        <p className="txt txt2">txt2</p> */}
        
      </section>

      <div ref={container} className="app">
        <div className="box">Hello</div>
      </div>
    </div>
  );
};

export default Place;
