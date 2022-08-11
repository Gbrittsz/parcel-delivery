const express = require('express');

const router = express.Router();


const parcels =[
    {
        id: 1,
        product: "Washing machine",
        description: "LG Washing Machine",
        deliveryDate: new Date()
    },
    {
        id: 2,
        product: "Sewing Machine",
        description: "Two lion sewing machine domestic",
        deliveryDate: new Date()

    },
    {
        id: 3,
        product: "steam iron",
        description: "Philips steam iron",
        deliveryDate: new Date()
    },
    {
        id: 4,
        product: "Air conditioner",
        description: "TCL 1.5HP Air conditioner",
        deliveryDate: new Date()
    }
];

router.get('/', (req, res) => {
    res.json({
        data: parcels
        
    })
})

router.get('/:id' , (req, res) => {
    const { id } = req.params;
    console.log('Id ', id)
    let found = parcels.find((parcel) => parcel.id === parseInt(id) )
    if (found){
        res.status(200).json({data: found})
    }
    else{
        res.sendStatus(400)
    }
});

router.post('/', (req, res) => {
    const parcel = req.body;
    try{
        parcels.push(parcel);
        res.status(201).json({data: parcel})

    }
    catch(err){
        res.status(400).json

    }
        
})


 router.put('/:parcelId/edit', (req, res) => {
    let found = parcels.find((parcel) => {
        return parcel.id === parseInt(req.params.parcelId)
    }); 

    if (found){
        let updated = {
            id: found.id,
            product: req.body.product,
            deliveryDate: new Date()
        };


        let targetIndex = parcels.indexOf(found);

        parcels.splice(targetIndex, 1, updated);
        res.sendStatus(204)

    }

    else
    res.sendStatus(400);
 });



 router.delete('/:parcelId/cancel', (req, res) => {
    let found = parcels.find((parcel) => {
        return parcel.id === parseInt(req.params.parcelId)
    });
    if (found){
        let targetIndex = parcels.indexOf(found);
        parcels.splice(targetIndex, 1)
        res.statusCode(204);
    }
    else{
        res.sendStatus(400)
        }
 })

 module.exports = router;