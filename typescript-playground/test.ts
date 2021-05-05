export class Test {

    constructor(private antwort: number) {
        console.log('😎', this.antwort);

        const x = (param: number) => this.antwort + param;

        console.log(x(1));
        
        const tech = 'Angular';
        const headline = `Herzlich Willkommen zum ${tech}-Workshop!`;
    }
}
