document.addEventListener('DOMContentLoaded', function() {
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isActive = question.classList.contains('active');
            
            // Close all other items
            faqQuestions.forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.classList.remove('active');
            });
            
            // Open current if it was closed
            if (!isActive) {
                question.classList.add('active');
                answer.classList.add('active');
            }
        });
    });
    
    // Download button animation
    const downloadBtn = document.getElementById('direct-download');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Simulate download process
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري التحميل...';
            
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-check"></i> تم التحميل!';
                
                // Reset after 2 seconds
                setTimeout(() => {
                    this.innerHTML = 'تحميل الآن';
                }, 2000);
            }, 1500);
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

