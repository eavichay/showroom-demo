Slim.tag('pop-up', class extends Slim {
  get template() {
    return /*html*/`
      <style>
        :host {
          position: relative;
          display: inline;
        }

        :host [part="container"] {
          display: none;
          position: absolute;
          border: 1px solid black;
          border-radius: 2px;
          background: rgba(255, 255, 255, 0.8);
          box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.25);
          width: fit-content;
          height: fit-content;
        }

        :host([open]) [part="container"] {
          display: inline-block;
        }
      </style>
      <span click="toggle" part="trigger">👍<slot name="trigger"></slot></span>
      <span part="container"><slot></slot></span>
    `;
  }

  get useShadow () {
    return true;
  }

  open () {
    this.setAttribute('open', '');
  }

  close () {
    this.removeAttribute('open');
  }

  toggle () {
    this.toggleAttribute('open');
  }
});