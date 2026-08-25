const menuContent = document.querySelector("#menu-content");
const menuJumpLinks = document.querySelector("#menu-jump-links");
const menuLoading = document.querySelector("#menu-loading");

function createFullMenuItem(item) {
  const article = document.createElement("article");
  article.className = "full-menu-item";

  const content = document.createElement("div");
  const name = document.createElement("h3");
  name.textContent = item.name;

  if (item.spicy) {
    const spicyTag = document.createElement("span");
    spicyTag.className = "spicy-tag";
    spicyTag.textContent = "Spicy";
    name.append(" ", spicyTag);
  }

  const description = document.createElement("p");
  description.textContent = item.description;

  const price = document.createElement("strong");
  price.textContent = window.menuData.formatPrice(item.price);

  content.append(name, description);
  article.append(content, price);

  return article;
}

function showFullMenuError() {
  if (menuLoading) {
    menuLoading.textContent =
      "The menu could not be loaded. Please call the restaurant for current availability.";
  }
}

async function initializeFullMenu() {
  if (!menuContent || !menuJumpLinks || !menuLoading || !window.menuData) {
    return;
  }

  try {
    const categories = await window.menuData.loadMenuData();

    menuJumpLinks.replaceChildren(
      ...categories.map((category) => {
        const link = document.createElement("a");
        link.href = `#${category.id}`;
        link.textContent = category.title;
        return link;
      })
    );

    menuContent.replaceChildren(
      ...categories.map((category) => {
        const section = document.createElement("section");
        const heading = document.createElement("h2");
        const grid = document.createElement("div");

        section.id = category.id;
        section.className = "menu-category";
        section.setAttribute("aria-labelledby", `${category.id}-heading`);

        heading.id = `${category.id}-heading`;
        heading.textContent = category.title;

        grid.className = "full-menu-grid";
        grid.append(...category.items.map(createFullMenuItem));

        section.append(heading, grid);
        return section;
      })
    );

    menuLoading.remove();
  } catch (error) {
    console.error(error);
    showFullMenuError();
  }
}

initializeFullMenu();
