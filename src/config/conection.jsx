
//const info = fetchData((url,params), setData)
export const  fetchData = async (url, setData ) => {
 const result = await fetch(url)
  .then(res=> res.json())
  .then( data =>setData(data))
  .catch(err => console.log("Fail", err))
  
  return result
}

// fetchJson(url+params).then(data => setData(data))
export const  fetchJson = async (url) => {
  const response = await fetch(url)

  const data = await response.json(); 
  return data
}

// // fetch en parallelo
// async function fetchMoviesAndCategories() {
//   const [moviesResponse, categoriesResponse] = await Promise.all([
//     fetch('/movies'),
//     fetch('/categories')
//   ]);
//   const movies = await moviesResponse.json();
//   const categories = await categoriesResponse.json();
//   return [movies, categories];
// }

// // fetch en parallelo
// fetchMoviesAndCategories().then(([movies, categories]) => {
//   movies;     // fetched movies
//   categories; // fetched categories
// }).catch(error => {
//   // /movies or /categories request failed
// });