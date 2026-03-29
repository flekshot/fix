import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getRouteByPath } from "../data/navigation";

export function useActiveSection() {
  const { pathname } = useLocation();
  const route = getRouteByPath(pathname);
  const [active, setActive] = useState(route?.sections[0]?.id ?? "");

  useEffect(() => {
    const ids = route?.sections.map((s) => s.id) ?? [];
    if (ids.length === 0) return;

    setActive(ids[0]);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [route]);

  return active;
}
