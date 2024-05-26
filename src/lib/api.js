const BASE_URL = 'http://localhost:8080';

async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return null;
    }
}

export async function getAllTransfers() {
    const url = `${BASE_URL}/transfers`;
    const data = await fetchData(url);
    if (data) {
        return data;
    } else {
        console.log('Failed to fetch data from the backend.');
        return null;
    }
}

export async function getTransferById(id) {
    const url = `${BASE_URL}/transfers/${id}`;
    const data = await fetchData(url);
    if (data) {
        return data;
    } else {
        console.log('Failed to fetch data from the backend.');
        return null;
    }
}

export async function getTransferBySearchTerm(searchTerm) {
    const url = `${BASE_URL}/transfers/filter?search-term=${searchTerm}`;
    const data = await fetchData(url);
    if (data) {
        return data;
    } else {
        console.log('Failed to fetch data from the backend.');
        return null;
    }
}
