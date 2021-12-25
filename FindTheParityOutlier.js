function findOutlier(integers) {
	let odd = [];
	let even = [];
	for (let num of integers) {
		if (odd.length > 1 && even.length == 1) {
			return even[0];
		}
		if (even.length > 1 && odd.length == 1) {
			console.log(odd);
			return odd[0];
		}
		if (num % 2 == 1) {
			odd.push(num);
			continue;
		}
		even.push(num);
	}
	return odd.length == 1 ? odd[0] : even[0];
}
