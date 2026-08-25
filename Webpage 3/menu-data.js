function parseCsv(csvText) {
  const rows = [];
  let row = [];
  let field = "";
  let insideQuotes = false;

  for (let index = 0; index < csvText.length; index += 1) {
    const character = csvText[index];
    const nextCharacter = csvText[index + 1];

    if (character === '"' && insideQuotes && nextCharacter === '"') {
      field += '"';
      index += 1;
    } else if (character === '"') {
      insideQuotes = !insideQuotes;
    } else if (character === "," && !insideQuotes) {
      row.push(field.trim());
      field = "";
    } else if ((character === "\n" || character === "\r") && !insideQuotes) {
      if (character === "\r" && nextCharacter === "\n") {
        index += 1;
      }

      row.push(field.trim());

      if (row.some((cell) => cell !== "")) {
        rows.push(row);
      }

      row = [];
      field = "";
    } else {
      field += character;
    }
  }

  if (field !== "" || row.length > 0) {
    row.push(field.trim());
    rows.push(row);
  }

  const [headers, ...dataRows] = rows;

  if (!headers || headers.length === 0) {
    return [];
  }

  return dataRows
    .filter((dataRow) => dataRow.length === headers.length)
    .map((dataRow) =>
      Object.fromEntries(
        headers.map((header, index) => [header, dataRow[index]])
      )
    );
}

function formatPrice(value) {
  const numericPrice = Number(String(value).replace("$", ""));

  if (!Number.isFinite(numericPrice)) {
    return String(value).startsWith("$") ? value : `$${value}`;
  }

  return `$${numericPrice.toFixed(2)}`;
}

function isTrue(value) {
  return String(value).trim().toLowerCase() === "true";
}

function groupMenuItems(items) {
  const categories = [];

  items.forEach((item) => {
    if (!item.category || !item.category_id || !item.name) {
      return;
    }

    let category = categories.find((entry) => entry.id === item.category_id);

    if (!category) {
      category = {
        id: item.category_id,
        title: item.category,
        items: []
      };
      categories.push(category);
    }

    category.items.push({
      ...item,
      spicy: isTrue(item.spicy),
      homepage: isTrue(item.homepage)
    });
  });

  return categories;
}

async function loadMenuData() {
  const response = await fetch("menu.csv", { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`Could not load menu.csv (${response.status})`);
  }

  const csvText = await response.text();
  const items = parseCsv(csvText);

  if (items.length === 0) {
    throw new Error("menu.csv does not contain any menu items.");
  }

  return groupMenuItems(items);
}

window.menuData = {
  formatPrice,
  loadMenuData
};
