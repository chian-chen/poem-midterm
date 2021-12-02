/* 
================================================================
========== SETTING PHOTOS' SRC and Global Variables ============                  
================================================================
*/

const showcase = document.getElementById("showcase");   // the place to show big picture
const poem = document.getElementById("POEM");
const current_album = [
    './img/1.JPG',
    './img/2.JPG',
    './img/3.JPG',
    './img/4.JPG',
    './img/5.JPG',
    './img/6.JPG',
    './img/7.JPG',
    './img/8.JPG',
    './img/9.JPG',
    './img/10.JPG',
    './img/11.JPG',
    './img/12.JPG',
];
poem.innerText = '我想用森林的漆黑來安慰 ◎arkino\n\n我想起這幾年的失敗總使我疲憊，我想看海。\n每當聽見親愛的人受挫，我想用森林的漆黑來安慰。\n我希望用低鳴來傳達生活的不易。\n這些年總是在旅行，我想起每個停靠站\n或多或少都有失望的地方\n可能是一片過於人工的海灘\n也可能是壞天氣或者遇到不友善的人\n也有過不慎掉了個人物品，那時候我滿懷希望能夠沿路找回\n每當有人告訴我失而復得的故事\n我就想起這輩子不應該這麼平凡，這些年來\n不少人問我到底得到了些什麼\n我想用森林的低鳴來回應';

// get all src of current album, defalut: album1
var photo_index = 0;
// Record current photo_index
var album_end = current_album.length-1;
// Record current album's length-1
var all_photo_node = document.getElementsByClassName("photo");
// get all_node of current album

const poem_content = [
    '我想用森林的漆黑來安慰 ◎arkino\n\n我想起這幾年的失敗總使我疲憊，我想看海。\n每當聽見親愛的人受挫，我想用森林的漆黑來安慰。\n我希望用低鳴來傳達生活的不易。\n這些年總是在旅行，我想起每個停靠站\n或多或少都有失望的地方\n可能是一片過於人工的海灘\n也可能是壞天氣或者遇到不友善的人\n也有過不慎掉了個人物品，那時候我滿懷希望能夠沿路找回\n每當有人告訴我失而復得的故事\n我就想起這輩子不應該這麼平凡，這些年來\n不少人問我到底得到了些什麼\n我想用森林的低鳴來回應',
    '總認為失敗者是被遺棄的那位。\n好羞愧的心情，為什麼我就是沒辦法擁有勝利的喜悅。\n我常常在森林的木屋中，收集著霧氣\n盡力讓自己感到豐富。\n我希望可以滿足自己。\n我常常在想到底哪裡出了問題，我常常在霧中\n發現一隻鯨魚。\n我尾隨黑色的身影，穿過兩旁尖錐的樹林山脈\n沿著山線出海，廣闊的異國，鯨魚的尾鰭又拍打了一次海面\n我常常在想這裡是哪裡',
    '時間令我感到焦慮。\n時間讓我有被遺棄的失落感\n究竟誰能夠把我接走？\n會是你嗎\n還是你栽植的一棵樹\n一隻鳥從中竄起振翅而飛\n在雨滴的陣裡晃動；\n時間讓我在睡不好的清晨再度醒來\n我感受到腰椎間的隱隱痠疼，我忍住不發怒\n不為自己的脆弱和神經質寫下任何負面字句\n忍住不起床斥喝無形的暴風和雷雨\n我只是一隻鳥，從樹林中竄起又浮浮晃晃\n飛走\n\n是我最感到困擾的東西\n是我離開家之後，讓我驕傲虛偽又辛苦的東西\n飛走；剛開始，只是想試著飛而已。',
    '假如生活欺騙了你 ◎徐珮芬\n\n有時父母會欺騙你\n說只要你快樂長大\n\n有時童話會欺騙你\n讓你以為這世界上\n沒有永遠的醜小鴨',
    '有時課本會欺騙你\n讓你專程跑到河邊\n看小魚逆流向上\n\n有時總統會欺騙你\n就像情人一樣\n上了之前說的話\n總是比較動聽',
    '有些傷心的人會騙你\n答應你要好好活下去\n其實是要你答應\n沒有他，你也要好好活下去\n\n假如生活欺騙了你\n你就騙回去\n拿根菸，從容走上樓頂\n讓他們以為你不過\n想看看天空的雲',
    '你是一個如此奇怪的人 ◎陳雋弘\n\n每一次都想說我恨你\n「就到此為止了。」\n往前攤開手中的地圖\n出現更多條路',
    '啊，猶豫不決如此美麗\n是那麼多星座\n存在於同一片天空\n動用巨大的肺活量\n學一隻小鳥唱歌\n你是一個如此奇怪的人\n我深深愛著',
    '原諒雲的高高在上\n原諒影子的膚色\n原諒寫錯的字\n同時也原諒自己\n在早餐前許下了願望\n黃昏時總會湧起悔恨的感覺\n一天運轉的過程裡\n萬事萬物皆在改變位置\n\n張開雙手\n成為風景的一部份\n感覺風在耳邊\n溫柔低語',
    '無感覺的幸福　◎葉青\n\n遇見你以後\n我才發現我有五根手指',
    '大拇指  先用來捺下結婚所需的大紅色指印\n食指  數你好看的睫毛\n中指  負責在黑暗中確定你的形狀\n無名指倒不必戴上有名的戒指\n只用小指跟你打無數幼稚的勾勾',
    '最要緊的是  說好每天都待在家裡等你回來睡同一張床\n並且錯過世界上所有精彩的事情\n這樣的日子就是活了剛剛好一輩子終於等到的某種無聊日子',
]

/* 
================================================================
==========              Left and Right             =============                  
================================================================
*/

// Circle: if it reaches the end, go to the End/ back to Start

function left(e){
    if(photo_index === 0){
        Selected_Changed(all_photo_node[album_end]);
        photo_index = album_end;
    }
    else{
        Selected_Changed(all_photo_node[photo_index-1]);
        photo_index--;
    }
    showcase.src = current_album[photo_index];
    poem.innerText = poem_content[photo_index];

}

function right(e){
    if(photo_index === album_end){
        Selected_Changed(all_photo_node[0]);
        photo_index = 0;
    }
    else{
        Selected_Changed(all_photo_node[photo_index+1]);
        photo_index++;
    }
    showcase.src = current_album[photo_index];
    poem.innerText = poem_content[photo_index];

}

/* 
================================================================
==========            CLICK PREVIEW                =============                  
================================================================
*/ 

for(let i=0; i<all_photo_node.length; i++){
    all_photo_node[i].addEventListener("click" ,function(){
        Selected_Changed(all_photo_node[i]);
        photo_index = all_photo_node[i].id.substr(1)-1; // auto trans string to number due to my id's setting (p{number})
        showcase.src = current_album[photo_index];
        poem.innerText = poem_content[photo_index];
    }
    );
}

/*
input parameter is the node needed to be changed.
Warning: before getting into the function, photo_index should not be update 
or it can't find the node which is selected now.
*/
function Selected_Changed(Add_Selected){
    all_photo_node[photo_index].classList.remove("selected");
    Add_Selected.className += " selected";
}