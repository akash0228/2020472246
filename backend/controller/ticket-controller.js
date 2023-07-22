const axios=require('axios');

module.exports.getAllTrains=async(req,res)=>{
    try {
        const config = {
            headers: {
              'Authorization': ''
            }
        }
        const Alltrains= await axios.get("http://20.244.56.144/train/trains",config);
        return res.status(200).json(Alltrains);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports.getTrainByNumber=async(req,res)=>{
    try {
        const number = req.params.number;
        const config = {
            headers: {
              'Authorization': ''
            }
        }
        const train= await axios.get(`http://20.244.56.144/train/trains/${number}`,config);
        return res.status(200).json(train);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}
