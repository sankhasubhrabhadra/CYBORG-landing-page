import React, { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [targetPos, setTargetPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let animFrame;
    let currX = -100;
    let currY = -100;
    let targetX = -100;
    let targetY = -100;

    const onMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setTargetPos({ x: targetX, y: targetY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering interactive element
      const target = e.target;
      const isInteractive = target && (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('input') ||
        target.closest('select') ||
        target.closest('[role="button"]') ||
        target.closest('.cursor-pointer') ||
        target.classList.contains('interactive-node')
      );
      setIsHovered(!!isInteractive);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);

    const loop = () => {
      currX += (targetX - currX) * 0.2;
      currY += (targetY - currY) * 0.2;
      setPos({ x: currX, y: currY });
      animFrame = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    animFrame = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animFrame);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Central Sharp Dot */}
      <div
        className="fixed w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 pointer-events-none transition-transform duration-75 z-50 shadow-[0_0_8px_#00f3ff]"
        style={{
          left: `${targetPos.x}px`,
          top: `${targetPos.y}px`,
          transform: isClicking ? 'translate(-50%, -50%) scale(0.6)' : 'translate(-50%, -50%) scale(1)',
        }}
      />

      {/* Outer Smooth Lagging Ring */}
      <div
        className={`fixed -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-300 pointer-events-none ${
          isHovered
            ? 'w-12 h-12 border-cyan-400 bg-cyan-500/10 shadow-[0_0_20px_rgba(0,243,255,0.3)] scale-110'
            : 'w-7 h-7 border-cyan-400/40 bg-transparent'
        }`}
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: isClicking ? 'translate(-50%, -50%) scale(0.8)' : 'translate(-50%, -50%) scale(1)',
        }}
      />
    </div>
  );
};
