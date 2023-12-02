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
        const imagePath = `images/image${imageNumber}.jpg`;
        const imageLinks = [
            'https://www.youtube.com/watch?v=y6120QOlsfU',  // Link for image 1
            'https://link2.com',  // Link for image 2
            // Add links for all images, use '#' or '' for no link
        ];

        const imageLink = imageLinks[imageNumber - 1] || '#'; // Default to '#' if no link is provided
        document.getElementById('dailyImage').src = imagePath;
        document.getElementById('imageLink').href = imageLink;
    }
}


document.addEventListener('DOMContentLoaded', updateImage);
