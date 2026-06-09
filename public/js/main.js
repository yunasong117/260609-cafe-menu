// Navbar: scroll 시 배경 solid화
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Intersection Observer: 섹션 페이드인
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// CTA 폼: 이메일 제출 → 감사 메시지
document.getElementById('ctaForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('emailInput').value;
  if (!email) return;
  document.getElementById('ctaForm').style.display = 'none';
  document.getElementById('ctaSuccess').style.display = 'block';
});
