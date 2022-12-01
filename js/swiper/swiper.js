const swiper = new Swiper('.swiper', {
   // Optional parameters
   // horizontal, vertical
   direction: 'horizontal',
   // БЕСКОНЕЧНАЯ ПРОКРУТКА
   loop: true,
   // loopedSlide: 3,
   autoHeight: true,
   freeMode:true,
   // КОЛИЧЕСТВО СЛАЙДОВ ДЛЯ ПОКАЗА
   slidesPerView: 1,
   watchOverflow:true,

   // РАССТОЯНИЕ МЕЖДУ СЛАЙДОВ
   spaceBetween: 30,

   // АДАПТИВ КАК ПРИ @MEDIA MIN-WIDTH
   // breakpoints: {
   //    320: {
   //       slidesPerView:1,
   //    },
   //    480: {
   //       slidesPerView:2,
   //    },
   //    768: {
   //       slidesPerView:3,
   //    },
   // },

   // ПРЕДЗАГРУЗКА КАРТИНОК
   preloadinImages: false,
   
   // АКТИВНЫЙ СЛАЙД ПО ЦЕНТРУ
   centeredSlides: true,

   // СКОРОСТЬ ПРОКРУТКИ
   speed:900,
   
   // СТАРТОВЫЙ СЛАЙД
   // initialSlide: 2,
   
   // ПЕРЕТАСКИВАНИЕ С ПОМОЩЬЮ СТРЕЛКИ
   // simulateTouch: true,

   // СТРЕЛКА МЕНЯЕТ ВНЕШНИЙ ВИД ПРИ НАВЕДЕНИИ
   // grabCursor:true,

   // ПЕРЕКЛЮЧАЕТ ПРИ КЛИКЕ
   // slideToClickedSlide: true,
 
   // КНОПКИ УПРАВЛЕНИЯ С ПОМОЩЬЮ ПАГИНАЦИИ
   // pagination: {
      // КЛАСС ПАГИНАЦИИ ПО УМ.
   //    el: '.swiper-pagination',
   
   //    ПРОЛИСТЫВАЕТ ПРИ НАЖАТИИ НА ПАГИНАЦИЮ
   //    clickable: true,
   
   //    МЕНЯЕТСЯ РАЗМЕРЫ ПАГИНАЦИИ ПРИ ПРОКРУТКИ
   //    dynamicBullets: true,
   
   //    КОЛИЧЕСТВО СЛАЙДОВ И ПОРЯДОК
   //    type: 'fraction',
   
   //    ВИД ТОЧКАМИ
   //    type:'bullets',
   
   //    ПРОГРЕСС ПРОЛИСТОВАНИЯ
   //    type: 'progressbar',
      
   // },
 
   // СТРЕЛКИ УПРАВЛЕНИЯ ПО УМОЛЧАНИЮ
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 
   // ПОЛОСА ПРОКРУТКИ
   // scrollbar: {
   //    el: '.swiper-scrollbar',
   //    // ПРОКРУТКА С ПОМОЩЬЮ ПОЛОСЫ
   //    draggable: true
   // },

   // УПРАВЛЕНИЕ С ПОМОЩЬЮ КЛАВИАТУРЫ
   keyboard: {
      enable: true,
      
      // РАБОТАЕТ ТОЛЬКО В ПОЛЕ ВИДИМОСТИ
      onliinViewport: true,
      
      // ИСПОЛЬЗ. КЛАВИШИ
      pageUpDown:true,
   },

   // УПРАВЛЕНИЕ С ПОМОЩЬЮ ПРОКРУТКИ МЫШИ
   mousewheel: {
      // ЧУСТВИТЕЛЬНОСТЬ
      sensitivity: 1,
      
      // 
   },

   // АВТОПРОКРУТКА
   // autoplay: {
   //    //ПАУЗА ПРИ АВТО ПРОКРУТКИ
   //    delay: 9000,
   //    // БЕСКОНЕЧНАЯ ПРОКРУТКА FALSE
   //    stopOnLastSlide: true,
   //    // ОТКЛЮЧИТЬ ПОСЛЕ ПЕРЕХОДА В РУЧНОЙ ПРОКРУТКИ
   //    disableOnInteraction:false,
   // },

   // ЭФФЕКТЫ ПРИ ПЕРЕКЛЮЧЕНИИ
      // ИЗМЕНЕНИЕ ПРОЗРАЧНОСТИ
   // effect: 'fade',
   // FadeEffect: {
   //    // ПАРРАЛЕЛЬНАЯ СМЕНА ПРОЗРАЧНОСТИ
   //       crossFade:true,
   //    },
      // СЛАЙД КРУТИТСЯ
   // effect: 'flip',
   // flipEffect: {
   //       // ТЕНИ
   //    slideShadows: true,
   //    // ПОКАЗ АКТИВНОГО СЛАЙДА
   //    limitRotation:true,
   //    },
      // КАК КУБИК
   // effect: 'cube',
   // cubeEffect: {
   //       // НАСТРОЙКИ ТЕНИ
   //    slideShadow: true,
   //    shadow: true,
   //    shadowOffset: 20,
   //    shadowScale:0.94,
   //    },

   // 
   // effect: 'coverflow',
   // coverflowEffect: {
   //       // УГОЛ
   //    rotate: 20,
   //    // НАЛОЖЕНИЕ
   //    strech: 50,
   //    // ТЕНЬ
   //    slideShadows: true,
   //    },

   // ЛЕНИВАЯ ЗАГРУЗКА
   lazy: {
      // ПОДГРУЖАТЬ НА СТАРТЕ?
      loadOnTrasitionStart: false,
      // ПОДГРУЖАТЬ СЛЕДУЩУЮ И ПРЕДЫДУЩУЮ
      loadPrevNext:false,
   },
   // СЛЕЖКА ЗА ВИДИМЫМИ  СЛАЙДАМИ
   watchSlidesProgress: true,
   // ДОБАВЛЕНИЕ КЛАССА ВИДИМЫМ СЛАЙДАМ
   watchSlidesVisibility: true,
   
   zoom: {
      // ZOOM IMG
      maxRation: 3,
      minRation: 1,
   },

   // 
   observer: true,
   observerParents: true,
   observerSlideChildren: true,
   
 });