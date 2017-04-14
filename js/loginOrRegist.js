var loginBtn = document.getElementsByClassName("loginBtn")[0],
    registBtn = document.getElementsByClassName("registBtn")[0];
var userName = document.getElementById("userName"),
    pwd = document.getElementById("pwd"),
    pwd_tell = document.getElementById("pwd_tell");
var mask = document.getElementsByClassName("mask")[0],
    pop_text = document.getElementsByClassName("pop_text")[0];
var loginForm = document.getElementsByClassName("loginForm")[0];


window.onload = function(){
    /*判断当前页面为登陆页面还是注册页面*/
    var title = document.getElementsByTagName("title")[0];
    if(title.textContent == "用户登录"){
        login();
        loginBtnOnClick();
        window.onkeyup = function(e){
            /*判断按键时Code的值是否为13并调用事件*/
            if(e.keyCode == 13){
                /*判断登录按钮是否可用*/
                if(loginBtn.disabled == false){
                    loginBtn.onclick();
                }
            }
        }
    }else if(title.textContent == "用户注册"){
        regist();
        registBtnOnClick();
        window.onkeyup = function(e){
            /*同登录按钮效果一致*/
            if(e.keyCode == 13){
                if(registBtn.disabled == false){
                    registBtn.onclick();
                }
            }
        }
    }
}



/*弹出框按钮事件*/
/*e为弹出框的内容，ele为遮罩层*/
function popBtn(e,ele){
    var pop_Btn = document.getElementsByClassName("pop_Btn")[0];
    pop_Btn.onclick = function(){
        if(e == "用户名已被使用!"){
            ele.style.display = "none";
        }else if(e == "注册成功!"){
            window.location.href = "login.html";
        }else if(e == "用户名或密码不正确！ 请重新输入!"){
            ele.style.display = "none";
        }
    }
}




/*注册账户*/
function regist(){ 
    /*定义各个正则进行判断*/
    var regxUser = /^([0-9a-zA-Z_])([0-9a-zA-Z\-_\.]+)@([a-zA-Z]+)\.([a-z]{2,3})$/,
        regxPwd = /^.{6,16}$/,
        regxNum = /^\d+$/;
    /*用户名框的时间处理*/
    /*通过获得焦点的监听事件设置input选中状态的高亮显示效果*/
    userName.addEventListener("focus",function(){
        userName.style.cssText = "box-shadow:  0 0 10px rgba(130, 195, 83, 0.6);"
    });
    /*通过失去焦点的监听事件来判断输入值的合理性*/
    userName.addEventListener("blur",function(){
        if(userName.value == null || userName.value == ""){
            userName.style.cssText = "box-shadow: 0 0 10px rgba(195, 83, 83, 0.8);";
            userName.setAttribute("placeholder","账号不能为空");
        }else if(regxUser.test(userName.value) == false){
            userName.value = "";
            userName.style.cssText = "box-shadow: 0 0 10px rgba(195, 83, 83, 0.8);";
            userName.setAttribute("placeholder","请输入正确的邮箱格式");
        }else{
            userName.style.cssText = "box-shadow:none;";
        }
    });
    /*通过input监听事件来判断注册按钮是否可用*/
    userName.addEventListener("input",function(){
        if(pwd.value != "" && pwd_tell.value != ""){
            if(regxUser.test(userName.value) == false){
                registBtn.removeAttribute("disabled");
            }else{
                registBtn.setAttribute("disabled", true);
            }
        }
    });
    /*密码框的事件处理，内容同用户名框一致*/
    pwd.addEventListener("focus",function(){
        pwd.style.cssText = "box-shadow:  0 0 10px rgba(130, 195, 83, 0.6);";
    });
    pwd.addEventListener("blur",function(){
        if(pwd.value == null || pwd.value ==""){
            pwd.style.cssText = "box-shadow: 0 0 10px rgba(195, 83, 83, 0.8);";
            pwd.setAttribute("placeholder","密码不能为空");
        }else if(regxPwd.test(pwd.value) == false){
            pwd.value = "";
            pwd.style.cssText = "box-shadow: 0 0 10px rgba(195, 83, 83, 0.8);";
            pwd.setAttribute("placeholder","请输入6-16位的密码");
        }else if(regxNum.test(pwd.value) == true){
            pwd.value = "";
            pwd.style.cssText = "box-shadow: 0 0 10px rgba(195, 83, 83, 0.8);";
            pwd.setAttribute("placeholder","为保护账户安全，请不要使用纯数字作为密码");
        }else{
            pwd.style.cssText = "box-shadow:none;";
        }
    });
    pwd.addEventListener("input",function(){
        if(userName.value != "" && pwd_tell.value != ""){
            if(regxPwd.test(pwd.value) != false){
                if(regxNum.test(pwd.value) == false && pwd.value == pwd_tell.value){
                    registBtn.removeAttribute("disabled");
                }else{
                    registBtn.setAttribute("disabled", true);
                }
            }else{
                registBtn.setAttribute("disabled", true);
            }
        }
    });
    /*确认密码框的事件处理，内容与用户名框的一致*/
    pwd_tell.addEventListener("focus",function(){
        pwd_tell.style.cssText = "box-shadow:  0 0 10px rgba(130, 195, 83, 0.6);";
    });
    pwd_tell.addEventListener("blur",function(){
        if(pwd_tell.value == null || pwd_tell.value ==""){
            pwd_tell.style.cssText = "box-shadow: 0 0 10px rgba(195, 83, 83, 0.8);";
            pwd_tell.setAttribute("placeholder","请再次输入密码");
        }else if(pwd.value != pwd_tell.value){
            pwd_tell.value = "";
            pwd_tell.style.cssText = "box-shadow: 0 0 10px rgba(195, 83, 83, 0.8);";
            pwd_tell.setAttribute("placeholder","两次密码输入不一致");
        }else{
            pwd_tell.style.cssText = "box-shadow:none;";
        }
    });
    pwd_tell.addEventListener("input",function(){
        if(userName.value != "" && pwd.value != ""){
            if(pwd.value == pwd_tell.value){
                registBtn.removeAttribute("disabled");
            }else{
                registBtn.setAttribute("disabled", true);
            }
        }
    });
}


