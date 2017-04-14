/*获取重商品界面传过来的值*/
var obj = JSON.parse(sessionStorage.getItem("goodsInfo"));
window.onload = function(){
    showInfo();
    showImg();
    showRecommend();
    plusOrMinus();
}
/*showImg的点选切换*/
function showImg(){
    var mainImg = document.getElementsByClassName("mainImg")[0],
        mainImgList = mainImg.getElementsByTagName("img");
    var listImg = document.getElementsByClassName("listImg")[0],
        listImg_li = listImg.getElementsByTagName("li"),
        li_len = listImg_li.length;
    /*将第一个img设置为选中*/
    mainImgList[0].style.opacity = "1";
    /*循环给每个listImg添加点击事件*/
    for(let i=0;i<li_len;i++){
        /*给listImg添加一个自定义属性*/
        listImg_li[i].index = i;
        listImg_li[i].onclick = function(){
            if(this.className != "selected"){
                for(let j = 0;j < li_len;j++){
                    listImg_li[j].classList.remove("selected");
                    mainImgList[j].style.opacity = "0";
                }
                this.classList.add("selected");
                mainImgList[this.index].style.opacity = "1";
            }
            
        }
    }
}
/*goods_buy 商品信息的加载*/
function showInfo(){
    /*将商品信息以及界面动态添加到页面上*/
    var goods_buy = document.getElementsByClassName("goods_buy")[0],
        str = '<div class="goods_showImg"><div class="mainImg"><img src="../img/Carousel/mainImg1.jpg" alt=""><img src="../img/Carousel/mainImg2.jpg" alt=""><img src="../img/Carousel/mainImg3.jpg" alt=""><img src="../img/Carousel/mainImg4.jpg" alt=""><img src="../img/Carousel/mainImg5.jpg" alt=""></div><div class="listImg"><ul><li class="selected"><img src="../img/Carousel/mainImg1.jpg" alt=""></li><li><img src="../img/Carousel/mainImg2.jpg" alt=""></li><li><img src="../img/Carousel/mainImg3.jpg" alt=""></li><li><img src="../img/Carousel/mainImg4.jpg" alt=""></li><li id="mr_0"><img src="../img/Carousel/mainImg5.jpg" alt=""></li></ul></div></div><div class="goods_showInfo"><div class="name"><h1>'+obj.name+'</h1><p><span>三人位</span><span id="bd_r0">'+obj.oldOrNew+'</span></p></div><div class="price"><div class="oldprice"><span class="rmbSign">￥</span><span class="rmbNum">'+obj.oldPrice+'</span><span class="rmbYuan">元</span><span class="deleOldPrice"></span></div><div class="newprice"><span class="rmbSign">￥</span><span class="rmbNum c_red">'+obj.newPrice+'</span><span class="rmbYuan">元</span></div></div><div class="byInfo"><div class="originalPrice"><label for="">原始购买价格:</label><span>'+obj.originalPrice+'</span>元</div><div class="score"><label for="">积分：</label><span>6.8</span><a href="#">了解积分规则</a><br></div><div class="stock"><label for="">库存数量：</label><span>'+obj.sum+'</span></div></div><div class="buyCtrl"><div class="countSet"><input type="text" value="0" disabled><div class="countSetArea"><a class="plus">+</a><a class="minus disabled">-</a></div></div><button type="button" class="buyNow">立即购买</button><button type="button" class="shoppingCar">加入购物车</button></div><div class="onlineServer"><button type="button"></button></div><div class="huliServer"><p><label for="">户里服务：</label><span>该商品在仓库，23点前完成下单可在后天（5月15日）送达/该商品在用户家中，23点前完成下单，可在（5天后）送达</span></p></div></div><div class="goodsStyle"><h1 class="classifyHeader">商品规格</h1><div class="goodsSize"><label>尺寸：</label><span>'+obj.size+'</span></div><div class="goodsTexture"><label>材质：</label><span>'+obj.textureOfMaterial+'</span></div><div class="goodsColor"><label>颜色：</label><span>'+obj.color+'</span></div></div><div class="goodsDetails"><h1 class="classifyHeader">商品详情</h1><div class="detailsContent"></div></div><div class="goodsDeliver"><h1 class="classifyHeader">送货</h1><div class="deliverAddr">成都市绕城内满699元可享受免费送货政策，未满金额或者绕城外地区收取99元运费。</div></div><div class="goodsRecom"><h1 class="classifyHeader">推荐商品</h1><div class="recomList"></div></div>'
    goods_buy.innerHTML = str;
}
/*推荐商品的加载*/
function showRecommend(){
    /*获取推荐商品的内容*/
    var recomList = document.getElementsByClassName("recomList")[0];
    var recomObj = JSON.parse(sessionStorage.getItem("recommend")),
        recomObj_len = recomObj.length;
    var objStr = "";
    /*循环遍历添加推荐商品，方式与商品界面一致*/
    for(let i = 0;i < recomObj_len;i++){
        if((i+1) % 3 == 0){
            if(recomObj[i].oldPrice == "" || recomObj[i].oldPrice == null){
                objStr += '<a id="mr_0"><div class="goodsImg"><img src="furniture/'+recomObj[i].imgUrl+'" alt=""></div><div class="goodsBaseInfo"><span class="goodsName">'+recomObj[i].name+'</span><span class="goodsPrice"><span class="newPrice" style="color:black;">￥'+recomObj[i].newPrice+'</span></span></div></a>'
            }else{
                objStr += '<a id="mr_0"><div class="goodsImg"><img src="furniture/'+recomObj[i].imgUrl+'" alt=""></div><div class="goodsBaseInfo"><span class="goodsName">'+recomObj[i].name+'</span><span class="goodsPrice"><span class="oldPrice"><span>￥'+recomObj[i].oldPrice+'</span><span class="deleOldPrice"></span></span><span class="newPrice">￥'+recomObj[i].newPrice+'</span></span></div></a>'
            }
        }else{
            if(recomObj[i].oldPrice == "" || recomObj[i].oldPrice == null){
                objStr += '<a><div class="goodsImg"><img src="furniture/'+recomObj[i].imgUrl+'" alt=""></div><div class="goodsBaseInfo"><span class="goodsName">'+recomObj[i].name+'</span><span class="goodsPrice"><span class="newPrice" style="color:black;"￥>'+recomObj[i].newPrice+'</span></span></div></a>'
            }else{
                objStr += '<a><div class="goodsImg"><img src="furniture/'+recomObj[i].imgUrl+'" alt=""></div><div class="goodsBaseInfo"><span class="goodsName">'+recomObj[i].name+'</span><span class="goodsPrice"><span class="oldPrice"><span>￥'+recomObj[i].oldPrice+'</span><span class="deleOldPrice"></span></span><span class="newPrice">￥'+recomObj[i].newPrice+'</span></span></div></a>'
            }
        }
    }
    recomList.innerHTML = objStr;
}

