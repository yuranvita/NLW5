import {http} from './http';
import "./websocket/client";
import "./websocket/admin";

const port = 3333;

http.listen(port , () => {console.log(`server is running on ${port} `)});


