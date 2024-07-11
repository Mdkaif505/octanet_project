let currentImageIndex = 0;
const images = ['interior.jpg', 'rooftop.jpg', 'backlogo.png']; // Add your image paths here

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('slideshow-image').src = images[currentImageIndex];
}