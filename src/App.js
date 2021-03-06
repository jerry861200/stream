import {Router, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import StreamCreate from './components/streams/StreamCreate';
import StreamDelete from './components/streams/StreamDelete';
import StreamEdit from './components/streams/StreamEdit';
import StreamList from './components/streams/StreamList';
import StreamShow from './components/streams/StreamShow';
import history from './history';

function App() {
  return (
    <div className="ui container">
			<Router history={history}>
				<div>
					<Header />
					<Switch>
						<Route path='/' exact component={StreamList}></Route>
						<Route path='/streams/new' exact component={StreamCreate}></Route>
						<Route path='/streams/edit/:id' exact component={StreamEdit}></Route>
						<Route path='/streams/delete/:id' exact component={StreamDelete}></Route>
						<Route path='/streams/:id' exact component={StreamShow}></Route>
					</Switch>
				</div>
			</Router>
    </div>
  );
}

export default App;
