
const fetchAPI = async (url, cb) => {
   const response = await fetch(url);
   const responseJson = await response.json();
   cb(responseJson);
}
export default fetchAPI;