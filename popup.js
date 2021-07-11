document.addEventListener("DOMContentLoaded", function () {


    // ------------------------- SHARED -------------------------

    const refresh = document.querySelector("#refresh");
    refresh.addEventListener("click", refreshPage);

    function refreshPage() {
        refresh.classList.remove("on");
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, "refreshPage", styleBtn_1)
        })
    }


    // ------------------------- EMAIL FRONTEND TOOL -------------------------

    const btn_1 = document.querySelector("#EFT");
    btn_1.addEventListener("click", onclick_1, false)

    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, "openPopup_1", styleBtn_1)
    })

    function onclick_1() {
        refresh.classList.add("on");

        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, "clickPopupBtn_1", styleBtn_1)
        })
    }

    function styleBtn_1(res) {
        if (res !== undefined) {
            if (res.localStatus === "on") {
                btn_1.classList.add("on")
            } else {
                btn_1.classList.remove("on")
            }
        }
    }



    // ------------------------- BANNER TOOL -------------------------

    const btn_2 = document.querySelector("#BT");
    btn_2.addEventListener("click", onclick_2, false)

    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, "openPopup_2", styleBtn_2)
    })

    function onclick_2() {
        refresh.classList.add("on");

        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, "clickPopupBtn_2", styleBtn_2)
        })
    }

    function styleBtn_2(res) {
        if (res !== undefined) {
            if (res.localStatus === "on") {
                btn_2.classList.add("on")
            } else {
                btn_2.classList.remove("on")
            }
        }
    }

}, false)