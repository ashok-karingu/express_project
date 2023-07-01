const express = require("express");
const router = express.Router();

// router.route("/").get((req,res)=>{
//     res.status(200).json({message:"Get all contacts"});
// });
const { getContacts, 
    createContact, 
    getContact, 
    updateContact, 
    deleteContact, 
    } = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

// const router = express.Router();

router.use(validateToken);
router.route("/").get(getContacts).post(createContact); 
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);  

 module.exports = router; 