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
        </div>
                    <div class="avatar-body">
                        <img src="./assets/body1.png" width="350">
                    </div>
                    <div class="avatar-body2">
                    <img src="./assets/body2.png" width="350">
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
            .avatar-body{
                display: block;
                position: absolute;
            }
            .avatar-body2{
                display: none;
                position: absolute;
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
            </style>
        `
    }
}
