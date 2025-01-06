// *Проверка поддержки Webp
import * as andreyFunctions from "./modules/functions.js";

andreyFunctions.isWebp();
// =======================================================================================================
// * Меню бургер
const burger = document.querySelector('.burger');

if (burger) {
    const menuBody = document.querySelector('.menu__body');
    burger.addEventListener('click', (e) => {
        burger.setAttribute('aria-expanded', 'false');
        burger.setAttribute('aria-label', 'Открыть меню');
        document.body.classList.toggle('_lock');
        burger.classList.toggle('_active');
        menuBody.classList.toggle('_active');

        if (burger.classList.contains('_active')) {
            burger.setAttribute('aria-expanded', 'true');
            burger.setAttribute('aria-label', 'Закрыть меню');
            const menuLinks = document.querySelectorAll('.menu__link');

            menuLinks.forEach(link => link.addEventListener('click', (e) => {
                document.body.classList.remove('_lock');
                burger.classList.remove('_active');
                menuBody.classList.remove('_active');
                burger.setAttribute('aria-expanded', 'false');
                burger.setAttribute('aria-label', 'Открыть меню');
            }));
        }
    });
}

// =======================================================================================================
// * Swiper
import Swiper from 'swiper';
import { Pagination, Autoplay, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';

new Swiper('.main-slider', {
    modules: [Pagination, Autoplay],
    speed: 1000,
    spaceBetween: 50,

    pagination: {
        el: '.slider-pagination',
        // custom fraction
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                '<span class="slider-pagination-line"></span>' +
                '<span class="' + totalClass + '"></span>';
        },
    },

    autoplay: {
        delay: 4000,
    },
});

