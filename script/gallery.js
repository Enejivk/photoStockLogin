
const toggleMenuButton = document.getElementById('home-toggle-button');
const overlay = document.querySelector('.overlay');
const galleryContainer = document.querySelector('.gallery-container');

// FUNCTION TO TOGGLE THE SIDE BAR
const toggleSideBar = () => {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show-menu');
    if (menu.classList.contains('show-menu')) {
        overlay.style.display = 'block';
    } else {
        overlay.style.display = 'none';
    }
}
toggleMenuButton.addEventListener('click', toggleSideBar);
overlay.addEventListener('click', toggleSideBar);

const galleryHTML = ` <div class="gallery-picture">
                            <img src="https://images.unsplash.com/photo-1529245019870-59b249281fd3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"alt="">
                        <div class="more-action"></div>
                        <div class="price-and-name">
                        <p class='picture-name'>The beautiful Girl happy</p>
                            <h2 class='picture-price'>₦3000</h2>
                        </div>
                    </div>
                    `

for( i = 0; i < 10; i++){
    // galleryContainer.innerHTML += galleryHTML
    galleryContainer.insertAdjacentHTML("beforeend", galleryHTML)
}