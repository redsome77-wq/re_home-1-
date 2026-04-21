const navBar = document.querySelector('.bnr_left');
const backBox = document.querySelector('.sub_bg');
const navLi = document.querySelectorAll('li .lnb_depth');
console.log(navBar, backBox, navLi);

//전체화면에서 호버시 메뉴 나타나기
for(let i=0; i<6; i++){
    navLi[i].style.display='none';
    navBar.addEventListener('mouseover', function(){
        if(window.innerWidth>=1024){
            backBox.style.display='flex';
            navLi[i].style.display='flex';
        };
        });
        backBox.addEventListener('mouseover', function(){
        if(window.innerWidth>=1024){
            backBox.style.display='flex';
            navLi[i].style.display='flex';
        };
        });
        navBar.addEventListener('mouseout', function(){
        if(window.innerWidth>=1024){
            backBox.style.display='none';
            navLi[i].style.display='none';
        };
        });
        backBox.addEventListener('mouseout', function(){
        if(window.innerWidth>=1024){
        backBox.style.display='none';
        navLi[i].style.display='none';
        };
    });
};

//전체메뉴 클릭 시 전체메뉴 나타나기
const ham = document.querySelector('.bnr_short #ham')
const mBg = document.querySelector('.m_bg');
const sideXBtn = document.querySelector('.top .close_ham')
ham.addEventListener('click', function(){mbgSH('block');})
sideXBtn.addEventListener('click', function(){mbgSH('none');})
function mbgSH(status){return mBg.style.display = status;}

//데스크톱 메뉴(gnb) 복제해서 모바일메뉴(m_nav)위치에 붙여넣기
const mNav = mBg.querySelector('.m_nav');
const gnbUl = document.querySelector('.top_bnr .nav'); //복제 전 선택
//특정대상 복제 시, 객체.cloneNode() 내장함수 사용
const gnbClone = gnbUl.cloneNode(true);
mNav.appendChild(gnbClone);

//모바일 메뉴 기준
//gnb클릭시 lnb보이기 (height 값 이용)
const mGnb = mBg.querySelectorAll('.nav > li');
const mLnb = mBg.querySelectorAll('.lnb_depth');
console.log(mGnb, mLnb);

for(let i of mLnb){i.style.transition='height 0.3s'}
for(let i of mGnb){
    i.addEventListener('click', function(){
        console.log('클릭')
        mLnbHide();
        //max-content 숫자로 수치화한 속성=> scrollHeight
        console.log(i.children[1].scrollHeight)
        i.children[1].style.height=Number(i.children[1].scrollHeight)+'px';
    })
}

function mLnbHide(){
    for(let i of mLnb)i.style.height=0;
}