Using either the [Accessibility Developer Tools extension](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en) or `document.activeElement` see if you can track down the element that's
stealing focus and fix the page.

css properties like display:none and visibility: hidden will prevent 'focus' on the offscreen content.
