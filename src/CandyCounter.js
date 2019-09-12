function getJellyBeans(remove) {
	const Jellybeans = 510;
	let newJellybeans = Jellybeans - remove;
	return newJellybeans;
}
getJellyBeans(20);

function getLollipops(add) {
	const Lollipops = 4;
	let newLollipops = Lollipops + add;
	return newLollipops;
}

getLollipops(600);

function getBothJellyAndLollipops(removeLollipops, removeJellyBeans) {
	const Jellybeans = 510;
	const Lollipops = 4;
	let newJellybeans = Jellybeans - removeJellyBeans;
	let newLollipops = Lollipops + removeLollipops;

	console.log(Jellybeans, Lollipops);
}
getJellyBeans(20, 0);
