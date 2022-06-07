const add = (req) => {
	const number = req.body.number;
	const numberToAdd = req.body.numberToAdd || 1;
	return { newNumber: number + numberToAdd };
};

module.exports = add;
