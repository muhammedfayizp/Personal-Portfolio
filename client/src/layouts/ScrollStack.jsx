// import React from 'react';
// import { useLayoutEffect, useRef, useCallback } from 'react';
// import Lenis from 'lenis';

// export const ScrollStackItem = ({ children, itemClassName = '' }) => (
//   <div
//     className={`scroll-stack-card relative  h-100 my-8 p-12 rounded-[40px]  box-border origin-top will-change-transform ${itemClassName}`.trim()}
//     style={{
//       backfaceVisibility: 'hidden',
//       transformStyle: 'preserve-3d'
//     }}
//   >
//     {children}
//   </div>
// );

// const ScrollStack = ({
//   children,
//   className = '',
//   itemDistance = 70,
//   itemScale = 0.03,
//   itemStackDistance = 30,
//   stackPosition = '20%',
//   scaleEndPosition = '10%',
//   baseScale = 0.85,
//   scaleDuration = 0.5,
//   rotationAmount = 0,
//   blurAmount = 0,
//   useWindowScroll = true,
//   onStackComplete
// }) => {
//   const scrollerRef = useRef(null);
//   const stackCompletedRef = useRef(false);
//   const animationFrameRef = useRef(null);
//   const lenisRef = useRef(null);
//   const cardsRef = useRef([]);
//   const lastTransformsRef = useRef(new Map());
//   const isUpdatingRef = useRef(false);

//   const calculateProgress = useCallback((scrollTop, start, end) => {
//     if (scrollTop < start) return 0;
//     if (scrollTop > end) return 1;
//     return (scrollTop - start) / (end - start);
//   }, []);

//   const parsePercentage = useCallback((value, containerHeight) => {
//     if (typeof value === 'string' && value.includes('%')) {
//       return (parseFloat(value) / 100) * containerHeight;
//     }
//     return parseFloat(value);
//   }, []);

//   const getScrollData = useCallback(() => {
//     if (useWindowScroll) {
//       return {
//         scrollTop: window.scrollY,
//         containerHeight: window.innerHeight,
//         scrollContainer: document.documentElement
//       };
//     } else {
//       const scroller = scrollerRef.current;
//       return {
//         scrollTop: scroller.scrollTop,
//         containerHeight: scroller.clientHeight,
//         scrollContainer: scroller
//       };
//     }
//   }, [useWindowScroll]);

//   const getElementOffset = useCallback(
//     element => {
//       if (useWindowScroll) {
//         const rect = element.getBoundingClientRect();
//         return rect.top + window.scrollY;
//       } else {
//         return element.offsetTop;
//       }
//     },
//     [useWindowScroll]
//   );

//   const updateCardTransforms = useCallback(() => {
//     if (!cardsRef.current.length || isUpdatingRef.current) return;

//     isUpdatingRef.current = true;

//     const { scrollTop, containerHeight, scrollContainer } = getScrollData();
//     const stackPositionPx = parsePercentage(stackPosition, containerHeight);
//     const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

//     const endElement = useWindowScroll
//       ? document.querySelector('.scroll-stack-end')
//       : scrollerRef.current?.querySelector('.scroll-stack-end');

//     const endElementTop = endElement ? getElementOffset(endElement) : 0;

//     cardsRef.current.forEach((card, i) => {
//       if (!card) return;

//       const cardTop = getElementOffset(card);
//       const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
//       const triggerEnd = cardTop - scaleEndPositionPx;
//       const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
//       const pinEnd = endElementTop - containerHeight / 2;

//       const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
//       const targetScale = baseScale + i * itemScale;
//       const scale = 1 - scaleProgress * (1 - targetScale);
//       const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

//       let blur = 0;
//       if (blurAmount) {
//         let topCardIndex = 0;
//         for (let j = 0; j < cardsRef.current.length; j++) {
//           const jCardTop = getElementOffset(cardsRef.current[j]);
//           const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
//           if (scrollTop >= jTriggerStart) {
//             topCardIndex = j;
//           }
//         }

