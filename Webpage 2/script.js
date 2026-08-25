const menuData = {
  appetizers: {
    title: "Appetizers",
    items: [
      {
        name: "Roti Canai",
        price: "$7.50",
        description: "Original, thin and crispy."
      },
      {
        name: "Roti Telur",
        price: "$9.95",
        description: "Egg and onion."
      },
      {
        name: "Roti Prata",
        price: "$7.25",
        description:
          "Thick, buttery Malaysian pancake with curry chicken dipping sauce.",
        spicy: true
      },
      {
        name: "Pasembur",
        price: "$11.95",
        description:
          "Cucumber, jicama, bean sprouts, tofu, shrimp pancake, jellyfish, egg, peanuts, and chef's special sauce.",
        spicy: true
      },
      {
        name: "Nyonya Rojak",
        price: "$9.95",
        description:
          "Nyonya fruit salad with squid, shrimp paste sauce, sesame seeds, and peanuts."
      },
      {
        name: "Nyonya Satay",
        price: "$16.95",
        description:
          "Charcoal-grilled skewers served with Malaysian-style peanut sauce.",
        spicy: true
      },
      {
        name: "Ipoh Bean Sprouts",
        price: "$8.95",
        description:
          "Scalded bean sprouts and dried onions with chef's special sauce."
      },
      {
        name: "Vegetable Spring Roll",
        price: "$9.95",
        description: "Eight deep-fried spring rolls with white turnip."
      },
      {
        name: "Baby Oyster Omelette",
        price: "$13.95",
        description: "A Malaysian favorite: pan-fried baby oysters with eggs."
      },
      {
        name: "Nyonya Chicken Wings",
        price: "$12.95",
        description:
          "Deep-fried marinated chicken wings wrapped in screw pine leaves."
      },
      {
        name: "Nyonya Lobak",
        price: "$13.95",
        description:
          "Crispy fried spiced pork roll, tofu, and shrimp pancake with hoisin plum and chili sauces."
      },
      {
        name: "Seaweed Salad",
        price: "$7.95",
        description:
          "Jicama, lettuce, cucumber, mango, carrot, and tomato with sesame and mayonnaise sauce."
      }
    ]
  },

  poultry: {
    title: "Poultry",
    items: [
      {
        name: "Hainanese Chicken",
        price: "$18.95",
        description: "Tender Hainanese chicken with fragrant rice."
      },
      {
        name: "Nyonya Kari Ayam",
        price: "$20.95",
        description:
          "Chicken on the bone simmered with lemongrass and chili paste in a rich coconut curry.",
        spicy: true
      },
      {
        name: "Sarang Burong",
        price: "$22.95",
        description:
          "Fried taro nest filled with shrimp, chicken, corn, onion, peppers, snow peas, and mushroom."
      },
      {
        name: "Garlic Chicken",
        price: "$20.95",
        description: "Deep-fried chicken with garlic and chef's soy sauce."
      },
      {
        name: "Crispy Chicken with Salad",
        price: "$22.95",
        description:
          "Boneless shredded chicken with mayonnaise sauce, cucumber, jicama, and lettuce."
      },
      {
        name: "Mango Chicken",
        price: "$20.95",
        description:
          "Chicken with shredded mango, peppers, and onion in a spicy sweet-and-sour sauce.",
        spicy: true
      },
      {
        name: "Braised Duck with Lotus Seed",
        price: "$23.95",
        description: "Tender duck with fragrant lotus seeds in a savory broth."
      },
      {
        name: "Masak Lemak",
        price: "$20.95",
        description:
          "Choice of protein with vegetables, dried shrimp, chilies, and ginger in aromatic chili gravy.",
        spicy: true
      },
      {
        name: "Ginger Duck",
        price: "$20.95",
        description: "Tender duck cooked with ginger."
      },
      {
        name: "Sesame Chicken",
        price: "$20.95",
        description:
          "Marinated, battered, fried chicken in sweet sesame sauce."
      }
    ]
  },

  noodles: {
    title: "Noodles",
    items: [
      {
        name: "Chow Kueh Teow",
        price: "$15.95",
        description:
          "Stir-fried flat rice noodles with shrimp, chives, squid, bean sprouts, egg, soy sauce, and chili paste.",
        spicy: true
      },
      {
        name: "Hokkien Char Mee",
        price: "$15.95",
        description:
          "Thick yellow noodles in dark soy sauce with shrimp, squid, pork, chicken, and vegetables."
      },
      {
        name: "Indian Mee Goreng",
        price: "$15.95",
        description:
          "Indian-style stir-fried egg noodles with tofu, potato, shrimp, egg, bean sprouts, and peanuts.",
        spicy: true
      },
      {
        name: "Singapore Rice Noodles",
        price: "$15.95",
        description:
          "Rice noodles with shrimp, peppers, onion, bean sprouts, egg, and Chinese sausage.",
        spicy: true
      },
      {
        name: "Beef Chow Fun",
        price: "$15.95",
        description:
          "Flat noodles with beef, onion, scallion, and bean sprouts."
      },
      {
        name: "Cantonese Chow Fun",
        price: "$16.95",
        description:
          "Flat noodles in brown gravy with chicken, shrimp, squid, and vegetables."
      },
      {
        name: "Mee Siam",
        price: "$15.95",
        description:
          "Rice noodles with tofu, egg, chive, shrimp, and bean sprouts in spicy Thai chili sauce.",
        spicy: true
      },
      {
        name: "Pad Thai",
        price: "$15.95",
        description:
          "Rice noodles with tofu, shrimp, egg, sprouts, onion, string beans, chili sauce, and peanuts.",
        spicy: true
      },
      {
        name: "Prawn Mee Soup",
        price: "$15.95",
        description:
          "Egg noodles, pork, shrimp, sprouts, and fried onions in spicy shrimp broth.",
        spicy: true
      },
      {
        name: "Penang Asam Laksa",
        price: "$15.95",
        description:
          "Thick rice noodles in a spicy, sour lemongrass broth with fish flakes and vegetables.",
        spicy: true
      },
      {
        name: "Curry Mee with Young Tau Foo",
        price: "$15.95",
        description:
          "Egg noodles in spicy lemongrass coconut curry with tofu and fish-stuffed vegetables.",
        spicy: true
      },
      {
        name: "Wonton Mee",
        price: "$14.95",
        description:
          "Egg noodles with scallion, minced pork, shrimp wontons, and sauce or chicken broth."
      }
    ]
  },

  rice: {
    title: "Rice Dishes",
    items: [
      {
        name: "Nasi Lemak",
        price: "$16.95",
        description:
          "Coconut rice with chili, anchovy, pickles, curry chicken on the bone, and hard-boiled egg.",
        spicy: true
      },
      {
        name: "Hainanese Chicken with Rice",
        price: "$12.95",
        description:
          "Steamed chicken with fragrant chicken rice and chef's special soy sauce."
      },
      {
        name: "Curried Chicken with Rice",
        price: "$14.95",
        description: "Chicken on the bone served with rice.",
        spicy: true
      },
      {
        name: "Curried Beef with Rice",
        price: "$15.95",
        description: "Curried beef served with rice.",
        spicy: true
      },
      {
        name: "Young Chow Fried Rice",
        price: "$15.95",
        description:
          "Fried rice with pork, shrimp, chicken, onion, egg, carrot, and green peas."
      },
      {
        name: "Nyonya Seafood Fried Rice",
        price: "$15.95",
        description: "Malaysian-style seafood fried rice.",
        spicy: true
      },
      {
        name: "Pineapple Fried Rice",
        price: "$15.95",
        description:
          "Fried rice with chicken, shrimp, egg, basil, vegetables, pineapple, and dried shrimp.",
        spicy: true
      },
      {
        name: "Duck with Ginger and Scallions over Rice",
        price: "$14.95",
        description: "Savory duck with ginger and scallions over rice."
      },
      {
        name: "Spicy Thai Chicken Rice",
        price: "$14.95",
        description:
          "Chicken with rice topped with chef's special spicy Thai sauce.",
        spicy: true
      },
      {
        name: "White Rice",
        price: "$2.00",
        description: "A simple side of steamed white rice."
      },
      {
        name: "Coconut Rice",
        price: "$2.50",
        description: "Fragrant rice cooked with coconut milk."
      }
    ]
  },

  seafood: {
    title: "Seafood & Fish",
    items: [
      {
        name: "Nyonya House Special Squid",
        price: "$19.95",
        description:
          "Squid sautéed with spicy ground dried shrimp in authentic sauce.",
        spicy: true
      },
      {
        name: "Mango Shrimp",
        price: "$19.95",
        description:
          "Shrimp with shredded mango, peppers, onion, and spicy sweet-and-sour sauce.",
        spicy: true
      },
      {
        name: "Masak Shrimp",
        price: "$19.95",
        description:
          "Shrimp with vegetables, dried shrimp, chili, and ginger in aromatic gravy.",
        spicy: true
      },
      {
        name: "Sambal Shrimps",
        price: "$19.95",
        description:
          "Shrimp sautéed with Malaysian shrimp paste, mango, onion, and peppers.",
        spicy: true
      },
      {
        name: "Coconut Jumbo Prawns",
        price: "$29.95",
        description:
          "Butterflied jumbo prawns in aromatic coconut batter.",
        spicy: true
      },
      {
        name: "Clams with Black Bean Sauce",
        price: "$19.95",
        description:
          "Clams with a savory, sweet, and spicy fermented black bean sauce."
      },
      {
        name: "Deep Fried Fish in Thai Sauce",
        price: "$30.95",
        description: "Deep-fried fish in spicy lemongrass sauce.",
        spicy: true
      },
      {
        name: "Deep Fried Mango Fish",
        price: "$30.95",
        description:
          "Fish with shredded mango, cucumber, and onion in sweet-and-sour sauce."
      },
      {
        name: "Chenglai Stingray",
        price: "$25.50",
        description:
          "Stingray cooked slowly in authentic lemongrass broth.",
        spicy: true
      },
      {
        name: "Dried Curry Fish Head",
        price: "$26.95",
        description:
          "Fish head with eggplant, onion, peppers, and tomato in dried curry sauce.",
        spicy: true
      },
      {
        name: "Nyonya Curry Fish Head Casserole",
        price: "$28.95",
        description: "Fish head casserole with rich Nyonya curry.",
        spicy: true
      },
      {
        name: "Sizzling Seafood Combination",
        price: "$20.95",
        description:
          "Sizzling Malaysian-style seafood and vegetable platter."
      }
    ]
  },

  vegetarian: {
    title: "Vegetarian & Vegetable Dishes",
    items: [
      {
        name: "Achat",
        price: "$8.95",
        description:
          "Cold turmeric-pickled vegetables with spicy herbs, sesame seeds, and peanuts.",
        spicy: true
      },
      {
        name: "Fried Crispy Vegetable Duck",
        price: "$10.95",
        description: "Crispy fried Malaysian vegetarian duck."
      },
      {
        name: "Malaysian Buddhist",
        price: "$18.95",
        description:
          "Mixed vegetables with bean curd skin, peppers, corn, snow peas, glass noodles, and mushrooms."
      },
      {
        name: "Bean Curd Thai Style",
        price: "$18.95",
        description: "Fried bean curd in chef's special spicy sauce.",
        spicy: true
      },
      {
        name: "Salted Fish with Chinese Broccoli",
        price: "$17.95",
        description: "Chinese kale with salted fish."
      },
      {
        name: "Spinach with Preserved Bean Curd Sauce",
        price: "$17.95",
        description: "Fresh spinach in savory fermented tofu sauce."
      },
      {
        name: "Chinese Watercress with Preserved Bean Curd Sauce",
        price: "$17.95",
        description: "Watercress in savory fermented tofu sauce."
      },
      {
        name: "Curry Mixed Vegetables in a Clay Pot",
        price: "$21.95",
        description: "Mixed vegetables cooked in a clay pot curry.",
        spicy: true
      },
      {
        name: "Seaweed Salad",
        price: "$7.95",
        description:
          "Jicama, lettuce, cucumber, mango, carrot, tomato, sesame, and mayonnaise sauce."
      },
      {
        name: "Vegetable Spring Roll",
        price: "$9.95",
        description: "Eight deep-fried spring rolls with white turnip."
      }
    ]
  },

  desserts: {
    title: "Desserts",
    items: [
      {
        name: "Mango Pudding",
        price: "$8.50",
        description: "Homemade mango pudding topped with fresh mango."
      },
      {
        name: "ABC",
        price: "$8.95",
        description:
          "Shaved ice with red bean, corn, palm seeds, jelly, milk, brown sugar, and rose syrup."
      },
      {
        name: "Chendol",
        price: "$8.95",
        description:
          "Green rice-flour jelly, sweet red beans, shaved ice, and coconut milk."
      },
      {
        name: "Pulut Hitam",
        price: "$7.50",
        description:
          "Creamy black glutinous rice with coconut milk, served hot."
      },
      {
        name: "Buboh Chacha",
        price: "$7.50",
        description: "Sweet potato and yam with coconut milk."
      },
      {
        name: "Peanut Pancake",
        price: "$11.95",
        description: "Traditional Malaysian peanut pancake."
      },
      {
        name: "Tiramisu Cake",
        price: "$8.50",
        description:
          "Espresso-soaked sponge cake with mascarpone and cocoa."
      },
      {
        name: "Profiteroles",
        price: "$8.50",
        description: "Cream puffs with vanilla and chocolate cream."
      }
    ]
  },

  drinks: {
    title: "Beverages",
    items: [
      {
        name: "Fresh Orange Juice",
        price: "$6.95",
        description: "Fresh, refreshing orange juice."
      },
      {
        name: "Fresh Coconut Drink",
        price: "$8.95",
        description: "Real whole coconut."
      },
      {
        name: "Malaysian Iced Coffee",
        price: "$6.95",
        description: "Rich and flavorful Malaysian-style iced coffee."
      },
      {
        name: "Malaysian Iced Tea",
        price: "$6.95",
        description:
          "Sweet, refreshing tea with a strong tea aroma."
      },
      {
        name: "Thai Iced Tea",
        price: "$6.95",
        description: "Rich, smooth Thai-style iced tea."
      },
      {
        name: "Soya Bean with Grass Jelly",
        price: "$6.95",
        description: "Soybean milk with cool grass jelly."
      },
      {
        name: "Honey Lime Drink",
        price: "$6.50",
        description: "Sweet and cooling kumquat-based drink."
      },
      {
        name: "Lychee Drink",
        price: "$6.50",
        description: "Sweet lychee drink served cold."
      },
      {
        name: "Hot White Coffee",
        price: "$6.50",
        description: "Rich and creamy Malaysian white coffee."
      },
      {
        name: "Hot Teh Tarik",
        price: "$6.50",
        description: "Traditional Malaysian pulled milk tea."
      }
    ]
  }
};

