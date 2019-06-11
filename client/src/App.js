import React from 'react';
import './App.css';
import { Clouds, Landing, Modal, OpenModal } from './Components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';

function App() {

	return (
		<BrowserRouter>
			<GlobalStyle />
			<div className="App">
				<Clouds />
				<Landing />
				<OpenModal
					toggle={(show) => <button onClick={show}>Learn about LSx</button>}
					content={(hide) => (
						<Modal>
							<h2>About LSx</h2>
							This is where the modal text is.
							<br />
							<button onClick={hide}>X</button>
						</Modal>
					)}
				/>
			</div>
		</BrowserRouter>
	);

}

export default App;
