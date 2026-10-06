const categoryButtons = document.querySelectorAll('.category-btn');
const tutorialCards = document.querySelectorAll('.tutorial-card');

categoryButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const selectedCategory = button.dataset.category;

        categoryButtons.forEach((categoryButton) => {
            const isSelected = categoryButton === button;
            categoryButton.classList.toggle('active', isSelected);
            categoryButton.setAttribute('aria-pressed', String(isSelected));
        });

        tutorialCards.forEach((card) => {
            card.hidden = selectedCategory !== 'all' && card.dataset.category !== selectedCategory;
        });
    });
});