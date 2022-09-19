import { Stack } from '@mui/system'
import React from 'react'
import { categories } from '../utils/utils'


const SideBar = ({selectedcategory,setselectedcategory}) => {
    console.log(selectedcategory);
  return (
   <Stack direction="row" sx={{overflowY:'auto',height:{sx:'auto',md:'95vh'},flexDirection:{md:'column', sm:'row' ,lg:'column'}}}>
     {
        categories.map((ele)=>(
            <button className='category-btn' style={{background : ele.name === selectedcategory && '#FC1503', color:'white' ,marginRight:'20px' }} key={ele.name} onClick={()=> setselectedcategory(ele.name)}>
                <span style={{color : ele.name === selectedcategory ? 'white' : "red", marginRight:'15px'}}>{ele.icon}</span>
                <span style={{opacity : ele.name === selectedcategory ? '1' : '0.8'}}>{ele.name}</span>
            </button>
        ))
     }
   </Stack>
  )
}

export default SideBar