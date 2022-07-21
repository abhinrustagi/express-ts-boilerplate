import chalk from 'chalk'
import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import helmet from 'helmet'
import logger from 'morgan'

const app: Application = express()
const port = 3000

// Body parsing Middleware
app.use(cors())
app.use(helmet())
app.use(logger('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get(
	'/',
	async (req: Request, res: Response): Promise<Response> =>
		res.status(200).json({
			ok: true,
			message: 'I am up! 😎',
		})
)

try {
	app.listen(port, (): void => {
		console.log(
			chalk.white.bgBlue(`Express Server started successfully on Port ${port}.`)
		)
	})
} catch (error: any) {
	console.error(`Error occured: ${error.message}`)
}
