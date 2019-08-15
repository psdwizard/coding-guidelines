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