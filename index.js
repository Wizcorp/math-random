/**
 * @method Randomizes an integer number in the range ]-Infinity, Infinity[ and scales it within [0, 1]
 * @author Brice Chevalier
 * @param {number} toRandomize Integer to randomize
 */

exports.randomize = function (toRandomize) {
	var a, b, c;

	// first iteration
	a = toRandomize ^ 1607965627;
	b = toRandomize ^ 847121556;

	a = 36969 * (a & 65535) + (a >> 16);
	b = 18000 * (b & 65535) + (b >> 16);

	c = ((a << 16) + b);
	c = ((c << 1) + c & 2147483647);

	// second iteration
	a = c ^ 1607965627;
	b = c ^ 847121556;

	a = 36969 * (a & 65535) + (a >> 16);
	b = 18000 * (b & 65535) + (b >> 16);

	c = ((a << 16) + b);
	c = ((c << 1) + c & 2147483647);

	return c / 2147483647;
}

/**
 * @classdesc Seeds and create a random number generator
 * @constructor
 *
 * @author Brice Chevalier
 *
 * @param {number} seed
 */

exports.randomNumberGenerator = function (seed) {
	seed = (seed * 2147483647) % 2147483647;
	if (seed < 0) {
		seed = seed + 2147483647;
	}

	return function () {
		seed = (seed << 16) | (seed >> 16);
		seed = 233280 * (seed % 9301) - 0.07041494 * seed + 3399;
		if (seed < 0) {
			seed = seed + 2147483647;
		}
		return (seed / 2147483647);
	};
}