//         if (i < topCardIndex) {
//           const depthInStack = topCardIndex - i;
//           blur = Math.max(0, depthInStack * blurAmount);
//         }
//       }

//       let translateY = 0;
//       const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

//       if (isPinned) {
//         translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
//       } else if (scrollTop > pinEnd) {
//         translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
//       }

//       const newTransform = {
//         // translateY: Math.round(translateY * 100) / 100,
//         translateY: Math.round(translateY),
//         scale: Math.round(scale * 1000) / 1000,
//         rotation: Math.round(rotation * 100) / 100,
//         blur: Math.round(blur * 100) / 100
//       };

//       const lastTransform = lastTransformsRef.current.get(i);
//       const hasChanged =
//         !lastTransform ||
//         Math.abs(lastTransform.translateY - newTransform.translateY) > 0.1 ||
//         Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
//         Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1 ||
//         Math.abs(lastTransform.blur - newTransform.blur) > 0.1;

//       if (hasChanged) {
//         const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
//         const filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : '';

//         card.style.transform = transform;
//         card.style.filter = filter;

//         lastTransformsRef.current.set(i, newTransform);
//       }

//       if (i === cardsRef.current.length - 1) {
//         const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
//         if (isInView && !stackCompletedRef.current) {
//           stackCompletedRef.current = true;
//           onStackComplete?.();
//         } else if (!isInView && stackCompletedRef.current) {
//           stackCompletedRef.current = false;
//         }
//       }
//     });

//     isUpdatingRef.current = false;
//   }, [
//     itemScale,
//     itemStackDistance,
//     stackPosition,
//     scaleEndPosition,
//     baseScale,
//     rotationAmount,
//     blurAmount,
//     useWindowScroll,
//     onStackComplete,
//     calculateProgress,
//     parsePercentage,
//     getScrollData,
//     getElementOffset
//   ]);

//   const handleScroll = useCallback(() => {
//     updateCardTransforms();
//   }, [updateCardTransforms]);

// //   const setupLenis = useCallback(() => {
// //     if (useWindowScroll) {
// //       const lenis = new Lenis({
// //         duration: 1.2,
// //         easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
// //         smoothWheel: true,
// //         touchMultiplier: 2,
// //         infinite: false,
// //         wheelMultiplier: 1,
// //         lerp: 0.1,
// //         syncTouch: true,
// //         syncTouchLerp: 0.075
// //       });

// //       lenis.on('scroll', handleScroll);

// //       const raf = time => {
// //         lenis.raf(time);
// //         animationFrameRef.current = requestAnimationFrame(raf);
// //       };
// //       animationFrameRef.current = requestAnimationFrame(raf);

// //       lenisRef.current = lenis;
// //       return lenis;
// //     } else {
// //       const scroller = scrollerRef.current;
// //       if (!scroller) return;

// //       const lenis = new Lenis({
// //         wrapper: scroller,
// //         content: scroller.querySelector('.scroll-stack-inner'),
// //         duration: 1.2,
// //         easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
// //         smoothWheel: true,
// //         touchMultiplier: 2,
// //         infinite: false,
// //         wheelMultiplier: 1,
// //         lerp: 0.1,
// //         syncTouch: true,
// //         syncTouchLerp: 0.075
// //       });

// //       lenis.on('scroll', handleScroll);

// //       const raf = time => {
// //         lenis.raf(time);
// //         animationFrameRef.current = requestAnimationFrame(raf);
// //       };
// //       animationFrameRef.current = requestAnimationFrame(raf);

// //       lenisRef.current = lenis;
// //       return lenis;
// //     }
// //   }, [handleScroll, useWindowScroll]);

// const setupLenis = useCallback(() => {
//     if (useWindowScroll) {
//         window.addEventListener('scroll', handleScroll, { passive: true });
//         return;
//       }      
  
//     // keep Lenis ONLY for container scroll
//     const scroller = scrollerRef.current;
//     if (!scroller) return;
  
//     const lenis = new Lenis({
//       wrapper: scroller,
//       content: scroller.querySelector('.scroll-stack-inner'),
//       duration: 1.2,
//       smoothWheel: true,
//       lerp: 0.1
//     });
  
