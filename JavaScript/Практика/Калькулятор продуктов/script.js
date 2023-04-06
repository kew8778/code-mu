'use strict';

const form = document.querySelector('.form');
const name = form.querySelector('.form__name');
const price = form.querySelector('.form__price');
const amount = form.querySelector('.form__amount');
const add = form.querySelector('.form__add');

const table = document.querySelector('.table');
const total = document.querySelector('.total');

add.addEventListener('click', function() {
	const tr = document.createElement('tr');
	
	allowEdit(createCell(tr, name.value, 'name'));
    allowEdit(createCell(tr, price.value, 'price'));
    allowEdit(createCell(tr, amount.value, 'amount'));

	createCell(tr, price.value * amount.value, 'cost');

	createCell(tr, 'удалить', 'remove').addEventListener('click', function() {
        tr.remove();
        recountTotal();
    });
	
	table.appendChild(tr);

    recountTotal();
    clearForm();
});

function createCell(tr, value, name) {
	const td = document.createElement('td');

	td.textContent = value;
	td.classList.add(name);

	tr.appendChild(td);

    return td;
}

function recountTotal() {
	const costs = table.querySelectorAll('.cost');
    let res = 0;
	
	for (let cost of costs) {
        res += +cost.textContent;
    }

    total.textContent = res;
}

function allowEdit(td) {
	td.addEventListener('dblclick', function() {
		const inp = document.createElement('input');
        inp.value = td.textContent;
        td.textContent = '';

        inp.addEventListener('keydown', function(event) {
			if (event.key == 'Enter') {
				td.textContent = inp.value;

                const tr = td.parentElement;

                tr.querySelector('.cost').textContent =
                    tr.querySelector('.price').textContent *
                    tr.querySelector('.amount').textContent;

                recountTotal();
			}
		});

        td.appendChild(inp);
        inp.focus();
	});
}

function clearForm() {
    name.value = '';
    price.value = '';
    amount.value = '';
}
