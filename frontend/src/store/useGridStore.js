import { create } from 'zustand'


const columnOptions = [3, 6, 9]
const defaultCols = 6
const mobColumnOptions = [2, 3]
const defaultMobCols = 2


export const useGridStore = create((set) => ({
    cols: defaultCols,
    mobCols: defaultMobCols,

    increase: () =>
        set((state) => {
            const nextCols = columnOptions.find(c => c > state.cols)
            const nextMobCols = mobColumnOptions.find(c => c > state.mobCols)

            return {
                cols: nextCols ?? state.cols,
                mobCols: nextMobCols ?? state.mobCols,
            }
        }),

    decrease: () =>
        set((state) => {
            const prevCols = [...columnOptions].reverse().find(c => c < state.cols)
            const prevMobCols = [...mobColumnOptions].reverse().find(c => c < state.mobCols)

            return {
                cols: prevCols ?? state.cols,
                mobCols: prevMobCols ?? state.mobCols,
            }
        }),

    options: columnOptions,
    mobOptions: mobColumnOptions,
}))