//     lenis.on('scroll', handleScroll);
  
//     const raf = time => {
//       lenis.raf(time);
//       animationFrameRef.current = requestAnimationFrame(raf);
//     };
//     animationFrameRef.current = requestAnimationFrame(raf);
  
//     lenisRef.current = lenis;
//   }, [handleScroll, useWindowScroll]);
  

//   useLayoutEffect(() => {
//     const scroller = scrollerRef.current;
//     if (!scroller) return;

//     const cards = Array.from(
//       useWindowScroll
//         ? document.querySelectorAll('.scroll-stack-card')
//         : scroller.querySelectorAll('.scroll-stack-card')
//     );

//     cardsRef.current = cards;
//     const transformsCache = lastTransformsRef.current;

//     cards.forEach((card, i) => {
//       if (i < cards.length - 1) {
//         card.style.marginBottom = `${itemDistance}px`;
//       }
//       card.style.willChange = 'transform, filter';
//       card.style.transformOrigin = 'top center';
//       card.style.backfaceVisibility = 'hidden';
//       card.style.transform = 'translateZ(0)';
//       card.style.webkitTransform = 'translateZ(0)';
//       card.style.perspective = '1000px';
//       card.style.webkitPerspective = '1000px';
//     });

//     setupLenis();

//     updateCardTransforms();

//     // return () => {
//     //   if (animationFrameRef.current) {
//     //     cancelAnimationFrame(animationFrameRef.current);
//     //   }
//     //   if (lenisRef.current) {
//     //     lenisRef.current.destroy();
//     //   }
//     //   stackCompletedRef.current = false;
//     //   cardsRef.current = [];
//     //   transformsCache.clear();
//     //   isUpdatingRef.current = false;
//     // };
//     return () => {
//         if (animationFrameRef.current) {
//           cancelAnimationFrame(animationFrameRef.current);
//         }
      
//         if (lenisRef.current) {
//           lenisRef.current.destroy();
//         }
      
//         window.removeEventListener('scroll', handleScroll);
//       };
//   }, [
//     itemDistance,
//     itemScale,
//     itemStackDistance,
//     stackPosition,
//     scaleEndPosition,
//     baseScale,
//     scaleDuration,
//     rotationAmount,
//     blurAmount,
//     useWindowScroll,
//     onStackComplete,
//     setupLenis,
//     updateCardTransforms
//   ]);

//   // Container styles based on scroll mode
//   const containerStyles = useWindowScroll
//     ? {
//         // Global scroll mode - no overflow constraints
//         overscrollBehavior: 'contain',
//         WebkitOverflowScrolling: 'touch',
//         WebkitTransform: 'translateZ(0)',
//         transform: 'translateZ(0)'
//       }
//     : {
//         // Container scroll mode - original behavior
//         overscrollBehavior: 'contain',
//         WebkitOverflowScrolling: 'touch',
//         scrollBehavior: 'smooth',
//         WebkitTransform: 'translateZ(0)',
//         transform: 'translateZ(0)',
//         willChange: 'scroll-position'
//       };

// //   const containerClassName = useWindowScroll
// //     ? `relative w-full ${className}`.trim()
// //     : `relative w-full h-full overflow-y-auto overflow-x-visible ${className}`.trim();

// const containerClassName = useWindowScroll
//  ? `relative w-full ${className}`
//  : `relative w-full overflow-visible ${className}`

//   return (
//     <div className={containerClassName} ref={scrollerRef} style={containerStyles}>
//       <div className="scroll-stack-inner px-10 ">

//         {children}
//         {/* Spacer so the last pin can release cleanly */}
//         <div className="scroll-stack-end w-full h-px" />
//       </div>
//     </div>
//   );
// };

// export default ScrollStack;


import React, { useLayoutEffect, useRef, useCallback } from "react";

export const ScrollStackItem = ({ children, itemClassName = "" }) => (
  <div
    className={`scroll-stack-card relative my-8 p-12 rounded-[40px] box-border origin-top will-change-transform ${itemClassName}`}
    style={{
      backfaceVisibility: "hidden",
      transformStyle: "preserve-3d",
    }}
  >
    {children}
  </div>
);

