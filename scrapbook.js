// ==========================================
// 1. THE GLOBAL SCRAPBOOK DATABASE
// ==========================================
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
    "nicaragua": [
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

// ==========================================
// 2. TRACK GLOBAL STATES DYNAMICALLY
// ==========================================
let activePhotos = [];
let currentPage = 1;
const photosPerPage = 10;

// ==========================================
// 3. PAGE DETECTION AND ROUTING LOGIC
// ==========================================
function determineActiveAlbum() {
    const path = window.location.pathname;
    const page = path.split("/").pop(); // Gets filename like "family.html" or "vacation.html"
    
    const gridContainer = document.querySelector('.preview-grid');
    const scrapbookContainer = document.querySelector('.scrapbook-section');
    const paginationContainer = document.getElementById('pagination-controls');

    // ROUTE A: Explicitly viewing family.html
    if (page === "family.html") {
        activePhotos = allScrapbooks["family"];
        if (scrapbookContainer) scrapbookContainer.style.display = 'block';
        if (paginationContainer) paginationContainer.style.display = 'flex';
        if (gridContainer) gridContainer.style.display = 'none';
        return; 
    }

    // ROUTE B: Explicitly viewing vacation.html
    if (page === "vacation.html") {
        const urlParams = new URLSearchParams(window.location.search);
        const tripKey = urlParams.get('trip');

        if (tripKey && allScrapbooks[tripKey.toLowerCase()]) {
            // Album target selected -> Hide dashboard cards, show the memory stack
            if (gridContainer) gridContainer.style.display = 'none';
            if (scrapbookContainer) scrapbookContainer.style.display = 'block';
            if (paginationContainer) paginationContainer.style.display = 'flex';
            
            activePhotos = allScrapbooks[tripKey.toLowerCase()];
            currentPage = 1;
            
            const heading = document.getElementById('vacation-heading');
            if (heading) {
                heading.textContent = `✈️ ${tripKey.charAt(0).toUpperCase() + tripKey.slice(1)} Memories`;
            }
        } else {
            // Dashboard mode -> Show preview choice cards, hide empty template regions
            if (gridContainer) gridContainer.style.display = 'grid';
            if (scrapbookContainer) scrapbookContainer.style.display = 'none';
            if (paginationContainer) paginationContainer.style.display = 'none';
            activePhotos = [];
        }
    }
}

// ==========================================
// 4. THE AUTOMATED PICTURE LAYOUT ENGINE
// ==========================================
function renderScrapbook() {
    const container = document.getElementById('scrapbook-gallery');
    if (!container || activePhotos.length === 0) return; 
    
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

// ==========================================
// 5. INTERFACE CONTROLS
// ==========================================
function updatePaginationControls() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const pageIndicator = document.getElementById('page-indicator');
    
    if (!prevBtn || !nextBtn || !pageIndicator) return;

    pageIndicator.textContent = `Page ${currentPage}`;
    prevBtn.disabled = (currentPage === 1);
    
    const maxPages = Math.ceil(activePhotos.length / photosPerPage);
    nextBtn.disabled = (currentPage === maxPages || maxPages === 0);
}

function goToPage(pageNumber) {
    currentPage = pageNumber;
    renderScrapbook();
    const scrapbookSec = document.querySelector('.scrapbook-section');
    if (scrapbookSec) scrapbookSec.scrollIntoView({ behavior: 'smooth' });
}

// ==========================================
// 6. INITIAL APPLICATION LOAD
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    determineActiveAlbum(); 
    renderScrapbook();     
});
