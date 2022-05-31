import express from 'express'
import fetch from 'node-fetch'
import cors from 'cors'

const app = express()
app.use(cors({ origin: '*' }))
app.get('/sl-data', function (req, res) {
	fetch(
		'https://api.sl.se/api2/realtimedeparturesV4.json?key=24e8694550204651b656e322387bf0bc&siteid=1365&timewindow=12',
		{ method: 'GET' }
	)
		.then(response => response.json())
		.then(data => {
			res.send(data)
		})
})

const port = process.env.PORT || 8080

app.listen(port, function () {
	console.log('Express server listening on port ' + port)
})