const ScrollStack = ({
  children,
  className = "",
  itemDistance = 70,
  itemScale = 0.03,
  itemStackDistance = 60,
  stackPosition = "20%",
  scaleEndPosition = "10%",
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  onStackComplete,
}) => {
  const scrollerRef = useRef(null);
  const cardsRef = useRef([]);
  const cardOffsetsRef = useRef([]);
  const tickingRef = useRef(false);
  const stackCompletedRef = useRef(false);

  const parsePercentage = useCallback((value, height) => {
    if (typeof value === "string" && value.includes("%")) {
      return (parseFloat(value) / 100) * height;
    }
    return Number(value);
  }, []);

  const calculateProgress = (value, start, end) => {
    if (value <= start) return 0;
    if (value >= end) return 1;
    return (value - start) / (end - start);
  };

  const cacheOffsets = useCallback(() => {
    cardOffsetsRef.current = cardsRef.current.map((card) => {
      const rect = card.getBoundingClientRect();
      return rect.top + window.scrollY;
    });
  }, []);

  const update = useCallback(() => {
    tickingRef.current = false;

    const scrollY = window.scrollY;
    const vh = window.innerHeight;

    const stackPosPx = parsePercentage(stackPosition, vh);
    const scaleEndPx = parsePercentage(scaleEndPosition, vh);

    const endEl = document.querySelector(".scroll-stack-end");
    const endTop = endEl
      ? endEl.getBoundingClientRect().top + window.scrollY
      : Infinity;

    cardsRef.current.forEach((card, i) => {
      const cardTop = cardOffsetsRef.current[i];

      const triggerStart = cardTop - stackPosPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPx;

      const pinStart = triggerStart;
      const pinEnd = endTop - vh / 2;

      const scaleProgress = calculateProgress(
        scrollY,
        triggerStart,
        triggerEnd
      );

      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount * i * scaleProgress;

      let translateY = 0;
      if (scrollY >= pinStart && scrollY <= pinEnd) {
        translateY =
          scrollY - cardTop + stackPosPx + itemStackDistance * i;
      } else if (scrollY > pinEnd) {
        translateY =
          pinEnd - cardTop + stackPosPx + itemStackDistance * i;
      }

      let blur = 0;
      if (blurAmount && scrollY >= pinStart) {
        blur = Math.max(0, (cardsRef.current.length - i - 1) * blurAmount);
      }

      card.style.transform = `
        translate3d(0, ${translateY}px, 0)
        scale(${scale})
        rotate(${rotation}deg)
      `;
      card.style.filter = blur ? `blur(${blur}px)` : "none";

      if (i === cardsRef.current.length - 1) {
        const active = scrollY >= pinStart && scrollY <= pinEnd;
        if (active && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        }
        if (!active) stackCompletedRef.current = false;
      }
    });
  }, [
    baseScale,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    rotationAmount,
    blurAmount,
    parsePercentage,
    onStackComplete,
  ]);

  const onScroll = useCallback(() => {
    if (!tickingRef.current) {
      tickingRef.current = true;
      requestAnimationFrame(update);
    }
  }, [update]);

  useLayoutEffect(() => {
    const cards = Array.from(
      document.querySelectorAll(".scroll-stack-card")
    );

    cardsRef.current = cards;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.willChange = "transform, filter";
      card.style.transformOrigin = "top center";
    });

    cacheOffsets();
    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", cacheOffsets);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", cacheOffsets);
    };
  }, [cacheOffsets, itemDistance, onScroll, update]);

  return (
    <div
      ref={scrollerRef}
      className={`relative w-full ${className}`}
      style={{
        transform: "translateZ(0)",
        WebkitTransform: "translateZ(0)",
      }}
    >
      <div className="scroll-stack-inner px-10">
        {children}
        <div className="scroll-stack-end w-full h-px" />
      </div>
    </div>
  );
};

export default ScrollStack;