// 1. Your Organized Data Lists
const familyPhotos = [
{ src: 'images/family1.png', caption: 'The whole crew! ❤️' },
];

//const travelPhotos = [
   // { src: 'images/travel-beach.jpg', caption: 'Ocean City Boardwalk 🏖️' },
//{ src: 'images/travel-mountain.jpg', caption: 'Conquering the trails 🥾' }
//];

// 2. The Automation Engine
function renderScrapbook(photoArray, containerId) {
    const container = document.getElementById(containerId);
    
    photoArray.forEach((photo, index) => {
        // Create the polaroid wrapper
        const polaroidDiv = document.createElement('div');
        polaroidDiv.classList.add('polaroid');
        
        // Alternate the tilts automatically based on the index number (even vs odd)
        if (index % 2 === 0) {
            polaroidDiv.classList.add('tilt-left');
        } else {
            polaroidDiv.classList.add('tilt-right');
        }
        
        // Build the inner HTML template safely
        polaroidDiv.innerHTML = `
            <img src="${photo.src}" alt="${photo.caption}">
            <p class="caption">${photo.caption}</p>
        `;
        
        // Drop it into the page container
        container.appendChild(polaroidDiv);
    });
}

// 3. Run the engine when the page loads
document.addEventListener('DOMContentLoaded', () => {
    renderScrapbook(familyPhotos, 'family-gallery');
    renderScrapbook(travelPhotos, 'travel-gallery');
});
