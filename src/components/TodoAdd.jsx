import { useState } from "react";

function TodoAdd({onAddClick}) {

const [itemName, setItemName] = useState();
const [dueDate, setDueDate] = useState();

const changeName = (event) => {
    // const itemName = event.target.value;
    // setItemName(itemName);
    setItemName(event.target.value);
}

const changedate = (event) => {
    setDueDate(event.target.value);
}

const handleAddButton = () =>{
    onAddClick(itemName,dueDate); 
}

 return (
    <>
        
            <tr>
                <td colspan="4"><input type="text" placeholder="name" onChange={changeName} /></td>
                <td colspan="4"><input type="date" placeholder="date" onChange={changedate}/></td>
                <td colspan="4"><button onClick={handleAddButton}>ADD</button></td>
            </tr>
        
    </>
 );
}

export default TodoAdd;