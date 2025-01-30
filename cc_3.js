//Task 1: Product Price Management Scenario: Online Store (Product Pricing)
let product_prices = [4.99, 3.50, 5.75, 8.25, 9.99]

    //Task 1: Add price to the end of the list and remove the first
product_prices.push(7.50)
product_prices.shift()
console.log(product_prices)



//Task 2: Modifying Customer Orders Scenario: Order List (Customer Orders)
let order_list_qty = [3, 4, 2, 1, 6]

    //Task 2: Increase third order by 5
order_list_qty[2] = order_list_qty[2] + 5
    //Task 2: Calculate the total number of all orders
let total_qty = order_list_qty.reduce((sum, order_list_qty) => sum + order_list_qty, 0)

console.log(order_list_qty)
console.log(total_qty)


//Task 3: Employee Performance Tracking Scenario: HR System Tracking Employee Performance
let employee = {
    name: "Mickey Mouse",
    role: "Sales",
    performanceScore: 7,
    isActive: true}

    //Task 3: Update performanceScore
employee.performanceScore = 8

    //Task3: New property promotionEligible (boolean)
employee.promotionEligible = true
console.log(employee)


