const allScrapbooks = {
    "family": [    
        { src: 'images/family1.png', caption: 'Family Fun ' },
        { src: 'images/family2.png', caption: 'Safari' },
        { src: 'images/family4.png', caption: 'Hershey Park' },
        { src: 'images/family6.png', caption: 'Easter Shenanigans' },
        { src: 'images/family7.png', caption: 'Ravens Trip' },
        { src: 'images/family8.png', caption: 'The Whole Crew' },
        { src: 'images/family9.png', caption: 'Dinner Dates' },
        { src: 'images/family10.png', caption: '' },
        { src: 'images/family11.png', caption: 'Ravens Tailgate' },
        { src: 'images/family12.png', caption: 'Family Support' },
        { src: 'images/family13.png', caption: 'Mamma' },
        { src: 'images/family14.png', caption: 'Christmas PJ Party' },
        { src: 'images/family15.png', caption: 'Family Dinner' },
        { src: 'images/family16.png', caption: 'Christmas Church 2025' },
        { src: 'images/family17.png', caption: 'Happy Couple' }
    ],
    "nicaragua": [ // Changed to lowercase to perfectly match "?trip=nicaragua"
        { src: 'images/nicaragua1.png', caption: '' },
        { src: 'images/nicaragua2.png', caption: '' },
        { src: 'images/nicaragua3.png', caption: '' },
        { src: 'images/nicaragua4.png', caption: '' },
        { src: 'images/nicaragua5.png', caption: '' },
        { src: 'images/nicaragua6.png', caption: '' },
        { src: 'images/nicaragua7.png', caption: '' },
        { src: 'images/nicaragua8.png', caption: '' },
        { src: 'images/nicaragua9.png', caption: '' },
        { src: 'images/nicaragua10.png', caption: '' },
        { src: 'images/nicaragua11.png', caption: '' },
        { src: 'images/nicaragua12.png', caption: '' },
        { src: 'images/nicaragua13.png', caption: '' },
        { src: 'images/nicaragua14.png', caption: '' },
        { src: 'images/nicaragua15.png', caption: '' },
        { src: 'images/nicaragua16.png', caption: '' },
        { src: 'images/nicaragua17.png', caption: '' },
        { src: 'images/nicaragua18.png', caption: '' },
        { src: 'images/nicaragua19.png', caption: '' },
        { src: 'images/nicaragua20.png', caption: '' },
        { src: 'images/nicaragua21.png', caption: '' },
        { src: 'images/nicaragua22.png', caption: '' },
        { src: 'images/nicaragua23.png', caption: '' },
        { src: 'images/nicaragua24.png', caption: '' },
        { src: 'images/nicaragua25.png', caption: '' },
        { src: 'images/nicaragua26.png', caption: '' },
        { src: 'images/nicaragua27.png', caption: '' }
    ],
    "vacation": [
        { src: 'images/mountain1.png', caption: 'Morning Hike' },
        { src: 'images/mountain2.png', caption: 'Cabin View' },
        { src: 'images/beach1.png', caption: 'Sunset Walks' },
        { src: 'images/beach2.png', caption: 'Seafood Dinner' }
    ]
};

// Track global states dynamically
let activePhotos = [];
let currentPage = 1;
const photosPerPage = 8;

// 2. Automatically detect the page or query parameter
function determineActiveAlbum() {
    const urlParams = new URLSearchParams(window.location.search);
    const tripKey = urlParams.get('trip');
    
    const gridContainer = document.querySelector('.preview-grid');
    const scrapbookContainer = document.querySelector('.scrapbook-section');
    const paginationContainer = document.getElementById('pagination-controls');

    if (tripKey && allScrapbooks[tripKey.toLowerCase()]) {
        // A trip was clicked: Show album, hide grid
        if (gridContainer) gridContainer.style.display = 'none';
        if (scrapbookContainer) scrapbookContainer.style.display = 'block';
        if (paginationContainer) paginationContainer.style.display = 'flex';
        
        activePhotos = allScrapbooks[tripKey.toLowerCase()];
        
        const heading = document.getElementById('vacation-heading');
        if (heading) {
            heading.textContent = `✈️ ${tripKey.charAt(0).toUpperCase() + tripKey.slice(1)} Memories`;
        }
    } else {
        // Default dashboard: Show grid, hide album elements
        if (gridContainer) gridContainer.style.display = 'grid';
        if (scrapbookContainer) scrapbookContainer.style.display = 'none';
        if (paginationContainer) paginationContainer.style.display = 'none';
        
        activePhotos = []; 
    }
}