/*登录界面事件处理*/
function login(){
    var loginForm = document.getElementsByClassName("loginForm")[0],
        loginInput = loginForm.getElementsByTagName("input"),
        loginInput_len = loginInput.length;
    for(let i = 0;i<loginInput_len;i++){
        loginInput[i].addEventListener("input",function(){
            /*判断输入框是否达到条件并显示登录按钮*/
            if(userName.value != "" && pwd.value != ""){
                loginBtn.removeAttribute("disabled");
            }else{
                loginBtn.setAttribute("disabled",true);
            }
        });
    }
}

function loginBtnOnClick(){
    /*登录按钮点击事件*/
    loginBtn.onclick = function(){
        /*获取保存到本地存储的数据*/
        var userInfo = JSON.parse(localStorage.getItem("userInfo")),
            userInfo_len = userInfo.length,
            /*定义一个计数器*/
            count = userInfo_len;
        /*循环遍历账户和密码是否合理*/
        for(let i = 0;i < userInfo_len; i++){
            if(userName.value == userInfo[i].name && pwd.value == userInfo[i].pwd){
                /*合理时计数器减一*/
                count--;
            }
        }
        /*登录通过将登录状态保存至会话存储*/
        if(count != userInfo_len){
            sessionStorage.setItem("loginState",userName.value);
            window.location.href = "../../index.html";
        }else{
            /*不通过显示遮罩层以及弹出框*/
            pop_text.textContent = "用户名或密码不正确！ 请重新输入!";
            mask.style.display = "block";
            popBtn(pop_text.textContent,mask);
        }
    }
}

function registBtnOnClick(){
    /*注册按钮点击事件*/
        registBtn.onclick = function(){
            /*将输入合理的值保存至对象*/
            var info = {
                name:userName.value,
                pwd:pwd.value
            };
            /*获取已经注册的账户*/
            var user = JSON.parse(localStorage.getItem("userInfo"));
            /*判断是否有用户注册过*/
            if(user == null){
                /*没有用户注册，新生成一个数组并将对象push进数组*/
                var userInfo = [];
                userInfo.push(info);
                localStorage.setItem("userInfo",JSON.stringify(userInfo));
                /*注册成功弹出遮罩层以及弹出框*/
                pop_text.textContent = "注册成功!";
                mask.style.display = "block";
                popBtn(pop_text.textContent,mask);
            }else{
                /*有用户注册过，循环遍历注册名是否重复*/
                var user_len = user.length;
                for(let i = 0;i<user_len;i++){
                    if(user[i].name == info.name){
                        pop_text.textContent = "用户名已被使用!";
                        mask.style.display = "block";
                        popBtn(pop_text.textContent,mask);
                        return;
                    }
                }
                /*没用重复将注册的内容存入本地*/
                user.push(info);
                localStorage.setItem("userInfo",JSON.stringify(user));
                pop_text.textContent = "注册成功!";
                mask.style.display = "block";
                popBtn(pop_text.textContent,mask);
            }
        }
}