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
        { src: 'images/nicaragua1.png', caption: 'Ogre' },
        { src: 'images/nicaragua2.png', caption: 'Free samples at the airport' },
        { src: 'images/nicaragua3.png', caption: 'airplane' },
        { src: 'images/nicaragua4.png', caption: 'Kids at VBS' },
        { src: 'images/nicaragua5.png', caption: 'Small Guys Life Jacket' },
        { src: 'images/nicaragua6.png', caption: 'Monkey!' },
        { src: 'images/nicaragua7.png', caption: 'Amigo' },
        { src: 'images/nicaragua8.png', caption: 'Pretty Overlook' },
        { src: 'images/nicaragua9.png', caption: 'Day 1' },
        { src: 'images/nicaragua10.png', caption: 'Delivering food' },
        { src: 'images/nicaragua11.png', caption: 'At Least 1 More' },
        { src: 'images/nicaragua12.png', caption: 'Van Broke Down' },
        { src: 'images/nicaragua13.png', caption: 'Supplies for Rehabs' },
        { src: 'images/nicaragua14.png', caption: 'Veiw from the Sky' },
        { src: 'images/nicaragua15.png', caption: 'New Friends' },
        { src: 'images/nicaragua16.png', caption: 'Giving Back' },
        { src: 'images/nicaragua17.png', caption: 'Worship at Rehab Center' },
        { src: 'images/nicaragua18.png', caption: 'Coffee Making' },
        { src: 'images/nicaragua19.png', caption: 'Partner in Crime' },
        { src: 'images/nicaragua20.png', caption: 'Mono Gordo' },
        { src: 'images/nicaragua21.png', caption: 'Community' },
        { src: 'images/nicaragua22.png', caption: 'Coffee Bags' },
        { src: 'images/nicaragua23.png', caption: 'Steps in Nicaragua' },
        { src: 'images/nicaragua24.png', caption: 'Processed Coffee' },
        { src: 'images/nicaragua25.png', caption: 'Nicargauas Flag' },
        { src: 'images/nicaragua26.png', caption: 'Volcano' },
        { src: 'images/nicaragua27.png', caption: 'Sharing Testimony at Rehab' }
    ],
    "italy": [
        { src: 'images/italy1.png', caption: 'Church' },
        { src: 'images/italy2.png', caption: 'Collosium' },
        { src: 'images/italy3.png', caption: '' },
        { src: 'images/italy4.png', caption: 'Aincient Potery' },
        { src: 'images/italy5.png', caption: '' },
        { src: 'images/italy6.png', caption: 'Greece' },
        { src: 'images/italy7.png', caption: 'Post Card Picture!' },
        { src: 'images/italy8.png', caption: '' },
        { src: 'images/italy9.png', caption: 'Olympia' },
        { src: 'images/italy10.png', caption: '' },
        { src: 'images/italy11.png', caption: '' },
        { src: 'images/italy12.png', caption: '' },
        { src: 'images/italy13.png', caption: 'Fishies' },
        { src: 'images/italy14.png', caption: '' }
        ]
    "tennessee": [
        { src: 'images/tennesse1.png', caption: 'Make Way' },
        { src: 'images/tennesse2.png', caption: 'Mountians' },
        { src: 'images/tennesse3.png', caption: '' },
        { src: 'images/tennesse4.png', caption: ' Paula Dean Wait' },
        { src: 'images/tennesse5.png', caption: 'Christmas Tree' },
        { src: 'images/tennesse6.png', caption: 'Cabin Getaway' }
        ]
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
