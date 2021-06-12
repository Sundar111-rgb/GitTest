import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";

const My = (props) => {
    const [initialName,    setName] = useState('');
    const [initialAddress, setAddress] = useState('');

     const name = useSelector(state => { return state.name });
     const address = useSelector(state => state.address);
 
    const dispatch = useDispatch();
  return (
    <div>
      <h1>Hello{props.data.id}</h1>
      <h1>{props.data.name}</h1>
      <h1>{props.data.address}</h1>

      <h1>{name}</h1>
      <h1>{address}</h1>
      <input
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name="address"
        onChange={(e) => setAddress(e.target.value)}
      />

      <button
        onClick={() =>
          dispatch({
            type: "Hello1",
            payload: { name: initialName, address: initialAddress },
          })
        }
      >
        Click
      </button>
      <button
        onClick={() =>
          dispatch({  
            type: "Hello2",
            payload: { name: initialName, address: initialAddress },
          })
        }
      >
        Click
      </button>
      <button onClick={() => props.submit(initialName, initialAddress)}>
        Click
      </button>
      <button onClick={() => props.submitt(initialName, initialAddress)}>
        Click
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
    return {
      data: state
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submit: (initialName, initialAddress) => {
      dispatch({
        type: "Hello1",
        payload: { name: initialName, address: initialAddress },
      });
    },
    submitt: (initialName, initialAddress) => {
      dispatch({
        type: "Hello2",
        payload: { name: initialName, address: initialAddress },
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(My);
