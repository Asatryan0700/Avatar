import template from "./template.js";

export default class CoolForm extends HTMLElement {
    static get observedAttributes() {
        return []
    }
    connectedCallback() {
        // this.data = {
        //     type: this.type
        // }
        this.innerHTML = template.render({bg: this.getAttribute("bg")});
        const btnBody = document.querySelector(".btn-body1");
        const btnBody2 = document.querySelector(".btn-body2");

        btnBody.addEventListener("click", this.AddBody1);
        btnBody2.addEventListener("click", this.AddBody2);

    }
   
    AddBody1(){
        const addBody2 = document.querySelector(".avatar-body2");
        const addBody = document.querySelector(".avatar-body");

        if(addBody.style.display === "none"){
            addBody.style.display = "block";
            addBody2.style.display = "none";
            addBody3.style.display = "none";
            addBody4.style.display = "none";
           
        } else{
            addBody.style.display = "block";
            addBody4.style.display = "none";
            addBody3.style.display = "none";
            addBody2.style.display = "none";
        }
    }
    AddBody2(){
        const addBody2 = document.querySelector(".avatar-body2");
        const addBody = document.querySelector(".avatar-body");

        if(addBody2.style.display === "none"){
            addBody.style.display = "none";
            addBody2.style.display = "block";
            addBody3.style.display = "none";
            addBody4.style.display = "none";
           
        } else{
            addBody.style.display = "block";
            addBody4.style.display = "none";
            addBody3.style.display = "none";
            addBody2.style.display = "none";
        }
    }
  
 
