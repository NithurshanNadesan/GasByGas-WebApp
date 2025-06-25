function calculateTotalStock(outlets) {
    return outlets.reduce((total, outlet) => total + outlet.stock, 0);
}

module.exports = calculateTotalStock;
