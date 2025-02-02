import React from "react";
import { useDispatch, connect } from "react-redux";
import { addAnecdote } from "../reducers/anecdoteReducer";
import { notificationSet } from 'reducers/notificationReducer';

const AnecdoteForm = (props) => {
  const dispatch = useDispatch();

  const newAnecdote = (event) => {
    event.preventDefault();
    const anecdoteContent = event.target.content.value;
    dispatch(addAnecdote(anecdoteContent))
    .then(()=>{
      props.notificationSet(anecdoteContent, 5000)
      event.target.content.value = ""
    })
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={newAnecdote}>
        <div>
          <input name="content" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  notificationSet
}

const ConnectedAnecdoteForm = connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)
export default ConnectedAnecdoteForm;
