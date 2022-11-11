
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import List from './list';

function App() {

  
  const [items,setitems]=useState([])
  const [text,settext]=useState('')
  //function gettext
  const getdata=(e)=>{
    const val=e.target.value;
    settext(val)
  }
  //console.log(text)

  //function storedata
  const storedata=(e)=>{
    if(text!==''){
     const item=[...items,text]
     setitems([...item])
     settext('')
    
    }
   
    
  }
  // delete data
   const deletedata=(id)=>{
  const old=[...items];
  console.log('old',old)
  const item=old.filter((element,i)=>{
    return i!==id
  })
  console.log('new item',item)
  setitems([...item])

  

  }
  console.log('items',items)
 


  return (
    <div className="container-fluid my-5">
      <div className='row'>
      <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
          <h1 className='text-center'>List</h1>
          <div className='row'>
            <div className='col-9'>

              <input 
              type='text'
              className='form-control ' 
              placeholder='Write Plan Here' 
              value={text}
              onChange={getdata}
             
              
              
              />

            </div>
            <div className='col-2'>
              <button 
                className='btn btn-dark px-4 ' onClick={storedata} >
                Add
              </button>

            </div>

            <div className='container-fluid'>
                <ul className='list-unstyled row m-5 '>
                    {
                      items.map((value,i)=>{
                        return <List key={i}  id={i}value={value} deletedata={deletedata}/>
                      })
                    }
              
                </ul>
              </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default App;
