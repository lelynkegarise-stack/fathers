// 1. Your Photo Data List
const familyPhotos = [    
    { src: 'images/family1.png', caption: 'Family Fun ' },
    { src: 'images/family2.png', caption: 'Safari' },
    { src: 'images/family4.png', caption: 'Hershey Park' },
    { src: 'images/family6.png', caption: 'Easter Shenanigans' },
    { src: 'images/family7.png', caption: 'Ravens Trip' },
    { src: 'images/family8.png', caption: 'The Whole Crew' },
    { src: 'images/family9.png', caption: 'Dinner Dates' },
    { src: 'images/family10.png', caption: '' },
    // --- Page 2 Photos ---
    { src: 'images/family11.png', caption: 'Ravens Tailgate' },
    { src: 'images/family12.png', caption: 'Family Support' },
    { src: 'images/family13.png', caption: 'Mamma' },
    { src: 'images/family14.png', caption: 'Christmas PJ Party' },
    { src: 'images/family15.png', caption: 'Family Dinner' },
    { src: 'images/family16.png', caption: 'Christmas Church 2025' },
    { src: 'images/family17.png', caption: 'Happy Couple' }
];

// Track the current page state
let currentPage = 1;
const photosPerPage = 8;

// 2. The Automation Engine
function renderScrapbook() {
    const container = document.getElementById('family-gallery');
    if (!container) return;
    
    // Clear out any old polaroids before rendering new ones
    container.innerHTML = "";
    
    // Calculate exactly which photos to show based on current page
    const startIndex = (currentPage - 1) * photosPerPage;
    const endIndex = startIndex + photosPerPage;
    const photosToDisplay = familyPhotos.slice(startIndex, endIndex);
    
    photosToDisplay.forEach((photo, index) => {
        const polaroidDiv = document.createElement('div');
        polaroidDiv.classList.add('polaroid');
        
        // Alternate tilts
        if (index % 2 === 0) polaroidDiv.classList.add('tilt-left');
        else polaroidDiv.classList.add('tilt-right');
        
        // Cycle sizes
        if (index % 3 === 0) polaroidDiv.classList.add('size-small');
        else if (index % 3 === 1) polaroidDiv.classList.add('size-medium');
        else polaroidDiv.classList.add('size-large');
        
        const photoCaption = photo.caption || "";
        
        polaroidDiv.innerHTML = `
            <img src="${photo.src}" alt="Family photo">
            <p class="caption">${photoCaption}</p>
        `;
        
        container.appendChild(polaroidDiv);
    });

    // Update the buttons and text layout at the bottom
    updatePaginationControls();
}

// 3. Update UI Controls (disables buttons if you hit the ends)
function updatePaginationControls() {
    document.getElementById('page-indicator').textContent = `Page ${currentPage}`;
    
    // Disable "Previous" button if on page 1
    document.getElementById('prev-btn').disabled = (currentPage === 1);
    
    // Disable "Next" button if there are no more photos left to show
    const maxPages = Math.ceil(familyPhotos.length / photosPerPage);
    document.getElementById('next-btn').disabled = (currentPage === maxPages);
}

// 4. Function called when clicking the page buttons
function goToPage(pageNumber) {
    currentPage = pageNumber;
    renderScrapbook();
    
    // Smoothly scroll back to top of the scrapbook section so dad doesn't have to scroll up manually
    document.querySelector('.scrapbook-section').scrollIntoView({ behavior: 'smooth' });
}

// 5. Initial Load
document.addEventListener('DOMContentLoaded', () => {
    renderScrapbook();
});
