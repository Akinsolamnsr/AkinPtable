import connectDB from '../../components/Schema/mongodb'
import User from '../../components/Schema/shema'
import GamesList from '../../components/Schema/ListSchema'
 async function handler (req, res) {
  const { method } = req
 
  
  switch (method) {
    case 'POST':
      try {
       const data=JSON.parse(req.body)
      const {timeUpdate,status,type,name}=data
      const filter={name}
       switch(type){

     
       case "arrange":
          if(status==="Twenty"){
            const update={$set: {"Games.Arrange.fst":timeUpdate}}
             GamesList.findOne({name},async(err,doc)=>{
              if(err) console.log(err)
              else{
                if(doc.Games.Arrange.fst<=5000  ){
                  await GamesList.findOneAndUpdate(filter,update,{new:true})  
                  res.status(201).json({ success: true,update:true})
                }
               else if(doc.Games.Arrange.fst<=timeUpdate  ){
                  res.status(201).json({ success: true,update:false})
                }
                else{
                  await GamesList.findOneAndUpdate(filter,update,{new:true})
                  res.status(201).json({ success: true,update:true})
                }
              }
            })
           
          }
         else if(status==="Forty"){
           const update={$set: {"Games.Arrange.scd":timeUpdate}}
           GamesList.findOne({name},async(err,doc)=>{
            if(err) console.log(err)
            else{
              if(doc.Games.Arrange.scd<=5000){
                await GamesList.findOneAndUpdate(filter,update,{new:true})
                res.status(201).json({ success: true,update:true})
              }
             else if(doc.Games.Arrange.scd<=timeUpdate){
                res.status(201).json({ success: true,update:false})
              }
              else{
                await GamesList.findOneAndUpdate(filter,update,{new:true})
                res.status(201).json({ success: true,update:true})
              }
            }
          })
          }
          else{
            const update={$set: {"Games.Arrange.thd":timeUpdate}}
            GamesList.findOne({name},async(err,doc)=>{
              if(err) console.log(err)
              else{
                if(doc.Games.Arrange.thd<=5000){
                  await GamesList.findOneAndUpdate(filter,update,{new:true})
                  res.status(201).json({ success: true,update:true})
                }
               else if(doc.Games.Arrange.thd<=timeUpdate){
                  res.status(201).json({ success: true,update:false})
                }
                else{
                  await GamesList.findOneAndUpdate(filter,update,{new:true})
                  res.status(201).json({ success: true,update:true})
                }
              }
            })
          }
         break;
      
     
         case "ElementFit":
       
          if(status==="Twenty"){
            const update={$set: {"Games.ElementFit.fst":timeUpdate}}
            GamesList.findOne({name},async(err,doc)=>{
             if(err){ console.log(err)}
             else{
              console.log(doc)
               if(doc.Games.ElementFit.fst<=5000){
               const rest=  await GamesList.findOneAndUpdate(filter,update,{new:true})
             
                 res.status(201).json({ success: true,update:true})
               }
              else if(doc.Games.ElementFit.fst<=timeUpdate){     
               
                 res.status(201).json({ success: true,update:false})
               }
               else{
                 await GamesList.findOneAndUpdate(filter,update,{new:true})
                 res.status(201).json({ success: true,update:true})
               }
             }
           })
          }
         else if(status==="Forty"){
           const update={$set: {"Games.ElementFit.scd":timeUpdate}}
           GamesList.findOne({filter},async(err,doc)=>{
            if(err) console.log(err)
            else{
              if(doc.Games.ElementFit.scd<=5000){
                await GamesList.findOneAndUpdate(filter,update,{new:true})
                res.status(201).json({ success: true,update:true})
              }
             else if(doc.Games.ElementFit.scd<=timeUpdate){
                res.status(201).json({ success: true,update:false})
              }
              else{
                await GamesList.findOneAndUpdate(filter,update,{new:true})
                res.status(201).json({ success: true,update:true})
              }
            }
          })
          }
          else{
            const update={$set: {"Games.ElementFit.thd":timeUpdate}}
            GamesList.findOne({filter},async(err,doc)=>{
              if(err) console.log(err)
              else{
                if(doc.Games.ElementFit.thd<=5000){
                  await GamesList.findOneAndUpdate(filter,update,{new:true})
                  res.status(201).json({ success: true,update:true})
                }
               else if(doc.Games.ElementFit.thd<=timeUpdate){
                  res.status(201).json({ success: true,update:false})
                }
                else{
                  await GamesList.findOneAndUpdate(filter,update,{new:true})
                  res.status(201).json({ success: true,update:true})
                }
              }
            })
          }
         break;
       

           
         
         case "Energy":
          if(status==="Twenty"){
            const update={$set: {"Games.EnergyLevel.fst":timeUpdate}}
             GamesList.findOne({name},async(err,doc)=>{
              if(err) console.log(err)
              else{
                if(doc.Games.EnergyLevel.fst<=5000  ){
                  await GamesList.findOneAndUpdate(filter,update,{new:true})
                  res.status(201).json({ success: true,update:true})
                }
               else if(doc.Games.EnergyLevel.fst<=timeUpdate  ){
                  res.status(201).json({ success: true,update:false})
                }
                else{
                  await GamesList.findOneAndUpdate(filter,update,{new:true})
                  res.status(201).json({ success: true,update:true})
                }
              }
            })
           
          }
         else if(status==="Forty"){
           const update={$set: {"Games.EnergyLevel.scd":timeUpdate}}
           GamesList.findOne({filter},async(err,doc)=>{
            if(err) console.log(err)
            else{
              if(doc.Games.EnergyLevel.scd<=5000){
                await GamesList.findOneAndUpdate(filter,update,{new:true})
                res.status(201).json({ success: true,update:true})
              }
             else if(doc.Games.EnergyLevel.scd<=timeUpdate){
                res.status(201).json({ success: true,update:false})
              }
              else{
                await GamesList.findOneAndUpdate(filter,update,{new:true})
                res.status(201).json({ success: true,update:true})
              }
            }
          })
          }
          else{
            const update={$set: {"Games.EnergyLevel.thd":timeUpdate}}
            GamesList.findOne({name},async(err,doc)=>{
              if(err) console.log(err)
              else{
                if(doc.Games.EnergyLevel.thd<=5000){
                  await GamesList.findOneAndUpdate(filter,update,{new:true})
                  res.status(201).json({ success: true,update:true})
                }
               else if(doc.Games.EnergyLevel.thd<=timeUpdate){
                  res.status(201).json({ success: true,update:false})
                }
                else{
                  await GamesList.findOneAndUpdate(filter,update,{new:true})
                  res.status(201).json({ success: true,update:true})
                }
              }
            })
          }  
         break;
        
       
        
        
         case "Configure":
          if(status==="Twenty"){
            const update={$set: {"Games.Configuration.fst":timeUpdate}}
             GamesList.findOne({name},async(err,doc)=>{
              if(err) console.log(err)
              else{
                if(doc.Games.Configuration.fst<=5000  ){
                  await GamesList.findOneAndUpdate(filter,update,{new:true})
                  res.status(201).json({ success: true,update:true})
                }
               else if(doc.Games.Configuration.fst<=timeUpdate  ){
                  res.status(201).json({ success: true,update:false})
                }
                else{
                  await GamesList.findOneAndUpdate(filter,update,{new:true})
                  res.status(201).json({ success: true,update:true})
                }
              }
            })
           
          }
         else if(status==="Forty"){
           const update={$set: {"Games.Configuration.scd":timeUpdate}}
           GamesList.findOne({name},async(err,doc)=>{
            if(err) console.log(err)
            else{
              if(doc.Games.Configuration.scd<=5000){
                await GamesList.findOneAndUpdate(filter,update,{new:true})
                res.status(201).json({ success: true,update:true})
              }
             else if(doc.Games.Configuration.scd<=timeUpdate){
                res.status(201).json({ success: true,update:false})
              }
              else{
                await GamesList.findOneAndUpdate(filter,update,{new:true})
                res.status(201).json({ success: true,update:true})
              }
            }
          })
          }
          else{
            const update={$set: {"Games.Configuration.thd":timeUpdate}}
            GamesList.findOne({name},async(err,doc)=>{
              if(err) console.log(err)
              else{
                if(doc.Games.Configuration.thd<=5000){
                  await GamesList.findOneAndUpdate(filter,update,{new:true})
                  res.status(201).json({ success: true,update:true})
                }
               else if(doc.Games.Configuration.thd<=timeUpdate){
                  res.status(201).json({ success: true,update:false})
                }
                else{
                  await GamesList.findOneAndUpdate(filter,update,{new:true})
                  res.status(201).json({ success: true,update:true})
                }
              }
            })
          }
         break;
        
        
        
         
        
         case "Block":  
          const update2={$set: {"Games.Block.pos":timeUpdate}}
          GamesList.findOne({name},async(err,doc)=>{
            if(err) console.log(err)
            else{
              if(doc.Games.Block.pos<=5000){
                await GamesList.findOneAndUpdate(filter,update2,{new:true})
                res.status(201).json({ success: true,update:false})
              }
             else if(doc.Games.Block.pos<=timeUpdate){
                res.status(201).json({ success: true,update:false})
              }
              else{
                await GamesList.findOneAndUpdate(filter,update2,{new:true})
                res.status(201).json({ success: true,update:true})
              }
            }
          })
         break;   
         
       
         
         case "family":
          const update3={$set: {"Games.Family.pos":timeUpdate}}
          GamesList.findOne({name},async(err,doc)=>{
            if(err) console.log(err)
            else{
              if(doc.Games.Family.pos<=5000){
                await GamesList.findOneAndUpdate(filter,update3,{new:true})
                res.status(201).json({ success: true,update:false})
              }
              else if(doc.Games.Family.pos<=timeUpdate){
                res.status(201).json({ success: true,update:false})
              }
              else{
                await GamesList.findOneAndUpdate(filter,update3,{new:true})
                res.status(201).json({ success: true,update:true})
              }
            }
          })
         break;
         
         
         case "trend":
          const update4={$set: {"Games.Trend.pos":timeUpdate}}
          console.log(name)
          GamesList.findOne({name},async(err,doc)=>{
            if(err) console.log(err)
            else{
              if(doc.Games.Trend.pos<5000){
               const result= await GamesList.findOneAndUpdate(filter,update4,{new:true})
              return  res.status(201).json({ success: true,update:true})
                 
              }
              else if(doc.Games.Trend.pos<=timeUpdate){
               return res.status(201).json({ success: true,update:false})
                
                
              }   
              else{
                await GamesList.findOneAndUpdate(filter,update4,{new:true})
               return res.status(201).json({ success: true,update:true})
              }
            }
          })
         break;
       
     
       
       
         default:    
         throw new Error()
      }     
      
       // const singleUser=await  GamesList.findOne({name:"Archinsio dex"})
        //res.status(201).json({ success: true, data:req.body })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}

export default connectDB(handler);