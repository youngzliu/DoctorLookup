export class DoctorLookup{
  getDoctorInfo(condition, name, skip = 0){
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${condition}&user_location=45.52%2C%20-122.68&sort=distance-asc&skip=${skip}&limit=10&user_key=${process.env.apiKey}`;
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
