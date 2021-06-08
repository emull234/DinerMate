class Hero extends HTMLElement {
  connectedCallback() {
    this._background = this.getAttribute('background');
    this._title = this.getAttribute('title');
    this._tagline = this.getAttribute('tagline');
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
    .hero {
      width: 100%;
      height: 380px;
      background-image: url('${this._background}');
      display: flex;
      align-items: center;
      justify-content: center;
      background-position: center;
      background-size: cover;
      background-blend-mode: darken;
      background-repeat: no-repeat;
      background-color: #02020260;
      background-attachment: fixed;
    }
    
    .hero_inner {
      color: white;
      text-align: center;
      text-shadow: 2px 2px 4px #a35405ab;
      font-family: 'Poppins', sans-serif;
    }
    
    .hero .hero_inner h1 {
      font-style: italic;
    }
    
    .hero .hero_inner p {
      font-size: 1.4em;
      margin-top: 10px;
      font-weight: 100;
    }
    </style>
    <div class="hero">
      <div class="hero_inner">
        <h1>${this._title}</h1>
        <p>${this._tagline}</p>
      </div>
    </div>
    `;
  }
}

customElements.define('hero-section', Hero);
