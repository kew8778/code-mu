export default {
    '/handler1/': ({get}) => {
        return Number(get.num1) + Number(get.num2);
    },
    '/handler2/': ({get}) => {
        const arr = ['elem1', 'elem2', 'elem3'];

        return arr[get.num];
    },
    '/handler3/': ({get}) => {
        return Number(get.num1) + Number(get.num2) + Number(get.num3);
    },
    '/handler4/': ({post}) => {
        let sum = 0;

        for (let num in post) {
            sum += +post[num];
        }

        return sum / 5;
    }
};