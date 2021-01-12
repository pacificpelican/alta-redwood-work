import { h, Component, render } from "/web_modules/preact.js";
import htm from "/web_modules/htm.js";

import Moving from "./moving.js";
import Hammerhead from "./hammerhead.js";

import Alta from "./alta.js";

import Card from "./card.js"

const html = htm.bind(h);

class Index extends Component {
  render() {
    return html`
      <${Moving} />
      <${Card} cardTitle="AltaRedwood.com Store" subTitle="get your web site merch" cardUrl="https://altaredwood.com" />
      <section id="logo_img">
        <a href="https://altaredwood.work"><img id="altaredwood" src="./static/img/altaRedwoodLogo.jpg" /></a>
      </section>
      <${Alta} />
      <style>
        img#altaredwood {
          width: calc(22vw + 10pt);
        }
      </style>
        }
    `;
  }
}

render(
  html`
    <${Index} />
  `,
  document.getElementById("main")
);
