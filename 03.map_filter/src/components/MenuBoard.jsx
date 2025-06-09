import React from 'react'
import MenuNav from './MenuNav'
import menuData from '../assets/data/coffee_menu.json'
import MenuItem from './MenuItem'
import { useState } from 'react'

const MenuBoard = () => {

    const [data, setData] = useState(menuData)

    const menuFilter = (item) => {
        let filterData = menuData.filter((d)=>
            d.category===item
        )
        if(item==="All") {
            //All 이라는 카테고리는 존재하지 않으므로 따로 처리해야 함
            setData(menuData)
        } else {
            setData(filterData)
        }
        
    }

    return (
        <div className='menu-board'>
            <h1>Menu</h1>
            <MenuNav onFilter={menuFilter}/>
            <div className='menu-list'>
                {data.map((data, index)=>
                    <MenuItem key={index} data={data}/>
                )}
            </div>
        </div>
    )
}

export default MenuBoard