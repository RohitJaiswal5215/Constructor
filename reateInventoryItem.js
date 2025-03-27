function createInventoryItem(name, category, price) {
    return {
      name: name,
      category: category,
      price: price,
      describeItem: function() {
        console.log(`Item: ${this.name}, Category: ${this.category}, Price: ${this.price}`)
      }
    }
  }
  
  function addItemDiscount(item, discountPercent) {
    return { 
        ...item, 
      discountedPrice: item.price - (item.price * discountPercent / 100),
      applyDiscount: function() {
        console.log(`Discounted Price for ${this.name}: ${this.discountedPrice}`);
      }
    }
  }
  
  const item = createInventoryItem("Laptop", "Electronics", 1500)
  item.describeItem()
  
  
  const discountedItem = addItemDiscount(item, 10)
  discountedItem.applyDiscount()
  
  