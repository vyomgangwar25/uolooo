import React, {useState}from 'react'
import "./App.css"
function App() {
  const arr=["mango","apple","banana","lichi"]
  
  const[currentItem,setCurrentitem]=useState("")
  const[newitem,setNewItem]=useState([])

  const additem=()=>{
    setNewItem([...newitem,currentItem])
  }
  return (
    <div className="App">
    <h1>Shoping List </h1>
      
       
       <div className='inputdiv'>
        <input className='box' type="text" id=""  name="abc" value={currentItem} onChange={(e)=>{
    setCurrentitem(e.target.value)

        }} />
        <button  onClick={additem}className='button'>Submit</button>
        
       </div>
       {arr.map((item)=>{
       return (<>
        <h2>{item}</h2>
        <button>delete</button>
        </>
       )

       })}
       {newitem.map((data,item)=>{
        return<div className="abc">
          <h2>{data}</h2><button>delete</button>
        </div>
       })}
    </div>
  );
}

export default App;
