
import { MenuCategory } from '../types';

export const MENU_DATA: MenuCategory[] = [
  {
    category: "Salad, Papad & Raita",
    items: [
      { id: "spr1", name: "Roasted Papad", price: 55, description: "Traditional roasted lentil crackers.", type: "veg", category: "Salad, Papad & Raita" },
      { id: "spr2", name: "Fried Papad", price: 65, description: "Crispy deep-fried lentil crackers.", type: "veg", category: "Salad, Papad & Raita" },
      { id: "spr3", name: "Masala Papad", price: 80, description: "Papad topped with chopped onions, tomatoes, and spices.", type: "veg", category: "Salad, Papad & Raita" },
      { id: "spr4", name: "Kachumbar Raita", price: 95, description: "Yogurt with finely chopped vegetables.", type: "veg", category: "Salad, Papad & Raita" },
      { id: "spr5", name: "Boondi Raita", price: 110, description: "Crispy chickpea flour pearls in seasoned yogurt.", type: "veg", category: "Salad, Papad & Raita" },
      { id: "spr6", name: "Aloo Ananas Ka Raita", price: 135, description: "Sweet and tangy potato and pineapple yogurt.", type: "veg", category: "Salad, Papad & Raita" },
      { id: "spr7", name: "Green Salad", price: 105, description: "Fresh garden greens.", type: "veg", category: "Salad, Papad & Raita" },
      { id: "spr8", name: "Kim Chi Salad", price: 120, description: "Spicy fermented cabbage salad.", type: "veg", category: "Salad, Papad & Raita" },
      { id: "spr9", name: "Veg Salad with Mayonnaise", price: 140, description: "Creamy vegetable salad.", type: "veg", category: "Salad, Papad & Raita" },
      { id: "spr10", name: "Chicken Salad with Eggs and Mayonnaise", price: 215, description: "Hearty chicken and egg salad.", type: "non-veg", category: "Salad, Papad & Raita" },
      { id: "spr11", name: "Veg Russian Salad", price: 135, description: "Classic daintily diced vegetables in mayo.", type: "veg", category: "Salad, Papad & Raita" },
      { id: "spr12", name: "Chicken Russian Salad", price: 210, description: "Shredded chicken in a classic Russian dressing.", type: "non-veg", category: "Salad, Papad & Raita" }
    ]
  },
  {
    category: "Shorbas & Soups",
    items: [
      { id: "s1", name: "Mushroom Dhaniya Shorba", price: 220, description: "Aromatic mushroom and coriander broth.", type: "veg", category: "Shorbas & Soups" },
      { id: "s2", name: "Tangy Tomato Soup", price: 220, description: "Classic tomato soup with an Indian twist.", type: "veg", category: "Shorbas & Soups" },
      { id: "s3", name: "Dhaniya Lemon Soup", price: 220, description: "Zesty lemon and fresh coriander soup.", type: "veg", category: "Shorbas & Soups" },
      { id: "s4", name: "Shorba-e-Palak Bahar", price: 220, description: "Healthy and rich spinach broth.", type: "veg", category: "Shorbas & Soups" },
      { id: "s5", name: "Shajjahani Shorba", price: 275, description: "Royal creamy soup from the Mughal era.", type: "non-veg", category: "Shorbas & Soups", isSpecial: true },
      { id: "s6", name: "Murg Badami Shorba", price: 275, description: "Chicken broth enriched with almond paste.", type: "non-veg", category: "Shorbas & Soups" },
      { id: "s7", name: "Paya Shorba", price: 275, description: "Traditional slow-cooked lamb trotter soup.", type: "non-veg", category: "Shorbas & Soups", isSpecial: true },
      { id: "s8", name: "Akbari Gosht Shorba", price: 275, description: "Rich mutton broth with traditional spices.", type: "non-veg", category: "Shorbas & Soups" }
    ]
  },
  {
    category: "Veg Starters",
    items: [
      { id: "vs1", name: "Asharfi Kebab (6 Pcs.)", price: 250, description: "Golden coin-sized coin kebabs.", type: "veg", category: "Veg Starters" },
      { id: "vs2", name: "Gulnoor Aloo (12 Pcs.)", price: 225, description: "Stuffed potatoes grilled to perfection.", type: "veg", category: "Veg Starters" },
      { id: "vs4", name: "Seekh Kebab (8 Pcs.)", price: 360, description: "Minced vegetable skewers grilled in tandoor.", type: "veg", category: "Veg Starters" },
      { id: "vs8", name: "Bhatti ke Mushroom (12 Pcs.)", price: 360, description: "Juicy mushrooms marinated in earthy spices.", type: "veg", category: "Veg Starters" },
      { id: "vs9", name: "Hara Bhara Kebab (6 Pcs.)", price: 395, description: "Spinach and green pea patties.", type: "veg", category: "Veg Starters" },
      { id: "vs11", name: "Paneer Ajwani Tikka (6 Pcs.)", price: 420, description: "Carom seed flavored cottage cheese cubes.", type: "veg", category: "Veg Starters" },
      { id: "vs15", name: "Lucknowi Khaas Paneer Tikka (6 Pcs.)", price: 420, description: "Our house special cottage cheese tikka.", type: "veg", category: "Veg Starters", isSpecial: true },
      { id: "vs18", name: "Lucknowi Veg. Galawati Kebab (6 Pcs.)", price: 505, description: "Melt-in-mouth vegetable version of the famous Galouti.", type: "veg", category: "Veg Starters", isSpecial: true }
    ]
  },
  {
    category: "Murg Starters",
    items: [
      { id: "ms1", name: "Awadhi Murg (Half/Full)", price: "395/595", description: "Classic chicken preparation from the heart of Awadh.", type: "non-veg", category: "Murg Starters" },
      { id: "ms2", name: "Murg Surkh Tandoori (Half/Full)", price: "385/615", description: "Fiery red tandoori chicken.", type: "non-veg", category: "Murg Starters" },
      { id: "ms3", name: "Tangdi Anarkali Kebab (4 Pcs.)", price: 580, description: "Pomegranate marinated chicken drumsticks.", type: "non-veg", category: "Murg Starters" },
      { id: "ms5", name: "Resham Ke Murg Tikka (6 Pcs.)", price: 485, description: "Silky smooth chicken tikkas.", type: "non-veg", category: "Murg Starters" },
      { id: "ms13", name: "Murg Shami Kebab (4 Pcs.)", price: 495, description: "Traditional minced chicken patties.", type: "non-veg", category: "Murg Starters" },
      { id: "ms17", name: "Murg Rozali Kebab (4 Pcs.)", price: 530, description: "Stuffed chicken rolls grilled in clay oven.", type: "non-veg", category: "Murg Starters", isSpecial: true },
      { id: "ms22", name: "Lucknowi Special Kebab (4 Pcs.)", price: 580, description: "The chef's secret recipe chicken kebab.", type: "non-veg", category: "Murg Starters", isSpecial: true }
    ]
  },
  {
    category: "Chinese Appetizers",
    items: [
      { id: "ca1", name: "Spring Roll", price: 275, description: "Crispy rolls with vegetable stuffing.", type: "veg", category: "Chinese Appetizers" },
      { id: "ca5", name: "Crispy Veg Honey Chilly", price: 275, description: "Sweet and spicy crispy vegetables.", type: "veg", category: "Chinese Appetizers" },
      { id: "ca14", name: "Paneer Chilly Dry Style", price: 310, description: "Classic cottage cheese in spicy soy sauce.", type: "veg", category: "Chinese Appetizers" },
      { id: "ca17", name: "Sizzling Paneer", price: 310, description: "Paneer served on a hot sizzler plate.", type: "veg", category: "Chinese Appetizers" }
    ]
  },
  {
    category: "Shahi Desserts",
    items: [
      { id: "d1", name: "Gulab Jamun (3 pieces)", price: 155, description: "Classic milk dumplings in sugar syrup.", type: "veg", category: "Shahi Desserts" },
      { id: "d2", name: "Gajar Ka Halwa", price: 180, description: "Warm carrot pudding with dry fruits.", type: "veg", category: "Shahi Desserts" },
      { id: "d3", name: "Shahi Malai Phirni", price: 155, description: "Ground rice pudding with saffron.", type: "veg", category: "Shahi Desserts", isSpecial: true },
      { id: "d7", name: "Awadhi Shahi Tukda", price: 210, description: "Royal bread pudding with rabri.", type: "veg", category: "Shahi Desserts", isSpecial: true }
    ]
  }
];
