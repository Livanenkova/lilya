function createElement(tag, className) {
  const $tag = document.createElement(tag);
  if (className){
    $tag.classList.add(className);
  }
  return $tag;
};

  function playAudio() {
    const audio = document.getElementById("myaudio");
    audio.volume = 0.2;
  }
  


  function showMainButton() {
    const $containerMainBtn = document.querySelector('.container__main-button');
    const $mainButton = createElement('a','main-button');
    $containerMainBtn.appendChild($mainButton);
    $mainButton.innerText = 'play';
    $mainButton.setAttribute("href", "welcomepage.html");

  }
  playAudio()
  setTimeout(showMainButton, 3000);