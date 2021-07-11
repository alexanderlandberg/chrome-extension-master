// ------------------------- EMAIL FRONTEND TOOL -------------------------

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

  // Open popup
  if (request === "openPopup_1") {
    if (localStorage.getItem("EmailFrontendTool_Switch") === null) {
      localStorage.setItem("EmailFrontendTool_Switch", "off")
    }

    sendResponse({ localStatus: localStorage.getItem("EmailFrontendTool_Switch") })
  }

  // Click popup button
  if (request === "clickPopupBtn_1") {

    if (localStorage.getItem("EmailFrontendTool_Switch") === "off") {
      localStorage.setItem("EmailFrontendTool_Switch", "on")
    } else {
      localStorage.setItem("EmailFrontendTool_Switch", "off")
    }

    sendResponse({ localStatus: localStorage.getItem("EmailFrontendTool_Switch") })
  }

  // Reload page
  if (request === "refreshPage") {
    location.reload();
  }

})

if (localStorage.getItem("EmailFrontendTool_Switch") === "on") {
  let head = document.querySelector("head");

  let script = document.createElement("script");
  script.setAttribute("type", "text/javascript");
  script.setAttribute("src", "https://alexanderlandberg.github.io/email-frontend-tool/email-frontend-tool.js");
  head.appendChild(script);

  let style = document.createElement("link");
  style.setAttribute("type", "text/css");
  style.setAttribute("rel", "stylesheet");
  style.setAttribute("href", "https://alexanderlandberg.github.io/email-frontend-tool/email-frontend-tool.css");
  head.appendChild(style);
}


// ------------------------- BANNER TOOL -------------------------


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

  // Open popup
  if (request === "openPopup_2") {
    if (localStorage.getItem("BannerTool_Switch") === null) {
      localStorage.setItem("BannerTool_Switch", "off")
    }

    sendResponse({ localStatus: localStorage.getItem("BannerTool_Switch") })
  }

  // Click popup button
  if (request === "clickPopupBtn_2") {

    if (localStorage.getItem("BannerTool_Switch") === "off") {
      localStorage.setItem("BannerTool_Switch", "on")
    } else {
      localStorage.setItem("BannerTool_Switch", "off")
    }

    sendResponse({ localStatus: localStorage.getItem("BannerTool_Switch") })
  }

  // Reload page
  if (request === "refreshPage") {
    location.reload();
  }

})

if (localStorage.getItem("BannerTool_Switch") === "on") {
  let head = document.querySelector("head");

  let script = document.createElement("script");
  script.setAttribute("type", "text/javascript");
  script.setAttribute("src", "https://alexanderlandberg.github.io/banner-visualiser/banner-visualiser.js");
  head.appendChild(script);

  let style = document.createElement("link");
  style.setAttribute("type", "text/css");
  style.setAttribute("rel", "stylesheet");
  style.setAttribute("href", "https://alexanderlandberg.github.io/banner-visualiser/banner-visualiser.css");
  head.appendChild(style);
}

