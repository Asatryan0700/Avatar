export default {
    render() {
        return `
            ${this.css()}
            ${this.html()}
        `
    },
    html() {
        return `
        <!-- <h1>Test is here...</h1>-->
        <div class="app">
            <div class="top">
                <div class="bgr">
                <div class="avatar-head">
                <img src="./assets/head_skin.png" width="350">
            </div>
                    <div class="hair1">
                        <img src="./assets/hair.png" alt="hair1" width="350">
                    </div>
                    <div class="hair2">
                        <img src="./assets/hair2.png" alt="hair1" width="350">
                    </div> 
                    <div class="hair3">
                        <img src="./assets/hair3.png" alt="hair1" width="350">
                    </div>
                    
                    <div class="eye">
                    <img src="./assets/eye_green.png" alt="hair1" width="350">
                </div>
                <div class="eye2">
                <img src="./assets/eye_blue.png" alt="hair1" width="350">
            </div>
            <div class="eye3">
            <img src="./assets/eye_hb.png" alt="hair1" width="350">
        </div>
                <div class="month">
                <img src="./assets/rot.png" alt="hair1" width="350">
            </div>
            <div class="old_month">
            <img src="./assets/old_rot.png" alt="hair1" width="350">
        </div>
                    <div class="avatar-body">
                        <img src="./assets/body1.png" width="350">
                    </div>
                    <div class="avatar-body2">
                    <img src="./assets/body2.png" width="350">
                </div>
                <div class="avatar-body3">
                <img src="./assets/body3.png" width="350">
            </div>
            <div class="avatar-body4">
            <img src="./assets/body4.png" width="350">
        </div>
                </div>
            </div>
            <div class="bottom">
                <div class="variants">
                    <div class="var_body">
                    <button class="btn-body1"></button>
                    <button class="btn-body2"></button>
                    <button class="btn-body3"></button>
                    <button class="btn-body4"></button>
                    </div>
                    <div class="var_hair">
                    <button class="btn-hair"></button>
                    <button class="btn-hair2"></button>
                    <button class="btn-hair3"></button>
                </div>
                <div class="var_eyes">
                    <button class="btn-eyes"></button>
                    <button class="btn-eyes2"></button>
                    <button class="btn-eyes3"></button>
                </div>
                <div class="var_month">
                    <button class="btn-month"></button>
                    <button class="btn-month2"></button>
                </div>
                </div>
            </div>
        </div>
        `
    },
    css() {
        return `
            <style>
            * {
            box-sizing: border-box;
            }      
            body{
                margin: 0;
                padding: 0;
            }
            .app{
                padding-top: 500px;
                color: black;
                font-size:20px;
                font-family: sans-serif;
                display: flex;
                height:200vh;
                flex-direction: column;
                
            }
            .top{
                width: 100%;
                height: 350px;
                background-color: red;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .bgr{
                width: 350px;
                height: 350px;
                background-color: yellow;
            }
            .hair1{
                display: block;
                position: absolute;
            }
            .hair2{
                display: none;
                position: absolute;
            }
            .hair3{
                display: none;
                position: absolute;
            }
            .hair4{
                display: none;
                position: absolute;
            }
            .avatar-body{
                display: block;
                position: absolute;
            }
            .avatar-body2{
                display: none;
                position: absolute;
            }
            .avatar-body3{
                display: none;
                position: absolute;
            }
            .avatar-body4{
                display: none;
                position: absolute;
            }
            .avatar-head{
                display: block;
                position: absolute;
            }
            .eye{
                display: block;
                position: absolute;
            }
            .eye2{
                display: none;
                position: absolute;
            }
            .eye3{
                display: none;
                position: absolute;
            }
            .month{
                display: block;
                position: absolute;
            }
            .old_month{
                display: none;
                position: absolute;
            }
            .var_body, .var_hair, .var_eyes, .var_month{
                width: 160px;
                height: 400px;
                padding: 50px;
                
            }
            .btn-hair{
                width: 50px;
                border: none;
                cursor: pointer;
                height: 64px;
                background: url("./assets/hair.png") center / cover no-repeat;
            }
            .btn-hair2{
                width: 50px;
                border: none;
                cursor: pointer;
                height: 64px;
                background: url("./assets/hair2.png") center / cover no-repeat;
            }
            .btn-hair3{
                width: 50px;
                border: none;
                cursor: pointer;
                height: 64px;
                background: url("./assets/hair3.png") center / cover no-repeat;
            }
            .btn-body1{
                width: 50px;
                border: none;
                cursor: pointer;
                height: 64px;
                background: url("./assets/body1.png") center / cover no-repeat;
            }
            .btn-body2{
                width: 50px;
                border: none;
                cursor: pointer;
                height: 64px;
                background: url("./assets/body2.png") center / cover no-repeat;
            }
            .btn-body3{
                width: 50px;
                border: none;
                cursor: pointer;
                height: 64px;
                background: url("./assets/body3.png") center / cover no-repeat;
            }
            .btn-body4{
                width: 50px;
                border: none;
                cursor: pointer;
                height: 64px;
                background: url("./assets/body4.png") center / cover no-repeat;
            }
            .btn-eyes{
                width: 50px;
                border: none;
                cursor: pointer;
                height: 64px;
                background: black url("./assets/eye_green.png") center / cover no-repeat;
            }
            .btn-eyes2{
                width: 50px;
                border: none;
                cursor: pointer;
                height: 64px;
                background: black url("./assets/eye_blue.png") center / cover no-repeat;
            }
            .btn-eyes3{
                width: 50px;
                border: none;
                cursor: pointer;
                height: 64px;
                background: black url("./assets/eye_hb.png") center / cover no-repeat;
            }
            .btn-month{
                width: 50px;
                border: none;
                cursor: pointer;
                height: 64px;
                background: url("./assets/rot.png") center / cover no-repeat;
            }
            .btn-month2{
                width: 50px;
                border: none;
                cursor: pointer;
                height: 64px;
                background: url("./assets/old_rot.png") center / cover no-repeat;
            }
            .variants{
                display: grid;
                grid-template-columns: 1fr 1fr; 
            }
            </style>
        `
    }
}
