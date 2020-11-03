var tablePromise = d3.json("../employee.json");

var getImage = function(employee){
    return employee.photo;
}

var successFCN = function(employees){
    console.log(employees);
        var row = d3.select("tbody") .selectAll("tr")
        .data(employees)
        .enter()
        .append("tr")
        
        row.append("td")
            .text(function(name){
            return name.firstName+" "+name.lastName
        });
        row.append("td")
            .append("img")
            .attr("src", getImage);
        row.append("td")
            .text(function(info){
            return info.title+" "+info.unit
        });
        row.append("td")
            .text(function(contact){
            return contact.email
        });
        row.append("td")
            .text(function(contact){
            return contact.phone
        });
        row.append("td")
            .text(function(bio){
            return bio.bio
        });
}

var failFCN = function(errorMsg){
    console.log("Something went wrong", errorMsg);
    d3.selectAll("body")
    .text("Something went wrong");

}

tablePromise.then(successFCN, failFCN)