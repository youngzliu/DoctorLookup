# _Doctor Lookup_

#### _Doctor Lookup Website for Epicodus, 3.30.2019_

#### By _**Young Liu**_

## Description

_This website will allow the user to look up information about nearby doctors._

## Specifications

* _Website will check that at least one of either condition or doctor name has been entered._
  * _Example input: User does not enter either a condition or name._
  * _Example output: Form validation message will be displayed._
* _Website will search the BetterDoctor API based on an inputted condition._
  * _Example input: User enters their condition/symptom they are suffering from._
  * _Example output: Results will be returned based on that condition._
* _Website will search the BetterDoctor API based on an inputted doctor name._
  * _Example input: User inputs a name._
  * _Example output: Doctors matching that name will be returned._
* _Website will search the BetterDoctor API based on both an inputted doctor name and condition._
  * _Example input: User enters a doctor name and a condition._
  * _Example output: Results will be returned based on both those specifications._
* _Website will default a search to a 100 mile radius (around Portland, OR)_
  * _Example input: User enters information to search._
  * _Example output: All doctors matching that query with a practice within 100 miles will be returned._
* _Website will allow users to specify a search distance (around Portland, OR)._
  * _Example input: User enters a search distance ._
  * _Example output: All doctors matching that query with a practice within the specified search distance will be returned._
* _Website will display an error message if the API call is not successful._
  * _Example input: User requests a search, but the API call is not successful._
  * _Example output: The error message of the failed API call will be displayed._
* _Website will display a message telling the user there are no matches if no doctors match their conditions._
  * _Example input: User requests a search that doesn't match any doctors._
  * _Example output: Website will display a message telling the user that no doctors match their query._
* _Website will display the doctors name, closest practice, and the address, phone number, website, acceptance status, and distance from user of that practice._
  * _Example input: User enters a query._
  * _Example output: Website will display the doctors that match that query, with their closest practice, and the address, phone number, website, acceptance status, and distance from user of that practice._
* _Website will allow users to click the Next button to view more results, if they exist._
  * _Example input: User clicks the next button after searching for a result._
  * _Example output: The next 10 results are displayed._
* _Website will allow users to click the Previous button to view previous results, if they exist._
  * _Example input: User clicks the previous button after searching for a result._
  * _Example output: The previous 10 results are displayed._
* _Website will display the current page number of the search results that the user is on._
  * _Example input: User requests a search._
  * _Example output: Website displays that they are on page 1 of 10 of the results._

## Setup/Installation Requirements

* _Clone this Repository ($ git clone https://github.com/youngzliu/DoctorLookup name)_
* _Change into the work directory ($ cd DoctorLookup)_
* _To edit the project, open the project in your preferred text editor._
* _To run the website, navigate to the directory of DoctorLookup, and then install, build and start ($ cd SuperGalaxyAgeCalculator;
  $ npm install; $ npm run build; $ npm run start)_
  * _Then navigate to http://localhost:8080 on your browser of choice._

## Support and contact details

_For support find me at Epicodus._

## Technologies Used

_This website was created using Node.js, Node.js package manager, Webpack, ES6, Bootstrap, CSS, HTMl, UglifyJS, ESLint, jQuery, Jasmine, Karma, Babel, Dotenv, and the BetterDoctor API._

### License

*MIT License*

*Copyright (c) 2019 Young Liu*

*Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:*

*The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.*

*THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*
