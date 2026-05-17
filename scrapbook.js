// 1. Your Organized Data Lists
const familyPhotos = [
    { src: 'images/family1.png', caption: '' },
    { src: 'images/family1.png', caption: '' },
    { src: 'images/family2.png', caption: '' },
    { src: 'images/family3.png', caption: '' },
    { src: 'images/family4.png', caption: '' },
    { src: 'images/family5.png', caption: '' },
    { src: 'images/family6.png', caption: '' },
    { src: 'images/family7.png', caption: '' },
    { src: 'images/family8.png', caption: '' },
    { src: 'images/family9.png', caption: '' },
    { src: 'images/family10.png', caption: '' },
    { src: 'images/family11.png', caption: '' },
    { src: 'images/family12.png', caption: '' },
    { src: 'images/family13.png', caption: '' },
    { src: 'images/family14.png', caption: '' },
    { src: 'images/family15.png', caption: '' },
    { src: 'images/family16.png', caption: '' },
    { src: 'images/family17.png', caption: '' }
];

// 2. The Automation Engine
// The Updated Automation Engine with Size Variations
function renderScrapbook(photoArray, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    photoArray.forEach((photo, index) => {
        const polaroidDiv = document.createElement('div');
        polaroidDiv.classList.add('polaroid');
        
        // 1. Alternate the tilts based on index (even vs odd)
        if (index % 2 === 0) {
            polaroidDiv.classList.add('tilt-left');
        } else {
            polaroidDiv.classList.add('tilt-right');
        }
        
        // 2. NEW: Cycle through sizes cleanly (Small, Medium, Large)
        if (index % 3 === 0) {
            polaroidDiv.classList.add('size-small');
        } else if (index % 3 === 1) {
            polaroidDiv.classList.add('size-medium');
        } else {
            polaroidDiv.classList.add('size-large');
        }
        
        // Fallback for undefined captions
        const photoCaption = photo.caption || "";
        
        polaroidDiv.innerHTML = `
            <img src="${photo.src}" alt="Family photo">
            <p class="caption">${photoCaption}</p>
        `;
        
        container.appendChild(polaroidDiv);
    });
}
// 3. Run the engine when the page loads
document.addEventListener('DOMContentLoaded', () => {
    renderScrapbook(familyPhotos, 'family-gallery');
});
