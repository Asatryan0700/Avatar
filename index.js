import CoolForm from "./comonents/form.js";

if (!customElements.get('cool-form')) {
    customElements.define('cool-form', CoolForm);
}
