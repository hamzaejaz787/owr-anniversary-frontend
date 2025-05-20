import { useEffect, useState } from "react";

export function useImagesLoaded(selector = "img") {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      const images: HTMLImageElement[] = Array.from(
        document.querySelectorAll(selector)
      );

      if (images.length === 0) {
        setLoaded(true);
        return;
      }

      let loadedCount = 0;

      const check = () => {
        loadedCount += 1;
        if (loadedCount >= images.length) setLoaded(true);
      };

      images.forEach((img) => {
        if (img.complete) {
          check();
        } else {
          img.addEventListener("load", check);
          img.addEventListener("error", check);
        }
      });

      // Proper cleanup
      return () => {
        images.forEach((img) => {
          img.removeEventListener("load", check);
          img.removeEventListener("error", check);
        });
      };
    });

    return () => cancelAnimationFrame(id);
  }, [selector]);

  return loaded;
}
