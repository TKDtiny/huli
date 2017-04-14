var header = document.getElementsByTagName("header")[0];
var footer = document.getElementsByTagName("footer")[0];
var article = document.getElementsByTagName("article")[0];

document.onreadystatechange = function() {
// 该方法有4个状态
// 1、uninitialized（还未开始载入）
// 2、loading（载入中）
// 3、interactive（已加载，文档与用户可以开始交互）
// 4、complete（载入完成）
    if(document.readyState == "loading"){
        
    }
    if(document.readyState == "interactive") {
 
        /*header动态加载部分*/
        var headerStr = '<div class="dpi-1260"><div class="head_bg"><img src="img/icon/bg_header.jpg" alt="" id="head_Bg"></div><a href="#" target="_blank" class="sale_tag"></a><div class="logo"><a href="#" target="_self"></a></div><div class="loginOrShop"></div><div class="select_region"><ul class="region">成都地区</ul><i class="select_icon"></i><ul class="regionBox"><li>成都地区</li><li>北京地区</li><li>上海地区</li><li>深圳地区</li><li>其他地区</li></ul></div></div><nav><div class="dpi-1260"><ul><li><a id="sofa" href="pages/furniture/sofa.html">沙发&nbsp;&nbsp;&nbsp;SOFAS</a><div><a href="#">单人位</a><a href="#">双人位</a><a href="#">三人位</a><a href="#">休闲沙发</a><a href="#">转角沙发</a></div></li><li><a id="tables-chairs" href="pages/furniture/tables-chairs.html">桌椅&nbsp;&nbsp;&nbsp;TABLES/CHAIRS</a><div class="double_row"><a href="#">餐桌</a><a href="#">餐椅</a><a href="#">书桌</a><a href="#">凳子</a><a href="#">电脑桌</a><a href="#">休闲椅</a><a href="#">梳妆台</a><a href="#">户外椅</a><a href="#">其它</a></div></li><li><a id="bed" href="pages/furniture/bed.html">床&nbsp;&nbsp;&nbsp;BEDS</a><div><a href="#">1.5米</a><a href="#">1.8米</a><a href="#">其它</a></div></li><li><a id="cabinet" href="pages/furniture/cabinet.html">柜&nbsp;&nbsp;&nbsp;STORAGE</a><div class="double_row"><a href="#">衣柜</a><a href="#">储物柜</a><a href="#">书柜</a><a href="#">电视柜</a><a href="#">鞋柜</a><a href="#">床头柜</a><a href="#">其它</a></div></li><li><a href="#">更多&nbsp;&nbsp;&nbsp;MORE</a><div><a href="#">组合产品</a><a href="#">日用家居</a><a href="#">家具饰品</a><a href="#">其它</a></div></li></ul><div class="searchBox"><input type="text" placeholder="搜索"><i class="searchImg"></i></div></div>';
        header.innerHTML = headerStr;
        

        /*登陆状态判断*/
        /*获取保存在会话存储中的保存状态*/
        var loginState = sessionStorage.getItem("loginState");
        /*获取header里登陆状态显示的div*/
        var loginOrShop = document.getElementsByClassName("loginOrShop")[0],
            loginStr;
        /*判断状态以及动态加载*/
        if(loginState != null){
            loginState = loginState.replace(/@([a-zA-Z]+)\.([a-z]{2,3})/g,"");
            loginStr = '<div class="loginShop_top"><span class="userName"><a href="#">'+loginState+'</a></span><span class="cut_line"></span><a href="#" class="shopCar"><mark>3</mark></a></div><div class="shopCar_details"><div class="details"><p><span class="goods_name"><a href="#">9成新转角沙发</a></span><span class="goods_price">9999</span><span class="goods_num">x2</span></p><p><span class="goods_name"><a href="#">3成新超级大茶几</a></span><span class="goods_price">9999</span><span class="goods_num">x2</span></p><p><span class="goods_name"><a href="#">7成超级电视柜</a></span><span class="goods_price">9999</span><span class="goods_num">x2</span></p></div><div class="detailsBtn"><a href="#">查看购物车</a></div></div>'
            loginOrShop.innerHTML = loginStr;
        }else{
            loginStr = '<a class="login" href="pages/loginOrRegist/login.html"></a><span class="cut_line"></span><a href="#" class="shopCar"><mark>3</mark></a><div class="shopCar_details"><div class="details"><p><span class="goods_name"><a href="#">9成新转角沙发</a></span><span class="goods_price">9999</span><span class="goods_num">x2</span></p><p><span class="goods_name"><a href="#">3成新超级大茶几</a></span><span class="goods_price">9999</span><span class="goods_num">x2</span></p><p><span class="goods_name"><a href="#">7成超级电视柜</a></span><span class="goods_price">9999</span><span class="goods_num">x2</span></p></div><div class="detailsBtn"><a href="#">查看购物车</a></div></div>'
            loginOrShop.innerHTML = loginStr;
        }
        
        /*footer动态加载部分*/
        var footerStr = '<div class="footer_title">生活要过得朴素而有味道，但不用过得奢华。</div><div class="dpi-1260"><div class="footer_mark"><div class="footer_mark-keywords"><i>环保</i><span>无甲醛 大自然</span></div><div class="footer_mark-keywords"><i>低价</i><span>低于购买价6折</span></div><div class="footer_mark-keywords"><i>安全</i><span>专业清洁消毒处理</span></div><div class="footer_mark-keywords"><i>省心</i><span>专业物流配送安装</span></div><div class="footer_mark-keywords"><i>快捷</i><span>24小时内送货</span></div></div><div class="footer_info"><div class="footer_info-content"><h2>关于我们</h2><p>关于户里 注册协议</p><p>业务合作 免责声明</p><p>加入户里 隐私保护</p></div><div class="footer_info-content"><h2>流程指南</h2><p>购买家具 出售家具</p><p>支付方式 配送安装</p><p>售后保障</p></div><div class="footer_info-content"><h2>会员中心</h2><p>会员计划</p><p>积分规则</p><p>投诉建议</p></div><div class="footer_info-content"><h2>联系客服</h2><p class="h14">电话：<br>028-67635062</p><p class="h14">邮箱：<br>hello@hulihome.com</p></div><div class="footer_info-content"><p><i class="sina_logo"></i><span>新浪微博@户里网</span></p><div class="sina-QR"></div></div><div class="footer_info-content addBorder"><p><i class="weixin_logo"></i><span>关注微信“户里网</span></p><div class="sina-QR"></div></div></div><div class="record_info">蜀ICP备15028224号  成都户里科技有限公司</div></div>'
        footer.innerHTML = footerStr;
        
        /*路径处理*/
        var title = "户里·家",
            title1 = "户里·沙发",
            title2 = "户里·桌椅",
            title3 = "户里·床",
            title4 = "户里·柜",
            indexTitle = document.getElementsByTagName("title")[0].textContent;
        /*获取各个页面跳转的链接*/
        var login = document.getElementsByClassName("login")[0];
        var sofa = document.getElementById("sofa"),
            tables_chairs = document.getElementById("tables-chairs"),
            bed = document.getElementById("bed"),
            cabinet = document.getElementById("cabinet");
        /*处理header上logo的链接*/
        if(title != indexTitle){
            var headBg = document.getElementById("head_Bg");
            headBg.src = "../../img/icon/bg_header.jpg";
            var logoUrl = document.getElementsByClassName("logo")[0].getElementsByTagName("a")[0];
            logoUrl.href = "../../index.html";
        }
        /*处理商品详情上的链接*/
        if(indexTitle == "商品详情"){
            var headBg = document.getElementById("head_Bg");
            headBg.src = "../img/icon/bg_header.jpg";
            var logoUrl = document.getElementsByClassName("logo")[0].getElementsByTagName("a")[0];
            logoUrl.href = "../index.html";
            if(loginState == null){
                login.href = "loginOrRegist/login.html";
            }
        }
        /*处理商品界面的链接*/
        if(title1 == indexTitle){
            sofa.href = "#";
            tables_chairs.href = "tables-chairs.html";
            bed.href = "bed.html";
            cabinet.href = "cabinet.html";
            login.href = "../loginOrRegist/login.html";
        }else if(title2 == indexTitle){
            sofa.href = "sofa.html";
            tables_chairs.href = "#";
            bed.href = "bed.html";
            cabinet.href = "cabinet.html";
            login.href = "../loginOrRegist/login.html";
        }else if(title3 == indexTitle){
            sofa.href = "sofa.html";
            tables_chairs.href = "tables-chairs.html";
            bed.href = "#";
            cabinet.href = "cabinet.html";
            login.href = "../loginOrRegist/login.html";
        }else if(title4 == indexTitle){
            sofa.href = "sofa.html";
            tables_chairs.href = "tables-chairs.html";
            bed.href = "bed.html";
            cabinet.href = "#";
            login.href = "../loginOrRegist/login.html";
        }else if(indexTitle == "商品详情"){
            sofa.href = "furniture/sofa.html";
            tables_chairs.href = "furniture/tables-chairs.html";
            bed.href = "furniture/bed.html";
            cabinet.href = "furniture/cabinet.html";
        }else if(indexTitle == "用户登录" || indexTitle == "用户注册"){
            sofa.href = "../furniture/sofa.html";
            tables_chairs.href = "../furniture/tables-chairs.html";
            bed.href = "../furniture/bed.html";
            cabinet.href = "../furniture/cabinet.html";
        }
    }
    
    
    
    if(document.readyState == "complete"){
        /*shopCar点击事件与移除事件*/
        var shopCar = document.getElementsByClassName("shopCar")[0],
            details = document.getElementsByClassName("shopCar_details")[0],
            steta = 0
        shopCar.onclick = function(){
            if(steta == 0){
                shopCar.classList.remove("shopCar");
                shopCar.classList.add("shopCar_on");
                details.style.display = "block";
                steta = 1;
            }else{
                shopCar.classList.remove("shopCar_on");
                shopCar.classList.add("shopCar");
                details.style.display = "none";
                steta = 0;
            }
        }

        /*select_region点击事件与移除事件*/
        var selectRegion = document.getElementsByClassName("select_region")[0],
            regionBox = document.getElementsByClassName("regionBox")[0],
            region = document.getElementsByClassName("region")[0],
            reginLi = regionBox.getElementsByTagName("li"),
            reginLi_len = reginLi.length;
        selectRegion.addEventListener("click",function(){
            regionBox.style.display = "block";
        });
        selectRegion.addEventListener("mouseleave",function(){
            regionBox.style.display = "none";
        });
        /*通过循环获取选项卡数量以及内容并替换点击的内容*/
        for(let i = 0;i < reginLi_len;i++){
            reginLi[i].onclick = function(){
                var clickRegion = this.textContent;
                region.textContent = clickRegion;
                regionBox.style.display = "none";
            }
        }
        
        /*searchBox获得焦点事件*/
        var searchBox = document.getElementsByClassName("searchBox")[0],
            searchInput = searchBox.getElementsByTagName("input")[0];
        searchInput.addEventListener("focus",function(){
           searchBox.classList.add("searchBox_focus");
        });
        searchInput.addEventListener("blur",function(){
            searchBox.classList.remove("searchBox_focus");
        });
        
//        window.scrollTo(0,0);
    }
}
