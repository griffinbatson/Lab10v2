



var callingCards = d3.json("../employee.json")

         var getImg = function(employee){
         return employee.photo
     } 

 var successFCN = function(employees){
     console.log(employees);
     
     var divEmployee = d3.select("body")
     .selectAll("div")
     .data(employees)
     .enter()
     .append("div")
     .attr("class", "employee");
     
     
    var divGeneral = divEmployee.append("div")
    .attr("class", "general");
     
    var nameSpan = divGeneral.append("span")
    .attr("class", "eName")
    .text(function(name){
            return name.firstName+" "+name.lastName});
        
     
    var photo = divGeneral.append("img")
    .attr("src", getImg);
    
    
    var divDetail = divEmployee.append("div")
     .attr("class", "detail");
    
     var titleSpan = divDetail.append("span")
     .attr("class", "title")
     .text(function(employee){
         return employee.title
     });
     
     var departmentSpan = divDetail.append("span")
     .attr("class", "department")
     .text(function(employee){
         return employee.unit
     });
     
     var emailSpan = divDetail.append("span")
     .attr("class", "email")
     .text(function(employee){
         return employee.email
     });
     
     var bioP = divDetail.append("p")
     .attr("class", "bio")
     .text(function(employee){
         return employee.bio
     });
       
 }
 
    
var failFCN = function(errorMsg) {
    console.log("Something went wrong",errorMsg);
    d3.selectAll("body")
    .text("Something went wrong");
}

callingCards.then(successFCN,failFCN);
