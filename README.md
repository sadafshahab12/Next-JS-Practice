if we do not want to show root layout in out dashboard page what to do , 
then we create route group to separate rootlayout and dashboard layout
route group is used for organized code and secong thing to separate layout for different pages without effecting the url
Route Group  --> Manage route segement and render properly
---------------
error handling --> error.tsx can make for every file,
global-error.tsx --> for global error 
Loading
data fetching
2 methods of data fetching

traditional way (useEffect)
server side fetching
ServerComponent hmr Cache

server side fetching --> few lines of code --> improve initial load time, better seo,simplified logic,improve security ,
 automatic request deduplication --> reduce unnecessary api calls if there is same data request send to server multiple time it will make just one api call to server, it will just send one request , .

 client side data fetching --> leads to  network waterfall (requests are made sequentially)
 server side --> reduce network waterfall and request can be parallelized

 static side generation : html page generated  build time
 incremental static regeneration : extension of ssg --> allows update static ocntent after building site