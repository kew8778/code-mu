export default {
	'/test/': function() {
		let arr = [1, 2, 3, 4, 5];

        let str = '';

        for (let elem of arr) {
            str += '<p>' + elem + '</p>'
        }
		
		return str;
	},
}