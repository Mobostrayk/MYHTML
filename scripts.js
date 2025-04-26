document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы карусели
    const carousel = document.getElementById('carouselExampleIndicators');
    const slides = carousel.querySelectorAll('.carousel-item');
    const indicators = carousel.querySelectorAll('.carousel-indicators button');
    
    let currentIndex = 0;
    const intervalTime = 2000;
    let slideInterval;
    
    // Активирует конкретный слайд
    function activateSlide(index) {
        // Снимаем активные классы со всех слайдов и индикаторов
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            indicators[i].classList.remove('active');
        });
        
        // Активируем текущий слайд и индикатор
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
    }
    
    // Автоматическое перелистывание слайдов
    function autoSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        activateSlide(currentIndex);
    }
    
    // Запускаем автоматическую прокрутку
    function startCarousel() {
        slideInterval = setInterval(autoSlide, intervalTime);
    }
    
    // Останавливаем при наведении мыши
    carousel.addEventListener('mouseenter', function() {
        clearInterval(slideInterval);
    });
    
    // Возобновляем при уходе мыши
    carousel.addEventListener('mouseleave', function() {
        slideInterval = setInterval(autoSlide, intervalTime);
    });
    
    // Обработка событий Bootstrap (если используется)
    carousel.addEventListener('slid.bs.carousel', function(event) {
        currentIndex = event.to;
    });
    
    // Инициализация
    activateSlide(currentIndex);
    startCarousel();
});


// document.addEventListener('DOMContentLoaded', function() {
//     const loginForm = document.getElementById('loginForm');
//     const notification = document.getElementById('loginNotification');

//     // Функция показа уведомления
//     function showNotification(message, type = 'success') {
//         notification.textContent = message;
//         notification.className = `alert alert-${type} mb-3`;
//         notification.classList.remove('d-none');
        
//         setTimeout(() => {
//             notification.classList.add('d-none');
//         }, 3000);
//     }

//     // Обработчик отправки формы
//     loginForm.addEventListener('submit', function(event) {
//         event.preventDefault();
        
//         // Получаем значения полей
//         const email = document.getElementById('loginEmail').value.trim();
//         const password = document.getElementById('loginPassword').value.trim();
        
//         // Проверка email
//         const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//         if (!emailPattern.test(email)) {
//             showNotification('Введите корректный Email', 'danger');
//             return;
//         }
        
//         // Проверка пароля
//         if (password.length < 8) {
//             showNotification('Пароль должен содержать минимум 8 символов', 'danger');
//             return;
//         }
        
//         // Если все проверки пройдены
//         showNotification('Вы успешно вошли', 'success');
        
//         // Сброс формы
//         loginForm.reset();
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const regForm = document.getElementById('regForm');
//     const notification = document.getElementById('regNotification');

//     // Функция показа уведомления
//     function showNotification(message, type = 'success') {
//         notification.textContent = message;
//         notification.className = `alert alert-${type} mb-3`;
//         notification.classList.remove('d-none');
        
//         setTimeout(() => {
//             notification.classList.add('d-none');
//         }, 3000);
//     }

//     // Обработчик отправки формы
//     regForm.addEventListener('submit', function(event) {
//         event.preventDefault();
        
//         // Получаем значения полей
//         const name = document.getElementById('name').value.trim();
//         const email = document.getElementById('loginEmail').value.trim();
//         const password = document.getElementById('loginPassword').value.trim();
//         const password2 = document.getElementById('loginPasswordSubmit').value.trim();
//         const phone = document.getElementById('telPhone').value.trim();

//         // Проверка телефона
//         const phonePattern = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
//         if (!phonePattern.test(phone)) {
//             showNotification('Введите корректный номер телефона', 'danger');
//             return;
//         } 
//         // Проверка email
//         const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//         if (!emailPattern.test(email)) {
//             showNotification('Введите корректный Email', 'danger');
//             return;
//         }
//         // Проверка пароля
//         if (password.length < 8) {
//             showNotification('Пароль должен содержать минимум 8 символов', 'danger');
//             return;
//         }
//         // Проверка проверки
//         if (password != password2) {
//             showNotification('Пароли должны совпадать', 'danger');
//             return;
//         }
        