/*库存数量的判断与加减*/
function plusOrMinus(){
    /*获取加减以及数量框*/
    var plus = document.getElementsByClassName("plus")[0],
        minus = document.getElementsByClassName("minus")[0],
        countset = document.getElementsByClassName("countSet")[0].getElementsByTagName("input")[0];
    /*获取库存数量*/
    var objSum = obj.sum;
    /*给加号添加点击监听事件*/
    plus.addEventListener("click",function(){
        /*判断加号是否可用*/
        if(this.className != "plus disabled"){
            countset.value++;
        }
        /*判断值是否为不可点击的值*/
        if(countset.value > 0){
           minus.classList.remove("disabled");
        }else{
            /*为不可点击的值添加禁用状态*/
           minus.classList.add("disabled");
        }
        /*该处为加号的判断，内容与减号*/
        if(countset.value < objSum){
            plus.classList.remove("disabled");
        }else{
            plus.classList.add("disabled");
        }
    });
    /*该处是减号的点击事件，内容与加号一致*/
    minus.addEventListener("click",function(){
        if(this.className != "minus disabled"){
           countset.value--;
        } 
        if(countset.value > 0){
           minus.classList.remove("disabled");
        }else{
           minus.classList.add("disabled");
        }
        if(countset.value < objSum){
            plus.classList.remove("disabled");
        }else{
            plus.classList.add("disabled");
        }
    });
}