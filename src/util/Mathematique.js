const TPS_1991_A_2005 = 0.07;
const TPS_2006_A_2007 = 0.06;
const TPS_2008_A_MAINTENANT = 0.05;

const TVQ_1991_A_1993 = 0.04;
const TVQ_1994_A_1997 = 0.065;
const TVQ_1998_A_2010 = 0.075;
const TVQ_2011 = 0.085;
const TVQ_2012 = 0.095;
const TVQ_2013_A_MAINTENANT = 0.09975;

function calculTPS(year, montant) {
    let taxe = montant;
    if (year >= 2008) {
        taxe = taxe * TPS_2008_A_MAINTENANT;
    } else if (year >= 2006) {
        taxe = taxe * TPS_2006_A_2007;
    } else {
        taxe = taxe * TPS_1991_A_2005;
    }
    return taxe;
}

function calculTVQ(year, montant) {
    let taxe = montant;
    if (year >= 2013) {
        taxe = taxe * TVQ_2013_A_MAINTENANT;
    } else if (year >= 2012) {
        taxe = taxe * TVQ_2012;
    } else if (year >= 2011) {
        taxe = taxe * TVQ_2011;
    } else if (year >= 1998) {
        taxe = taxe * TVQ_1998_A_2010;
    } else if (year >= 1994) {
        taxe = taxe * TVQ_1994_A_1997;
    } else {
        taxe = taxe * TVQ_1991_A_1993;
    }
    return taxe;
}

export {calculTPS, calculTVQ}