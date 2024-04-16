import "@/styles/index.scss";
import {drawSmiley, getMessage} from "@/scripts/welcome.ts";

const app = document.querySelector('#app') as HTMLDivElement;

app.innerHTML = `
    <h1>${getMessage()}</h1>
    <svg id="smiley"></svg>
`;

drawSmiley();