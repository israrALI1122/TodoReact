import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import img from '../images/israr.jpg'
import '../tasks/todo.css'




const local = () =>{
    let list = localStorage.getItem("data")

    if(list){
        return JSON.parse(localStorage.getItem("data"))
        
    }else{
        return[];
    }
}

const Todo = () => {
    const [inputData, setInputData] = useState("");
    const [datarray, setDataarray] = useState(local())
    const [toggle , setToggle] = useState(true);
     const [isedititem , setIsedititem] = useState(null)

    const handleonclick =()=>{
        if(!inputData){
            alert("plx fil the data")
        }else if(inputData && !toggle){
            setDataarray(
                datarray.map((cur) => {
                    if(cur.id === isedititem){
                        return{...cur, name:inputData}
                    }
                    return cur;
                })
            )
            setInputData(" ")
            setToggle(true)
            setIsedititem(null)

        }else {
            const updatedData = {id: new Date().getTime().toString() , name:inputData}
            setDataarray([...datarray , updatedData])
            setInputData(" ")
        }
    }


// delete one bye one
    const deleteitem =(index)=>{
        const updatedarr = datarray.filter((cur) =>{
            return index !== cur.id ;

        })
        setDataarray(updatedarr)
    }




    // remove all 

    const removeall =() =>{
        setDataarray([])
    }




    

    // edit item 
    const edititem =(index)=>{
        const newedit = datarray.find((cur)=>{
            return index !== cur.id
        })

        setInputData(newedit.name)
 
        setToggle(false)

        setIsedititem(index)
        
        
    }
    







    useEffect(()=>{
        localStorage.setItem("data" , JSON.stringify(datarray))

    },[datarray])


  return (
    <>
    <div className="container">
        <div className='childcontainer'>
            <figure>
                <img src={img} alt="" />
                <figcaption>ADD your ToDos</figcaption>
            </figure>
        </div>
        <div className="additems">
            <input type="text" value={inputData}  onChange={(e) => setInputData(e.target.value)}/>
            {
                toggle?  <i className='fas fa-plus add-btn ' title='add item' onClick={handleonclick}></i>: 
                <i className='fas fa-edit add-btn ' title='add item' onClick={handleonclick}></i>
            }
           
        </div>
        {
            datarray.map((curelem)=>{
                const {name , id } = curelem;
                return (
                <div className="showitem" key={id}>
                    <div className="eachitem">
                        <h3>{name}</h3>
                        <i className='far fa-edit add-btn ' title='edit item' onClick={() =>edititem(id)} ></i>
                        <i className='far fa-trash-alt add-btn ' title='delete item' onClick={() =>deleteitem(id)} ></i>
                    </div>
                </div>
                )
            })
        }
        <div className="showitem">
            <button onClick={removeall}><span>remove </span></button>
        </div>
    </div>
        
    </>
  )
}

export default Todo