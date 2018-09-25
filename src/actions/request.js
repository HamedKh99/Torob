const axios = require('axios');

export default function fetchDataRequest() {
    return axios.get('https://api.torob.com/search-result-base-product-more-info-with-log/?search_id=204513673&prk=5dae256d-e653-40fe-9131-4d3367604e76&rank=2&source=torob_search&discover_method=search');
}