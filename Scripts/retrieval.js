var retrievalPromise = d3.json("../employee.json");

var successFCN = function(allEmployees){
    console.log(allEmployees);
    d3.selectAll("body")
    .text("employees");
}

var failFCN = function(errorMsg) {
    console.log("Something went wrong",errorMsg);
    d3.selectAll("body")
    .text("Something went wrong");
}

retrievalPromise.then(successFCN,failFCN);
