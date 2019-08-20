export const copyStringToClipboard = str => {
  // Create new element
  var el = document.createElement('textarea');
  // Set value (string to be copied)
  el.value = str;
  // Set non-editable to avoid focus and move outside of view
  el.setAttribute('readonly', '');
  el.style = {position: 'absolute', left: '-9999px'};
  document.body.appendChild(el);
  // Select text inside element
  el.select();
  // Copy text to clipboard
  document.execCommand('copy');
  // Remove temporary element
  document.body.removeChild(el);
}

export const slugify = text => text.toString().toLowerCase().trim()
  .replace(/&/g, '-and-') // Replace & with 'and'
  .replace(/[\s\W-]+/g, '-') // Replace spaces, non-word characters and dashes with a single dash (-)

export const scrollWithOffset = (el, offset, animate = true) => {
  const elementPosition = el.offsetTop - offset
  const scrollSettings = {
    top: elementPosition,
    left: 0,
  }

  if (animate) {
    scrollSettings.behavior = 'smooth'
  }

  window.scroll(scrollSettings)
}

export const scrollToTop = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}