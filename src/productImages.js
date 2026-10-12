const imageByProductName = new Map([
  [
    "Organic Tomatoes",
    "tomatoes.jpg"
  ],
  [
    "Sweet Alphonso Mangoes",
    "mangoes.jpg"
  ],
  [
    "Sona Masoori Rice",
    "rice.jpg"
  ],
  [
    "Fresh Spinach",
    "spinach.jpg"
  ],
  [
    "Tur Dal",
    "tur-dal.jpg"
  ],
  [
    "Farm Fresh Milk",
    "milk.jpg"
  ],
  [
    "Fresh Beetroot",
    "fresh-beetroot.jpg"
  ],
  [
    "Bottle Gourd",
    "bottle-gourd.jpg"
  ],
  [
    "Bitter Gourd",
    "bitter-gourd.jpg"
  ],
  [
    "Drumsticks",
    "drumsticks.jpg"
  ],
  [
    "Pumpkin",
    "fresh-pumpkin.jpg"
  ],
  [
    "Cabbage",
    "green-cabbage.jpg"
  ],
  [
    "Radish",
    "radish.jpg"
  ],
  [
    "Sweet Corn",
    "sweet-corn.jpg"
  ],
  [
    "Raw Banana",
    "raw-banana.jpg"
  ],
  [
    "Curry Leaves",
    "curry-leaves.jpg"
  ],
  [
    "Fresh Grapes",
    "fresh-grapes.jpg"
  ],
  [
    "Pineapple",
    "pineapple.jpg"
  ],
  [
    "Custard Apple",
    "custard-apple.jpg"
  ],
  [
    "Sweet Lime",
    "sweet-lime.jpg"
  ],
  [
    "Tender Coconut",
    "tender-coconut.jpg"
  ],
  [
    "Jackfruit",
    "jackfruit.jpg"
  ],
  [
    "Dragon Fruit",
    "dragon-fruit.jpg"
  ],
  [
    "Sapota (Chikoo)",
    "sapota.jpg"
  ],
  [
    "Foxtail Millet",
    "foxtail-millet.jpg"
  ],
  [
    "Pearl Millet (Bajra)",
    "pearl-millet.jpg"
  ],
  [
    "Sorghum (Jowar)",
    "sorghum.jpg"
  ],
  [
    "Organic Barley",
    "organic-barley.jpg"
  ],
  [
    "Brown Rice",
    "brown-rice.jpg"
  ],
  [
    "Black Gram (Urad Dal)",
    "black-gram.jpg"
  ],
  [
    "Red Lentils (Masoor Dal)",
    "red-lentils.jpg"
  ],
  [
    "Kidney Beans (Rajma)",
    "kidney-beans.jpg"
  ],
  [
    "Toor Whole Pigeon Peas",
    "whole-pigeon-peas.jpg"
  ],
  [
    "White Chickpeas",
    "white-chickpeas.jpg"
  ],
  [
    "Turmeric",
    "turmeric-roots.jpg"
  ],
  [
    "Fresh Ginger",
    "fresh-ginger.jpg"
  ],
  [
    "Garlic",
    "garlic-bulbs.jpg"
  ],
  [
    "Coriander Seeds",
    "coriander-seeds.jpg"
  ],
  [
    "Cumin Seeds",
    "cumin-seeds.jpg"
  ],
  [
    "Black Pepper",
    "black-pepper.jpg"
  ],
  [
    "Dry Red Chillies",
    "dry-red-chillies.jpg"
  ],
  [
    "Fresh Paneer",
    "fresh-paneer.jpg"
  ],
  [
    "Farm Fresh Butter",
    "farm-butter.jpg"
  ],
  [
    "Buffalo Milk",
    "buffalo-milk.jpg"
  ],
  [
    "Jaggery",
    "jaggery.jpg"
  ],
  [
    "Fresh Coconut",
    "fresh-coconut.jpg"
  ],
  [
    "Organic Sesame Seeds",
    "sesame-seeds.jpg"
  ],
  [
    "Fresh Fenugreek Leaves",
    "fenugreek-leaves.jpg"
  ],
  [
    "Fresh Strawberries",
    "strawberries.jpg"
  ],
  [
    "Indian Gooseberry (Amla)",
    "amla.jpg"
  ],
  [
    "Finger Millet Flour",
    "finger-millet-flour.jpg"
  ],
  [
    "Maize Grains",
    "maize-grains.jpg"
  ],
  [
    "Green Gram (Moong Dal)",
    "green-gram.jpg"
  ],
  [
    "Black-Eyed Peas",
    "black-eyed-peas.jpg"
  ],
  [
    "Mustard Seeds",
    "mustard-seeds.jpg"
  ],
  [
    "Raw Honey",
    "raw-honey.jpg"
  ],
  [
    "Farm Fresh Eggs",
    "farm-eggs.jpg"
  ],
  [
    "Organic Groundnut Oil",
    "groundnut-oil.jpg"
  ],
  [
    "Fresh Okra",
    "okra.jpg"
  ],
  [
    "Brinjal (Eggplant)",
    "brinjal.jpg"
  ],
  [
    "Cauliflower",
    "cauliflower.jpg"
  ],
  [
    "Cucumber",
    "cucumber.jpg"
  ],
  [
    "Fresh Green Peas",
    "green-peas.jpg"
  ],
  [
    "Capsicum",
    "capsicum.jpg"
  ],
  [
    "Broccoli",
    "broccoli.jpg"
  ],
  [
    "Yam",
    "yam.jpg"
  ],
  [
    "Fresh Papaya",
    "papaya.jpg"
  ],
  [
    "Fresh Guava",
    "guava.jpg"
  ],
  [
    "Pomegranate",
    "pomegranate.jpg"
  ],
  [
    "Watermelon",
    "watermelon.jpg"
  ],
  [
    "Sweet Oranges",
    "oranges.jpg"
  ],
  [
    "Fresh Lemons",
    "lemons.jpg"
  ],
  [
    "Fresh Peach",
    "peach.jpg"
  ],
  [
    "Fresh Plum",
    "plum.jpg"
  ],
  [
    "Finger Millet (Ragi)",
    "finger-millet.jpg"
  ],
  [
    "Oats",
    "oats.jpg"
  ],
  [
    "Chana Dal",
    "chana-dal.jpg"
  ],
  [
    "Moong Dal",
    "moong-dal.jpg"
  ],
  [
    "Horse Gram",
    "horse-gram.jpg"
  ],
  [
    "Black Chickpeas (Kala Chana)",
    "black-chickpeas.jpg"
  ],
  [
    "Cardamom Pods",
    "cardamom.jpg"
  ],
  [
    "Cloves",
    "cloves.jpg"
  ],
  [
    "Fenugreek Seeds",
    "fenugreek-seeds.jpg"
  ],
  [
    "Farm Ghee",
    "ghee.jpg"
  ],
  [
    "Fresh Curd",
    "curd.jpg"
  ],
  [
    "Groundnuts (Peanuts)",
    "groundnuts.jpg"
  ],
  [
    "Cashew Nuts",
    "cashews.jpg"
  ],
  [
    "Potatoes",
    "potatoes.jpg"
  ],
  [
    "Red Onions",
    "onions.jpg"
  ],
  [
    "Green Chillies",
    "green-chillies.jpg"
  ],
  [
    "Wheat",
    "wheat.jpg"
  ],
  [
    "Carrots",
    "carrots.jpg"
  ],
  [
    "Bananas",
    "bananas.jpg"
  ]
]);

export const fallbackProductImage = '/images/products/fallback-produce.jpg';

export function productImageFor(productName = '') {
  const image = imageByProductName.get(productName.trim());
  return image ? `/images/products/${image}` : fallbackProductImage;
}
