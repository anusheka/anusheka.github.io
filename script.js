document.addEventListener('DOMContentLoaded', () => {
    const craftForm = document.getElementById('craft-form');
    const craftNameInput = document.getElementById('craft-name');
    const inProgressList = document.getElementById('in-progress');
    const queuedCraftsList = document.getElementById('queued-crafts');

    // Sample crafts data
    const craftsInProgress = ['Wooden Shelf', 'Knitted Blanket'];
    const craftsQueued = ['Macramé Plant Hanger', 'Crochet Sweater'];

    // Function to display a list of crafts
    const displayCrafts = () => {
        inProgressList.innerHTML = '';
        queuedCraftsList.innerHTML = '';

        craftsInProgress.forEach(craft => {
            const li = document.createElement('li');
            li.textContent = craft;
            inProgressList.appendChild(li);
        });

        craftsQueued.forEach(craft => {
            const li = document.createElement('li');
            li.textContent = craft;
            queuedCraftsList.appendChild(li);
        });
    };

    // Function to handle form submission
    craftForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newCraft = craftNameInput.value.trim();

        if (newCraft) {
            craftsQueued.push(newCraft);
            craftNameInput.value = '';
            displayCrafts();
        }
    });

    // Initial display
    displayCrafts();
});
