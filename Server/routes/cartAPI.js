const   express = require('express'), 
bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const CartRouter = express.Router();

const Cart = require('../schema/cartSchema');

var decodedToken='';
CartRouter.post('/addtocart', verifyToken, function(req,res,next){
  const email= decodedToken.email;

  let promise = Cart.findOne({email:email , id:req.body.book._id}).exec();

  promise.then(function(result){
    if(result) {
      let numberOfItem = result.numberOfItem + 1 ;
      let price = parseInt(result.price) ;
      price =price + parseInt(price/result.numberOfItem)
      promise =  Cart.update({id:result.id , email:email}, {$set:{price:price,numberOfItem:numberOfItem}}).exec();
      
      promise.then(function(doc){
        return res.status(201).json(doc);
      })
      
      promise.catch(function(err){
        return res.status(400).json(err)
      })
    }

    else {
      let cart = new Cart({
        id:req.body.book._id,
        email:email,
        title : req.body.book.title,
        subtitle:req.body.book.subtitle,
        isbn13:req.body.book.isbn13,
        price:req.body.book.price,
        image:req.body.book.image,
        author:req.body.book.author,
        rating:req.body.book.rating,
        raters:req.body.book.raters,
        numberOfItem:1
      })
      let promise = cart.save();
    
      promise.then(function(doc){
        return res.status(200).json(doc);
      })
    
      promise.catch(function(err){
        return res.status(501).json({message: 'Error registering user.'})
      })
    }
  });  
}) 

CartRouter.get('/cartItem', verifyToken, function(req,res,next){

    const email= decodedToken.email;
    let promise = Cart.find({email:email}).exec();

    promise.then(function(doc){
      return res.status(200).json(doc);
    })

    promise.catch(function(err){
      return res.status(200).json(err);
    })

})


CartRouter.get('/buy', verifyToken, function(req,res,next){
  
      const email= decodedToken.email;
      let promise = Cart.remove({email:email}).exec();

      promise.then(function(doc){
        return res.status(200).json(doc);
      })
  
      promise.catch(function(err){
        return res.status(200).json(err);
      })
  
})

function verifyToken(req,res,next){
  
    let token = req.body.token;

    if(token==undefined)
      token=req.query.token

    jwt.verify(token,'secret', function(err, tokendata){
      if(err){
        return res.status(400).json({message:' Unauthorized request'});
      }
      if(tokendata){
        decodedToken = tokendata;
        next();
      }
    })
}
module.exports = CartRouter;