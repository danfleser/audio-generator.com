const playIconContainerElements = document.getElementsByClassName('play-icon');
const playIconContainers = Array.from(playIconContainerElements)

const stopPlayer = (playIconContainer) => {
    playIconContainer.audio.load();
    playIconContainer.playAnimation.playSegments([0, 14], true);
    playIconContainer.playState = 'play';
}
playIconContainers.forEach(playIconContainer => {
    playIconContainer.playState = 'play';
    playIconContainer.playAnimation = lottie.loadAnimation({
        container: playIconContainer,
        path: 'https://maxst.icons8.com/vue-static/landings/animated-icons/icons/pause/pause.json',
        renderer: 'svg',
        loop: false,
        autoplay: false,
        name: "Play Animation",
    });

    playIconContainer.playAnimation.goToAndStop(14, true);
    playIconContainer.audio = playIconContainer.parentElement.querySelector('audio');
    playIconContainer.addEventListener('click', () => {
        if(playIconContainer.playState === 'play') {
            playIconContainer.audio.play();
            playIconContainer.playAnimation.playSegments([14, 27], true);
            playIconContainer.playState = 'pause';
            // stop other players
            playIconContainers.forEach(pic => {
                if (pic !== playIconContainer && pic.playState === 'pause')  {
                    stopPlayer(pic);
                }
            });
        } else {
            stopPlayer(playIconContainer)
        }
    });

})
