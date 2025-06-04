import React from 'react'
import MenuNav from './MenuNav'
import menuData from '../assets/data/coffee_menu.json'
import MenuItem from './MenuItem'
import { useState } from 'react'

const MenuBoard = () => {

    const [data, setData] = useState(menuData)
    const dataList = menuData

    const menuFilter = (item) => {
        switch(item) {
            case "All" :
                setData(menuData)
                break;
            case "커피" :
                setData(dataList.filter((d)=>
                d.category==="커피"
                ))
                break;
            case "디저트" :
                setData(dataList.filter((d)=>
                d.category==="디저트"
                ))
                break;
            case "에이드" :
                setData(dataList.filter((d)=>
                d.category==="에이드"
                ))
                break;
            case "베이커리" :
                setData(dataList.filter((d)=>
                d.category==="베이커리"
                ))
                break;
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