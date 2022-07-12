import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";

import { asyncFetchStream, asyncEditStream } from "../../store/streamSlice";
import StreamForm from "./StreamForm";

const StreamEdit = ({ match }) => {
  const dispatch = useDispatch();
  const streamId = match.params.id;
  const stream = useSelector((state) => state.stream.stream[streamId]);
  useEffect(() => {
    dispatch(asyncFetchStream(streamId));
  }, []);

  const onSubmit = (formValues) => {
    dispatch(asyncEditStream(streamId, formValues));
  };

  if (!stream) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h3>Edit a Stream</h3>
      <StreamForm initialValues={_.pick(stream, 'title', 'description')} onSubmit={onSubmit}></StreamForm>
    </div>
  );
};

export default StreamEdit;
