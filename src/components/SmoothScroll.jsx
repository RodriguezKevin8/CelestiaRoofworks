import { useEffect } from "react";

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const handleSmoothScroll = (event) => {
      if (
        event.target.tagName === "A" &&
        event.target.getAttribute("href")?.startsWith("#")
      ) {
        event.preventDefault();

        const targetId = event.target.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const targetPosition = targetElement.getBoundingClientRect().top;
          const startPosition = window.scrollY;
          const offset = 0;
          const duration = 2000;

          smoothScrollTo(
            startPosition,
            targetPosition + startPosition - offset,
            duration
          );
        }
      }
    };

    const smoothScrollTo = (start, end, duration) => {
      let startTime = null;

      const step = (currentTime) => {
        if (!startTime) startTime = currentTime;

        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easeInOutCubic = (t) =>
          t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        const position = start + (end - start) * easeInOutCubic(progress);

        window.scrollTo(0, position);

        if (elapsed < duration) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };

    document.addEventListener("click", handleSmoothScroll);

    return () => {
      document.removeEventListener("click", handleSmoothScroll);
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
