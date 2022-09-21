"use strict";
window.addEventListener('DOMContentLoaded', () => {
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
});