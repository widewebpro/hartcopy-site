import { create } from 'zustand'


function shuffleArray(array) {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}
const FAVORITES_KEY = 'favorite_products';

const loadFavorites = () => {
  if (typeof window === 'undefined') return [];
  return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
};

const saveFavorites = (favorites) => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};
let hoverTimeout = null;
export const useProductsStore = create((set, get) => ({
  products: [],
  searchTerm: '',
  hoveredIndex: null,
  favorites: loadFavorites(),
  hoveredGridIndex: null,
  hoveredListIndex: null,
  selectedProduct: null,
  lastOpenedProduct: null,
  isSearchOpen: false,
  
  openSearch: () => set({ isSearchOpen: true }),
  closeSearch: () => set({ isSearchOpen: false }),

  setSelectedProduct: (product) => set({ selectedProduct: product }),


  setHoveredIndex: (i) => set({ hoveredIndex: i }),
  toggleFavorite: (productId) => {
    const { favorites } = get();

    const updatedFavorites = favorites.includes(productId)
      ? favorites.filter(id => id !== productId)
      : [productId, ...favorites];

    saveFavorites(updatedFavorites);
    set({ favorites: updatedFavorites });
  },

  isFavorite: (productId) => {
    return get().favorites.includes(productId);
  },

  setProducts: (items) => {
    const { favorites } = get();
    const favs = items.filter(p => favorites.includes(p.id));
    const others = items.filter(p => !favorites.includes(p.id));
    set({ products: [...favs, ...others] });
  },
  setSearchTerm: (term) => set({ searchTerm: term }),
  setHoverWithDelay: (source, index) => {
    clearTimeout(hoverTimeout);

    hoverTimeout = setTimeout(() => {
      if (source === "grid") {
        set({ hoveredIndexGrid: index });
      } else if (source === "list") {
        set({ hoveredIndexList: index });
      }
    }, 800);
  },

  setLastOpenedProduct: (i) => set({ lastOpenedProduct: i }),

  clearHover: (source) => {
    clearTimeout(hoverTimeout);

    if (source === "grid") set({ hoveredIndexGrid: null });
    if (source === "list") set({ hoveredIndexList: null });
  },
  resetHoverState: () =>
    set((state) => {
        if (state.hoverTimeout) {
            clearTimeout(state.hoverTimeout)
        }

        return {
            hoveredIndex: null,
            hoveredIndexGrid: null,
            hoveredIndexList: null,
            hoverTimeout: null,
        }
    }),
  getFilteredProducts: () => {
    const { products, searchTerm, favorites } = get();

    const filtered = products.filter(p =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const favoriteProducts = filtered.filter(p =>
      favorites.includes(p.id)
    );

    const otherProducts = filtered.filter(p =>
      !favorites.includes(p.id)
    );

    return [...favoriteProducts, ...otherProducts];
  },
  randomizeProducts: () => {
    const { products, favorites } = get();

    const favs = products.filter(p => favorites.includes(p.id));
    const others = products.filter(p => !favorites.includes(p.id));

    set({ products: [...favs, ...shuffleArray(others)] });
  },
  sortProductsByAlphabet: (direction = 'az') => {
    const { products, favorites } = get();

    const compare = (a, b) =>
      direction === 'az'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);

    const favs = products
      .filter(p => favorites.includes(p.id))
      .sort(compare);

    const others = products
      .filter(p => !favorites.includes(p.id))
      .sort(compare);

    set({ products: [...favs, ...others] });
  },
  getVisibleProducts: (options = {}) => {
    const { onlyFavorites = false } = options;
    const { products, searchTerm, favorites } = get();

    const base = onlyFavorites
      ? products.filter(p => favorites.includes(p.id))
      : products;

    return base.filter(p =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },

}))