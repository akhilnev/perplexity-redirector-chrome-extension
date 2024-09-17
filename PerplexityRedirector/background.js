chrome.tabs.onCreated.addListener((tab) => {
  if (tab.pendingUrl === "chrome://newtab/") {
    chrome.tabs.update(tab.id, { url: "https://www.perplexity.ai" });
  }
});