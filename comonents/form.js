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
        const btnBody3 = document.querySelector(".btn-body3");
        const btnBody4 = document.querySelector(".btn-body4");

        btnBody.addEventListener("click", this.AddBody1);
        btnBody2.addEventListener("click", this.AddBody2);
        btnBody3.addEventListener("click", this.AddBody3);
        btnBody4.addEventListener("click", this.AddBody4);

        const btnHair = document.querySelector(".btn-hair");
        const btnHair2 = document.querySelector(".btn-hair2");
        const btnHair3 = document.querySelector(".btn-hair3");
        btnHair.addEventListener("click", this.AddHair1);
        btnHair2.addEventListener("click", this.AddHair2);
        btnHair3.addEventListener("click", this.AddHair3);

        const btnEyes = document.querySelector(".btn-eyes");
        const btnEyes2 = document.querySelector(".btn-eyes2");
        const btnEyes3 = document.querySelector(".btn-eyes3");

        btnEyes.addEventListener("click", this.AddEyes1);
        btnEyes2.addEventListener("click", this.AddEyes2);
        btnEyes3.addEventListener("click", this.AddEyes3);

        const btnMonth = document.querySelector(".btn-month");
        const btnMonth2 = document.querySelector(".btn-month2");

        btnMonth.addEventListener("click", this.addMonth1);
        btnMonth2.addEventListener("click", this.addMonth2);



    }
    AddHair1(){
        const addHair = document.querySelector(".hair1");
        const addHair2 = document.querySelector(".hair2");
        const addHair3 = document.querySelector(".hair3");
    


        if(addHair.style.display === "none"){
            addHair2.style.display = "none";
            addHair3.style.display = "none";
            addHair.style.display = "block";
           
        } else{
            addHair.style.display = "none";
        }
    }
    AddHair2(){
        const addHair = document.querySelector(".hair1");
        const addHair2 = document.querySelector(".hair2");
        const addHair3 = document.querySelector(".hair3");
    


        if(addHair2.style.display === "none"){
            addHair2.style.display = "block";
            addHair3.style.display = "none";
            addHair.style.display = "none";
           
        } else{
            addHair2.style.display = "none";
        }
    }
    AddHair3(){
        const addHair = document.querySelector(".hair1");
        const addHair2 = document.querySelector(".hair2");
        const addHair3 = document.querySelector(".hair3");
    


        if(addHair3.style.display === "none"){
            addHair2.style.display = "none";
            addHair3.style.display = "block";
            addHair.style.display = "none";
           
        } else{
            addHair3.style.display = "none";
        }
    }
    AddBody1(){
        const addBody3 = document.querySelector(".avatar-body3");
        const addBody4 = document.querySelector(".avatar-body4");
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
        const addBody3 = document.querySelector(".avatar-body3");
        const addBody4 = document.querySelector(".avatar-body4");
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
    AddBody3(){
        const addBody3 = document.querySelector(".avatar-body3");
        const addBody4 = document.querySelector(".avatar-body4");
        const addBody2 = document.querySelector(".avatar-body2");
        const addBody = document.querySelector(".avatar-body");

        if(addBody3.style.display === "none"){
            addBody.style.display = "none";
            addBody2.style.display = "none";
            addBody3.style.display = "block";
            addBody4.style.display = "none";
           
        } else{
            addBody.style.display = "block";
            addBody4.style.display = "none";
            addBody3.style.display = "none";
            addBody2.style.display = "none";
        }
    }
    AddBody4(){
        const addBody3 = document.querySelector(".avatar-body3");
        const addBody4 = document.querySelector(".avatar-body4");
        const addBody2 = document.querySelector(".avatar-body2");
        const addBody = document.querySelector(".avatar-body");

        if(addBody4.style.display === "none"){
            addBody.style.display = "none";
            addBody2.style.display = "none";
            addBody3.style.display = "none";
            addBody4.style.display = "block";
           
        } else{
            addBody.style.display = "block";
            addBody4.style.display = "none";
            addBody3.style.display = "none";
            addBody2.style.display = "none";
        }
    }
    AddEyes1(){
        const addEyes = document.querySelector(".eye");
        const addEyes2 = document.querySelector(".eye2");
        const addEyes3 = document.querySelector(".eye3");
        


        if(addEyes.style.display === "none"){
            addEyes3.style.display = "none";
            addEyes2.style.display = "none";
            addEyes.style.display = "block";
           
        } else{
            addEyes.style.display = "block";
        }
    }
    AddEyes2(){
        const addEyes = document.querySelector(".eye");
        const addEyes2 = document.querySelector(".eye2");
        const addEyes3 = document.querySelector(".eye3");
        


        if(addEyes2.style.display === "none"){
            addEyes3.style.display = "none";
            addEyes2.style.display = "block";
            addEyes.style.display = "none";
           
        } else{
            addEyes2.style.display = "none";
            addEyes3.style.display = "none";
            addEyes.style.display = "block";
        }
    }
    AddEyes3(){
        const addEyes = document.querySelector(".eye");
        const addEyes2 = document.querySelector(".eye2");
        const addEyes3 = document.querySelector(".eye3");
        


        if(addEyes3.style.display === "none"){
            addEyes3.style.display = "block";
            addEyes2.style.display = "none";
            addEyes.style.display = "none";
           
        } else{
            addEyes2.style.display = "none";
            addEyes3.style.display = "none";
            addEyes.style.display = "block";
        }
    }
    addMonth1(){
        const add_Month1 = document.querySelector(".month")
        const add_Month2 = document.querySelector(".old_month")

        if(add_Month1.style.display === "none"){
            add_Month2.style.display = "none";
            add_Month1.style.display = "block";
           
        } else{
            add_Month2.style.display = "none";
            add_Month1.style.display = "block";
        }
    }
    addMonth2(){
        const add_Month1 = document.querySelector(".month")
        const add_Month2 = document.querySelector(".old_month")

        if(add_Month2.style.display === "none"){
            add_Month2.style.display = "block";
            add_Month1.style.display = "none";
           
        } else{
            add_Month2.style.display = "none";
            add_Month1.style.display = "block";
        }
    }
