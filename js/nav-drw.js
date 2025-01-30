import { resaltaSiEstasEn } from "../lib/js/resaltaSiEstasEn.js";
import { MdNavigationDrawer } from "../lib/js/custom/MdNavigationDrawer.js";

export class NavDrw extends MdNavigationDrawer {
  /**
   * @override
   */
  getHipervinculos() {
    return /* HTML */ ` <h1>PWA con MD3 | Blue Cloud</h1>

      <a ${resaltaSiEstasEn(["/index.html", "", "/"])} href="index.html">
        <span class="material-symbols-outlined">home</span>
        Inicio
      </a>

      <a ${resaltaSiEstasEn(["/formulario.html"])} href="formulario.html">
        <span class="material-symbols-outlined">newspaper</span>
        Formulario
      </a>

      <a ${resaltaSiEstasEn(["/ayuda.html"])} href="ayuda.html">
        <span class="material-symbols-outlined">help</span>
        Ayuda
      </a>`;
  }
}

customElements.define("nav-drw", NavDrw);
