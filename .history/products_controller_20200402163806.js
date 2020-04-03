module.exports = {
    create: (req,res,next) => {
        const db = req.app.get('db')
        db.create_product([req.body.name, req.body.description, req.body.price, req.body.image_url]).then(() => {
            res.status(200)
        }).catch(err => {
            res.status(500).send('something went wrong though')
            console.log(err)
        })
    },
    getOne: (req,res,next) => {
        const db = req.app.get('db')
        db.get_one(req.params.id).then(products => {
            res.status(200).send(products)
        }).catch(err => {
            res.status(500).send('something went wrong though')
            console.log(err)
        })
    },
    getAll: (req,res,next) => {
        const db = req.app.get('db')
    },
    update: (req,res,next) => {
        const db = req.app.get('db')
        db.update_product([req.query.description, req.params.id]).then(() => {
            res.status(200)
        }).catch(err => {
            res.status(500).send('something went wrong though')
            console.log(err)
        })
    },
    delete: (req,res,next) => {
        const db = req.app.get('db')
        db.delete_product(req.params.id).then(() => {
            res.status(200)
        }).catch(err => {
            res.status(500).send('something went wrong though')
            console.log(err)
        })
    }
    
}