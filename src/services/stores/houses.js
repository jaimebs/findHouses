import create from 'zustand';

export const useHousesStore = create(set => ({
  housesList: [],
  setHousesList: data => set({ housesList: data }),

  selectedHouse: null,
  setSelectedHouse: data => set({ selectedHouse: data }),
}));
