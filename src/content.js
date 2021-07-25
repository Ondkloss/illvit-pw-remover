const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

const requiredClasses = ['tp-container-inner', 'full-height']

const observer = new MutationObserver(function (mutations) {
  for (const mutation of mutations) {
    for (const addedNode of mutation.addedNodes) {

      if (addedNode.nodeName === 'DIV' && requiredClasses.every(c => addedNode.classList.contains(c)))
        console.log('Matched paywall. Removing.')
      addedNode.remove()
    }
  }
});


observer.observe(document.getElementsByTagName("body")[0], {
  childList: true,
  subtree: true
})
