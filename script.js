function createElement(tag, className) {
  const $tag = document.createElement(tag);
  if (className){
    $tag.classList.add(className);
  }
  return $tag;
};
  


  function showMainButton() {
    const $containerMainBtn = document.querySelector('.container__main-button');
    const $mainButton = createElement('a','main-button');
    $containerMainBtn.appendChild($mainButton);
  }
  
  setTimeout(showMainButton, 3000);