import { h, Component, render } from "/web_modules/preact.js";
import htm from "/web_modules/htm.js";

const html = htm.bind(h);

class Moving extends Component {
  render() {
    return html`
      <div id="moving_main">
        <div id="f-_-Container">
          <h1 id="altaredwoodpics">
            Alta Redwood Pictures
          </h1>
          <h2>Links</h2>
          <ul id="links">
            <li><a href="https://bsky.app/profile/altaredwood.work">Alta Redwood on BlueSky</a></li>
            <li><a href="https://www.youtube.com/@pacificpelican">@pacificpelican on YouTube</a></li>
            <li><a href="https://drive.google.com/file/d/123yesY2rQFPyZGjMxR5vyd5etfkRksdi/view?usp=sharing">Sneak Preview: "3 Trader Joe's Bags" video</a></li>
            <li><a href="https://pacificio.com/contact">Contact Dan</a></li>
            <li><a href="https://jessmckeown.com">Jessica's Web Site</a></li>
        </ul>
        </div>
        <style>
          :root {
            --uiFonts: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            --contentFonts: "Lato", "Open Sans", "Lucida Grande", "Ubuntu Sans", "Segoe UI", "Roboto", Helvetica, sans-serif;
            --displayFonts: "Gentona", "Baufra", Georgia, serif;
            --monoFonts: "Hack", "Fira Sans", "Anonymous Pro", "Inconsolata", monospace;
            --textFonts: "Calluna", "Caslon", "Garamond", serif;
            --sFonts: Courier, "Open Sans", monospace;
            --condensedFonts: "Densia Sans", "Fira Sans Condensed", "Roboto Condensed", "Open Sans Condensed", "Ubuntu Condensed", sans-serif;
            --white-color: white;
            --bg-color: purple;
          }
          html {
            box-sizing: border-box;
          }
          h1 {
            font-family: var(--monoFonts, monospace);
          }
          body {
            margin-left: 0px;
            margin-right: 0px;
            padding-left: 0px;
            padding-right: 0px;
            background: white;
          }
         
          #f-_-Container {
            background: rgba(106, 158, 182, 0.815);
            color: var(--white-color, white);
            padding-inline-start: calc(1vw + 5px);
            padding-inline-end: calc(1vw + 5px);
            padding-block-start: calc(0.4vw + 5px);
            padding-block-end: calc(0.4vw + 5px);
            font-family: var(--monoFonts, sans-serif);
          }

          #f-_-Container a {
            color: inherit;
          }
          
          @media (max-width: 779px) {
           
          }
          @media (min-width: 780px) {
         
          }
        </style>
      </div>
    `;
  }
}

export default Moving;
