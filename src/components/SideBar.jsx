import { Stack } from '@mui/system'
import React from 'react'
import { categories } from '../utils/utils'


const SideBar = ({selectedCategories,SetSelectedCategories}) => {
  return (
   <Stack sx={{overflowY:'auto',height:{sx:'auto',md:'95'},flexDirection:{md:'column'}}}>
     {
        categories.map((ele)=>(
            <button className='category-btn' style={{background : ele.name === SelectedCategories && '#FC1503', color:'white' }} key={ele.name}>
                <span style={{color : ele.name === SelectedCategories ? 'white' : "red", marginRight:'15px'}}>{ele.icon}</span>
                <span style={{opacity : ele.name === SelectedCategories ? '1' : '0.8'}}>{ele.name}</span>
            </button>
        ))
     }
   </Stack>
  )
}

export default SideBar