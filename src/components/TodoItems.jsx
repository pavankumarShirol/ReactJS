import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems,onDeleteClick }) => {
    return (
        <>
       <table>
        {todoItems.map(item => 
        
            <TodoItem todoName={item.name} todoDate={item.date } onDeleteClick={onDeleteClick}> </TodoItem>    
            // <TodoItem todoName={item} > </TodoItem>    
        )}
        </table>
        </>
    );
};

export default TodoItems;