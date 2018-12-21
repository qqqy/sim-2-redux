

module.exports = {
  
  submit: function(req, res){
    // console.log('Submit on' , req.body)
    let instance = req.app.get('db')
    instance.submit(req.body)
    .then((reply) => res.status(200).send(reply))
    .catch((err) => res.status(500).send(err))
  } ,
  all: function(req, res){
    // console.log('all invoked!')
    let instance = req.app.get('db')
    instance.all()
    .then((reply) => res.status(200).send(reply))
    .catch((err) => res.status(500).send(err))
  } ,
  delete: function(req, res){
    let instance = req.app.get('db')
    instance.delete(req.params)
    .then(() => res.sendStatus(200))
    .catch((err) => res.status(500).send(err))
  }
}