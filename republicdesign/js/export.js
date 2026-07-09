export let discountRate = 40;
export let otherVar = "This is other variable"
export default function calculateDiscount(amt) {
    return "$" + ((discountRate / 100) * amt).toFixed(2);
};