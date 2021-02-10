// method indexOf
const a = [9, 5, 3, 8, 11, 9, 99];

function indexOfEmul(ar, item, from = 0) {
    for (let i = from; i < ar.length; i++) {
        if (ar[i] === item) {
            return i;
        }
    }

    return -1;
}

console.log(indexOfEmul(a, 3, 1));

// method MAP (формирует новый массив)
const b = [5, 2, 3, 5, 7, 5, 45, 5, 54, 5, 4];
let exampleFirst = b.map((item, index) => {//Можно выбирать нужный нам параметр элемент или индекс.
    console.log(item);
    return item;
});
console.log(exampleFirst);

//method filter
let c = a.filter((item, index) => {
    if (item % 2 === 0) {
        return true;
    }
});
console.log(c);
const cardsInBank =['bk8599', 'bs45554', 'good545'];
// method includes - определяет есть ли этот элемент в массив(True/False)
if(cardsInBank.includes('bk8599')){
    console.log('this card have');
}
else{
    console.log('Sorry, but no');
}

const users = [
    {'user' : '1', 'name': 'Ivan', 'age':'15', 'country': 'USA'},
    {'user' : '2', 'name': 'Nik', 'age':'24', 'country': 'UK'},
    {'user' : '3', 'name': 'Alex', 'age':'33', 'country': 'Czech'},
    {'user' : '4', 'name': 'Jon', 'age':'9', 'country': 'Litva'},
]
const available = users.filter(item=>{
    return item.country.includes('USA');
})
console.log(available);