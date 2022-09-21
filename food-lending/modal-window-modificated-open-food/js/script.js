"use strict";
window.addEventListener('DOMContentLoaded', () => {
  // Tabs
  const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

  function hideTabContent() {
    tabsContent.forEach(item => {
      item.classList.add("hide");
      item.classList.remove('show', 'fade');
    });

    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active');
    });

  }
        
  function showTabContent(n = 0) {
    tabsContent[n].classList.add('show', 'fade');
    tabsContent[n].classList.remove('hide');
    tabs[n].classList.add('tabheader__item_active');
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click', (event) => {
    const target = event.target;

    if(target && target.classList.contains('tabheader__item')){
      tabs.forEach((item, i) => {
        if(target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  // Timer
  const deadLine = '2022-09-30';

  function getTimeRemaining(endtime) {
    let days, hours, minutes, seconds;
    const t = Date.parse(endtime) - Date.parse(new Date());

    if( t <= 0) {
      days = 0; 
      hours = 0; 
      minutes = 0;
      seconds = 0;
    } else {
      days = Math.floor(t / (1000 * 60 * 60 * 24));
      hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      minutes = Math.floor((t / 1000 / 60) % 60);
      seconds = Math.floor((t / 1000) % 60);
    }
          
    return {
          'total': t,
          'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
    };
  }

  function getZero(num) {
    if (num >= 0 && num <10){
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClocks (selector, endTime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000); 

  updateClock(); // remove flicker

    function updateClock() {
      const t = getTimeRemaining(endTime);

      days.innerHTML =  getZero(t.days);
      hours.innerHTML =  getZero(t.hours);
      minutes.innerHTML =  getZero(t.minutes);
      seconds.innerHTML =  getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }

    }
  }

  setClocks('.timer',deadLine);

  // Modal
  const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]'),
        modalTimerId = setTimeout(openModal, 5000);

  function openModal(){
    modal.classList.toggle('show'); 
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId);
  } 

  modalTrigger.forEach(item => {
    item.addEventListener("click", openModal);
  });

  function closeModal() {
    modal.classList.toggle('show');
    document.body.style.overflow = '';
  }

  modalCloseBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show')){
      closeModal();
    }
  });

  function showModalByScroll(){
    if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
      openModal();
      window.removeEventListener('scroll', showModalByScroll);
    }
  }

  window.addEventListener('scroll', showModalByScroll);

});