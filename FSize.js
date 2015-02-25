// byteCalc - Calculator for file sizes
// Copyright (C) 2015 David Lichti <dlichtistw@gmx.de>
// This prgram is distributed under the BSD 3-Clause license


// Takes a string and tries to parse it as a file size
// Arguments: str    The string to parse
// Return: The raw number of bytes if successful, false otherwise
function parseFSize (str) {
	if (sm = str.replace(/\s+/, '').match(/(\d+(?:(?:\.|,)(\d+))?)(K|M|G|T|P|E|Z|Y|)B?/i)) {
		var exp = 0;
		switch (sm[3].toLowerCase()) { // For each prefix, increment the power of 1024
		case 'y':
			exp++;
		case 'z':
			exp++;
		case 'e':
			exp++;
		case 'p':
			exp++;
		case 't':
			exp++;
		case 'g':
			exp++;
		case 'm':
			exp++;
		case 'k':
			exp++;
			break;
		}
		return Math.round((sm[1].replace(/\.|,/, '') * Math.pow(1024, exp)) / Math.pow(10, sm[2] ? sm[2].length : 0));
	} else {
		return false;
	}
}

// Takes a number and turns it into a human readable string representation
// Arguments: val    The number of bytes
// Return: A string representation of val
function printFSize (val) {
	var unit = ['', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
	
	if (val == 0) { // avoid ln(0)
		return '0 B';
	} else {
		var exp = Math.min(Math.floor(Math.log(val) / Math.log(1024)), unit.length - 1); // Gauss-Klammer des 1024-Logarithmus von val
		return group(Math.round((100 * val) / Math.pow(1024, exp)) / 100) + ' ' + unit[exp] + 'B';
	}
}

// Takes a number and separates it in groups of 3 digits
// Arguments: num    The number
// Return: A string version of num with spaces inserted
function group (num) {
	gp = function (val, rev) {
		if (rev) { // group from right to left
			return val.split('').reverse().join('').replace(/\d{3}/g, '$& ').split('').reverse().join('').replace(/^\s+|\s+$/g, '');
		} else { // group from left to right
			return val.replace(/\d{3}/g, '$& ').replace(/^\s+|\s+$/g, '');
		}
	}
	
	str = String(num);
	if (gm = str.match(/^\s*(\d+)\.(\d+)(e(?:\+|-)?\d+|)\s*$/i)) { // Check for float
// conf.dec depends on strings.js. Replace appropriatly if necessary
		return gp(gm[1], true) + '.' + gp(gm[2], false).substr(0, conf.dec + 1) + gm[3];
	} else {
		return gp(str, true);
	}
}
