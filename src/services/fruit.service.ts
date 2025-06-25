const FRUITS = [
  'Apple', 'Banana', 'Orange', 'Grape', 'Strawberry',
  'Pineapple', 'Mango', 'Kiwi', 'Peach', 'Plum',
  'Cherry', 'Blueberry', 'Raspberry', 'Blackberry', 'Watermelon',
  'Cantaloupe', 'Honeydew', 'Papaya', 'Coconut', 'Avocado',
  'Lemon', 'Lime', 'Grapefruit', 'Pomegranate', 'Fig',
  'Date', 'Apricot', 'Nectarine', 'Persimmon', 'Guava',
  'Passion Fruit', 'Dragon Fruit', 'Lychee', 'Rambutan', 'Durian',
  'Jackfruit', 'Starfruit', 'Kiwano', 'Physalis', 'Elderberry'
];

export function getFruits(limit: number = 20): string[] {
  console.log(`Fetching ${limit} fruit names`);
  return FRUITS.slice(0, Math.min(limit, FRUITS.length));
}