//         // Если все проверки пройдены
//         showNotification('Вы успешно зареганы', 'success');
        
//         // Сброс формы
//         regForm.reset();
//     });
// });



// document.addEventListener('DOMContentLoaded', function() {
//     const appointmentForm = document.getElementById('appointmentForm');
//     const notification = document.getElementById('appointmentNotification');

//     function showNotification(message, type = 'success') {
//         notification.textContent = message;
//         notification.className = `alert alert-${type} mb-3`;
//         notification.classList.remove('d-none');
        
//         setTimeout(() => {
//             notification.classList.add('d-none');
//         }, 3000);
//     }
//     appointmentForm.addEventListener('submit', function(event) {
//         event.preventDefault();
        
//         const name = document.getElementById('name').value.trim();
//         const phone = document.getElementById('telPhone').value.trim();
//         const doctor = document.getElementById('docSelect').value;
//         const service = document.getElementById('serviceSelect').value;
//         const date = document.getElementById('date').value;
//         const today = new Date();
        
//         today.setHours(0, 0, 0, 0);

//         // Проверка имени
//         if (name.length < 2) {
//             showNotification('Введите корректное имя', 'danger');
//             return;
//         }
        
//         // Проверка телефона
//         const phonePattern = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
//         if (!phonePattern.test(phone)) {
//             showNotification('Введите корректный номер телефона', 'danger');
//             return;
//         }
        
//         // Проверка выбора врача
//         if (!doctor) {
//             showNotification('Выберите врача', 'danger');
//             return;
//         }
        
//         // Проверка выбора услуги
//         if (!service) {
//             showNotification('Выберите услугу', 'danger');
//             return;
//         }
        
//         // Проверка даты
//         if (!date) {
//             showNotification('Выберите дату', 'danger');
//             return;
//         }
        
//         const selectedDate = new Date(date);
//         selectedDate.setHours(0, 0, 0, 0);
//         if (selectedDate<today) {
//             showNotification('Эту дату уже нельзя выбрать, выберите другой день', 'danger');
//             return;
//         }
//         // Если все проверки пройдены
//         showNotification('Вы успешно записаны на прием', 'success');
        
//         // Сброс формы
//         appointmentForm.reset();
        
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggle-theme');
    const body = document.body;
    const headerNav = document.querySelector('header nav');
    const footerNav = document.querySelector('footer nav');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        headerNav.classList.add('navbar-dark', 'bg-dark');
        footerNav.classList.add('bg-dark');
        toggleBtn.textContent = '☀️';
    }


    toggleBtn.addEventListener('click', () => {
        const isDark = body.classList.toggle('dark-theme');
        
        if (isDark) {
            headerNav.classList.add('navbar-dark', 'bg-dark');
            footerNav.classList.add('bg-dark');
            localStorage.setItem('theme', 'dark');
            toggleBtn.textContent = '☀️';
        } else {
            headerNav.classList.remove('navbar-dark', 'bg-dark');
            footerNav.classList.remove('bg-dark');
            localStorage.setItem('theme', 'light');
            toggleBtn.textContent = '🌙';
        }
    });
});

// document.getElementById('regForm').addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const name = document.getElementById('name').value;
//     const phone = document.getElementById('telPhone').value;
//     const email = document.getElementById('loginEmail').value;
//     const password = document.getElementById('loginPassword').value;


//     try {
//         const response = await fetch('http://localhost:3000/api/register', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ name, phone, email, password }),
//         });

//         const result = await response.json();
        
