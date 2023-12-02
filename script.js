function flipCard() {
    const card = document.querySelector('.card');
    card.classList.toggle('flipped');
    updateImage();
}

function updateImage() {
    const currentDate = new Date();
    const startDate = new Date('2023/12/02');
    const diffTime = Math.abs(currentDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= 22) {
        const imageNumber = diffDays + 1;
        const imagePath = `path/to/images/image${imageNumber}.jpg`; // Update path
        document.getElementById('dailyImage').src = imagePath;
    }
}

document.addEventListener('DOMContentLoaded', updateImage);
