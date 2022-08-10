const express = require('express');
const cors = require("cors")


const app = express();
const PORT = process.env.PORT || 4000;


app.use(cors())

const parcels =[
    {
        Id: 1,
        product: "Washing machine",
        description: "LG Washing Machine",
        deliveryDate: "10/08/2022",
    },
    {
        Id: 2,
        product: "Sewing Machine",
        description: "Two lion sewing machine domestic",
        deliveryDate: "08/08/2022",

    },
    {
        Id: 3,
        product: "steam iron",
        description: "Philips steam iron",
        deliveryDate: "01/07/2022",
    },
    {
        Id: 4,
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

app.listen(PORT, () => {
    console.log(`connected to PORT ${PORT}`);
});