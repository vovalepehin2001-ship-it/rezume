// Навигация: бургер-меню и плавная прокрутка
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');
if (navToggle && navList){
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('show');
  });
}

// Плавный скролл
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
      navList?.classList.remove('show');
      navToggle?.setAttribute('aria-expanded','false');
    }
  });
});

// Год в футере
document.getElementById('year').textContent = new Date().getFullYear();

// Простейшая валидация формы
const form = document.getElementById('contactForm');
if (form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let ok = true;
    form.querySelectorAll('input[required], textarea[required]').forEach(field => {
      const small = field.parentElement.querySelector('.error');
      if (!field.value.trim()){
        small.textContent = 'Заполните поле';
        ok = false;
      } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)){
        small.textContent = 'Некорректный email';
        ok = false;
      } else {
        small.textContent = '';
      }
    });
    if (ok){
      alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
      form.reset();
    }
  });
}
