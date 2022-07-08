import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncFetchStreams } from '../../store/streamSlice';

const StreamList = () =>{
	const dispatch = useDispatch();
	const streams = useSelector(state => state.stream.stream);
	useEffect(()=>{
		dispatch(asyncFetchStreams())
	},[dispatch])

	const renderList = ()=>{
		return streams.map(stream=>{
			return (
				<div className='item' key={stream.id}>
					<i className='large middle aligned icon camera' />
					<div className="content">
						{stream.title}
						<div className="description">{stream.description}</div>
					</div>
				</div>
			)
		})
	}

	return (
		<div>
			<h2>Streams</h2>
			<div className="ui celled list">
				{renderList()}
			</div>
		</div>
	)
}

export default StreamList;