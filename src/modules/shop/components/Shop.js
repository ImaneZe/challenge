import React from 'react';

const Shop = props => {
    return <div style={{ background: props.completed ? "yellow" : "white" }}>
        <p>nom: {props.nom}</p>
        <img src= {props.img}/>
        <button onClick={props.onDislike}>dislike</button><button onClick={props.onLike}>Like</button>
      </div>;
};

export default Todo;