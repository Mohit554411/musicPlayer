let startX = 0;
let endX = 0;
let isDragging = false;
const carousel = document.getElementById('carousel');
let intervalId;

carousel.addEventListener('mousedown', handleMouseDown);
carousel.addEventListener('mousemove', handleMouseMove);
carousel.addEventListener('mouseup', handleMouseUp);

carousel.addEventListener('touchstart', handleTouchStart);
carousel.addEventListener('touchmove', handleTouchMove);
carousel.addEventListener('touchend', handleTouchEnd);

function handleMouseDown(e) {
    clearInterval(intervalId); // Clear interval on user interaction
    isDragging = true;
    startX = e.clientX;
}

function handleMouseMove(e) {
    if (!isDragging) return;
    endX = e.clientX;
}

function handleMouseUp() {
    if (!isDragging) return;
    isDragging = false;
    handleSwipe();
    startCarouselInterval();
}

function handleTouchStart(e) {
    clearInterval(intervalId); // Clear interval on user interaction
    isDragging = true;
    startX = e.touches[0].clientX;
}

function handleTouchMove(e) {
    if (!isDragging) return;
    endX = e.touches[0].clientX;
    e.preventDefault(); // Prevent scrolling on touch devices
}

function handleTouchEnd() {
    if (!isDragging) return;
    isDragging = false;
    handleSwipe();
    startCarouselInterval();
}

function handleSwipe() {
    const minSwipeDistance = 50;

    if (startX - endX > minSwipeDistance) {
        // Swipe left, move to the next item
        showNextItem();
    } else if (endX - startX > minSwipeDistance) {
        // Swipe right, move to the previous item
        showPrevItem();
    }
}

function showNextItem() {
    const itemWidth = document.querySelector('.carousel-item').offsetWidth;
    const nextTranslateX = -itemWidth;

    carousel.style.transition = 'transform 0.5s ease-in-out';
    carousel.style.transform = `translateX(${nextTranslateX}px)`;

    // After the transition, remove the transition property
    setTimeout(() => {
        carousel.style.transition = 'none';
        carousel.appendChild(carousel.firstElementChild);
        carousel.style.transform = 'translateX(0)';
    }, 500);
}

function showPrevItem() {
    const itemWidth = document.querySelector('.carousel-item').offsetWidth;
    const prevTranslateX = itemWidth;

    carousel.style.transition = 'transform 0.5s ease-in-out';
    carousel.style.transform = `translateX(${prevTranslateX}px)`;

    // After the transition, remove the transition property
    setTimeout(() => {
        carousel.style.transition = 'none';
        carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild);
        carousel.style.transform = 'translateX(0)';
    }, 500);
}

function startCarouselInterval() {
    // Start interval for automatic sliding (adjust the interval time as needed)
    intervalId = setInterval(() => {
        showNextItem();
    }, 3000); // 3000 milliseconds (3 seconds) interval
}

// Start the interval initially
startCarouselInterval();

function showDropDown(){
    const elemnt = document.getElementById('dropdown');
    elemnt.classList.toggle('show');
}


const homeScreen = document.getElementById('homeScreen'); 
const singleScreen = document.getElementById('singleScreen');
function backToHome(){
    homeScreen.style.display = 'flex';
    singleScreen.style.display = 'none';

}
function showArtistPahe(artist) {
    window.scrollTo(0, 0);
    homeScreen.style.display = 'none';
    singleScreen.style.display = 'flex';
    if(artist == 'PawanSingh'){
        document.getElementById('artistName').innerHTML = 'Pawan Singh';
        document.getElementById('artistImage').src = 'assets/images/artists1.webp';
        document.getElementById('artistBio').innerHTML = 'Pawan Singh is an Indian Bhojpuri playback singer and film actor. He was born in Ara, Bihar, India. He has acted in prominent Bhojpuri films like Devra Bada Satawela, Bhojpuriya Raja, and many more. He is known for his roles in action films. He was awarded the' ;
    }
    else if(artist == 'NilKamalSingh'){
        document.getElementById('artistName').innerHTML = 'Nil Kamal Singh';
        document.getElementById('artistImage').src = 'assets/images/artists2.webp';
        document.getElementById('artistBio').innerHTML = 'Nil Kamal Singh is an Indian actor, singer and model associated with Bhojpuri cinema. His breakthrough came from in the form of 2012 film Saajan Chale Sasural. In 2019, he participated in the reality show Bigg Boss 13 as a contestant.';
    }
    else if(artist == 'Pooja'){
        document.getElementById('artistName').innerHTML = 'DinchaK Pooja';
        document.getElementById('artistImage').src = 'assets/images/artists3.webp';
        document.getElementById('artistBio').innerHTML = 'Pooja, popularly known asDinchak Pooja, is an Indian film actor, singer, and producer who is known for his work in Bhojpuri cinema. He was born in Ghazipur, Uttar Pradesh, India. He has also been a contestant of Bigg Boss 6 in 2012.';
    }
    else if(artist == 'KesariLalYadav'){
        document.getElementById('artistName').innerHTML = 'Kesari Lal Yadav';
        document.getElementById('artistImage').src = 'assets/images/artists4.webp';
        document.getElementById('artistBio').innerHTML = 'Kesari Lal Yadav is an Indian Bhojpuri film actor, singer, and music composer. He was born in Sasaram, Bihar, India. He has acted in prominent Bhojpuri films like Deewana, Balma Biharwala 2, and many more. He is known for his roles in action films.';
    }
}