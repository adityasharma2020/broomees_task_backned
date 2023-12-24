/* 
	This is the main entrypoint for any incoming request.
*/

const express = require('express');
const { PORT, JWT_KEY } = require('./config/server-config');
const apiRoutes = require('./routes/index');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // To parse incoming req. body

const prepareAndStartServer = () => {
	app.use('/api', apiRoutes);

	app.listen(PORT, async () => {
		
		console.log(`successfully started the server on port : ${PORT}`);
	});
};

prepareAndStartServer();
