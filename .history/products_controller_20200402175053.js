module.exports = {
    create: (req,res,next) => {
        const db = req.app.get('db')
        db.create_product([req.body.name, req.body.description, req.body.price, req.body.image_url]).then(() => {
            res.sendStatus(200)
        }).catch(err => {
            res.status(500).send('something went wrong with create')
            console.log(err)
        })
    },
    getOne: (req,res,next) => {
        const db = req.app.get('db')
        db.read_product(req.params.id).then(products => {
            res.status(200).send(products)
        }).catch(err => {
            res.status(500).send('something went wrong with getOne')
            console.log(err)
        })
    },
    getAll: (req,res,next) => {
        const db = req.app.get('db')
        db.read_products().then(products => {
            res.status(200).send(products)
        }).catch(err => {
            res.status(500).send('something went wrong with getAll')
            console.log(err)
        })
    },
    update: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params, query } = req;
    
        dbInstance.update_product([params.id, query.desc])
          .then(() => res.sendStatus(200))
          .catch(err => {
            res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
            console.log(err)
          });
      },
    deleteProduct: (req,res,next) => {
        const db = req.app.get('db')
        db.delete_product(req.params.id).then(() => {
            res.sendStatus(200)
        }).catch(err => {
            res.status(500).send('something went wrong with delete')
            console.log(err)
        })
    }
    
}