// 3. Your Single, Clean Automation Engine
function renderScrapbook() {
    const container = document.getElementById('scrapbook-gallery');
    if (!container) return;
    
    container.innerHTML = "";
    
    const startIndex = (currentPage - 1) * photosPerPage;
    const endIndex = startIndex + photosPerPage;
    const photosToDisplay = activePhotos.slice(startIndex, endIndex);
    
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
            <img src="${photo.src}" alt="Scrapbook photo">
            <p class="caption">${photoCaption}</p>
        `;
        
        container.appendChild(polaroidDiv);
    });

    updatePaginationControls();
}

function updatePaginationControls() {
    document.getElementById('page-indicator').textContent = `Page ${currentPage}`;
    document.getElementById('prev-btn').disabled = (currentPage === 1);
    
    const maxPages = Math.ceil(activePhotos.length / photosPerPage);
    document.getElementById('next-btn').disabled = (currentPage === maxPages || maxPages === 0);
}

function goToPage(pageNumber) {
    currentPage = pageNumber;
    renderScrapbook();
    document.querySelector('.scrapbook-section').scrollIntoView({ behavior: 'smooth' });
}

// 4. Initial Load
document.addEventListener('DOMContentLoaded', () => {
    determineActiveAlbum(); 
    renderScrapbook();     
});        { src: 'images/nicaragua17.png', caption: '' },
        { src: 'images/nicaragua18.png', caption: '' },
        { src: 'images/nicaragua19.png', caption: '' },
        { src: 'images/nicaragua20.png', caption: '' },
        { src: 'images/nicaragua21.png', caption: '' },
        { src: 'images/nicaragua22.png', caption: '' },
        { src: 'images/nicaragua23.png', caption: '' },
        { src: 'images/nicaragua24.png', caption: '' },
        { src: 'images/nicaragua25.png', caption: '' },
        { src: 'images/nicaragua26.png', caption: '' },
        { src: 'images/nicaragua27.png', caption: '' }
],
    "vacation": [
        { src: 'images/mountain1.png', caption: 'Morning Hike' },
        { src: 'images/mountain2.png', caption: 'Cabin View' },
        { src: 'images/beach1.png', caption: 'Sunset Walks' },
        { src: 'images/beach2.png', caption: 'Seafood Dinner' }
    ]
};

// Track global states dynamically
let activePhotos = [];
let currentPage = 1;
const photosPerPage = 8;

// 2. Automatically detect the page based on the HTML filename
function determineActiveAlbum() {
    const path = window.location.pathname;
    const page = path.split("/").pop(); // Gets just the filename, like "family.html"
    
    if (page === "vacation.html") {
        activePhotos = allScrapbooks["vacation"];
    } else {
        // Default fallback to family photos if on family.html or index.html
        activePhotos = allScrapbooks["family"]; 
    }
}

// 3. Your Automation Engine
function renderScrapbook() {
    // Look for a generic gallery ID that you can use on BOTH pages
    const container = document.getElementById('scrapbook-gallery');
    if (!container) return;
    
    container.innerHTML = "";
    
    const startIndex = (currentPage - 1) * photosPerPage;
    const endIndex = startIndex + photosPerPage;
    const photosToDisplay = activePhotos.slice(startIndex, endIndex);
    
    photosToDisplay.forEach((photo, index) => {
        const polaroidDiv = document.createElement('div');
        polaroidDiv.classList.add('polaroid');
        
        if (index % 2 === 0) polaroidDiv.classList.add('tilt-left');
        else polaroidDiv.classList.add('tilt-right');
        
        if (index % 3 === 0) polaroidDiv.classList.add('size-small');
        else if (index % 3 === 1) polaroidDiv.classList.add('size-medium');
        else polaroidDiv.classList.add('size-large');
        
        const photoCaption = photo.caption || "";
        
        polaroidDiv.innerHTML = `
            <img src="${photo.src}" alt="Scrapbook photo">
            <p class="caption">${photoCaption}</p>
        `;
        
        container.appendChild(polaroidDiv);
    });

    updatePaginationControls();
}

function updatePaginationControls() {
    document.getElementById('page-indicator').textContent = `Page ${currentPage}`;
    document.getElementById('prev-btn').disabled = (currentPage === 1);
    
    const maxPages = Math.ceil(activePhotos.length / photosPerPage);
    document.getElementById('next-btn').disabled = (currentPage === maxPages || maxPages === 0);
}

function goToPage(pageNumber) {
    currentPage = pageNumber;
    renderScrapbook();
    document.querySelector('.scrapbook-section').scrollIntoView({ behavior: 'smooth' });
}

// 6. Initial Load
document.addEventListener('DOMContentLoaded', () => {
    determineActiveAlbum(); 
    renderScrapbook();     
});    
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
