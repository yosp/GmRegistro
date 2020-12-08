class Routes {
    constructor(app) {
        this.app = app
        this.db = require('./db')
    }

    appRoutes() {
        this.app.get('/api/getEmployee', (req, res) => {
            this.db.getRegistrados(req.query.User, (err, data) => {
                if(err) {
                    res.status(500).json({
                        error: true,
                        message: err
                    })
                } else {
                    res.status(200).json(data.recordset)
                }
            })
        })

        this.app.get('/api/getEmployeeList', (req, res) => {
            this.db.getRegisterList((err, data) => {
                if(err) {
                    res.status(500).json({
                        error: true,
                        message: err
                    })
                } else {
                    res.status(200).json(data.recordset)
                }
            })
        })
    }
    routesConfig() {
        this.appRoutes()
    }
}

module.exports = Routes;