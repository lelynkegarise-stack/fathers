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
        { src: 'images/italy4.png', caption: 'Aincient Pottery' }, 
        { src: 'images/italy5.png', caption: '' },
        { src: 'images/italy6.png', caption: 'Greece' },
        { src: 'images/italy7.png', caption: 'Post Card Picture!' },
        { src: 'images/italy8.png', caption: '' },
        { src: 'images/italy9.png', caption: 'Olympia' },
        { src: 'images/italy10.png', caption: '' },
        { src: 'images/italy11.png', caption: '' },
        { src: 'images/italy12.png', caption: '' },
        { src: 'images/italy13.png', caption: 'Fishies' },
        { src: 'images/italy14.png', caption: '' },
        { src: 'images/italy15.png', caption: '' },
        { src: 'images/italy16.png', caption: 'Catching Crabs' },
        { src: 'images/italy17.png', caption: '' },
        { src: 'images/italy18.png', caption: '' },
        { src: 'images/italy19.png', caption: '' },
        { src: 'images/italy20.png', caption: 'Disembark Day' },
        { src: 'images/italy21.png', caption: 'Taxi' },
        { src: 'images/italy22.png', caption: '' },
        { src: 'images/italy23.png', caption: '' },
        { src: 'images/italy24.png', caption: 'Rooftop Bar' },
        { src: 'images/italy25.png', caption: '' },
        { src: 'images/italy26.png', caption: '' }

    ],
    "tennessee": [
        //{ src: 'images/tennessee1.png', caption: 'Make Way' }, 
        { src: 'images/tennessee2.png', caption: 'Mountians' }, // Fixed filename spelling
        { src: 'images/tennessee3.png', caption: '' },
        //{ src: 'images/tennessee4.png', caption: ' Paula Dean Wait' },
        { src: 'images/tennessee5.png', caption: 'Christmas Tree' },
        //{ src: 'images/tennessee6.png', caption: 'Cabin Getaway' },
        { src: 'images/tennessee7.png', caption: '' },
        { src: 'images/tennessee8.png', caption: '' },
        //{ src: 'images/tennessee9.png', caption: '' },
        { src: 'images/tennessee10.png', caption: '' },
        { src: 'images/tennessee11.png', caption: '' },
        { src: 'images/tennessee12.png', caption: '' },
        { src: 'images/tennessee13.png', caption: '' },
        { src: 'images/tennessee14.png', caption: '' },
        { src: 'images/tennessee15.png', caption: '' },
        { src: 'images/tennessee16.png', caption: 'Cousins! 2020' },
        { src: 'images/tennessee17.png', caption: '' },
        { src: 'images/tennessee18.png', caption: 'Potery' },
        { src: 'images/tennessee19.png', caption: 'Just Chilin' },
        { src: 'images/tennessee20.png', caption: '' },
        { src: 'images/tennessee21.png', caption: '' }
    ],
    "alaska": [
         { src: 'images/alaska1.png', caption: 'Nap Time' },
         { src: 'images/alaska2.png', caption: 'Huskies' },
         { src: 'images/alaska3.png', caption: 'On the Water' },
         { src: 'images/alaska4.png', caption: 'Cold Room' },
         { src: 'images/alaska5.png', caption: 'Ice Bear' },
         { src: 'images/alaska6.png', caption: 'Gold Mining' },
         { src: 'images/alaska7.png', caption: '' },
         { src: 'images/alaska8.png', caption: 'Dog Sled' },
         { src: 'images/alaska9.png', caption: '' },
         { src: 'images/alaska10.png', caption: 'Grizzle Bear' },
         { src: 'images/alaska11.png', caption: 'Besties' },
         { src: 'images/alaska12.png', caption: 'Suited Up' },
         { src: 'images/alaska13.png', caption: 'Desert' },
         { src: 'images/alaska14.png', caption: 'Lunch' },
         { src: 'images/alaska15.png', caption: 'Bear Cub' },
         { src: 'images/alaska16.png', caption: 'Ice Bar' },
         { src: 'images/alaska17.png', caption: 'Gold Find' },
         { src: 'images/alaska18.png', caption: 'North Pole' },
         { src: 'images/alaska19.png', caption: 'Santa!' },
         { src: 'images/alaska20.png', caption: 'Boat Ride' },
         { src: 'images/alaska21.png', caption: 'Tiki' },
         { src: 'images/alaska22.png', caption: 'Keeping Warm' },
         { src: 'images/alaska23.png', caption: 'Train Ride' },
         { src: 'images/alaska24.png', caption: '' },
         { src: 'images/alaska25.png', caption: 'Moose' },
         { src: 'images/alaska26.png', caption: 'Orcas!' },
         { src: 'images/alaska27.png', caption: '' },
         { src: 'images/alaska28.png', caption: '' },
         { src: 'images/alaska29.png', caption: 'Huge Crab Legs' },
         { src: 'images/alaska30.png', caption: 'Eagle' },
         { src: 'images/alaska31.png', caption: '' },
         { src: 'images/alaska32.png', caption: 'Larger than Life' },
         { src: 'images/alaska33.png', caption: 'Ice Carving' },
         { src: 'images/alaska34.png', caption: 'Reindeer' },
         { src: 'images/alaska35.png', caption: 'Moose Fight' },
         { src: 'images/alaska36.png', caption: 'Lake!' },
         { src: 'images/alaska37.png', caption: '' },
         { src: 'images/alaska38.png', caption: '' },
         { src: 'images/alaska39.png', caption: '' },
         { src: 'images/alaska40.png', caption: '' },
         { src: 'images/alaska41.png', caption: 'Wild Reindeer' },
         { src: 'images/alaska42.png', caption: 'Seals!' },
         { src: 'images/alaska43.png', caption: 'Seals' },
         { src: 'images/alaska44.png', caption: '' },
         { src: 'images/alaska45.png', caption: '' },
         { src: 'images/alaska46.png', caption: 'Dog Ride' },
         { src: 'images/alaska47.png', caption: '' },
         { src: 'images/alaska48.png', caption: '' },
         { src: 'images/alaska49.png', caption: '' },
         { src: 'images/alaska50.png', caption: '' },
         { src: 'images/alaska51.png', caption: '' },
         { src: 'images/alaska52.png', caption: 'Bear Buddy' }   
    ],
    "florida": [
        { src: 'images/flordia1.png', caption: '' },
        { src: 'images/flordia2.png', caption: 'Harry Potter World' },
        { src: 'images/flordia3.png', caption: '' },
        { src: 'images/flordia4.png', caption: '' },
        { src: 'images/flordia5.png', caption: '' },
        { src: 'images/flordia6.png', caption: '' },
        { src: 'images/flordia7.png', caption: '' },
        { src: 'images/flordia8.png', caption: '' },
        { src: 'images/flordia9.png', caption: '' },
        { src: 'images/flordia10.png', caption: '' },
        { src: 'images/flordia11.png', caption: '' },
        { src: 'images/flordia12.png', caption: 'Wait times' },
        { src: 'images/flordia13.png', caption: 'Disney Springs 2021' },
        { src: 'images/flordia14.png', caption: '' },
        { src: 'images/flordia15.png', caption: 'Water Show' },
        { src: 'images/flordia16.png', caption: '' },
        { src: 'images/flordia17.png', caption: 'Photo Tradition' },
        { src: 'images/flordia18.png', caption: '' },
        { src: 'images/flordia19.png', caption: '' },
        { src: 'images/flordia20.png', caption: '' },
        { src: 'images/flordia21.png', caption: '' }
    ],
    "beach":[
        { src: 'images/beach1.png', caption: '2019' },
        //{ src: 'images/beach2.png', caption: 'Fish!' },
        { src: 'images/beach3.png', caption: 'Friends 2025' },
        { src: 'images/beach4.png', caption: 'Relaxing' },
        { src: 'images/beach5.png', caption: '2009' },
        { src: 'images/beach6.png', caption: 'Pirates 2009' },
        { src: 'images/beach7.png', caption: '2009' },
        { src: 'images/beach8.png', caption: '2009' },
        { src: 'images/beach9.png', caption: 'Cannons!' },
        { src: 'images/beach10.png', caption: 'Sand Scultpures' },
        { src: 'images/beach11.png', caption: 'Boogie Boarding' },
        { src: 'images/beach12.png', caption: '' },
        { src: 'images/beach13.png', caption: 'Little Fishy' },
        { src: 'images/beach14.png', caption: '' },
        { src: 'images/beach15.png', caption: 'Concert!' },
        { src: 'images/beach16.png', caption: 'Cargo Ship' },
        { src: 'images/beach17.png', caption: 'Fishing' },
        { src: 'images/beach18.png', caption: 'Big Catch' },
        { src: 'images/beach19.png', caption: '' }
    ],
    "cabo": [
         { src: 'images/cabo1.png', caption: '' },
         //{ src: 'images/cabo2.png', caption: '' },
         { src: 'images/cabo3.png', caption: '' },
         { src: 'images/cabo4.png', caption: '' },
         //{ src: 'images/cabo5.png', caption: '' },
         { src: 'images/cabo6.png', caption: '' },
         { src: 'images/cabo7.png', caption: 'Yum!' },
         { src: 'images/cabo8.png', caption: 'Cabo Wabo' },
         { src: 'images/cabo9.png', caption: 'Towel Animal!' },
         { src: 'images/cabo10..png', caption: 'Huge Lizard' },
         //{ src: 'images/cabo11.png', caption: '' },
         { src: 'images/cabo12.png', caption: 'Camel Ride' },
         { src: 'images/cabo13.png', caption: 'ATV' },
         { src: 'images/cabo14.png', caption: 'Camels Wages' },
         { src: 'images/cabo15.png', caption: 'Camel Kisses' },
         { src: 'images/cabo16.png', caption: 'Ridin in Style' },
        // { src: 'images/cabo17.png', caption: '' },
        // { src: 'images/cabo18.png', caption: '' },
        // { src: 'images/cabo19.png', caption: '' },
         { src: 'images/cabo20.png', caption: '' }
        ],
    "hawaii":[
            { src: 'images/hawaii1.png', caption: '' },
            { src: 'images/hawaii2.png', caption: '' },
            { src: 'images/hawaii3.png', caption: '' },
            { src: 'images/hawaii4.png', caption: '' },
            { src: 'images/hawaii5.png', caption: '' },
            { src: 'images/hawaii6.png', caption: '' },
            { src: 'images/hawaii7.png', caption: '' },
            { src: 'images/hawaii8.png', caption: '' },
            { src: 'images/hawaii9.png', caption: '' },
            { src: 'images/hawaii10.png', caption: '' }

              ],
    "ireland":[
            { src: 'images/ireland1.png', caption: '' },
            { src: 'images/ireland2.png', caption: '' },
            { src: 'images/ireland3.png', caption: '' },
            { src: 'images/ireland4.png', caption: '' },
            { src: 'images/ireland5.png', caption: '' },
            { src: 'images/ireland6.png', caption: '' },
            { src: 'images/ireland7.png', caption: '' },
            { src: 'images/ireland8.png', caption: '' }


              ],
    "newyork":[
            { src: 'images/newyork1.png', caption: '' },
            { src: 'images/newyork2.png', caption: '' },
            { src: 'images/newyork3.png', caption: '' },
            { src: 'images/newyork4.png', caption: '' },
            { src: 'images/newyork5.png', caption: '2016' },
            { src: 'images/newyork6.png', caption: 'World Trade Center 2016' },
            { src: 'images/newyork7.png', caption: '2024' },
            { src: 'images/newyork8.png', caption: '2016' },
            { src: 'images/newyork9.png', caption: 'Memorial Statue' },
            { src: 'images/newyork10.png', caption: '2016' },
            { src: 'images/newyork11.png', caption: '2024' },
            { src: 'images/newyork12.png', caption: '1st Visit 2004' },
            { src: 'images/newyork13.png', caption: 'Statue of Liberty 2016' },
            { src: 'images/newyork14.png', caption: '2024' },
            { src: 'images/newyork15.png', caption: '2016' }
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

// ========================================== //
// 3. PAGE DETECTION AND ROUTING LOGIC        //
// ========================================== //
function determineActiveAlbum() {
    const path = window.location.pathname.toLowerCase(); // Force lowercase for safety
    const gridContainer = document.querySelector('.preview-grid');
    const scrapbookContainer = document.querySelector('.scrapbook-section');
    const paginationContainer = document.getElementById('pagination-controls');

    // ROUTE A: Explicitly viewing family.html
    if (path.includes("family.html")) {
        activePhotos = allScrapbooks["family"];
        if (scrapbookContainer) scrapbookContainer.style.display = 'block';
        if (paginationContainer) paginationContainer.style.display = 'flex';
        if (gridContainer) gridContainer.style.display = 'none';
        return;
    }

    // ROUTE B: Explicitly viewing vacation.html
    if (path.includes("vacation.html")) {
        const urlParams = new URLSearchParams(window.location.search);
        const tripKey = urlParams.get('trip');

        // Normalize the key to lower case
        const normalizedKey = tripKey ? tripKey.toLowerCase() : null;

        if (normalizedKey && allScrapbooks[normalizedKey]) {
            if (gridContainer) gridContainer.style.display = 'none';
            if (scrapbookContainer) scrapbookContainer.style.display = 'block';
            if (paginationContainer) paginationContainer.style.display = 'flex';
            
            activePhotos = allScrapbooks[normalizedKey];
            currentPage = 1;
            
            const heading = document.getElementById('vacation-heading');
            if (heading) {
                heading.textContent = `✈️ ${tripKey.charAt(0).toUpperCase() + tripKey.slice(1)} Memories`;
            }
        } else {
            // Dashboard mode -> Show preview choice cards if no valid parameter is passed
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
// 5. INTERFACE CONTROLS & EVENT LISTENERS
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

    // FIX: Wire up the button click elements explicitly!
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) goToPage(currentPage - 1);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const maxPages = Math.ceil(activePhotos.length / photosPerPage);
            if (currentPage < maxPages) goToPage(currentPage + 1);
        });
    }
});
