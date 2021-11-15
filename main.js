/* 
================================================================
========== SETTING PHOTOS' SRC and Global Variables ============                  
================================================================
*/
const photo_1="https://i.imgur.com/PpPKxws.jpg";
const photo_2="https://i.imgur.com/vk5hKue.jpg";
const photo_3="https://i.imgur.com/ht23M1Q.jpg";
const photo_4="https://i.imgur.com/gMgkUq1.jpg";
const photo_5="https://i.imgur.com/Ep4LVfN.jpg";
const photo_6="https://i.imgur.com/1SzXuvJ.jpg";
const photo_7="https://i.imgur.com/N8M2FRK.jpg";
const photo_8="https://i.imgur.com/pIYCb6V.jpg";
const photo_9="https://i.imgur.com/1la1lok.jpg";
const photo_10="https://i.imgur.com/LGTge1w.jpg";
const photo_11="https://i.imgur.com/MC9iYAE.jpg";
const photo_12="https://i.imgur.com/1TITCXB.jpg";
// above: defalut album1
const showcase = document.getElementById("showcase");   // the place to show big picture
const poem = document.getElementById("poem");
const current_album = [photo_1, photo_2, photo_3, photo_4, photo_5, photo_6, photo_7, photo_8, photo_9, photo_10, photo_11, photo_12];
// get all src of current album, defalut: album1
var photo_index = 0;
// Record current photo_index
var album_end = current_album.length-1;
// Record current album's length-1
var all_photo_node = document.getElementsByClassName("photo");
// get all_node of current album

const poem_content = [
    '除了糖果還有什麼是五彩斑斕？\n生活中能觸碰到的顏色不夠刺耳\n聞不見你的眼臉\n就用尖叫觸摸',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    "12",
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