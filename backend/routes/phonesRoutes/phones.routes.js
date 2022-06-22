const router = require("express").Router()

//Get all phones
router.get("/", async(req, res) =>{
    try{
        const allPhones =  await require("../../../data/phones.json")
        console.log("take your phones")
        return res.status(200).json(allPhones)
    }
    catch (err){
        console.error(err);
        res.status(500).json(err)
    }
})

// Get a single phone
router.get("/:id", async(req, res) =>{
    try{
        let singlePhone = "id not founded"
        const phone = await require("../../../data/phones.json").map((currentPhone) => { 
            if(currentPhone.id == req.params.id){
                singlePhone = currentPhone
            }
        })
        res.status(200).json(singlePhone)

    } catch (err){
        console.error(err)
        res.status(500).json(err)
    }
})

module.exports = router