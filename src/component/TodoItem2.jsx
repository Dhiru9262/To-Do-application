function TodoItem2() {
  let Name = "Go to collage";
  let Date = "5/10/2024";
  return (
    <div class="container">
      <div class="row myRow">
        <div class="col-6"> {Name}</div>
        <div class="col-4">{Date}</div>
        <div class="col-2">
          <button type="button" class="btn myButton btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem2;
