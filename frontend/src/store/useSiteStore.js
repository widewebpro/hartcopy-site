import { create } from 'zustand'

export const useSiteStore = create((set) => ({
  siteName: 'Hartcopy',
  logo: null,
  pages: [],

  setSiteData: (data) => set(() => ({
    siteName: data.siteName,
    logo: data.logo,
    pages: data.pages
  }))
}))