const startButton = document.getElementById('hold-button');

startButton.addEventListener('click', () => {
    const computedBefore = window.getComputedStyle(startButton, '::before');
    const computedButton = window.getComputedStyle(startButton);

    const beforeWidth = computedBefore.width;
    const buttonWidth = computedButton.width;


    console.log("got -> ", beforeWidth, buttonWidth);
    if (beforeWidth === buttonWidth) {
        startPage()
    }
});
