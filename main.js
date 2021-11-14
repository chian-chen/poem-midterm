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
const photo_13="https://i.imgur.com/NQP8MxC.jpg";
const photo_14="https://i.imgur.com/GXUO5vL.jpg";
const photo_15="https://i.imgur.com/gn49BpQ.jpg";
const photo_16="https://i.imgur.com/M3KfEYq.jpg";
const photo_17="https://i.imgur.com/ydTjlm3.jpg";
const photo_18="https://i.imgur.com/5I1q7bU.jpg";
const photo_19="https://i.imgur.com/RBo1dcr.jpg";
const photo_20="https://i.imgur.com/jihnr7c.jpg";
const photo_21="https://i.imgur.com/BABFC3g.jpg";
const photo_22="https://i.imgur.com/8gCnQYj.jpg";
const photo_23="https://i.imgur.com/NH0ST1D.jpg";
const photo_24="https://i.imgur.com/AZSkzB7.jpg";
// above: defalut album2

const showcase = document.getElementById("showcase");   // the place to show big picture

const album_1 = [photo_1, photo_2, photo_3, photo_4, photo_5, photo_6, photo_7, photo_8, photo_9, photo_10, photo_11, photo_12];
const album_2 = [photo_13, photo_14, photo_15, photo_16, photo_17, photo_18, photo_19, photo_20, photo_21, photo_22, photo_23, photo_24];

var current_album = [photo_1, photo_2, photo_3, photo_4, photo_5, photo_6, photo_7, photo_8, photo_9, photo_10, photo_11, photo_12];
// get all src of current album, defalut: album1
var current_album_node = document.getElementById("album1");

var photo_index = 0;
// Record current photo_index
var album_end = current_album.length-1;
// Record current album's length-1
var all_photo_node = document.getElementsByClassName("photo");
// get all_node of current album


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
}


/* 
================================================================
==========              Change ALBUM               =============                  
================================================================
*/


function album1(e){
    ALBUM_Selected(e);
    current_album = [];
    for(let i=0;i<12;i++){
        current_album[i] = album_1[i];
        all_photo_node[i].src = album_1[i];
    }
    ALBUM_Initialized();
}

function album2(e){
    ALBUM_Selected(e);
    current_album = [];
    for(let i=0;i<12;i++){
        current_album[i] = album_2[i];
        all_photo_node[i].src = album_2[i];
    }
    ALBUM_Initialized();
}

function ALBUM_Selected(e){
    current_album_node.classList.remove("selected");
    current_album_node = e;
    e.className += " selected";
}

function ALBUM_Initialized(){
    showcase.src = current_album[0];
    Selected_Changed(all_photo_node[0]);
    photo_index = 0;
    album_end = current_album.length-1;
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