import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import logo from "../assets/logo.png";

const LoadingScreen = ({ onComplete }) => {
  const comp = useRef(null);
  const logoRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });

      tl.fromTo(
        logoRef.current,
        {
          opacity: 0,
          scale: 0.5,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
        }
      )
        .to(logoRef.current, {
          scale: 0.8,
          opacity: 0,
          duration: 0.5,
          delay: 0.5,
          ease: "power2.in",
        })
        .to(comp.current, {
          yPercent: -100,
          duration: 0.8,
          ease: "power2.inOut",
        });
    }, comp);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={comp}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      <div ref={logoRef} className="relative w-24 h-24 md:w-32 md:h-32">
        <img
          src={logo}
          alt="Loading..."
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
