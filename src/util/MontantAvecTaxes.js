import {calculTPS, calculTVQ} from './Mathematique';

export default class MontantAvecTaxes {

    constructor(year, montantSansTaxe) {
        this._year = year;
        this._montantSansTaxe = montantSansTaxe;
    }
    
    getMontantSansTaxe() {
        return this._montantSansTaxe;
    }

    getTPS() {
        return this._year === null || this._montantSansTaxe === '' ? 0 : calculTPS(this._year, parseFloat(this._montantSansTaxe));
    }
    
    getTVQ() {
        return this._year === null || this._montantSansTaxe === '' ? 0 : calculTVQ(this._year, parseFloat(this._montantSansTaxe));
    }

    getMontantAvecTaxe() {
        return (this._montantSansTaxe === '' ? 0 : parseFloat(this._montantSansTaxe)) + this.getTPS() + this.getTVQ();
    }

    getYear() {
        return this._year;
    }
}