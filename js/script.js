window.addEventListener('DOMContentLoaded', () => {
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');
    
    const modal1 = document.getElementById('modal1');
    const modal2 = document.getElementById('modal2');
    const modal3 = document.getElementById('modal3');
    
    function openModal(modal) {
        modal.classList.add('show');
        modal.classList.remove('hide');
    }
    
    function closeModal(modal) {
        modal.classList.add('hide');
        modal.classList.remove('show');
    }

    modal1.addEventListener('click', () => {
      closeModal(modal1);
    });

    btn1.addEventListener('click', () => {
      openModal(modal1);
      closeModal(modal2);
      closeModal(modal3);
    });

    modal2.addEventListener('click', () => {
      closeModal(modal2);
    });
    
    btn2.addEventListener('click', () => {
      openModal(modal2);
      closeModal(modal1);
      closeModal(modal3);
    });

    modal3.addEventListener('click', () => {
      closeModal(modal3);
    });
    
    btn3.addEventListener('click', () => {
      openModal(modal3);
      closeModal(modal1);
      closeModal(modal2);
    });
    
    window.addEventListener('click', (e) => {
      if (e.target === modal1) {
        closeModal(modal1);
      }
      if (e.target === modal2) {
        closeModal(modal2);
      }
      if (e.target === modal3) {
        closeModal(modal3);
      }
    });

const modalSign = document.querySelector('.modal_sign'),
      modalSignBtn = document.querySelector('.btn_sing-in'),
      modalBtnSign = document.querySelector('.btn_log-in');

      modalSignBtn.onclick = function () {
        modalSign.classList.add('show');
        modalSign.classList.remove('hide');
        document.body.style.overflow = 'hidden';
      };


    modalBtnSign.onclick = function () {
      modalSign.classList.add('hide');
      modalSign.classList.remove('show');
        document.body.style.overflow = '';
    };
/* ---------------------------showModalByScroll------------------------------------------ */
    BtnSignIn = document.querySelector('.btn_container');

    BtnSignIn.onclick = function () {
        BtnSignIn.style.display = 'none';

    };

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1) {
        BtnSignIn.style.display = 'block';
        window.removeEventListener('scroll', showModalByScroll);
        }
        }
        window.addEventListener('scroll', showModalByScroll);
        

        const recX = document.querySelectorAll('.rec_trend-X');
 
    let i;
    for(i = 0; i < recX.length; i++) {
        recX[i].onclick = function () {
            let span = this.parentElement;
            setTimeout(function() {
                span.style.display = 'none';
            }, 600)
        }
    }
    /* ---------------------modal-Sign-up------------------- */
    const signInBtn = document.getElementById('signInBtn');
    const signUpBtn = document.getElementById('signUpBtn');
    const signInModal = document.getElementById('signInModal');
    const signUpModal = document.getElementById('signUpModal');
    
    signInBtn.addEventListener('click', function() {
        signUpBtn.classList.remove('active');
        signInBtn.classList.add('active');
      signInModal.style.display = 'block';
      signUpModal.style.display = 'none';

    });
    

    signUpBtn.addEventListener('click', function() {
        signInBtn.classList.remove('active');
        signUpBtn.classList.add('active');
      signUpModal.style.display = 'block';
      signInModal.style.display = 'none';

    });
    /* ----------------Drop-down-------------------- */
    document.getElementById("input").addEventListener("focus", function() {
      document.getElementById("dropdown").classList.add("show");
    });
    
  
    document.getElementById("input").addEventListener("blur", function() {
      document.getElementById("dropdown").classList.remove("show");
    });
})