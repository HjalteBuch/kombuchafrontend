const baseUrl = 'http://localhost:5259/';

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
