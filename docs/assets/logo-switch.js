// Swap header logo when Material's color scheme changes
(function () {
  function setLogo() {
    const isDark =
      document.documentElement.getAttribute("data-md-color-scheme") === "slate";
    const logoEl = document.querySelector(".md-header__button.md-logo img");
    if (!logoEl) return;

    const url = new URL(
      isDark ? "assets/logo-dark.svg" : "assets/logo-light.svg",
      document.baseURI
    );
    if (logoEl.getAttribute("src") !== url.href) {
      logoEl.setAttribute("src", url.href);
    }
  }

  // Run on load
  document.addEventListener("DOMContentLoaded", setLogo);

  // React to manual theme toggles (Material updates this attribute)
  const obs = new MutationObserver(setLogo);
  obs.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-md-color-scheme"],
  });

  // Also react to OS-level preference changes
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  if (mq && mq.addEventListener) mq.addEventListener("change", setLogo);
})();