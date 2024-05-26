import { getTransferById } from '$lib/api.js';

export async function load({params}){
	const data = await getTransferById(params.id);
	console.log(data);
	return data;
}