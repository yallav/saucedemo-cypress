class Helper {
  getRandomIndex = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  productPrice(price) {
    return parseInt(price.replace("$", ""));
  }

  returnSortedList(items) {
    let sortedItems = new Array();

    items.forEach((itemVal, itemKey) => {
      sortedItems.push(itemVal);
    });

    return sortedItems.sort();
  }
}

const helper = new Helper();
export default helper;
