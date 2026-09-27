import React, { useEffect, useState } from 'react';

const words = ['software engineer', 'systems enthusiast', 'researcher', 'speedcuber'];
const motionQuery = '(prefers-reduced-motion: reduce)';

export const Typewriter = () => {
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia?.(motionQuery).matches ?? false);
  const [visible, setVisible] = useState(() => document.visibilityState !== 'hidden');
  const [frame, setFrame] = useState({ word: 0, length: 0, deleting: false });

  useEffect(() => {
    const preference = window.matchMedia?.(motionQuery);
    const updateMotion = () => setReducedMotion(preference.matches);
    const updateVisibility = () => setVisible(document.visibilityState !== 'hidden');
    preference?.addEventListener('change', updateMotion);
    document.addEventListener('visibilitychange', updateVisibility);
    return () => {
      preference?.removeEventListener('change', updateMotion);
      document.removeEventListener('visibilitychange', updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion || !visible) return;
    const complete = frame.length === words[frame.word].length;
    const delay = complete && !frame.deleting ? 1800 : frame.length === 0 ? 350 : frame.deleting ? 45 : 90;
    const timer = window.setTimeout(() => {
      setFrame(previous => {
        if (!previous.deleting && complete) return { ...previous, deleting: true };
        if (previous.deleting && previous.length === 0) return { word: (previous.word + 1) % words.length, length: 0, deleting: false };
        return { ...previous, length: previous.length + (previous.deleting ? -1 : 1) };
      });
    }, delay);
    return () => window.clearTimeout(timer);
  }, [frame, reducedMotion, visible]);

  const stopped = reducedMotion || !visible;
  return (
    <div className={`typewriter${stopped ? ' typewriter-stopped' : ''}`}>
      <span className="visually-hidden">I'm a software engineer, systems enthusiast, researcher, and speedcuber.</span>
      <span className="typewriter-visual" aria-hidden="true">
        <span className="typewriter-prefix">I'm a </span>
        <span className="typewriter-word">
          {words.map(word => <span className="typewriter-sizer" key={word}>{word}<span className="typewriter-cursor">|</span></span>)}
          <span className="typewriter-live">{reducedMotion ? words[0] : words[frame.word].slice(0, frame.length)}<span className="typewriter-cursor">|</span></span>
        </span>
      </span>
    </div>
  );
};
