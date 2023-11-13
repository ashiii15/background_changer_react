import React, { useState,useEffect} from 'react'
import { Button } from 'react-bootstrap'


function Bgcolor() {
    const [colors,setColor] = useState("black")
    const click = (color) => {
        setColor(color)
      }
      useEffect(() => {
        document.body.style.backgroundColor = colors
      }, [colors])
    
      return (
    <div className=''>
          <div className='' 
          style={{ height:'100vh',width:'100%'}}>
          <h1 className='text-light d-flex justify-content-center  text-center' style={{color:'white'}}></h1>
          <div className='d-flex justify-content-center ' style={{marginTop:'100px'}}>
          <h1 className='text-light d-flex justify-content-center  text-center ' style={{color:'white'}}>Background Color Changer</h1>

          </div>
 <div className='d-flex justify-content-center ' style={{marginTop:'100px'}}>

               <Button style={{backgroundColor:"violet",color:"white"}} className='btn me-3' onClick={()=>click("violet")}>Violet</Button>
              <Button className='btn btn-success text-light me-3' id='green'  onClick = { () => click("green")}>Green</Button> 
             <Button className='btn btn-primary text-light me-3' id='blue' onClick = { () => click("blue")}>Blue</Button>
            <Button className='btn btn-warning text-light me-3' id='yellow' onClick = { () => click("yellow")}>Yellow</Button>
            <Button className='btn btn-danger text-light me-3' id='red' onClick = { () => click("red")}>Red</Button> 
                       <Button className='btn btn-info text-light ' id='lightblue' onClick = { () => click("aqua")}>LightBlue</Button>

    
</div>    
</div>  
  </div>
  
 )
}

export default Bgcolor
