import { h, Component, render } from "/web_modules/preact.js";
import htm from "/web_modules/htm.js";

const html = htm.bind(h);

export default class Card extends Component {
    render({ cardTitle, subTitle, cardUrl}, { }) {
    return html`
    <div id="main" class="container">
    
        <div id="containerForCard">
            <main id="card">
            <h2>${cardTitle}</h2>
            <p id="cardContent">
                <a href=${cardUrl}>${subTitle}</a>
            </p>
            </main>
    
        </div>
    
        <style>
       
        html {
          box-sizing: border-box;
        }
        :root {
          --uiFonts: "Ubuntu Mono", "Inconsolata", "Anonymous Pro", "Hack", Menlo,
            monospace;
          --contentFonts: "Ubuntu Sans", "Lato", "Open Sans", "Lucida Grande",
            "Segoe UI", "Roboto", Helvetica, sans-serif;
          --displayFonts: "Gentona", "Baufra", Helvetica, sans-serif;
          --monoFonts: "Anonymous Pro", "Hack", "Fira Sans", "Inconsolata", Menlo,
            monospace;
        }
        body {
          margin-left: 0px;
          margin-right: 0px;
          padding-left: 0px;
          padding-right: 0px;
        }
        div#containerForCard {
          margin-left: 7px;
          margin-right: 7px;
          margin-top: 7px;
          margin-bottom: 5px;
        }
        main#card {
          border: 1px solid;
          padding: 10px;
          box-shadow: 5px 10px;
          background: DarkSeaGreen;
          font-family: var(--contentFonts, sans-serif);
        }
        #cardContent a {
          color: inherit;
        }
        </style>
    </div>
    `;
    }
}

