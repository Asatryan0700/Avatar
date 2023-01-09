import CoolForm from "./components/form.js";

if (!customElements.get('cool-form')) {
    customElements.define('cool-form', CoolForm);
}
