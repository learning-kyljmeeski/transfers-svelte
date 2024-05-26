import { getAllTransfers } from '$lib/api.js';

export async function load(){
	const data = await getAllTransfers();
    return data;
}