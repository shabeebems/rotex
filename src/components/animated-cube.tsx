/* eslint-disable @next/next/no-img-element */
"use client";

import { useAnimationFrame } from "motion/react";
import { useRef } from "react";

const cubeSides = [
  {
    name: "front",
    image: "/templates/RRM001.jpg",
    transform: "[transform:rotateY(0deg)_translateZ(100px)]",
  },
  {
    name: "left",
    image: "/templates/RRM002.jpg",
    transform: "[transform:rotateY(-90deg)_translateZ(100px)]",
  },
  {
    name: "right",
    image: "/templates/RRM003.jpg",
    transform: "[transform:rotateY(90deg)_translateZ(100px)]",
  },
  {
    name: "top",
    image: "/templates/RRM004.jpg",
    transform: "[transform:rotateX(90deg)_translateZ(100px)]",
  },
  {
    name: "bottom",
    image: "/templates/RRM005.jpg",
    transform: "[transform:rotateX(-90deg)_translateZ(100px)]",
  },
  {
    name: "back",
    image: "/templates/RRM006.jpg",
    transform: "[transform:rotateY(180deg)_translateZ(100px)]",
  },
] as const;

/** Rich green accents on each cube face corner */
function CubeFaceCorners() {
  const wash = "pointer-events-none absolute z-10 h-9 w-9 sm:h-10 sm:w-10";

  return (
    <>
      <div
        className={`${wash} left-0 top-0 bg-gradient-to-br from-forest-900 via-forest-800/90 to-transparent`}
        aria-hidden
      />
      <div
        className={`${wash} right-0 top-0 bg-gradient-to-bl from-forest-900 via-forest-800/90 to-transparent`}
        aria-hidden
      />
      <div
        className={`${wash} bottom-0 left-0 bg-gradient-to-tr from-forest-900 via-forest-800/90 to-transparent`}
        aria-hidden
      />
      <div
        className={`${wash} bottom-0 right-0 bg-gradient-to-tl from-forest-900 via-forest-800/90 to-transparent`}
        aria-hidden
      />

      <span
        className="pointer-events-none absolute left-0 top-0 z-10 h-6 w-6 border-l-[2.5px] border-t-[2.5px] border-forest-950"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute right-0 top-0 z-10 h-6 w-6 border-r-[2.5px] border-t-[2.5px] border-forest-950"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute bottom-0 left-0 z-10 h-6 w-6 border-b-[2.5px] border-l-[2.5px] border-forest-950"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute bottom-0 right-0 z-10 h-6 w-6 border-b-[2.5px] border-r-[2.5px] border-forest-950"
        aria-hidden
      />
    </>
  );
}

export default function AnimatedCube() {
  const ref = useRef<HTMLDivElement>(null);

  useAnimationFrame((time) => {
    if (!ref.current) return;

    const rotate = Math.sin(time / 10000) * 200;
    const y = (1 + Math.sin(time / 1000)) * -50;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <div className="flex h-[280px] w-full items-center justify-center [perspective:800px]">
      <div
        ref={ref}
        className="relative h-[200px] w-[200px] [transform-style:preserve-3d]"
        aria-hidden="true"
      >
        {cubeSides.map((side) => (
          <div
            key={side.name}
            className={`absolute inset-0 overflow-hidden bg-white ${side.transform}`}
          >
            <img
              src={side.image}
              alt=""
              className="relative z-0 h-full w-full object-contain object-top"
              draggable={false}
            />
            <CubeFaceCorners />
          </div>
        ))}
      </div>
    </div>
  );
}
