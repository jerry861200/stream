import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { asyncFetchStreams } from "../../store/streamSlice";

const StreamList = () => {
  const dispatch = useDispatch();
  const streams = useSelector((state) => state.stream.stream);
  const currentUserId = useSelector((state) => state.signIn.userId);
  const isSignedIn = useSelector((state) => state.signIn.isSignedIn);

  useEffect(() => {
    dispatch(asyncFetchStreams());
  }, [dispatch]);

  const renderAdmin = (stream) => {
    if (stream.userId === currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`streams/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link>
          <Link
            to={`streams/delete/${stream.id}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
    }
  };

  const renderList = () => {
    return streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {renderAdmin(stream)}

          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  };

  const renderCreate = () => {
    if (isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  };

  return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">{renderList()}</div>
      {renderCreate()}
    </div>
  );
};

export default StreamList;
