/*首页图片轮播*/
function carouselFn(){
    var carousel = document.getElementsByClassName("carousel")[0],        
        imgList = carousel.getElementsByTagName("img"),
        imgList_len = imgList.length;
    var count = 0;
    for(let i = 0;i < imgList_len;i++){
        imgList[i].style.cssText = "opacity:0;"
    }
    imgList[0].style.cssText = "opacity:1;"
    setInterval(function(){
        if(count < imgList_len - 1){
            imgList[count].style.cssText = "opacity:0;"
            count++;
            imgList[count].style.cssText = "opacity:1;"
        }else{
            imgList[count].style.cssText = "opacity:0;"
            count = 0;
            imgList[count].style.cssText = "opacity:1;"
        }
    },4000);
}

carouselFn();
