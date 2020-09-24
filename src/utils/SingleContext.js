import React from "react";

const SingleContext = React.createContext([{
    id: "",
    type: "",
    name: "",
    url: "",
    img: "",
    deploy: "",
    isDone: true
}]);

export default SingleContext;
