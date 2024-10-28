import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, addItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")
  // const [itemName, setItemName] = useState("")
  // const [itemCategory, setItemCategory] = useState("")


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  // function handleItemNameChange(event) {
  //   setItemName(event.target.value)
  // }


  // function handleItemCategoryChange(event) {
  //   setItemCategory(event.target.value)
  // }

  function handleItemSubmit(newItem) {
    addItem(newItem)
    // const listArray= [...itemList, event]
    // setItemList(listArray)
    // setItemName("")
    // setItemCategory("")
  }

  const itemsToDisplay = items.filter((item) => {

    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
    const matchesSearch = search === "" || item.name.includes(search);
    return matchesCategory && matchesSearch;

    
    // if (search === "" && selectedCategory === "All") {
    //   return true;
    // } else if (search !== "") {
    //   return item.name.includes(search);
    // } else if (selectedCategory !== "All") {
    //   return item.category === selectedCategory
    // }
  });

  return (
    <div className="ShoppingList">
      <ItemForm 
        // itemName={itemName} 
        // onNameChange={handleItemNameChange} 
        // itemCategory={itemCategory} 
        // onCategoryChange={handleItemCategoryChange} 
        onItemFormSubmit={handleItemSubmit}
      />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
