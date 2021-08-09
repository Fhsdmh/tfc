(function () {
    window.setTimeout(show, 1000);

    var loader = document.getElementsByClassName("loader");
    var content = document.getElementsByClassName("content");

    function show() {
        for (i = 0; i < content.length; i++) {
            content[i].removeAttribute("hidden");
            loader[i].setAttribute("hidden", true);
        }
    }

    const linkBotbar = location.href;
    const navBotbar = document.querySelectorAll("a.nav-botbar");
    const botbarLength = navBotbar.length;
    const ptext = document.getElementsByClassName("ptext");
    const picon = document.getElementsByClassName("picon");

    for (let i = 0; i < botbarLength; i++) {
        if (navBotbar[i].href === linkBotbar) {
            picon[i].removeAttribute("hidden");
            ptext[i].setAttribute("hidden", true);
            navBotbar[i].classList.remove("text-secondary");
            navBotbar[i].classList.add("nav-link-custom");
        }
    }
})();