import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITE_KEY = '@FindHouses:Favorites';

export const saveDate = async (hey, value) => {
  try {
    await AsyncStorage.setItem(hey, value);
  } catch (error) {
    console.error({ error });
  }
};

export const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value !== null ? JSON.parse(value) : null;
  } catch (error) {
    console.error({ error });
  }
};

export const getHouseIfFavorite = async houseId => {
  const savedFavorites = await getData(FAVORITE_KEY);
  if (savedFavorites) {
    if (savedFavorites.find(h => h === houseId)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export const saveHouseAsFavorite = async houseId => {
  const savedFavorites = await getData(FAVORITE_KEY);
  if (savedFavorites) {
    if (savedFavorites.find(h => h === houseId)) {
      return {
        error: 'Imóvel ja está nos favoritos.',
      };
    }
    savedFavorites.push(houseId);
    await saveDate(FAVORITE_KEY, JSON.stringify(savedFavorites));
  } else {
    const newArray = [houseId];
    const arrayFavorites = JSON.stringify(newArray);
    await saveDate(FAVORITE_KEY, arrayFavorites);
    return true;
  }
};

export const removeHouseAsFavorite = async houseId => {
  const savedFavorites = await getData(FAVORITE_KEY);
  if (savedFavorites) {
    const newSavedFavorite = savedFavorites.filter(h => h !== houseId);
    await saveDate(FAVORITE_KEY, JSON.stringify(newSavedFavorite));
  } else {
    return {
      error: 'Imóvel não é favorito.',
    };
  }
};
