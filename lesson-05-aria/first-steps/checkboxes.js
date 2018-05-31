(function() {
  'use strict';

  /** Define values for keycodes */
  var VK_ENTER      = 13;
  var VK_SPACE      = 32;
  var VK_LEFT       = 37;
  var VK_UP         = 38;
  var VK_RIGHT      = 39;
  var VK_DOWN       = 40;

  /** Helper function to convert NodeLists to Arrays */
  function slice(nodes) {
    return Array.prototype.slice.call(nodes);
  }

  function Checkbox(el) {
    this.el = el;

    this.el.addEventListener('keydown', this.handleKeyDown.bind(this));
    this.el.addEventListener('click', this.toggle.bind(this));

    // Initialize the values. Add a role to the checkbox.
    //If the checkbox is checked, add aria-checked = true else false.
    this.el.setAttribute('role', 'checkbox');
    if (this.el.hasAttribute('checked')) {
      this.el.setAttribute('aria-checked', 'true');
    } else {
      this.el.setAttribute('aria-checked', 'false');
    }
  }

  Checkbox.prototype.handleKeyDown = function(e) {
    switch(e.keyCode) {
      case VK_ENTER:
      case VK_SPACE: {
        this.toggle();
        break;
      }
    }
  };

  Checkbox.prototype.toggle = function() {
    if (this.el.hasAttribute('checked')) {
      this.el.removeAttribute('checked');
      //if checkbox isnt checked, set aria-checked = false
      this.el.setAttribute('aria-checked', 'false');
    } else {
      this.el.setAttribute('checked', '');
      //if checkbox is checked, set aria-checked = true
      this.el.setAttribute('aria-checked', 'true');
    }
  };

  var checkboxes = slice(document.querySelectorAll('.checkbox'));
  for (var checkbox of checkboxes)
    checkbox.logic = new Checkbox(checkbox);

}());
