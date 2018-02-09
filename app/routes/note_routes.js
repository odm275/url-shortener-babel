var ObjectID = require('mongodb').ObjectID

module.exports = function(app,db){  
  app.post('/new/url', (req, res) => {
    const oldUrl = req.body.body;
    console.log(oldUrl);    
    
    /*
    db.collection('notes').insert(note, (err,result) => {
      if(err){
      res.send({ 'error': 'An error has occured'});
      
    } else{
      res.send(result.ops[0]);  
    }  
    });
*/
  });
};