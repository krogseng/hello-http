#Hello HTTP
## A simple Node.js HTTP server. 
###This server will respond with a greeting if the method is GET if path is /greeting/<name>.
  * If query string specifies `salutation` that will be used for the greeting salutation
  * If name is not included, "stranger" will be used for name in greeting
* Response is an interesting (to me) fact about HTTP if the method is GET and the url (path) is `/fact`
* Any other request returns status code 404 Not Found and includes the text: `CANNOT <verb> <path>`
* Add a `README.md` that describes how to use your API 
##How to use this API
###I'll let you know when I know.