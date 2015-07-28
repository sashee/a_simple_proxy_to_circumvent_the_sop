# A simple proxy to circumvent the SOP

A simple Node.js proxy to aid front-end development with a remote API without CORS headers. It serves the files in-place, and URL patterns can be defined that will be proxied to a remote host. This way even if the remote API does not have CORS headers set (so the Same Origin Policy blocks the browser from accessing), the request will go through.

For an added benefit, it is compatible with Heroku out-of-the box.

* Live demo: https://a-simple-proxy-sop-sample.herokuapp.com
* The associated blog post: https://advancedweb.hu/2015/07/28/a_simple_proxy_to_circumvent_the_sop/

## Sample code

The sample index.html uses utilizes http://echo.httpkit.com to get back the _user-agent_ header of the request and show it in the page. Since httpkit does not set the CORS headers, an AJAX call directly to it would fail because of the SOP.

## Usage

Just install the dependencies and start the sample app:

* _npm install_
* _npm start_
* _http://localhost:8080_

## Customize

Just edit server.js and change the paths and the apiServerHost variables to suit your use case.

* _paths_: The URL pattern that will be proxied to the remote API
* _apiServerHost_: The remote API
