function TodoItem({todoName,todoDate}) {
  todoName = "Buy Milk"
  todoDate = "07/03/2024"
  return(
    <div className="container">
        <div className="row row1">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
          <button type="button" className="btn btn-danger button1">Delete</button>
          </div>
        </div>
 
         </div>)
}

export default TodoItem;