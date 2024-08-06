
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
                        <div class="image">
                            <img src="https://images.pexels.com/photos/712413/pexels-photo-712413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"alt="">
                        </div>
                        <div class="more-action"></div>
                        <p class='picture-name'>The beautiful Girl happy</p>
                        <div class="price-and-more-picture-">
                            <h2 class='picture-price'>N3000</h2>
                        </div>
                    </div>
                    `

for( i = 0; i < 10; i++){
    galleryContainer.innerHTML += galleryHTML
}