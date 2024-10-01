import { h, Component, render } from "/web_modules/preact.js";
import htm from "/web_modules/htm.js";

import Allmylinks from "./allmylinks.js";
import Hammerhead from "./hammerhead.js";

import Alta from "./alta.js";

import Card from "./card.js"

const html = htm.bind(h);

class Index extends Component {
  render() {
    return html`
      <section id="logo_img">
        <a href="https://altaredwood.work"><img alt="altaredwood.work" id="altaredwood" src="./static/img/altaRedwoodLogo.jpg" /></a>
      </section>
      <${Allmylinks} />
      <${Card} cardTitle="Tour of the Puget Sound area video playlist" subTitle="take a trip to Seattle and environs" cardUrl="https://www.youtube.com/watch?v=0ClAHA4b32o&list=PLe0qZrpx7auLa5sKD_G5V7j3iex0Rf-go" />
      <style>
        img#altaredwood {
          width: calc(22vw + 10pt);
        }
      </style>
    `;
  }
}

render(
  html`
    <${Index} />
  `,
  document.getElementById("main")
);
