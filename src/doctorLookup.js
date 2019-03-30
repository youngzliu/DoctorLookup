export class DoctorLookup{
  getDoctorInfo(condition, name, distance, skip = 0){
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      if(distance === ""){
        distance = 1;
      }
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${condition}&location=45.52%2C%20-122.68%2C%20${distance}&user_location=45.52%2C%20-122.68&sort=distance-asc&skip=${skip}&limit=5&user_key=${process.env.apiKey}`
      console.log(url);
      request.onload = function(){
        if(this.status === 200){
          resolve(request.response);
        }
        else{
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
