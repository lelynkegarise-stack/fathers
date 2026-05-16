// 1. Your Organized Data Lists
const familyPhotos = [
{ src: 'images/family1.png' },
   { src: 'images/family1.png' },
   { src: 'images/family2.png' },
   { src: 'images/family3.png' },
   { src: 'images/family4.png' },
   { src: 'images/family5.png' },
   { src: 'images/family6.png' },
   { src: 'images/family7.png' },
   { src: 'images/family8.png' },
   { src: 'images/family9.png' },
   { src: 'images/family10.png' },
   { src: 'images/family11.png' },
   { src: 'images/family12.png' },
   { src: 'images/family13.png' },
   { src: 'images/family14.png' },
   { src: 'images/family15.png' },
   { src: 'images/family16.png' },
   { src: 'images/family17.png' },
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
