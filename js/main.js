//비주얼배너
const mainBanner = () => {};
//이벤트배너
const eventBanner = () => {};

//공부용↓
// const sectionPage1 = () => {
//     const $main = get('#mainVisual');
//     const $con1 = get('.main .con1');
//     const $con2 = get('.main .con2');
//     const $con3 = get('.main .con3');
//     const $con4 = get('.main .con4');
//     const $menulis = getAll('.menu li');
//     let ty = 0;
//     // console.log($con1.offsetTop);
//     $menulis[0].addEventListener('click', (e) => {
//         ty = $main.offsetTop;
//         window.scrollTo({ top: ty, behavior: 'smooth' });
//     });
//     $menulis[1].addEventListener('click', (e) => {
//         ty = $con1.offsetTop;
//         window.scrollTo({ top: ty, behavior: 'smooth' });
//     });
//     $menulis[2].addEventListener('click', (e) => {
//         ty = $con2.offsetTop;
//         window.scrollTo({ top: ty, behavior: 'smooth' });
//     });
//     $menulis[3].addEventListener('click', (e) => {
//         ty = $con3.offsetTop;
//         window.scrollTo({ top: ty, behavior: 'smooth' });
//     });
//     $menulis[4].addEventListener('click', (e) => {
//         ty = $con4.offsetTop;
//         window.scrollTo({ top: ty, behavior: 'smooth' });
//     });
// };

//참고용
const sectionPage = () => {
    const $main = get('#mainVisual');
    const $cons = getAll('.main .con');
    console.log($cons[0].offsetTop);

    const posY = [];
    posY.push($main.offsetTop);
    $cons.forEach((item) => {
        posY.push(item.offsetTop);
    });
    // console.log(posY);

    const $menulis = getAll('.menu li');
    $menulis.forEach((itemLi, idx) => {
        itemLi.addEventListener('click', (e) => {
            window.scrollTo({ top: posY[idx], behavior: 'smooth' });
            //모두떼기 -> forEach
            $menulis.forEach((item) => item.classList.remove('on'));
            itemLi.classList.add('on');
        });
    });
};

const menuBar = () => {
    const $menu = get('.menu');
    const $main = get('#mainVisual');
    const $cons = getAll('.main .con');
    const posY = [];
    posY.push($main.offsetTop);
    $cons.forEach((item) => {
        posY.push(item.offsetTop);
    });
    let ty = 0;
    const $menulis = getAll('.menu li');
    $menulis.forEach((itemLi, idx) => {
        itemLi.addEventListener('click', (e) => {
            window.scrollTo({ top: posY[idx], behavior: 'smooth' });
            //모두떼기 -> forEach
            // $menulis.forEach((item) => item.classList.remove('on'));
            // itemLi.classList.add('on');
            // 튕기는거 지우기
        });
    });
    window.addEventListener('scroll', (e) => {
        ty = window.scrollY;
        for (let i = 0; i < $menulis.length; i++) {
            if (ty >= posY[i]) {
                $menulis.forEach((item) => item.classList.remove('on'));
                $menulis[i].classList.add('on');
            }
        }
        // if (ty >= posY[1]) {
        //     $menulis.forEach((item) => item.classList.remove('on'));
        //     $menulis[1].classList.add('on');
        // }
        // if (ty >= posY[2]) {
        //     $menulis.forEach((item) => item.classList.remove('on'));
        //     $menulis[2].classList.add('on');
        // }
        // if (ty >= posY[3]) {
        //     $menulis.forEach((item) => item.classList.remove('on'));
        //     $menulis[3].classList.add('on');
        // }
        // if (ty >= posY[4]) {
        //     $menulis.forEach((item) => item.classList.remove('on'));
        //     $menulis[4].classList.add('on');
        // } else {
        //     $menu.classList.remove('on');
        // }

        // top부분
        if (ty > 400) {
            $menu.classList.add('on');
        } else {
            $menu.classList.remove('on');
        }
    });
};

//합치기
const mainInit = () => {
    mainBanner();
    eventBanner();
    menuBar();
    // sectionPage();
};

(() => {
    mainInit();
})();
