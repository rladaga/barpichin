import React, { useRef, useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";

// Custom hook to detect if the device is mobile (you can adjust the breakpoint)
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= breakpoint : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}

const MenuFlipbook = () => {
  const bookRef = useRef<any>(null);
  const isMobile = useIsMobile();

  const handlePrev = () => {
    bookRef.current?.pageFlip()?.flipPrev();
  };

  const handleNext = () => {
    bookRef.current?.pageFlip()?.flipNext();
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <HTMLFlipBook
        ref={bookRef}
        width={380}
        height={580}
        maxShadowOpacity={0.5}
        drawShadow={true}
        showCover={true}
        size="fixed"
        className=""
        style={{}}
        startPage={0}
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
        showPageCorners={true}
        disableFlipByClick={false}
        clickEventForward={true}
        usePortrait={isMobile}
        startZIndex={0}
        autoSize={true}
        mobileScrollSupport={true}
        swipeDistance={30}
        flippingTime={1000}
        useMouseEvents={true}
      >
        <div className="page" style={{ background: "transparent" }}>
          <img src="/hoja1_frente.jpg" alt="" className="cover-logo" />
        </div>
        <div className="page">
          <img src="/hoja1_dorso.jpg" alt="" className="cover-logo" />
        </div>
        <div className="page">
          <img src="/hoja2_frente.jpg" alt="" className="cover-logo" />
        </div>
        <div className="page">
          <img src="/hoja2_dorso.jpg" alt="" className="cover-logo" />
        </div>
        <div className="page">
          <img src="/hoja3_frente.jpg" alt="" className="cover-logo" />
        </div>
        <div className="page">
          <img src="/hoja3_dorso.jpg" alt="" className="cover-logo" />
        </div>
      </HTMLFlipBook>
      <div style={{ marginTop: "1rem", display: "flex", gap: "2rem" }}>
        <button
          onClick={handlePrev}
          aria-label="Previous page"
          style={{ fontSize: 24 }}
        >
          ◀
        </button>
        <button
          onClick={handleNext}
          aria-label="Next page"
          style={{ fontSize: 24 }}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default MenuFlipbook;
