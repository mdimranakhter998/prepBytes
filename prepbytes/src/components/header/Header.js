import img1 from '../../media/logoPrepBytes.svg'
import {React} from 'react'
import {AppBar,Toolbar,Link} from '@mui/material'

const Header=()=>{
    return(
        <div className="header"> 
        <AppBar position="sticky" color="">
    <Toolbar sx={{mx:3,}}>
    <img src={img1} alt="" />
    <Toolbar sx={{px:2,border:'2px solid red',justifyContent:'space-between',}}>
    <box sx={{padding:'30px,0px'}}><Link href="#" underline="none" color="#616161" variant="subtitle2">Material Study</Link></box>
    <box><Link href="#" underline="none" color="black">Material Study</Link></box>
    <box><Link href="#" underline="none" color="black">Material Study</Link></box>
    <box><Link href="#" underline="none" color="black">Material Study</Link></box>
    </Toolbar>
  </Toolbar>
</AppBar>'          
        
        </div>
      
    );
}
export default Header