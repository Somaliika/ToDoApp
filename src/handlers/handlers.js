const handleSave = (current, addTodo, clearTodo, refresh) => {
  console.log(current);
  addTodo({
    variables: { title: current },
    onError: (err) => { console.log(err) }
  });
  clearTodo('');
  if (refresh) refresh(current);
};

const handleMutation = (mutateTodo, id) => {
  mutateTodo({
    variables: { id },
    onError: (err) => { console.log(err) }
  });
};

const handleToggleAll = (toggleAll) => {
  toggleAll({
    variables: { checked: true },
    onError: (err) => { console.log(err) }
  });
};

export { handleSave, handleMutation, handleToggleAll };