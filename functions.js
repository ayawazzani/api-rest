/*************Somme*********/
function somme(n1, n2){
    let s = Number(n1) + Number(n2);
    return s;
}

/*************Produit***********/
function produit(n1, n2){
    let p = Number(n1) * Number(n2);
    return p;
}

// fonction success
success = (result) => {
    return {
        status: 'success',
        result: result
    }
};

// fonction error
error = (message) => {
    return {
        status: 'error',
        message: message
    }
};

exports.somme = somme;
exports.produit = produit;
exports.success = success;
exports.error = error;