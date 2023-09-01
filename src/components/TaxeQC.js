import React, {Component} from 'react';
import MontantAvecTaxes from '../util/MontantAvecTaxes';
import '../App.css';

export default class TaxeQC extends Component {
    
    constructor(props) {
        super(props);

        this.changeMontant = this.changeMontant.bind(this);
        this.changeAnnee = this.changeAnnee.bind(this);
    }

    state = {
        montant : new MontantAvecTaxes(2023, 0)
    }

    changeMontant(e) {
        let pattern = /^([0-9]+(\.([0-9]+)?)?)?$/;
        if(pattern.test(e.target.value)) {
            let montantSansTaxe = e.target.value;
            let year = this.state.montant.getYear();
            const mont = new MontantAvecTaxes(year, montantSansTaxe);
            this.setState(() => ({
                montant: mont
            }));
        }
    }

    changeAnnee(e) {
        let year = parseInt(e.target.value);
        let montantSansTaxe = this.state.montant.getMontantSansTaxe();
        const mont = new MontantAvecTaxes(year, montantSansTaxe);
        this.setState(() => ({
            montant: mont
        }));
    }

    render() {
        const options = [];

        let annee = 2023;
        while (annee >= 1991) {
            var obj = {};

            obj['value'] = annee;
            obj['selected'] = this.state.montant.getYear() === annee;
            options.push(obj);
            annee--;
        }

        return (
            <div className='App'>
                <p>Choisissez l'année du calcul :</p>
                <select id='annee' onChange={this.changeAnnee}>
                    {options.map(({ value, selected }, index) => <option value={value} selected={selected} >{value}</option>)}
                </select>
                <p>Entrez le montant avant taxe :</p>
                <input id='montant' type='text' onChange={this.changeMontant} value={this.state.montant.getMontantSansTaxe()}></input>
                <p>TPS :</p>
                <input readOnly type='text' value={this.state.montant.getTPS().toFixed(2)}></input>
                <p>TVQ :</p>
                <input readOnly type='text' value={this.state.montant.getTVQ().toFixed(2)}></input>
                <p>Montant Total :</p>
                <input readOnly type='text' value={this.state.montant.getMontantAvecTaxe().toFixed(2)}></input>
            </div>
        )
    }
}