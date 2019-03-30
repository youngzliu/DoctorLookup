export class DoctorLookup{
  getDoctorInfo(condition, name, distance, perPage, skip = 0){
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${condition}&location=45.52%2C%20-122.68%2C%20${distance}&user_location=45.52%2C%20-122.68&sort=distance-asc&skip=${skip}&limit=${perPage}&user_key=${process.env.apiKey}`;
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

  getClosestPractice(practices){
    let closest = practices[0];
    practices.forEach(function(practice){
      if(practice.distance < closest.distance){
        closest = practice;
      }
    });
    return closest;
  }
}
