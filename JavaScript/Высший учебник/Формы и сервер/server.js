export default {
    '/handler/': function({get}) {
		return get.test1 + get.test2;
	},
    '/handler2/': function({get}) {
        let sum = 0;

        for (let num in get) {
            sum += +get[num];
        }

        return sum;
    },
    '/handler3/': function({get}) {
        return 'received';
    },
    '/handler4/': function({get}) {
        const birthday = get.birthday;

        if (/^\d{4}-\d{2}-\d{2}$/.test(birthday)) {
            const [year, month, day] = birthday.split('-');

            const date = new Date(year, month, day);

            if (
                date.getFullYear() === +year &&
                date.getMonth() === +month &&
                date.getDate() === +day
            ) {
                return 'correct data';
            }
        }

        return 'incorrect date';
    },
    '/handler5/': function({post}) {
        const login = 'aaa';
        const password = 'bbb';

        if (login === post.login && password === post.password) {
            return 'Ok';
        }

        return 'the name or password is incorrect';
    },
    '/handler6/': function({get}) {
        const arr = [
            'user1', 'user2', 'user3',
        ];

        const user = arr[get.key];

        if (user) {
            return user;
        } else {
            return 'no such';
        }
    },
    '/handler7/': function() {
        return '???';
    },
    '/handler8/': function({post}) {
        return post.email;
    },
}