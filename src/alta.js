import { h, Component, render } from "/web_modules/preact.js";
import htm from "/web_modules/htm.js";

const html = htm.bind(h);

class Alta extends Component {
  render() {
    return html`
      <div id="alta-container">
        <div id="Altaredwoodcontainer">
          <header className="App-header">
            <div class="Altaredwoodh1 App-title">Alta Redwood</div>
            <div className="Altaredwoodh2 App-description">
              Wellness and Technology Services
            </div>
          </header>
          <div class="Partnersection">
            <div class="Partnerdiv">
              <h3 className="partnerh1">
                <a class="Altaredwooda" href="https://jessmckeown.com">
                  Jess McKeown
                </div>
              </h3>
              <span className="av">
                <a class="Altaredwooda" href="https://jessmckeown.com">
                  <img class="Altaredwoodimg"
                    src="./static/img/JessicaMcKeown_Headshot-Edit-2-4d2839e9-1600w.jpg"
                    alt="jess"
                    id="jdc-img"
                  />
                </a>
              </span>
            </div>

            <div class="Partnerdiv">
              <h3 className="partnerh1">
                <a class="Altaredwooda" href="https://pacificio.com">
                  Dan McKeown
                </a>
              </h3>
              <span className="av">
                <a class="Altaredwooda" href="https://pacificio.com">
                  <img class="Altaredwoodimadjusted"
                    src="./static/img/DanMcKeownNov2019byJessMcKeownv2.jpg"
                    alt="dan"
                    id="djm-img"
                  />
                </a>
              </span>
            </div>
          </div>
          <footer>
            copyright 2018-2019 <a href="https://altaredwood.work">altaredwood.work</a>
          </footer>
        </div>
          <style>
            /* :root {
              --uiFonts: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
              --contentFonts: "Lato", "Open Sans", "Lucida Grande", "Ubuntu Sans", "Segoe UI", "Roboto", Helvetica, sans-serif;
              --displayFonts: "Gentona", "Baufra", Georgia, serif;
              --monoFonts: "Hack", "Fira Sans", "Anonymous Pro", "Inconsolata", monospace;
              --textFonts: "Calluna", "Caslon", "Garamond", serif;
              --sFonts: Courier, "Open Sans", monospace;
              --condensedFonts: "Densia Sans", "Fira Sans Condensed", "Roboto Condensed", "Open Sans Condensed", "Ubuntu Condensed", sans-serif;
              --white-color: white;
            }
            html {
              box-sizing: border-box;
            }
            body {
              margin-left: 0px;
              margin-right: 0px;
              padding-left: 0px;
              padding-right: 0px;
              background: white;
            } */
            body {
              background-image: url("./static/img/redwood.jpeg");
            }
           
            #Altaredwoodcontainer {
              border-style: none;
              width: 94vw;
              margin-left: 3vw;
              padding-left: 1vw;
              border-radius: 15px;
              backdrop-filter: blur(20px);
              -webkit-backdrop-filter: blur(10px);
            }

            .Altaredwooda {
              font-weight: bolder;
              color: white;
              text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
              text-decoration: none;
            }

          .Altaredwoodimg {
            height: auto; /* Make sure images are scaled correctly. */
            max-width: calc(25vw + 4em);
            border-radius: calc(3pt);
          }

          .Altaredwoodimadjusted {
            height: auto; /* Make sure images are scaled correctly. */
            max-width: calc(27vw + 3.7em);
            border-radius: calc(6pt);
          }

          .Partnersection {
            display: grid;
            grid-template-columns: 46vw 45vw;
            overflow: hidden;
          }

          .artnerdiv {
            border: 2px solid gray;
            padding-left: 3vw;
          }

          .Altaredwoodh1 {
            font-size: 30px;
            color: white;
            text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
          }

          .Altaredwoodh2 {
            font-size: 26px;
            color: white;
            text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
          }
          </style>
      </div>
  `}
}

export default Alta;
