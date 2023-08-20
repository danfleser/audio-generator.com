const cardContainerElements = document.getElementsByClassName('circle-image-parent');
const cardContainers = Array.from(cardContainerElements)
const data = [
    {
        image: "images/beat-35.webp",
        description: "A light and cheerly EDM track, with syncopated drums, aery pads, and strong emotions bpm: 130",
        input: "https://github.com/danfleser/audio-generator.com/raw/master/resources/audio/audio-1.mp3",
        output: "https://github.com/danfleser/audio-generator.com/raw/master/resources/audio/result-1.mp3",
    },
    {
        image: "images/beat-44.webp",
        description: "Lofi slow bpm electro chill with organic samples",
        input: "https://github.com/danfleser/audio-generator.com/raw/master/resources/audio/audio-3.mp3",
        output: "https://github.com/danfleser/audio-generator.com/raw/master/resources/audio/result-3.mp3",
    },
    {
        image: "images/beat-42.webp",
        description: "An 80s driving pop song with heavy drums and synth pads in the background",
        input: "https://github.com/danfleser/audio-generator.com/raw/master/resources/audio/audio-2.mp3",
        output: "https://github.com/danfleser/audio-generator.com/raw/master/resources/audio/result-2.mp3",
    },
    {
        image: "images/beat-43.webp",
        description: "A cheerful country song with acoustic guitars",
        input: "https://github.com/danfleser/audio-generator.com/raw/master/resources/audio/audio-4.mp3",
        output: "https://github.com/danfleser/audio-generator.com/raw/master/resources/audio/result-4.mp3",
    },
    {
        image: "images/beat-23.webp",
        description: "A cheerful country song with acoustic trumpets",
        input: "https://github.com/danfleser/audio-generator.com/raw/master/resources/audio/audio-5.mp3",
        output: "https://github.com/danfleser/audio-generator.com/raw/master/resources/audio/result-5.mp3",
    },
    {
        image: "images/beat-39.webp",
        description: "A sad country love song with acoustic guitar",
        input: "https://github.com/danfleser/audio-generator.com/raw/master/resources/audio/audio-6.mp3",
        output: "https://github.com/danfleser/audio-generator.com/raw/master/resources/audio/result-6.mp3",
    },
    {
        image: "images/beat-29.webp",
        description: "Detective theme, intriguing",
        output: "https://github.com/danfleser/audio-generator.com/raw/master/resources/audio/result-11.mp3",
    },
    {
        image: "images/beat-27.webp",
        description: "A happy acoustic song",
        input: "https://github.com/danfleser/audio-generator.com/raw/master/resources/audio/audio-10.mp3",
        output: "https://github.com/danfleser/audio-generator.com/raw/master/resources/audio/result-10.mp3",
    },
    {
        image: "images/beat-22.webp",
        description: "A pop track with bassy drums and synth",
        input: "https://github.com/danfleser/audio-generator.com/raw/master/resources/audio/audio-9.mp3",
        output: "https://github.com/danfleser/audio-generator.com/raw/master/resources/audio/result-9.mp3",
    },
    {
        image: "images/beat-20.webp",
        description: "A light and cheerly dubstep track, with syncopated drums, aery pads, and strong emotions bpm: 130",
        input: "https://github.com/danfleser/audio-generator.com/raw/master/resources/audio/audio-8.mp3",
        output: "https://github.com/danfleser/audio-generator.com/raw/master/resources/audio/result-8.mp3",
    },
]
const cardData = data.concat(data);

const getInputAudioHtml = (input) => `
<div class='tokenInfo'>
  <div class="price">
    <span>--input</span>
  </div>
  <div class="duration">
    <div class='wrapper'>
      <img src="images/input.webp" alt="Creator" loading="lazy"/>
      <div class="audio-player-code">
        <audio src="${input}"  preload="auto" loop></audio>
        <div class="play-icon"></div>
      </div>
    </div>
  </div>
</div>
`;
const getCardHtml = (image, description, input, output, tag) => `
<div class="circle-image-holder">

</div>
<div class="circle-item-text-container">
    <div class="nft">
      <div class='main'>
        <img class='tokenImage' src="${image}" loading="lazy" alt="Audio representation of generated music"/>
        <h2>${tag ? tag :'/music'}</h2>
        <p class='description'>${description}</p>
        ${input ? getInputAudioHtml(input) : ''}
        </div>
        <hr />
        <div class='creator'>
          <p><ins>Result: </ins></p>
          <div class='wrapper'>
            <img src="mages/output.webp" alt="Creator" loading="lazy" />
            <div class="audio-player-code">
              <audio src="${output}"  preload="auto" loop></audio>
              <div class="play-icon"></div>
            </div>
          </div>
        </div>
    </div>
</div>
`;
cardContainers.forEach((cardContainer, index) => {
    const div =  document.createElement('div');
    const cardInfo = cardData[index];
    div.innerHTML = getCardHtml(cardInfo.image, cardInfo.description, cardInfo.input, cardInfo.output, cardInfo.tag);
    Array.from(div.children).forEach(c => cardContainer.appendChild(c));

})
