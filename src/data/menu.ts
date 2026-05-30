export type MenuItem = { name: string; description: string; price: string };
export type MenuCategory = { id: string; title: string; items: MenuItem[] };

export const menu: MenuCategory[] = [
  {
    id: "coffee",
    title: "Coffee",
    items: [
      { name: "Classic Filter Coffee", description: "Slow-brewed South Indian filter coffee, frothy and bold.", price: "₹120" },
      { name: "Cappuccino", description: "Double shot espresso layered with velvet steamed milk.", price: "₹180" },
      { name: "Hazelnut Latte", description: "House espresso, hazelnut syrup, silky microfoam.", price: "₹220" },
      { name: "Spanish Latte", description: "Sweet condensed milk, espresso, and warm spice.", price: "₹240" },
      { name: "Espresso", description: "Single origin, intense, balanced, full-bodied.", price: "₹130" },
      { name: "Mocha", description: "Belgian chocolate folded into espresso & milk.", price: "₹230" },
    ],
  },
  {
    id: "cold",
    title: "Cold Beverages",
    items: [
      { name: "Cold Brew", description: "16-hour slow steeped — smooth, low acidity, refreshing.", price: "₹200" },
      { name: "Iced Caramel Macchiato", description: "Vanilla milk, espresso, caramel drizzle on ice.", price: "₹250" },
      { name: "Strawberry Refresher", description: "Real strawberries, lime, sparkling soda.", price: "₹190" },
      { name: "Mango Cooler", description: "Telangana mango pulp, mint, citrus.", price: "₹180" },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      { name: "Tiramisu", description: "Mascarpone, ladyfingers soaked in espresso, cocoa dust.", price: "₹260" },
      { name: "Belgian Chocolate Brownie", description: "Warm fudge brownie served with vanilla bean ice cream.", price: "₹240" },
      { name: "Burnt Basque Cheesecake", description: "Caramelised crust, creamy, deeply flavoured.", price: "₹290" },
      { name: "Cinnamon Roll", description: "Soft pull-apart roll, brown butter glaze.", price: "₹180" },
    ],
  },
  {
    id: "snacks",
    title: "Snacks",
    items: [
      { name: "Truffle Mushroom Toast", description: "Sourdough, sautéed mushrooms, truffle oil, parmesan.", price: "₹320" },
      { name: "Paneer Tikka Wrap", description: "Smoky paneer, mint chutney, soft tortilla.", price: "₹260" },
      { name: "Loaded Cheese Fries", description: "Crispy fries, cheddar sauce, jalapeños, chives.", price: "₹240" },
      { name: "Veg Club Sandwich", description: "Triple-layered, grilled, served with house chips.", price: "₹220" },
    ],
  },
  {
    id: "signature",
    title: "Signature Specials",
    items: [
      { name: "Haven Espresso Tonic", description: "Espresso, tonic water, orange peel — our quiet bestseller.", price: "₹260" },
      { name: "Saffron Rose Latte", description: "Kashmiri saffron, rose, espresso, oat milk.", price: "₹280" },
      { name: "Hanamkonda Sunset", description: "Iced coffee with jaggery, cardamom, coconut cream.", price: "₹270" },
      { name: "Brew Haven Affogato", description: "House gelato drowned in fresh espresso shot.", price: "₹250" },
    ],
  },
];