new Swiper('.article-summary__slider', {
    modules: [Autoplay, Scrollbar],
    speed: 800,
    spaceBetween: 30,
    slidesPerView: 4,

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        479.98: {
            slidesPerView: 2,
        },
        767.98: {
            slidesPerView: 3,
        },
        991.98: {
            slidesPerView: 4,
        },
    },

    autoplay: {
        delay: 7000,
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

new Swiper('.values__slider', {
    modules: [Autoplay, Scrollbar],
    speed: 800,
    spaceBetween: 60,
    slidesPerView: 3,

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        479.98: {
            slidesPerView: 1,
        },
        767.98: {
            slidesPerView: 2,
        },
        991.98: {
            slidesPerView: 3,
        },
    },

    autoplay: {
        delay: 7000,
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

new Swiper('.reviews__slider', {
    modules: [Pagination, Autoplay],
    speed: 800,
    spaceBetween: 50,

    pagination: {
        el: '.slider-pagination',
        // custom fraction
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                '<span class="slider-pagination-line"></span>' +
                '<span class="' + totalClass + '"></span>';
        },
    },

    autoplay: {
        delay: 7000,
    },
});

// =======================================================================================================
// * noUiSlider
/*import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

const mainRangeSlider = document.getElementById('main-range-slider');

if (mainRangeSlider) {
    noUiSlider.create(mainRangeSlider, {
        start: [500, 1000],
        step: 50,
        connect: true,
        range: {
            'min': 500,
            'max': 1000
        }
    });
}*/

// https://refreshless.com/nouislider/ - документация

// =======================================================================================================
// * Spoller
/*const spollers = document.querySelectorAll('[data-spollers]');
spollers.forEach(spoller => {
    const spollerButton = spoller.querySelector('[data-spoller-button]');
    const spollerBody = spoller.querySelector('[data-spoller-body]');
    const spollerIcon = spoller.querySelector('[data-spoller-icon]');
    let isAnimation = false;

    function accordion() {
        const spollersAccordion = document.querySelectorAll('[data-accordion]');
        spollersAccordion.forEach(spollerAccordion => {
            const spollerButtonAccordion = spollerAccordion.querySelector('[data-spoller-button]');
            const spollerbodyAccordion = spollerAccordion.querySelector('[data-spoller-body]');
            const spollerIconAccordion = spollerAccordion.querySelector('[data-spoller-icon]');

            if (spollerbodyAccordion !== spollerBody && spollerbodyAccordion.style.display !== 'none') {
                isAnimation = false;
                hideSpoller(spollerButtonAccordion, spollerbodyAccordion, spollerIconAccordion);
            }
        });
    }

    function showSpoller() {
        if (isAnimation) return;
        isAnimation = true;

        if (spoller.hasAttribute('data-accordion')) {
            accordion();
        }

        spollerButton.setAttribute('aria-expanded', 'true');
        spollerBody.setAttribute('aria-hidden', 'false');
        // Анимация открытия споллера
        spollerBody.style.display = 'block';
        spollerBody.style.overflow = 'hidden';
        spollerBody.style.maxHeight = '0px';
        spollerBody.style.transition = 'max-height .5s ease-in-out 0s';
        spollerBody.style.maxHeight = spollerBody.scrollHeight + 'px';

        // Удаление inline-style после анимации
        setTimeout(() => {
            spollerBody.removeAttribute('style');
            isAnimation = false;
        }, 500); // 500 миллисекунд соответствует длительности анимации

        spollerButton.classList.add('_active');
        spollerBody.classList.add('_active');

        if (spoller.querySelector('[data-spoller-icon]')) {
            spollerIcon.classList.add('_active');
        }
    }

    function hideSpoller(differentSpollerButton, differentSpollerBody, differentSpollerIcon) {
        if (isAnimation) return;
        isAnimation = true;

        differentSpollerButton.setAttribute('aria-expanded', 'false');
        differentSpollerBody.setAttribute('aria-hidden', 'true');
        // Анимация закрытия споллера
        differentSpollerBody.style.display = 'block';
        differentSpollerBody.style.overflow = 'hidden';
        differentSpollerBody.style.maxHeight = differentSpollerBody.scrollHeight + 'px';

        setTimeout(() => {
            differentSpollerBody.style.transition = 'max-height .5s ease-in-out 0s';
            differentSpollerBody.style.maxHeight = '0px';
        }, 10);

        // Скрытие элемента после завершения анимации
        setTimeout(() => {
            differentSpollerBody.removeAttribute('style');
            differentSpollerBody.style.display = 'none';
            isAnimation = false;
        }, 500); // Время совпадает с длительностью transition

        differentSpollerButton.classList.remove('_active');
        differentSpollerBody.classList.remove('_active');

        if (spoller.querySelector('[data-spoller-icon]')) {
            differentSpollerIcon.classList.remove('_active');
        }
    }

    // Значения по умолчанию
    spollerBody.style.display = 'none';
    spollerButton.setAttribute('aria-expanded', 'false');
    spollerButton.setAttribute('aria-controls', spollerBody.getAttribute('id'));
    spollerBody.setAttribute('aria-hidden', 'true');
    // Споллер по умолчанию открыт
    if (spoller.hasAttribute('data-spoller-open')) {
        showSpoller();
    }

    spollerButton.addEventListener('click', e => {
        if (spollerBody.style.display === 'none') {
            showSpoller();
        } else {
            hideSpoller(spollerButton, spollerBody, spollerIcon);
        }
    });
});*/

// =======================================================================================================
// * Modal
/*const modal = document.querySelectorAll('.modal');
const modalOpen = document.querySelectorAll('._modal-open');
const modalClose = document.querySelectorAll('._modal-close');

modalOpen.forEach(item => item.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-modal-path');
    document.querySelector(`[data-modal-target="${path}"]`).classList.add('_active');

    modal.forEach(item => {
        if (item.classList.contains('_active')) {
            item.showModal();
            document.body.classList.add('_lock');
        }
    });
}));

modalClose.forEach(item => item.addEventListener('click', (e) => {
    if (e.target == item) {
        modal.forEach(item => {
            item.close();
            item.classList.remove('_active');
        });
        document.body.classList.remove('_lock');
    }
}));

modal.forEach(item => item.addEventListener('click', ({ currentTarget, target }) => {
    const dialog = currentTarget;
    const isOnOverlayClick = target === dialog;
    if (isOnOverlayClick) {
        modal.forEach(item => {
            item.close();
            item.classList.remove('_active');
        });
        document.body.classList.remove('_lock');
    }
}));

modal.forEach(item => item.addEventListener('cancel', () => {
    if (item.classList.contains('_active')) {
        item.close();
        item.classList.remove('_active');
        document.body.classList.remove('_lock');
    }
}));*/

// =======================================================================================================
// *tab
const tabs = document.querySelectorAll('[data-tabs]');
tabs.forEach(tab => {
    const tabButtons = tab.querySelectorAll('[data-tab-button]');
    const tabContents = tab.querySelectorAll('[data-tab-content]');

    // Значения по умолчанию для контента табов
    tabContents.forEach(tabContent => {
        tabContent.setAttribute('role', 'tabpanel');
        tabContent.hidden = true;
        if (tabContent.classList.contains('_active')) {
            tabContent.hidden = false;
        }
    });

    tabButtons.forEach(tabButton => {
        // Значения по умолчанию для табов
        tabButton.setAttribute('role', 'tab');
        tabButton.setAttribute('aria-selected', 'false');
        if (tabButton.classList.contains('_active')) {
            tabButton.setAttribute('aria-selected', 'true');
        }
        const tabContentAttrId = tab.querySelector(`[data-tab-content="${tabButton.getAttribute('data-tab-button')}"]`).getAttribute('id');
        tabButton.setAttribute('aria-controls', tabContentAttrId);

        tabButton.addEventListener('click', e => {
            // Добавление _active активной кнопки и меняем значение у aria-selected
            tabButtons.forEach(tabButton => {
                tabButton.classList.remove('_active');
                tabButton.setAttribute('aria-selected', 'false');
            });

            // Активной кнопке добавить _active и aria-selected true
            e.target.classList.add('_active');
            e.target.setAttribute('aria-selected', 'true');

            // Показать нужный контент в табе
            tabContents.forEach(tabContent => {
                tabContent.classList.remove('_active');
                tabContent.hidden = true;
            });

            let valueAttrButton = e.target.getAttribute('data-tab-button');
            let objectTabContent = tab.querySelector(`[data-tab-content="${valueAttrButton}"]`);
            if (objectTabContent) {
                objectTabContent.classList.add('_active');
                objectTabContent.hidden = false;
            }
        });
    })
});

// =======================================================================================================
// *imask
// import IMask from 'imask';

// объект который нужен
// const phoneInput = document.getElementById('phone');

// заполнение маски
/*IMask(
    phoneInput,
    { mask: '+{380} (00) 00-00-000' }
);*/

// =======================================================================================================
// *just validate
// import JustValidate from 'just-validate';

// Пример валидации формы
/*const validation = new JustValidate('#form');
validation
    .addField('#name-input', [
        {
            rule: 'required',
            errorMessage: 'Имя обязательно',
        },
        {
            rule: 'minLength',
            value: 5,
            errorMessage: 'Минимум 5 символов',
        },
        {
            rule: 'maxLength',
            value: 15,
            errorMessage: 'Максимум 15 символов',
        },
    ])
    .addField('#tel-input', [
        {
            rule: 'required',
            errorMessage: 'Номер обязателен',
        },
    ])*/

// =======================================================================================================
// * quantity
/*const quantity = document.querySelector('.quantity');
const quantityButtonMinus = document.querySelector('.quantity__button_minus');
const quantityButtonPlus = document.querySelector('.quantity__button_plus');
const quantityCurrent = document.querySelector('.quantity__input');

if (quantity) {
    let textQuantityCurrent = Number(quantityCurrent.getAttribute('value'));

    function quantityMinus() {
        if (textQuantityCurrent > 1) {
            let quantityMinus = textQuantityCurrent -= 1;
            quantityCurrent.setAttribute('value', quantityMinus);
        }
    }

    function quantityPlus() {
        if (textQuantityCurrent < 30) {
            let quantityPlus = textQuantityCurrent += 1;
            quantityCurrent.setAttribute('value', quantityPlus);
        }
    }

    quantityButtonMinus.addEventListener('click', quantityMinus);
    quantityButtonPlus.addEventListener('click', quantityPlus);
}*/

// =======================================================================================================
// * Custom select
/*const select = document.querySelectorAll('.select');

if (select) {
    select.forEach((selectWrapper) => {
        const selectButton = selectWrapper.querySelector('.select__button');
        const selectIcon = selectWrapper.querySelector('.select__icon');
        const selectList = selectWrapper.querySelector('.select__list');
        const selectItem = selectList.querySelectorAll('.select__item');
        const selectInput = selectWrapper.querySelector('.select__input');

        // Назначение по умолчанию атрибута aria-label кнопке
        selectButton.setAttribute('aria-label', 'Комбинированный список ' + selectButton.innerText);

        // Значение по умолчанию у input атрибута value
        selectInput.setAttribute('value', selectList.children[0].getAttribute('data-value'));

        // Счетчик для переключателя select`а клавишами ArrowDown и ArrowUp
        let count = 0;

        // Клик по кнопке. Открыть/Закрыть select
        selectButton.addEventListener('click', (e) => {
            selectIcon.classList.toggle('_active');
            selectList.classList.toggle('_active');
            selectButton.classList.add('_active');
            selectButton.setAttribute('aria-expanded', 'false');
            selectList.setAttribute('aria-hidden', 'true');
            selectItem.forEach(item => {
                item.classList.toggle('_active');
            });

            if (selectList.classList.contains('_active')) {
                selectButton.setAttribute('aria-expanded', 'true');
                selectList.setAttribute('aria-hidden', 'false');
            }
        });

        // Переключатель select`а клавишами ArrowDown и ArrowUp
        selectButton.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (count < selectList.children.length - 1) {
                    count += 1;
                    selectItem.forEach(item => item.classList.remove('_focus-visible'));
                    selectList.children[count].classList.add('_focus-visible');
                    selectButton.innerText = selectList.children[count].innerText;
                    selectInput.setAttribute('value', selectList.children[count].dataset.value);
                }
            }
            if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (count > 0) {
                    count = count - 1;
                    selectItem.forEach(item => item.classList.remove('_focus-visible'));
                    selectList.children[count].classList.add('_focus-visible');
                    selectButton.innerText = selectList.children[count].innerText;
                    selectInput.setAttribute('value', selectList.children[count].dataset.value);
                }
            }
        });

        // Выбор элемента списка. Запомнить выбор. Закрыть дропдаун
        selectItem.forEach((item) => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                selectButton.innerText = e.target.innerText;
                selectInput.setAttribute('value', e.target.dataset.value);
                selectList.classList.remove('_active');
                selectButton.setAttribute('aria-expanded', 'false');
                selectList.setAttribute('aria-hidden', 'true');
                selectIcon.classList.remove('_active');
                selectItem.forEach(item => {
                    item.classList.remove('_focus-visible');
                    item.classList.remove('_active');
                });
                e.target.classList.add('_focus-visible');
            });
        });

        // Клик за пределами select`а - закрыть
        document.addEventListener('click', (e) => {
            if (e.target !== selectButton) {
                selectList.classList.remove('_active');
                selectIcon.classList.remove('_active');
                selectButton.classList.remove('_active');
                selectButton.setAttribute('aria-expanded', 'false');
                selectList.setAttribute('aria-hidden', 'true');
                selectItem.forEach(item => {
                    item.classList.remove('_active');
                });
            }
        });

        // Нажатие по esc и tab - закрыть дропдаун
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab' || e.key === 'Escape') {
                selectList.classList.remove('_active');
                selectIcon.classList.remove('_active');
                selectButton.classList.remove('_active');
                selectButton.setAttribute('aria-expanded', 'false');
                selectList.setAttribute('aria-hidden', 'true');
                selectItem.forEach(item => {
                    item.classList.remove('_active');
                });
            }
        });
    });
}*/