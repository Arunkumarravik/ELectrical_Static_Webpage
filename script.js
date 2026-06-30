const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {

    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;

    productCards.forEach(card => {

      if(filter === 'all' || card.dataset.category === filter){
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }

    });

  });
});

const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keyup', () => {

  const value = searchInput.value.toLowerCase();

  productCards.forEach(card => {

    const text = card.innerText.toLowerCase();

    if(text.includes(value)){
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }

  });

});
