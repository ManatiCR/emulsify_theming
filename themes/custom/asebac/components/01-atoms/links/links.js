// @TODO: Identify if both twig files and JS will be needed for the Drupal implementation.
Drupal.behaviors.links = {
  attach(context) {
    const el = context.querySelectorAll('.link');
    const links = context.querySelectorAll('.link--alt');
    let activeIndex = 0;

    /**
     * goToLink
     * @description Goes to a specific Link based on index. Returns nothing.
     * @param {Number} index The index of the Link to go to
     */
    function goToLink(index) {
      if (index !== activeIndex && index >= 0 && index <= links.length) {
        links[activeIndex].classList.remove('is-active');
        links[index].classList.add('is-active');
        activeIndex = index;
      }
    }

    /**
     * handleClick
     * @description Handles click event listeners on each of the links in the
     *   Link navigation. Returns nothing.
     * @param {HTMLElement} link The link to listen for events on
     * @param {Number} index The index of that link
     */
    function handleClick(link, index) {
      link.addEventListener('click', e => {
        e.preventDefault();
        goToLink(index);
      });
    }

    /**
     * init
     * @description Initializes the component by removing the no-js class from
     *   the component, and attaching event listeners to each of the nav items.
     *   Returns nothing.
     */
    for (let e = 0; e < el.length; e += 1) {
      el[e].classList.remove('no-js');
    }

    for (let i = 0; i < links.length; i += 1) {
      const link = links[i];
      handleClick(link, i);
    }
  },
};
