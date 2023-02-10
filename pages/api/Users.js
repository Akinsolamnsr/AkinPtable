import connectDB from '../../components/Schema/mongodb'
import User from '../../components/Schema/shema'
import GamesList from '../../components/Schema/ListSchema'
 async function handler (req, res) {
  const { method } = req
  const lst=[]
  const userN = await User.find({})
  const update={
      Arrange:{
          fst:0,
          scd:0,
          thd:0
      },
      ElementFit:{
          fst:0,
          scd:0,
          thd:0
      },
      EnergyLevel:{
          fst:0,
          scd:0,
          thd:0
      },
      Configuration:{
          fst:0,
          scd:0,
          thd:0
      },
      Family:{
          pos:0
      },
      Block:{
          pos:0
      },
      Trend:{
          pos:0
      },
    }
  userN.forEach(async(element) => {
   User.findOne({name:element.name},async function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
      const nms1=  await GamesList.findOne({name:docs.name})
      if(nms1) return
      
        else{
          const nms=  await GamesList.create({
            name:docs.name,
            Games:update
          })

         await  nms.save()
        }
    }
});

  });
  
  switch (method) {
    case 'GET':
      try {
        const users = await GamesList.find({})
        res.status(200).json({ success: true, data:users})
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const user = await User.create(req.body)
        res.status(201).json({ success: true, data: "" })
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