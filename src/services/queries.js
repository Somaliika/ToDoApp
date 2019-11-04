import { gql } from "apollo-boost";

const GET_TODOS = gql`
  query {
      todos {
        id
        title
        completed
      }
  }`;

const ADD_TODO = gql`
  mutation AddTodo($title: String!) {
     add(title: $title) {
      id
      title
      completed
    }
  }
`;

const TOGGLE_TODO = gql`
  mutation ToggleTodo($id: String!) {
     toggle(id: $id) {
      id
      title
      completed
    }
  }
`;

const DESTROY_TODO = gql`
  mutation DestroyTodo($id: String!) {
     destroy(id: $id) {
      id
      title
      completed
    }
  }
`;

const CLEAR_TODO = gql`
  mutation {
     clearCompleted {
      id
      title
      completed
    }
  }
`;

const TOGGLE_ALL = gql`
  mutation ToggleAll($checked: Boolean!) {
     toggleAll(checked: $checked) {
      id
      title
      completed
    }
  }
`;

const EDIT_TODO = gql`
  mutation EditTodo($id: String!, $title: String!) {
     save(id: $id, title: $title) {
      id
      title
      completed
    }
  }
`;

export {GET_TODOS, ADD_TODO, TOGGLE_TODO, DESTROY_TODO, CLEAR_TODO, TOGGLE_ALL, EDIT_TODO};