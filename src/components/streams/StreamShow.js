import { useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import flv from "flv.js";
import { asyncFetchStream } from "../../store/streamSlice";

const StreamShow = ({ match }) => {
  const dispatch = useDispatch();
  const streamId = match.params.id;
  const stream = useSelector((state) => state.stream.stream[streamId]);
  const videoRef = useRef();
	const player = useRef();

  const buildPlayer = useCallback(() => {
    if (player.current || !stream) {
      return;
    }
    player.current = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${streamId}.flv`,
    });
    player.current.attachMediaElement(videoRef.current);
    player.current.load();
    player.current.play();
  }, [streamId, stream]);

  useEffect(() => {
    dispatch(asyncFetchStream(streamId));
    return () => {
      player.current.destroy();
    };
  }, [streamId, dispatch]);

  useEffect(() => {
    buildPlayer();
  }, [buildPlayer]);

  if (!stream) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <video ref={videoRef} style={{ width: "100%" }} controls />
      <h1>{stream.title}</h1>
      <h5>{stream.description}</h5>
    </div>
  );
};

export default StreamShow;
