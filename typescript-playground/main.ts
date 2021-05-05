

class Test {

    constructor(private antwort: number) {
        console.log('😎', this.antwort);

        const x = (param: number) => this.antwort + param;

        console.log(x(1));
    }
}

const test = new Test(42);
