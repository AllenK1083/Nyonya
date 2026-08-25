const menuTabsContainer = document.querySelector("#menu-tabs");
const menuGrid = document.querySelector("#menu-grid");
const categoryTitle = document.querySelector("#menu-category-title");
const categoryNote = document.querySelector("#menu-category-note");
const pageStatus = document.querySelector("#menu-page-status");
const previousButton = document.querySelector("#previous-menu");
const nextButton = document.querySelector("#next-menu");
const menuPanel = document.querySelector("#menu-panel");
const cuisineBackground = document.querySelector(".cuisine-background");

const itemsPerPage = 6;

function createMenuItem(item) {
  const card = document.createElement("article");
  card.className = "menu-item";

  const topLine = document.createElement("div");
  topLine.className = "menu-item-topline";

  const name = document.createElement("h4");
  name.textContent = item.name;

  const price = document.createElement("span");
  price.className = "price";
  price.textContent = item.price;

  const description = document.createElement("p");
  description.textContent = item.description;

  topLine.append(name, price);
  card.append(topLine, description);

  if (item.spicy) {
    const spicyTag = document.createElement("span");
    spicyTag.className = "spicy-tag";
    spicyTag.textContent = "Spicy";
    card.append(spicyTag);
  }

  return card;
}

async function initializeMenuPreview() {
  const requiredElements = [
    menuTabsContainer,
    menuGrid,
    categoryTitle,
    categoryNote,
    pageStatus,
    previousButton,
    nextButton,
    menuPanel
  ];

  if (requiredElements.some((element) => !element)) {
    return;
  }

  try {
    const categories = await loadMenuData();

    if (!categories.length) {
      throw new Error("No menu categories found.");
    }

    let activeCategoryIndex = 0;
    let currentPage = 0;

    function renderTabs() {
      const buttons = categories.map((category, index) => {
        const button = document.createElement("button");
        button.className = `menu-tab${index === activeCategoryIndex ? " is-active" : ""}`;
        button.type = "button";
        button.role = "tab";
        button.id = `tab-${category.id}`;
        button.dataset.categoryIndex = String(index);
        button.setAttribute("aria-selected", String(index === activeCategoryIndex));
        button.setAttribute("aria-controls", "menu-panel");
        button.textContent = category.title;

        button.addEventListener("click", () => {
          activeCategoryIndex = index;
          currentPage = 0;
          renderTabs();
          renderMenu();
        });

        return button;
      });

      menuTabsContainer.replaceChildren(...buttons);
    }

    function renderMenu() {
      const category = categories[activeCategoryIndex];
      const start = currentPage * itemsPerPage;
      const visibleItems = category.items.slice(start, start + itemsPerPage);
      const totalPages = Math.ceil(category.items.length / itemsPerPage);

      categoryTitle.textContent = category.title;
      menuPanel.setAttribute("aria-labelledby", `tab-${category.id}`);

      categoryNote.textContent =
        totalPages > 1
          ? "Use Next to see more dishes in this category."
          : "All listed dishes in this category are shown.";

      pageStatus.textContent =
        `Showing ${start + 1}–${start + visibleItems.length} of ${category.items.length}`;

      menuGrid.replaceChildren(...visibleItems.map(createMenuItem));

      previousButton.disabled = currentPage === 0;
      nextButton.disabled = currentPage >= totalPages - 1;
    }

    previousButton.addEventListener("click", () => {
      if (currentPage === 0) {
        return;
      }

      currentPage -= 1;
      renderMenu();
      menuPanel.focus({ preventScroll: true });
    });

    nextButton.addEventListener("click", () => {
      const category = categories[activeCategoryIndex];
      const totalPages = Math.ceil(category.items.length / itemsPerPage);

      if (currentPage >= totalPages - 1) {
        return;
      }

      currentPage += 1;
      renderMenu();
      menuPanel.focus({ preventScroll: true });
    });

    renderTabs();
    renderMenu();
  } catch (error) {
    console.error(error);
    categoryTitle.textContent = "Menu unavailable";
    categoryNote.textContent =
      "Please call the restaurant for current availability.";
    pageStatus.textContent = "";
    menuGrid.innerHTML =
      '<p class="menu-load-error">The menu preview could not be loaded right now.</p>';
    previousButton.disabled = true;
    nextButton.disabled = true;
  }
}

function initializeCuisineBackground() {
  if (!cuisineBackground) {
    return;
  }

  const cuisinePhotos = [
    "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1920&q=80"
  ];

  let cuisinePhotoIndex = 0;
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  function setCuisineBackground(imagePath) {
    cuisineBackground.style.backgroundImage = `
      linear-gradient(
        rgba(247, 242, 233, 0.72),
        rgba(247, 242, 233, 0.72)
      ),
      url("${imagePath}")
    `;
  }

  function rotateCuisineBackground() {
    cuisinePhotoIndex = (cuisinePhotoIndex + 1) % cuisinePhotos.length;
    setCuisineBackground(cuisinePhotos[cuisinePhotoIndex]);
  }

  setCuisineBackground(cuisinePhotos[cuisinePhotoIndex]);

  if (!reduceMotion) {
    window.setInterval(rotateCuisineBackground, 7000);
  }
}

initializeMenuPreview();
initializeCuisineBackground();