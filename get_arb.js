

function myFunction(l , v1 , v2 , v3) {
    var x = document.createElement("TABLE");
    x.setAttribute("id", "myTable");
    document.body.appendChild(x);

    var y = document.createElement("TD");
    y.setAttribute("id", "myTr0");
    document.getElementById("myTable").appendChild(y);
  
    var y = document.createElement("TD");
    y.setAttribute("id", "myTr1");
    document.getElementById("myTable").appendChild(y);

    var y = document.createElement("TD");
    y.setAttribute("id", "myTr2");
    document.getElementById("myTable").appendChild(y);

    var y = document.createElement("TD");
    y.setAttribute("id", "myTr3");
    document.getElementById("myTable").appendChild(y);


    ////////////////////////////////////////////////
    var z = document.createElement("TR");
    var t = document.createTextNode("Index");
    z.appendChild(t);
    document.getElementById("myTr0").appendChild(z);
  
    var z = document.createElement("TR");
    var t = document.createTextNode("MAC");
    z.appendChild(t);
    document.getElementById("myTr1").appendChild(z);

    
    var z = document.createElement("TR");
    var t = document.createTextNode("IP");
    z.appendChild(t);
    document.getElementById("myTr2").appendChild(z);

    
    var z = document.createElement("TR");
    var t = document.createTextNode("Type");
    z.appendChild(t);
    document.getElementById("myTr3").appendChild(z);

    ////////////////////////////////////////////////
  
    for(let i = 0 ; i < l ; i++){
        var z = document.createElement("TR");
    var t = document.createTextNode(i);
    z.appendChild(t);
    document.getElementById("myTr0").appendChild(z);
  
    var z = document.createElement("TR");
    var t = document.createTextNode(v1[i].split("Hex-STRING:")[1]);
    z.appendChild(t);
    document.getElementById("myTr1").appendChild(z);

    
    var z = document.createElement("TR");
    var t = document.createTextNode(v2[i].split("IpAddress:")[1]);
    z.appendChild(t);
    document.getElementById("myTr2").appendChild(z);

    
    var z = document.createElement("TR");
    var t = document.createTextNode(v3[i].split("INTEGER:")[1]);
    z.appendChild(t);
    document.getElementById("myTr3").appendChild(z);

    }

   


    
  }
 // console.log("hi");
fetch("Display_arb.php")
        .then((response) => {
            if(!response.ok){ // Before parsing (i.e. decoding) the JSON data,
                              // check for any errors.
                // In case of an error, throw.
                throw new Error("Something went wrong!");
            }

            return response.json(); // Parse the JSON data.
        })
        .then((data) => {
             // This is where you handle what to do with the response.
             x = data;
             // x = data;
            //  const myJSON = '["Ford", "BMW", "Fiat"]';
            //  const myArray = JSON.parse(myJSON);
              console.log(x);
              console.log("hi");
             // for(let i = 0 ; i < x[0].length ; i++){
              myFunction(x[0].length , x[0], x[1] , x[2]);
            
             // }
              
        })
        .catch((error) => {
             // This is where you handle errors.
             console.log("error");
        });
       