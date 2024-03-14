import axios from 'axios';

const URL = "https://www.themealdb.com/api/json/v1/1/";

const API = axios.create({
    baseURL: URL,
  });

export const getSomeMeals = async () =>{
    const res = await API.get('filter.php?c=Seafood');
    return res.data
}
export const getAllCategories = async () =>{
    const res = await API.get('categories.php');
    return res.data
}
export const getMealById = async (id) =>{
    const res = await API.get('lookup.php?i=' + id);
    return res.data
}
export const getMealOfTheDay = async () =>{
    const res = await API.get('random.php');
    return res.data
}
export const getMealsByCategory = async (category) =>{
    const res = await API.get('filter.php?c=' + category);
    return res.data
}