const itemsPerPage = 6;

const menuGrid = document.querySelector("#menu-grid");
const categoryTitle = document.querySelector("#menu-category-title");
const categoryNote = document.querySelector("#menu-category-note");
const pageStatus = document.querySelector("#menu-page-status");
const previousButton = document.querySelector("#previous-menu");
const nextButton = document.querySelector("#next-menu");
const menuPanel = document.querySelector("#menu-panel");
const tabs = [...document.querySelectorAll(".menu-tab")];
const cuisineBackground = document.querySelector(".cuisine-background");

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

function initializeMenuPreview() {
  const requiredElements = [
    menuGrid,
    categoryTitle,
    categoryNote,
    pageStatus,
    previousButton,
    nextButton,
    menuPanel
  ];

  if (requiredElements.some((element) => !element) || tabs.length === 0) {
    return;
  }

  let activeCategory = "appetizers";
  let currentPage = 0;

  function renderMenu() {
    const category = menuData[activeCategory];
    const start = currentPage * itemsPerPage;
    const visibleItems = category.items.slice(start, start + itemsPerPage);
    const totalPages = Math.ceil(category.items.length / itemsPerPage);

    menuGrid.replaceChildren(...visibleItems.map(createMenuItem));
    categoryTitle.textContent = category.title;

    categoryNote.textContent =
      totalPages > 1
        ? "Use Next to see more dishes in this category."
        : "All listed dishes in this category are shown.";

    pageStatus.textContent =
      `Showing ${start + 1}–${start + visibleItems.length} of ${category.items.length}`;

    previousButton.disabled = currentPage === 0;
    nextButton.disabled = currentPage >= totalPages - 1;
  }

  function selectCategory(categoryName, selectedTab) {
    if (!menuData[categoryName]) {
      return;
    }

    activeCategory = categoryName;
    currentPage = 0;

    tabs.forEach((tab) => {
      const isSelected = tab === selectedTab;

      tab.classList.toggle("is-active", isSelected);
      tab.setAttribute("aria-selected", String(isSelected));
    });

    menuPanel.setAttribute("aria-labelledby", selectedTab.id);
    renderMenu();
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      selectCategory(tab.dataset.category, tab);
    });
  });

  previousButton.addEventListener("click", () => {
    if (currentPage === 0) {
      return;
    }

    currentPage -= 1;
    renderMenu();
    menuPanel.focus({ preventScroll: true });
  });

  nextButton.addEventListener("click", () => {
    const totalPages = Math.ceil(
      menuData[activeCategory].items.length / itemsPerPage
    );

    if (currentPage >= totalPages - 1) {
      return;
    }

    currentPage += 1;
    renderMenu();
    menuPanel.focus({ preventScroll: true });
  });

  renderMenu();
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
        rgba(247, 242, 233, 0.88),
        rgba(247, 242, 233, 0.88)
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