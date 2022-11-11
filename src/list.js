

const List=(props)=>{
    const {id,value,deletedata}=props;
  
    return(
        <>
        < >
            
        <li className='shadow  p-2 my-2 col-sm-1 offset-1 text-warning'>{(id+1)+'.'}</li>
            <li className='shadow p-2 my-2 col-sm-6'>{value}</li>
            
            <button 
            className="btn btn-danger my-2 col-sm-2 offset-1" onClick={()=>{deletedata(id)}}>
                X
                </button>
                
              </>
       
        </>
    )
}

export default List