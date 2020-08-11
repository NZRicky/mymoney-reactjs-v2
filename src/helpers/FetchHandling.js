
function fetchErrorHandler(response) {
    if (!response.ok) {
        return response.json().then(err => { throw err; });
    }

    return response.json();
}

function fetchSuccessHandler(data) {
    if (typeof data.message !== 'undefined') {
        alert(data.message);
    }

}
function fetchCatchHandler(error) {
    if (typeof error.message !== 'undefined') {
        alert('Error: ' + error.message);
    }
}

export { fetchErrorHandler, fetchSuccessHandler, fetchCatchHandler };