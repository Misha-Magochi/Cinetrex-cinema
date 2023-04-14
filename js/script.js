window.addEventListener('DOMContentLoaded', () => {
let modalWin = document.getElementById('modal-win'),
    modalLink = document.getElementById('link-id');


    modalLink.onclick = function () {
        modalWin.style.display = 'block';

    };

    window.onclick = function (e) {
        if(e.target == modalWin) {
            modalWin.style.display = 'none';
        }
        if(e.target == modalSign) {
            modalSign.style.display = 'none';
        }
    } 

const modalSign = document.querySelector('.modal_sign'),
      modalSignBtn = document.querySelector('.btn_sing-in'),
      modalBtnSign = document.querySelector('.btn_log-in');

      modalSignBtn.onclick = function () {
        modalSign.style.display = 'block';
        document.body.style.overflow = 'hidden';
      };


    modalBtnSign.onclick = function () {
        modalSign.style.display = 'none';
        document.body.style.overflow = '';
    }

    BtnSignIn = document.querySelector('.btn_container');

    

    BtnSignIn.onclick = function () {
        BtnSignIn.style.display = 'none';
                document.body.style.overflow = '';
    }

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1) {
        BtnSignIn.style.display = 'block';
        window.removeEventListener('scroll', showModalByScroll);
        }
        }
        window.addEventListener('scroll', showModalByScroll);

})