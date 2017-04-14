/*生成商品对象*/
var goodsObj = [
        {
            name:"软圆沙发",
            oldPrice:"699",
            newPrice:"438",
            url:"../shoping.html",
            imgUrl:"../../img/Carousel/goods.jpg",
            sum:7,
            originalPrice:"2344",
            size:"1260*760*560mm",
            textureOfMaterial:"实木/布艺",
            color:"亚麻色",
            oldOrNew:"9层新以上"
        },
        {
            name:"真皮沙发",
            oldPrice:"899",
            newPrice:"638",
            url:"../shoping.html",
            imgUrl:"../../img/Carousel/goods.jpg",
            sum:10,
            originalPrice:"3344",
            size:"1260*760*560mm",
            textureOfMaterial:"实木/布艺",
            color:"红色",
            oldOrNew:"7-9层新"
        },
        {
            name:"真皮长布沙发",
            oldPrice:"999",
            newPrice:"668",
            url:"../shoping.html",
            imgUrl:"../../img/Carousel/goods.jpg",
            sum:5,
            originalPrice:"4144",
            size:"1260*760*560mm",
            textureOfMaterial:"实木/布艺",
            color:"灰色",
            oldOrNew:"7-9层新"
        },
        {
            name:"软圆沙发",
            oldPrice:"",
            newPrice:"438",
            url:"../shoping.html",
            imgUrl:"../../img/Carousel/goods.jpg",
            sum:5,
            originalPrice:"2344",
            size:"1260*760*560mm",
            textureOfMaterial:"实木/布艺",
            color:"亚麻色",
            oldOrNew:"9层新"
        },
        {
            name:"软圆沙发",
            oldPrice:"",
            newPrice:"438",
            url:"../shoping.html",
            imgUrl:"../../img/Carousel/goods.jpg",
            sum:5,
            originalPrice:"2344",
            size:"1260*760*560mm",
            textureOfMaterial:"实木/布艺",
            color:"亚麻色",
            oldOrNew:"9层新"
        },
        {
            name:"软圆沙发",
            oldPrice:"",
            newPrice:"438",
            url:"../shoping.html",
            imgUrl:"../../img/Carousel/goods.jpg",
            sum:5,
            originalPrice:"2344",
            size:"1260*760*560mm",
            textureOfMaterial:"实木/布艺",
            color:"亚麻色",
            oldOrNew:"9层新"
        },
        {
            name:"软圆沙发",
            oldPrice:"",
            newPrice:"438",
            url:"../shoping.html",
            imgUrl:"../../img/Carousel/goods.jpg",
            sum:5,
            originalPrice:"2344",
            size:"1260*760*560mm",
            textureOfMaterial:"实木/布艺",
            color:"亚麻色",
            oldOrNew:"9层新"
        },
        {
            name:"软圆沙发",
            oldPrice:"",
            newPrice:"438",
            url:"../shoping.html",
            imgUrl:"../../img/Carousel/goods.jpg",
            sum:5,
            originalPrice:"2344",
            size:"1260*760*560mm",
            textureOfMaterial:"实木/布艺",
            color:"亚麻色",
            oldOrNew:"9层新"
        }
    ],
    goodsObj_len = goodsObj.length;

window.onload = function(){
//    var title = document.getElementsByTagName("title")[0];
    
    widthAdjustment();
    goodsList();
    goodsCilck();
}

/*goods_banner里li宽度的自适应*/
function widthAdjustment(){
    var goods_banner = document.getElementsByClassName("goods_banner")[0],
        ul = goods_banner.getElementsByTagName("ul")[0],
        /*获取UL的宽度*/
        ul_width = ul.offsetWidth,
        /*获取ul的padding*/
        pading_width = ul_width*0.06,
        liList = ul.getElementsByTagName("li"),
        liList_len = liList.length,
        /*计算li的宽度并动态设置*/
        li_width = (ul_width - pading_width)/liList_len;
    for(let i = 0;i<liList_len;i++){
        liList[i].style.width = Math.floor(li_width)+"px";
    }
}

/*商品列表的导入*/
function goodsList(){
    var goods_content = document.getElementsByClassName("goods_content")[0];
    var objStr = "";
    /*通过循环动态加载商品的内容*/
    for(let i = 0;i < goodsObj_len;i++){
        /*判断商品是否为靠右第三个并处理其多余的margin*/
        if((i+1) % 3 == 0){
            /*判断商品是否有oldprice并以不同方式加载*/
            if(goodsObj[i].oldPrice == "" || goodsObj[i].oldPrice == null){
                objStr += '<a id="mr_0"><div class="goodsImg"><img src="'+goodsObj[i].imgUrl+'" alt=""></div><div class="goodsBaseInfo"><span class="goodsName">'+goodsObj[i].name+'</span><span class="goodsPrice"><span class="newPrice" style="color:black;">￥'+goodsObj[i].newPrice+'</span></span></div></a>'
            }else{
                objStr += '<a id="mr_0"><div class="goodsImg"><img src="'+goodsObj[i].imgUrl+'" alt=""></div><div class="goodsBaseInfo"><span class="goodsName">'+goodsObj[i].name+'</span><span class="goodsPrice"><span class="oldPrice"><span>￥'+goodsObj[i].oldPrice+'</span><span class="deleOldPrice"></span></span><span class="newPrice">￥'+goodsObj[i].newPrice+'</span></span></div></a>'
            }
        }else{
            if(goodsObj[i].oldPrice == "" || goodsObj[i].oldPrice == null){
                objStr += '<a><div class="goodsImg"><img src="'+goodsObj[i].imgUrl+'" alt=""></div><div class="goodsBaseInfo"><span class="goodsName">'+goodsObj[i].name+'</span><span class="goodsPrice"><span class="newPrice" style="color:black;"￥>'+goodsObj[i].newPrice+'</span></span></div></a>'
            }else{
                objStr += '<a><div class="goodsImg"><img src="'+goodsObj[i].imgUrl+'" alt=""></div><div class="goodsBaseInfo"><span class="goodsName">'+goodsObj[i].name+'</span><span class="goodsPrice"><span class="oldPrice"><span>￥'+goodsObj[i].oldPrice+'</span><span class="deleOldPrice"></span></span><span class="newPrice">￥'+goodsObj[i].newPrice+'</span></span></div></a>'
            }
        }
    }
    goods_content.innerHTML = objStr;
}


/*商品点击并跳转道各界面*/
function goodsCilck(){
    var goods_content = document.getElementsByClassName("goods_content")[0],
        goods_a = goods_content.getElementsByTagName("a"),
        goods_a_len = goods_a.length;
    for(let i = 0;i < goods_a_len;i++){
        /*给商品绑定一个自定义属性*/
        goods_a[i].sum = i;
        goods_a[i].onclick = function(){
            /*将需要显示的商品信息存入会话存储*/
            sessionStorage.setItem("goodsInfo",JSON.stringify(goodsObj[i]));
            var recommend = [];
            /*随机生成3个推荐商品并存入会话存储*/
            for(let i = 0; i < 3;i++){
                recommend.push(goodsObj[Math.round(Math.random()*(goodsObj_len - 1))]);
            }
            sessionStorage.setItem("recommend",JSON.stringify(recommend));
            /*完成后跳转*/
            window.location.href = "../shoping.html";
        }
    }
}
