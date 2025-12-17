import { create } from 'zustand'

export const useStoriesStore = create((set, get) => ({
    stories: [],
    searchTerm: '',
    selectedStories: null,

    setSelectedStories: (story) => set({ selectedStories: story }),
    setStories: (items) => set({ stories: items }),


    getActiveStory: () => {
        const { selectedStories, stories } = get()
        return selectedStories ?? stories[0] ?? null
    },
    setSearchTerm: (term) => set({ searchTerm: term }),
    getFilteredStories: () => {
        const { stories, searchTerm } = get()
        return stories.filter((p) =>
            p.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
    }

}))