class Observable {
	constructor () {
		this.observers = [];
	}

	subscribe(f) {
		this.observers.push(f);
	}

	unsubscribe(f) {
		this.observers = this.observers.filter(subscriber => subscriber !== f);
	}

	notify(data) {
		this.observers.forEach(observer => observer(data));
	}
}

const observ = new Observable();
let item = '';

const updateItem = text => item = text;

observ.subscribe(updateItem)
observ.notify('qwe')
console.log(item) // qwe

observ.unsubscribe(updateItem)
observ.notify('asd')
console.log(item) // qwe qwe

observ.subscribe(updateItem)
observ.notify(null)
observ.unsubscribe(updateItem)
console.log(item) // qwe qwe null




