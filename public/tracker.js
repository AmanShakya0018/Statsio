(function () {
  function sendVisit() {
    try {
      const script = document.querySelector('script[src*="tracker.js"]');
      const siteId = script?.getAttribute("data-site");

      if (!siteId) {
        console.error("Tracker: Missing data-site attribute.");
        return;
      }

      const payload = {
        siteId: siteId,
        pathname: window.location.pathname,
        referrer: document.referrer || null,
        userAgent: navigator.userAgent,
        screenWidth: window.innerWidth,
      };

      console.log("Sending visit payload:", payload);

      fetch("https://statsio.amanshakya.in/api/collect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch((err) => {
        console.error("Tracker: Failed to send visit", err);
      });
    } catch (error) {
      console.error("Tracker: Error occurred", error);
    }
  }

  function patchHistory(method) {
    const original = history[method];
    history[method] = function () {
      const result = original.apply(this, arguments);
      window.dispatchEvent(new Event("locationchange"));
      return result;
    };
  }

  patchHistory("pushState");
  patchHistory("replaceState");

  window.addEventListener("locationchange", sendVisit);
  window.addEventListener("popstate", sendVisit);

  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    sendVisit();
  } else {
    window.addEventListener("DOMContentLoaded", sendVisit);
  }
})();
