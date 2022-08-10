const express = require('express');
const cors = require("cors")


const app = express();
const PORT = process.env.PORT || 4000;


app.use(cors())
app.use(express.json())

const parcels =[
    {
        id: 1,
        product: "Washing machine",
        description: "LG Washing Machine",
        deliveryDate: "10/08/2022",
    },
    {
        id: 2,
        product: "Sewing Machine",
        description: "Two lion sewing machine domestic",
        deliveryDate: "08/08/2022",

    },
    {
        id: 3,
        product: "steam iron",
        description: "Philips steam iron",
        deliveryDate: "01/07/2022",
    },
    {
        id: 4,
        product: "Air conditioner",
        description: "TCL 1.5HP Air conditioner",
        deliveryDate: "02/06/2022"
    }
]

app.get('/parcels', (req, res) => {
    res.json({
        data: parcels
        
    })
})

app.get('/parcels/:id' , (req, res) => {
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

app.post('/parcels', (req, res) => {
    const parcel = req.body;
    try{
        parcels.push(parcel);
        res.status(201).json({data: parcel})

    }
    catch(err){
        res.status(400).json

    }
        
 })

app.listen(PORT, () => {
    console.log(`connected to PORT ${PORT}`);
});