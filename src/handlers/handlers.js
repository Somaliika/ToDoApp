const handleSave = (current, addTodo, clearTodo, refresh) => {
  if (current === '')
    return;
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

const handleEditing = (editTodo, id, title, setEditMode) => {
  editTodo({
    variables: { id, title },
    onError: (err) => { console.log(err) }
  });
  setEditMode(false);
};

const handleCancel = (title, setDraft, setEditMode) => {
  setDraft(title);
  setEditMode(false);
};

export { handleSave, handleMutation, handleToggleAll, handleEditing, handleCancel };