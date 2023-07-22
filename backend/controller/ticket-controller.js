const axios=require('axios');
const dotenv=require('dotenv');

const sortTrain=(data)=>{
    const allTrains=data.allTrains;
    const type=data.type;

    const filteredTrains=allTrains.filter((train)=>{
        const currentTime=new Date();
        const departureTime=new Date(currentTime.getFullYear(),
        currentTime.getMonth(),
        currentTime.getDate(),
        train.departureTime.Hours,
        train.departureTime.Minutes,
        train.departureTime.Seconds);

        departureTime.setMinutes(departureTime.getMinutes() + train.delayedBy);

        const timeDifference = (departureTime - currentTime) / (1000 * 60);

        return timeDifference > 30 && timeDifference <= 720;
    });


    filteredTrains.sort((a, b) => {
        if(type==="AC"){
            if (a.price.AC !== b.price.AC) {
                return a.price.AC - b.price.AC; // Ascending order of price
              } else {
                // If prices are the same, compare the departure times
                const aDepartureTime = new Date(
                  new Date().setHours(a.departureTime.hour, a.departureTime.minute, a.departureTime.second)
                );
                const bDepartureTime = new Date(
                  new Date().setHours(b.departureTime.hour, b.departureTime.minute, b.departureTime.second)
                );
            
                if (aDepartureTime.getTime() !== bDepartureTime.getTime()) {
                  return aDepartureTime - bDepartureTime; // Ascending order of time
                } else {
                  // If times are the same, sort in descending order of departure time
                  return bDepartureTime - aDepartureTime;
                }
              }
        }
        else{
            if (a.price.sleeper !== b.price.sleeper) {
                return a.price.sleeper - b.price.sleeper; // Ascending order of price
              } else {
                // If prices are the same, compare the departure times
                const aDepartureTime = new Date(
                  new Date().setHours(a.departureTime.hour, a.departureTime.minute, a.departureTime.second)
                );
                const bDepartureTime = new Date(
                  new Date().setHours(b.departureTime.hour, b.departureTime.minute, b.departureTime.second)
                );
            
                if (aDepartureTime.getTime() !== bDepartureTime.getTime()) {
                  return aDepartureTime - bDepartureTime; // Ascending order of time
                } else {
                  // If times are the same, sort in descending order of departure time
                  return bDepartureTime - aDepartureTime;
                }
              }
        }
        
      });

    return filteredTrains;
}

const getAuthorisation=async()=>{
    try{
        const param={
            "companyName": "Train Central",
            "clientID": "2285fd74-062c-46e4-b704-b8be7b076429",
            "clientSecret": "zKVGeninyrTgqubN",
            "ownerName": "Akash",
            "ownerEmail": "2020472246.akash@ug.sharda.ac.in",
            "rollNo":"2020472246"
        };
        const response=await axios.post("http://20.244.56.144/train/auth",param);
        const access_token=response.data.access_token;
        return access_token;
    }
    catch(error){
        return null;
    }
}

module.exports.getAllTrains=async(req,res)=>{
    try {
        const type=req.params.type;
        const token=await getAuthorisation();
        if(token==null){
            return res.status(500).json("Authorisation revoked");
        }
        const config = {
            headers: {
              'Authorization': `Bearer ${token}`
            }
        }
        const response= await axios.get("http://20.244.56.144/train/trains",config);
        const data={
            allTrains:response.data,
            type
        };
        const filteredTrains=sortTrain(data);
        return res.status(200).json(filteredTrains);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports.getTrainByNumber=async(req,res)=>{
    try {
        const number = req.params.number;
        const token=await getAuthorisation();
        if(token==null){
            return res.status(500).json("Authorisation revoked");
        }
        const config = {
            headers: {
              'Authorization': `Bearer ${token}`
            }
        }
        const response= await axios.get(`http://20.244.56.144/train/trains/${number}`,config);
        const train=response.data;
        return res.status(200).json(train);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}
