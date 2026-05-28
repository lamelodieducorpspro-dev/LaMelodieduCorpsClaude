"use client";
import { useEffect, useRef } from "react";

export default function HeroHeadline() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const chunks = ref.current.querySelectorAll("[data-chunk]");
    chunks.forEach((el, i) => {
      el.style.setProperty("--chunk-delay", `${i * 130}ms`);
    });
    ref.current.classList.add("od-spring-active");
  }, []);

  return (
    <h1
      ref={ref}
      className="od-spring-hero font-serif text-[2.5rem] sm:text-5xl md:text-7xl text-forest leading-[1.05] md:tracking-tight mb-6"
    >
      <span data-chunk className="inline-block">Nutrition &amp;{" "}</span>
      <em data-chunk className="inline-block text-terracotta">Santé hormonale</em>
      <span data-chunk className="inline-block">{" "}féminine</span>
    </h1>
  );
}
