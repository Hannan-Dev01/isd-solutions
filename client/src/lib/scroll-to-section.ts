export function scrollToSection(sectionId: string, onNavigate?: () => void) {
  onNavigate?.();

  const hash = `#${sectionId}`;

  if (window.location.pathname !== "/") {
    window.location.href = `/${hash}`;
    return;
  }

  window.history.pushState(null, "", hash);
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function scrollToHashOnLoad() {
  const hash = window.location.hash.replace("#", "");
  if (!hash) return;

  requestAnimationFrame(() => {
    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}
