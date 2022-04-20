const callAPI = async (url) => {
	let response = await fetch(url, {
		headers: {
			"Access-Control-Allow-Headers": "Content-Type",
			// "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	});
	if (!response.ok) {
		const message = `An error has occured: ${response.status}`;
		throw new Error(message);
	}
	return response.json();
};

export default callAPI;