import React from 'react';
import menuData from './menu.json'
import MenuItem from './MenuItem'

const lunchList = menuData.menu.lunch.items;
let categorySet = new Set()


class Menu extends React.Component {
    constructor(props){
        super(props);
    }



    render(){
        let items = []
        for(var i = 0; i < lunchList.length; i++) {
            let itemName = lunchList[i].name;
            let itemPrice = lunchList[i].price;
            let itemDesc = lunchList[i].desc;
            let itemCategory = lunchList[i].category;
            let itemDrop = lunchList[i].dropdown;
            let dropOptions = lunchList[i].options;
            items.push(<MenuItem name={itemName} price={itemPrice} desc={itemDesc} category={itemCategory} dropdown={itemDrop} options={dropOptions}/>)
            }
        return items;
        }

}



export default Menu;