const baseUrl = process.env.REACT_APP_BACKEND_URL;

export const getBatches = () => 
    fetch(baseUrl + "Batch", {
        method: "GET"
    },
    )
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
//export const getBottles = () => api.get('/Bottle');
//export const getReviews = () => api.get('/BottleRating');
