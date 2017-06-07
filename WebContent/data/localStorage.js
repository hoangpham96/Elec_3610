/**
 * Created by laplap on 2017/6/5.
 */

// //save按钮
// function addLocal() {
//     var storage = window.localStorage;
//     if(storage.getItem("u3594_img")==null){
//         alert("save complete");
//         saveToStorage();
//     }else{
//         alert("this game is already exist");
//     }
// }

//添加缓存
function saveToStorage() {

    //localStorage
    if(window.localStorage) {
        if(document.getElementById("u3596_img")!=undefined){
            var stormblood  = document.getElementById("u3596_img").src;
            window.localStorage.setItem("u3596_img", stormblood);
        }
        if(document.getElementById("u3092_img")!=undefined) {
            var motogp = document.getElementById("u3092_img").src;
            window.localStorage.setItem("u3092_img", motogp);
        }
        if(document.getElementById("u2924_img")!=undefined) {
            var dirt4 = document.getElementById("u2924_img").src;
            window.localStorage.setItem("u2924_img", dirt4);
        }
		if(document.getElementById("u2756_img")!=undefined) {
            var morrowind = document.getElementById("u2756_img").src;
            window.localStorage.setItem("u2756_img", morrowind);
        }
		if(document.getElementById("u2588_img")!=undefined) {
            var tekken7 = document.getElementById("u2588_img").src;
            window.localStorage.setItem("u2588_img", tekken7);
        }
		if(document.getElementById("u2420_img")!=undefined) {
            var tekken7pc = document.getElementById("u2420_img").src;
            window.localStorage.setItem("u2420_img", tekken7pc);
        }
		if(document.getElementById("u3428_img")!=undefined) {
            var batman = document.getElementById("u3428_img").src;
            window.localStorage.setItem("u3428_img", batman);
        }
		if(document.getElementById("u3260_img")!=undefined) {
            var battlegrounds = document.getElementById("u3260_img").src;
            window.localStorage.setItem("u3260_img", battlegrounds);
        }
		if(document.getElementById("u2252_img")!=undefined) {
            var nightmares = document.getElementById("u2252_img").src;
            window.localStorage.setItem("u2252_img", nightmares);
        }
		if(document.getElementById("u1916_img")!=undefined) {
            var prey = document.getElementById("u1916_img").src;
            window.localStorage.setItem("u1916_img", prey);
        }
		if(document.getElementById("u2084_img")!=undefined) {
            var dawnofwar = document.getElementById("u2084_img").src;
            window.localStorage.setItem("u2084_img", dawnofwar);
        }
		if(document.getElementById("u1748_img")!=undefined) {
            var risingstorm = document.getElementById("u1748_img").src;
            window.localStorage.setItem("u1748_img", risingstorm);
        }
		
		
		
		
		
    } else {
        // 不支持 sessionStorage，用 Dojo 实现相同功能
    }

}
