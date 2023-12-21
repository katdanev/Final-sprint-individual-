
const quotes = [
    '"Enthusiasm is the electricity of life. How do you get it? You act enthusiastic until you make it a habit."</br></br>Gordon Parks',
    '"To achieve great things, you must dream big dreams and work hard."</br></br>Walt Disney',
    '"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work."</br></br>Steve Jobs',
    '"Work that you truly enjoy is the key to a happy and successful life."</br></br>Stephen King',
    '"Your success in your work is a reflection of finding yourself in what you do."</br></br>Max Weber',
    '"Work can\'t only be about making money. It should bring joy and meaning to your life."</br></br>Richard Branson',
    '"Blessed are those who do what they love."</br></br>Unknown',
    '"Enthusiasm is the spark in your eyes, the swing in your gait, the grip of your hand, and the irresistible surge of will and energy to execute your ideas.""</br></br>Henry Ford',
    '"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful."</br></br>Albert Schweitzer'
];

// Function to change the quotes
function changeQuote() {
    const quoteElement = document.getElementById('quote');

    const randomIndex = Math.floor(Math.random() * quotes.length);

    quoteElement.innerHTML = quotes[randomIndex];
}
function autoChangeQuote() {
    setInterval(changeQuote, 4000); // Is it enough?
}

window.addEventListener("DOMContentLoaded", function () {
    autoChangeQuote(); 


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    
  
        const images = document.querySelectorAll('.photoWrapper img');
    
        function openModal(imageSrc) {
            const modal = document.createElement('div');
            modal.className = 'modal';
            // modal.innerHTML = `<img src="${imageSrc}" alt="Enlarged Image" class="modal-img">`;
            modal.innerHTML = '<img src="' + imageSrc + '" alt="Enlarged Image" class="modal-img">';

            document.body.appendChild(modal);
    
            modal.addEventListener('click', closeModal);
        }
    
        function closeModal() {
            const modal = document.querySelector('.modal');
            if (modal) {
                modal.remove();
            }
        }
    
        images.forEach(image => {
            image.addEventListener('click', function () {
                const imageSrc = this.getAttribute('src');
                openModal(imageSrc);
            });
        });
 
    

// for resume

    const resumeButton = document.getElementById('resumeButton');
    const resumeModal = document.getElementById('resumeModal');

    resumeButton.addEventListener('click', function () {
        resumeModal.style.display = 'block';
    });

    resumeModal.addEventListener('click', function () {
        resumeModal.style.display = 'none';
    });


    
});