//         const notification = document.getElementById('notification');
//         if (response.ok) {
//             notification.className = 'alert alert-success d-block mb-3';
//             notification.textContent = result.message;
//         } else {
//             notification.className = 'alert alert-danger d-block mb-3';
//             notification.textContent = result.error || 'Ошибка регистрации.';
//         }
//         } catch (error) {
//             console.error('Ошибка:', error);
//             console.log('Отправляемые данные:', { name, phone, email, password });
//             alert('Произошла ошибка при отправке данных.');
//         }
//     });
    
    document.getElementById('regForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        console.log('Начало обработки формы');

        const name = document.querySelector('#regForm #name')?.value || '';
        const phone = document.querySelector('#regForm #telPhone')?.value || '';
        const email = document.querySelector('#regForm #loginEmail')?.value || '';
        const password = document.querySelector('#regForm #loginPassword')?.value || '';
        const passwordConfirm = document.querySelector('#regForm #loginPasswordSubmit')?.value || '';
    
        console.log('Полученные значения:', {name, phone, email, password}); 

        if (password !== passwordConfirm) {
            alert('Пароли не совпадают');
            return;
        }
        
        try {
            const response = await fetch('http://localhost:3000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, phone, email, password }),
            });
    
            const result = await response.json();
            
            const notification = document.getElementById('regNotification');
            if (response.ok) {
                notification.className = 'alert alert-success d-block mb-3';
                notification.textContent = result.message || 'Регистрация успешна!';
            } else {
                notification.className = 'alert alert-danger d-block mb-3';
                notification.textContent = result.error || 'Ошибка регистрации.';
            }
        } catch (error) {
            console.error('Ошибка:', error);
            console.log('Отправляемые данные:', { name, phone, email, password });
            alert('Произошла ошибка при отправке данных: ' + error.message);
        }
    });

    document.getElementById('loginForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        console.log('Начало обработки формы');
        
        const email = document.querySelector('#loginForm #loginEmail')?.value || '';
        const password = document.querySelector('#loginForm #loginPassword')?.value || '';
    
        console.log('Полученные значения:', { email, password });
    
        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
    
            const result = await response.json();
            
            const notification = document.getElementById('loginNotification');
            
            if (response.ok || response.status === 200) {
                notification.className = 'alert alert-success d-block mb-3';
                notification.textContent = result.message || "Успешный вход";
            } else {
                notification.className = 'alert alert-danger d-block mb-3';
                notification.textContent = result.error || 'Ошибка входа.';
            }
        } catch (error) {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при отправке данных.');
        }
    });


    document.getElementById('appointmentForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        console.log('Начало обработки формы');

        const name = document.querySelector('#appointmentForm #name')?.value || '';
        const phone = document.querySelector('#appointmentForm #telPhone')?.value || '';

        // const doctor = document.querySelector('#appointmentForm #docSelect')?.value || '';
        const docSelect = document.querySelector('#appointmentForm #docSelect');
        const selectedOptionDoc = docSelect?.options[docSelect?.selectedIndex];
        const doctor = 
        selectedOptionDoc?.value === '' || selectedOptionDoc?.value == null 
        ? selectedOptionDoc?.value 
        : selectedOptionDoc?.textContent || '';

        const serviceSelect = document.querySelector('#appointmentForm #serviceSelect');
        const selectedOptionService = serviceSelect?.options[serviceSelect?.selectedIndex];
        const service = 
        selectedOptionService?.value === '' || selectedOptionService?.value == null 
        ? selectedOptionService?.value 
        : selectedOptionService?.textContent || '';

        const date = document.querySelector('#appointmentForm #date')?.value || '';
    
        console.log('Полученные значения:', {name, phone, doctor, service, date}); 
        
        try {
            const response = await fetch('http://localhost:3000/api/record', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name, phone, doctor, service, date}),
            });
    
            const result = await response.json();
            
            const notification = document.getElementById('appointmentNotification');
            if (response.ok) {
                notification.className = 'alert alert-success d-block mb-3';
                notification.textContent = result.message || 'Запись успешна!';
            } else {
                notification.className = 'alert alert-danger d-block mb-3';
                notification.textContent = result.error || 'Ошибка записи.';
            }
        } catch (error) {
            console.error('Ошибка:', error);
            console.log('Отправляемые данные:', {name, phone, doc, service, date});
            alert('Произошла ошибка при отправке данных: ' + error.message);
        }
    });

    