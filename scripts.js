window.addEventListener("load", function() {
    const figure = document.querySelector('.kv-figure');
    const innovation = document.querySelector('.innovation');
    const wennovation = document.querySelector('.wennovation');
    const hitori = document.querySelector('.hitori');

    // 英字をスライドイン
    figure.style.animation = "slideUp 0.5s ease-out forwards";

    setTimeout(() => {
        innovation.style.rotate = 'x 90deg';
        wennovation.style.rotate = 'x 0deg';
        // 和文をスライドイン
        hitori.style.animation = "slideUp 0.5s ease-out forwards";
    },1750);
});