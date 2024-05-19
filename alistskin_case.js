/**
 * @name Alist云盘美化程序
 * @edition 3.1.2
 * @mtime 20230415
 */var note_true = true;window.onload = function() {
    
let flower_htmltrue_count = document.getElementById("root").getElementsByTagName('div').length;
let flower_settime_htmltrue = "";
let flower_htmltrue_if = true;
let flower_html_second = 0;
let flower_header_append_code = '';
let flower_debug = false;

if (note_true) {
    var flower_console = ["羽化云","http://pan.oroe.cn/"];
    console.log('%c '+flower_console[0]+' %c '+flower_console[1]+' ','padding: 5px 10px; color: #FFF; background-color:#282828; border-radius: 2px 0px 0px 2px;','padding: 5px 10px;color: #FFF; background-image: linear-gradient(to left,#00f2fe,#66ccff); border-radius: 0px 2px 2px 0px;');
}

let flower_timeout_arr = [0, 100, 200, 300, 500, 700, 1000, 1500, 2000, 3000, 5000, 6000];

function flower_html() {
        if (flower_debug) {
            console.log("延迟加载描述："+flower_html_second);
        }
        
        let flower_header_left = document.getElementById("root").getElementsByClassName("header")[0].getElementsByClassName("header-left")[0];
        flower_header_append_code += flower_header_left.innerHTML; 
flower_header_append_code += `<div class="flower_header_self">`; 
flower_header_append_code += `<h3>羽化云-收集世间万物</h3>`; 
flower_header_append_code += `<div class="flower_header_self_headimg">`; 
flower_header_append_code += `<img src="https://cdn.jsdelivr.net/gh/yuhualhh/alistskin@a7e5b883af1a398fa287336289b9655a0b9afdd8/yuhua.jpg">`; 
flower_header_append_code += `</div>`; 
flower_header_append_code += `</div>`; 
flower_header_append_code += `<div class="flower_header_dictum">`; 
flower_header_append_code += `<p>总之岁月漫长，然而值得等待</p>`; 
flower_header_append_code += `<h4>羽化</h4>`; 
flower_header_append_code += `</div>`; 
flower_header_append_code += `<div class="flower_header_nav"><ul>`; 
flower_header_append_code += `<li><a href="/"  >首页</a></li>`; 
flower_header_append_code += `<li><a href="http://pan.oroe.cn/" target="_blank">羽化云</a></li>`; 
flower_header_append_code += `<li><a href="http://blog.oroe.eu.org" target="_blank">羽化’s Blog</a></li>`; 
flower_header_append_code += `</ul></div>`; 
flower_header_left.innerHTML = flower_header_append_code; 
  
let flower_footer = document.getElementsByClassName('footer')[0].getElementsByClassName('hope-stack')[0]; 
var flower_footer_num = '0'; 
  
let flower_footer_append_html = document.getElementById("root").getElementsByClassName("footer")[0].getElementsByTagName("div")[0]; 
flower_footer_append_code = ''; 
flower_footer_append_code += `<a class="flower_footer_codea" href="/"  >由 羽化 运维</a>`; 
flower_footer_append_code += `<span>|</span>`; 
flower_footer_append_code += `<a class="flower_footer_codea" href="/@login"  >登录</a>`;
flower_footer_append_html.innerHTML = flower_footer_append_code; 
  
flower_create_code(document.body, 'div', '', '', 'flower_subunit'); 
let flower_subunit_code = '';
// 组件-昼夜界面
let flower_cookie = localStorage.getItem('hope-ui-color-mode');
flower_subunit_code += '<div class="flower_subunit_btn">';
if (flower_cookie == 'light' || !flower_cookie) {
    flower_subunit_code += '<div class="flower_subunit_btn_night" style="display:block;">';
}else{
    flower_subunit_code += '<div class="flower_subunit_btn_night" style="display:none;">';
}
flower_subunit_code += '<svg fill="none" stroke-width="2" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" class="hope-icon" height="1em" width="1em" style="overflow: visible;"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path></svg>';
flower_subunit_code += '</div>';
if (flower_cookie == 'dark') {
    flower_subunit_code += '<div class="flower_subunit_btn_day" style="display:block;">';
}else{
    flower_subunit_code += '<div class="flower_subunit_btn_day" style="display:none;">';
}
flower_subunit_code += '<svg fill="none" stroke-width="2" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" class="hope-icon" height="1em" width="1em" style="overflow: visible;"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path></svg>';
flower_subunit_code += '</div>';
flower_subunit_code += '</div>';
// 组件-页面链接复制
flower_subunit_code += '<div class="flower_copy_url">';
flower_subunit_code += '<svg t="1681313891486" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4661" width="200" height="200"><path d="M240.426667 512A192 192 0 1 1 512 240.426667l67.84 67.84A42.666667 42.666667 0 0 0 640 248.106667l-67.626667-68.053334a274.56 274.56 0 0 0-91.733333-60.8 280.533333 280.533333 0 0 0-208.853333 0 277.333333 277.333333 0 0 0-152.533334 152.533334 279.253333 279.253333 0 0 0 0 208.853333 274.56 274.56 0 0 0 60.8 91.733333L248.106667 640a42.666667 42.666667 0 0 0 60.16-60.373333zM904.746667 543.36a274.56 274.56 0 0 0-60.8-91.733333L775.893333 384a42.666667 42.666667 0 1 0-60.16 60.373333L783.573333 512A192 192 0 1 1 512 783.573333l-67.84-67.84A42.666667 42.666667 0 1 0 384 775.893333l67.84 68.053334a274.56 274.56 0 0 0 91.733333 60.8 279.253333 279.253333 0 0 0 208.853334 0 277.333333 277.333333 0 0 0 152.533333-152.533334 279.253333 279.253333 0 0 0 0-208.853333z" p-id="4662"></path><path d="M647.68 690.346667A42.666667 42.666667 0 0 0 677.973333 618.666667L406.4 346.026667a42.666667 42.666667 0 1 0-60.373333 60.373333L618.666667 677.973333a42.666667 42.666667 0 0 0 29.013333 12.373334z" p-id="4663"></path></svg>';
flower_subunit_code += '</div>';let flower_subunit_code_append = document.getElementsByClassName("flower_subunit")[0]; 
flower_subunit_code_append.innerHTML = flower_subunit_code;
// 组件-搜索功能
flower_create_code(document.body, 'div', '', '', 'flower_search');
let flower_search_code = "";
flower_search_code += "<div class='flower_svg'>";
flower_search_code += '<svg t="1681480754107" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3218" width="200" height="200"><path d="M953.8 619.1c-2-54-25-104.3-64.6-141.8-34.4-32.5-78.2-52.3-124.9-56.7-9.6-129.1-118.3-231.2-250.4-231.2h-46.4c-66.8 0-129.5 26-176.6 73.2-47.2 47.1-73.2 109.9-73.2 176.6 0 24.4 3.5 48.5 10.5 71.7-41.8 0.9-81 17.7-110.8 47.4-32 32-48.8 74.6-47.3 120 1.4 42.3 19.3 81.8 50.3 111.1 30.7 29.1 71 45.2 113.4 45.2h208.7c13.8 0 25-11.2 25-25s-11.2-25-25-25H233.8c-29.5 0-57.6-11.2-79-31.5s-33.7-47.5-34.7-76.5c-1-31.3 10.6-60.8 32.7-82.9 21.1-21.1 49.2-32.8 79.1-32.8 15.2 0 29.1-7 38.1-19.3 8.9-12.1 11.5-28 7-42.3-6.1-19.3-9.2-39.5-9.2-60 0-53.4 20.8-103.6 58.5-141.3 37.7-37.7 87.9-58.5 141.3-58.5H514c110.8 0 201 89.5 201 199.7v1.1c0 7.8 3 15.2 8.5 20.8 5.5 5.6 12.9 8.6 20.7 8.6 41.3 0 80.6 15.6 110.6 44s47.4 66.5 49 107.3c1.7 44.4-14.7 86.1-46 117.5-9.8 9.8-9.8 25.6 0 35.4 9.8 9.8 25.6 9.8 35.4 0 20-20 35.4-43.3 45.9-69.4 10.9-27.2 15.9-55.9 14.7-85.4z" p-id="3219"></path><path d="M653.4 685.7c23.6-28.7 37.7-65.4 37.7-105.4 0-91.8-74.7-166.4-166.4-166.4-91.8 0-166.4 74.7-166.4 166.4S433 746.7 524.7 746.7c33.8 0 65.2-10.1 91.5-27.5l86 86c4.9 4.9 11.3 7.3 17.7 7.3s12.8-2.4 17.7-7.3c9.8-9.8 9.8-25.6 0-35.4l-84.2-84.1zM408.3 580.3c0-64.2 52.2-116.4 116.4-116.4s116.4 52.2 116.4 116.4c0 34-14.6 64.6-38 85.9-0.9 0.7-1.7 1.4-2.5 2.2l-0.2 0.2c-20.4 17.5-46.9 28.1-75.8 28.1-64.1 0-116.3-52.2-116.3-116.4z" p-id="3220"></path></svg>';
flower_search_code += "</div>";
let flower_search_code_append = document.getElementsByClassName("flower_search")[0];
flower_search_code_append.innerHTML = flower_search_code;document.getElementsByClassName("flower_subunit")[0].getElementsByClassName("flower_subunit_btn")[0].style.transform = "translateY(42px)"; 
document.getElementsByClassName("flower_subunit")[0].getElementsByClassName("flower_copy_url")[0].style.transform = "translateY(84px)"; 
document.getElementsByClassName("flower_search")[0].style.transform = "translateY(126px)"; 
document.getElementsByClassName("left-toolbar-box")[0].style.transform = "translateY(168px)";
if (document.getElementsByClassName('flower_subunit_btn')[0]) {
    document.getElementsByClassName('flower_subunit_btn')[0].onclick = function() {
        let flower_cookie = localStorage.getItem('hope-ui-color-mode');
        if (flower_cookie == 'light' || !flower_cookie) {
            document.body.className = "hope-ui-dark";
            localStorage['hope-ui-color-mode'] = 'dark';
        }else{
            document.body.className = "hope-ui-light";
            localStorage['hope-ui-color-mode'] = 'light';
        }
    };
}

if (document.getElementsByClassName('flower_copy_url')[0]) {
    document.getElementsByClassName('flower_copy_url')[0].onclick = function() {
        flower_copy_web_url();
    }
}

if (document.getElementsByClassName('flower_search')[0]) {
    document.getElementsByClassName('flower_search')[0].onclick = function() {
        flower_tips("开启单字模糊搜索功能!");
        document.getElementsByClassName('header-right')[0].getElementsByClassName('hope-stack')[0].click();
    }
}

setTimeout(function(){
    console.clear("");
    
    if (note_true) {
        var flower_console = ["羽化云","http://pan.oroe.cn/"];
        console.log('%c '+flower_console[0]+' %c '+flower_console[1]+' ','padding: 5px 10px; color: #FFF; background-color:#282828; border-radius: 2px 0px 0px 2px;','padding: 5px 10px;color: #FFF; background-image: linear-gradient(to left,#00f2fe,#66ccff); border-radius: 0px 2px 2px 0px;');
    }
    
},200)


}

function flower_create_code (flower_appendto, flower_html="div", flower_text="", flower_style="", flower_class="", flower_id="") {
    var flower_create_html = document.createElement(flower_html);
    if (flower_style) {
        flower_create_html.style.cssText = flower_style;
    }
    if (flower_class) {
        flower_create_html.className = flower_class;
    }
    if (flower_id) {
        flower_create_html.id = flower_id;
    }
    flower_appendto.appendChild(flower_create_html);
}

const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        flower_interface();
    });
});
observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
function flower_interface() {
    let flower_cookie = localStorage.getItem('hope-ui-color-mode');
    if (flower_cookie == 'light' || !flower_cookie) {
        document.getElementsByClassName('flower_subunit_btn_night')[0].style.display = 'block';
        document.getElementsByClassName('flower_subunit_btn_day')[0].style.display = 'none';
    }else{
        document.getElementsByClassName('flower_subunit_btn_night')[0].style.display = 'none';
        document.getElementsByClassName('flower_subunit_btn_day')[0].style.display = 'block';
    }
}

