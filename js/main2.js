document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (e) => {
        if (e.target.closest('.github-link')) {
            return;
        }
        
        if (e.target.tagName === 'IFRAME' || e.target.tagName === 'IMG') {
            return;
        }
        
        card.classList.toggle('expanded');
        
        document.querySelectorAll('.project-card').forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.remove('expanded');
            }
        });
    });
});

// 헤더 파티클
const header = document.querySelector('.header');
for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        animation: float ${5 + Math.random() * 10}s linear infinite;
    `;
    header.appendChild(particle);
}

// 스크롤 다운 버튼 기능
document.querySelector('.scroll-down').addEventListener('click', () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});

// AOS (Animate on Scroll) 초기화
AOS.init({
    duration: 1000,
    once: true
});

// 폼 제출 처리
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // 여기에 폼 제출 로직 추가 (예: AJAX 요청)
    alert('메시지가 성공적으로 전송되었습니다!');
    this.reset();
});