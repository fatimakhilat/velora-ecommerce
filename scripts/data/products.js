

export const products = [
  {
    id: "product-001",
    name: "Premium Blender 1200W",
    slug: "premium-blender-1200w",
    category: "appliances",

    price: 89.99,
    oldPrice: 112.99,

    badge: {
      type: "discount",
      label: "-20%"
    },

    image: {
      src: "assets/images/products/Blender.png",
      alt: "Premium Blender 1200W"
    },

    rating: {
      stars: 5,
      reviews: 128
    },

    stock: 15,

    isBestSeller: true,
    isNewArrival: false
  },

  {
    id: "product-002",
    name: "Cast Iron Cookware Set 6 Pieces",
    slug: "cast-iron-cookware-set-6-pieces",
    category: "kitchen",

    price: 79.99,
    oldPrice: null,
    discount: null,

    image: {
      src: "assets/images/products/Cast Iron Cookware.png",
      alt: "Cast Iron Cookware"
    },

    rating: {
      stars: 4,
      reviews: 96
    },

    stock: 8,

    isBestSeller: true,
    isNewArrival: false,

    badge: {
      type: "best-seller",
      label: "Best Seller"
    }
  },

  {
    id: "product-003",
    name: "Chef Knife Damascus Steel",
    slug: "chef-knife-damascus-steel",
    category: "kitchen",

    price: 59.99,
    oldPrice: null,
    discount: null,

    image: {
      src: "assets/images/products/Chef Knife.png",
      alt: "Chef Knife"
    },

    rating: {
      stars: 4,
      reviews: 64
    },

    stock: 30,

    isBestSeller: true,
    isNewArrival: false,

    badge: null
  },

  {
    id: "product-004",
    name: "Smart Air Fryer 5.5L",
    slug: "smart-air-fryer-5.5l",
    category: "appliances",

    price: 129.99,
    oldPrice: null,
    discount: null,

    image: {
      src: "assets/images/products/Smart Air Fryer.png",
      alt: "Smart Air Fryer"
    },

    rating: {
      stars: 5,
      reviews: 76
    },

    stock: 48,

    isBestSeller: true,
    isNewArrival: true,

    badge: {
      type: "new",
      label: "New"
    }
  },

  {
    id: "product-005",
    name: "Electric Kettle 1.7L Stainless Steel",
    slug: "electric-kettle-1.7l-stainless-steel",
    category: "appliances",

    price: 79.99,
    oldPrice: null,
    discount: null,

    image: {
      src: "assets/images/products/Electric Kettle.png",
      alt: "Electric Kettle"
    },

    rating: {
      stars: 4.5,
      reviews: 89
    },

    stock: 59,

    isBestSeller: true,
    isNewArrival: false,

    badge: null

  }


];

