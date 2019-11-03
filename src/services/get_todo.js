import { gql } from "apollo-boost";

const GET_TODOS = gql`
  query {
    todos {
      id
    }
  }`;
export {GET_TODOS};