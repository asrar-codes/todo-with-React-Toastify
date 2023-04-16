import { useState,useRef,useContext,createContext,  } from "react";
import {nanoid} from 'nanoid'
  import { ToastContainer, toast } from 'react-toastify';



// localStorage
const getLocalStorage = ()=>{
    let item = localStorage.getItem('list')
    if(!item){
       return item = []
    }
    else {
      return  item = JSON.parse(localStorage.getItem('list'))
    }
}

const setLocalStorage = (item)=>{
    localStorage.setItem('list',JSON.stringify(item))
}

const AppContext = createContext()


export const ContextProvider = ({children})=>{
 const [list, setlist ] = useState(getLocalStorage());
 const refInput = useRef(null)


 const handleSubmit = (e)=>{
        e.preventDefault()
        if(!refInput.current.value)return
        const formData = new FormData(e.currentTarget)
        // console.log(e.target)
        // console.log(e.currentTarget)
        // console.log(formData.entries())
        
        const newItem ={id:nanoid(),...Object.fromEntries(formData),completed:false } ;
        // console.log(newItem)
        setlist((oldList)=>{
            const newList = [...oldList, newItem]
            setLocalStorage(newList)
            return newList
        })
        toast.success("item added")
        e.currentTarget.reset()

    }

const remove = (id)=>{
    const newItems = list.filter((items)=>items.id!==id)
    setlist(newItems)
    setLocalStorage(newItems)
    toast.error('todo deleted')
}

const toggleCompleted = (id)=>{
    const newItems = list.map((item)=>{
        if(item.id===id){
            item.completed = !item.completed
            return item
        }
        return item
    })
    setlist(newItems)
    // console.log(newItems)
    setLocalStorage(newItems)
}



    return <AppContext.Provider value={{list,refInput,handleSubmit,remove,toggleCompleted}}>{children}</AppContext.Provider>
}

// custom hook

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}