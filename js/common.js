const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

// #누르면 새 창 뜨는 - 링크막아주기
const preventDefaultAnchor = () => {
    const $links = getAll('a[href="#"]');
    $links.forEach((link) => link.addEventListener('click', (e) => e.preventDefault()));
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const navi = () => {
    const $gnbli = getAll('#header .nav .gnb li');
};
const familySite = () => {};

const siteMap = () => {
    const $sitemap = get('.sitemap');
    const $bg = get('.bg');
    const $allmenu = get('#header .util .all-menu');
    const $close = get('.sitemap .close');

    $allmenu.addEventListener('click', (e) => {
        $sitemap.classList.add('on');
        $bg.classList.add('on');
    });
    $close.addEventListener('click', (e) => {
        $sitemap.classList.remove('on');
        $bg.classList.remove('on');
    });
};

// 스크롤처리
const topBar = () => {
    const $top = get('.top');
    const $header = get('#header');

    let ty = 0;
    $top.addEventListener('click', (e) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', (e) => {
        //window.scrollY , window.pageYOffset
        // console.log(window.scrollY);
        ty = window.scrollY;
        if (ty > 300) {
            $top.classList.add('on');
            //top에 on 붙이기
        } else {
            $top.classList.remove('on');
        }
        if (ty > 100) {
            $header.classList.add('on');
            //top에 on 붙이기
        } else {
            $header.classList.remove('on');
        }
    });
};
const comInit = () => {
    navi();
    topBar();
    siteMap();
};

(() => {
    preventDefaultAnchor();
    comInit();
})();
