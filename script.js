const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = '☰';
  }));
}
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
if (form) form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent('OneFam Studio Enquiry — ' + data.get('interest'));
  const body = encodeURIComponent(
    'Name: ' + data.get('name') + '\\nPhone: ' + data.get('phone') +
    '\\nInterested in: ' + data.get('interest') + '\\nMessage: ' + (data.get('message') || '')
  );
  window.location.href = `mailto:onefamstudio@gmail.com?subject=${subject}&body=${body}`;
});