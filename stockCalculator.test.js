const calculateTotalStock = require('./stockCalculator');

test('calculates total stock correctly', () => {
    const outlets = [
        { name: 'Outlet A', stock: 50 },
        { name: 'Outlet B', stock: 30 },
        { name: 'Outlet C', stock: 20 }
    ];
    
    expect(calculateTotalStock(outlets)).toBe(100);
});
