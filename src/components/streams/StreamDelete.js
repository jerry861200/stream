import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import Modal from "../Modal";
import history from "../../history";
import { asyncFetchStream, asyncDeleteStream } from "../../store/streamSlice";


const StreamDelete = ({match}) => {
	const dispatch = useDispatch();
	const stream = useSelector(state => state.stream.stream[match.params.id])

	const onDelete = () =>{
		dispatch(asyncDeleteStream(match.params.id));
	}

  const actions = (
    <>
      <button onClick={onDelete} className="ui button negative">Delete</button>
      <Link to='/' className="ui button">Cancel</Link>
    </>
  );

	useEffect(()=>{
		dispatch(asyncFetchStream(match.params.id));
	},[dispatch, match])

	const renderContent = () => {
		if(!stream){
			return 'Are you sure you want to delete this stream?'
		}
		return `Are you sure you want to delete this stream with title: ${stream.title}`
	}

  return (
    <>
      <Modal
        title="Delete Stream"
        content={renderContent()}
        actions={actions}
				onDismiss={()=> history.push('/')}
      ></Modal>
    </>
  );
};

export default StreamDelete;
