"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  value: number;
  suffix?: string;
  label: string;
  icon?: React.ReactNode;
  dark?: boolean;
}

function useCountUp(target: number, duration: number = 2000, isVisible: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number;
    const step = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, isVisible]);

  return count;
}

export default function StatCounter({ value, suffix = "+", label, icon, dark = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const count = useCountUp(value, 2000, isVisible);
  const textColor = dark ? "text-white" : "text-deep-forest";
  const labelColor = dark ? "text-sage" : "text-forest-mid";

  return (
    <div ref={ref} className="text-center">
      {icon && <div className={`flex justify-center mb-2 ${dark ? "text-sage" : "text-reserve-green"}`}>{icon}</div>}
      <div className={`font-display font-bold text-3xl lg:text-4xl ${textColor}`}>
        {count.toLocaleString()}{suffix}
      </div>
      <div className={`text-xs font-mono-accent uppercase tracking-widest mt-1 ${labelColor}`}>
        {label}
      </div>
    </div>
  );
}
