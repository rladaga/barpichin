import React from "react";
import HTMLFlipBook from "react-pageflip";

const MenuFlipbook = () => {
  return (
    <HTMLFlipBook
      width={400}
      height={600}
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
      usePortrait={true}
      startZIndex={0}
      autoSize={true}
      mobileScrollSupport={true}
      swipeDistance={30}
      flippingTime={1000}
      useMouseEvents={true}
    >
      <div className="page" style={{ background: "transparent" }}>
        <img src="/cover.jpg" alt="" className="cover-logo" />
      </div>
      <div className="page">
        <img src="/hoja1.jpg" alt="" className="cover-logo" />
      </div>
      <div className="page">
        <img src="/hoja2.jpg" alt="" className="cover-logo" />
      </div>
      <div className="page">
        <img src="/hoja3.jpg" alt="" className="cover-logo" />
      </div>
      <div className="page">
        <img src="/hoja4.jpg" alt="" className="cover-logo" />
      </div>
      <div className="page">
        <img src="/hoja5.jpg" alt="" className="cover-logo" />
      </div>
    </HTMLFlipBook>
  );
};

export default MenuFlipbook;
