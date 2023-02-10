import mongoose from 'mongoose'



export const GameSchema = new mongoose.Schema({
   name:String,
  Games: {
    Arrange:{
        fst:Number,
        scd:Number,
        thd:Number
    },
    ElementFit:{
        fst:Number,
        scd:Number,
        thd:Number
    },
    EnergyLevel:{
        fst:Number,
        scd:Number,
        thd:Number
    },
    Configuration:{
        fst:Number,
        scd:Number,
        thd:Number
    },
    Family:{
        pos:Number
    },
    Block:{
        pos:Number
    },
    Trend:{
        pos:Number
    },
  },
})

module.exports = mongoose.models.GamesList || mongoose.model('GamesList', GameSchema )