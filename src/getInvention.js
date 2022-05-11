const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const invention = urlParams.has('invent') ? urlParams.get('invent') : 'the office';

export default invention;