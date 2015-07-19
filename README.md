# A simple proxy to circumvent the SOP

A simple Node.js proxy to aid front-end development with a remote API without CORS headers. It serves the files in-place, and URL patterns can be defined that will be proxied to a remote host. This way even if the remote API does not have CORS headers set (so the Same Origin Policy blocks the browser from accessing), the request will go through.

For an added benefit, it is compatible with Heroku out-of-the box.

* Live demo: https://a-simple-proxy-sop-sample.herokuapp.com

## Usage

Just install the dependencies and start the sample app:

* _npm install_
* _npm start_
* _http://localhost:8080_

## Customize

Just edit server.js and change the paths and the apiServerHost variables to suit your use case.

* _paths_: The URL pattern that will be proxied to the remote API
* _apiServerHost_: The remote API
