import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { asyncFetchStream } from "../../store/streamSlice";

const StreamShow = ({match}) =>{
	const dispatch = useDispatch();
	const streamId = match.params.id;
	const stream = useSelector(state => state.stream.stream[streamId]);

	useEffect(()=>{
		dispatch(asyncFetchStream(streamId))
	},[streamId, dispatch])

	if(!stream){
		return <div>Loading...</div>
	}

	return (
		<div>
			<h1>{stream.title}</h1>
			<h5>{stream.description}</h5>
		</div>)
}

export default StreamShow;