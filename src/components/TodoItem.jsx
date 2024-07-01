const TodoItem = ({todoName,todoDate,onDeleteClick}) =>{



    return (
        <>
        
            <tr>
                <td className="col-6">{todoName}</td>
                <td>{todoDate}</td>
                <td><button onClick={() => onDeleteClick(todoName)}>delete</button></td>
            </tr>
        
        </>
    );
}

// function TodoItem({todoName,todoDate}) {
//   return (
//     <>
//     <tr>
//                 <td className="col-6">{todoName}</td>
//                 <td>{todoDate}</td>
//                 <td><button>delete</button></td>
//            </tr>
//     </>
//   );
// };

export default TodoItem;