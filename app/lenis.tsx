"use client";

import { ReactNode, useEffect, useRef } from "react";

// @ts-ignore
import LocomotiveScroll from "@iojcde/locomotive-scroll";

import { gsap } from "@/lib/gsap";

export const LenisProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      initCustomTicker: (render) => {
        gsap.ticker.add(render);
      },
      destroyCustomTicker: (render) => {
        gsap.ticker.remove(render);
      },
    });

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return <>{children}</>;
};