function flower_copy_web_url(){
      const input = document.createElement('input')
      input.setAttribute('readonly', 'readonly')
      let url=window.location.href
      input.setAttribute('value', url)
      document.body.appendChild(input)
      input.select()
      if (document.execCommand('copy')) {
            document.execCommand('copy')
            flower_tips("页面链接复制成功!");
      }
      document.body.removeChild(input)
}

var flower_outtip_left = '',
    flower_outtip = '';
function flower_tips(flower_text) {
    flower_outtip_left && clearTimeout(flower_outtip_left);
    flower_outtip && clearTimeout(flower_outtip);
    if (document.getElementsByClassName('flower_tips')[0]) {
        document.body.removeChild(document.getElementsByClassName('flower_tips')[0]);
    }
    let flower_appendto = document.body;
    let flower_html = 'div';
    let flower_class = 'flower_tips';
    flower_create_code(flower_appendto, flower_html, '', '', flower_class);
    document.getElementsByClassName('flower_tips')[0].innerText = flower_text;
    // 动效
    document.getElementsByClassName('flower_tips')[0].style.right = '0px';
    flower_outtip_left = setTimeout(function(){
        document.getElementsByClassName('flower_tips')[0].style.right = '-100%';
        flower_outtip = setTimeout(function(){
            document.body.removeChild(document.getElementsByClassName('flower_tips')[0]);
        },10)
    },3000)
}

function flower_html_settimeout() {
    setTimeout(function() {
        flower_html();
    }, 10)
}

for (i in flower_timeout_arr) {
    setTimeout(function(num) {
        flower_settime_htmltrue = document.getElementById("root").getElementsByTagName('div').length;
        if (flower_htmltrue_if && flower_settime_htmltrue > flower_htmltrue_count) {
            flower_html_second = num;
            flower_html_settimeout();
            flower_htmltrue_if = false;
            clearTimeout(flower_htmltrue_timeout_flase);
            return false;
        }
    }, flower_timeout_arr[i], flower_timeout_arr[i])
}

let flower_htmltrue_timeout_flase = setTimeout(function() {
    if (flower_htmltrue_if) {
        let flower_confirm_f5 = confirm("页面羽化美化包数据加载超时，是否进行刷新页面?");
        if (flower_confirm_f5 == true) {
            window.location.href = "";
        }
    }
}, flower_timeout_arr[flower_timeout_arr.length -1]+1000);

}
