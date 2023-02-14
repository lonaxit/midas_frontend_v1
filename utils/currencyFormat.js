// format currency


export function currencyFormatter(amount){
    
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'NGN' }).format(amount)
}

// NOT IN USE
export function Today() {
    return new Date().toLocaleDateString()
}

