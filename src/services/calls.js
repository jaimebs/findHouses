import api from './api';

export const getHousesCall = async () => {
  try {
    const result = await api.get(
      '/properties/v2/list-for-rent?city=New%20York%20City&state_code=NY&limit=10&offset=0&sort=relevance',
    );
    return result.data;
  } catch (error) {
    console.warn(error.message);
    return error;
  }
};

export const getHouseDetail = async property_id => {
  try {
    const result = await api.get(
      `/properties/v2/detail?property_id=${property_id}`,
    );
    return result.data;
  } catch (error) {
    console.warn(error.message);
    return error;
  }
};
