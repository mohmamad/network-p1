

function myFunction(l , v1 , v2 , v3 , v4 , v5) {
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

    var y = document.createElement("TD");
    y.setAttribute("id", "myTr4");
    document.getElementById("myTable").appendChild(y);

    var y = document.createElement("TD");
    y.setAttribute("id", "myTr5");
    document.getElementById("myTable").appendChild(y);

    ////////////////////////////////////////////////
    var z = document.createElement("TR");
    var t = document.createTextNode("Index");
    z.appendChild(t);
    document.getElementById("myTr0").appendChild(z);
  
    var z = document.createElement("TR");
    var t = document.createTextNode("TCP Connection State");
    z.appendChild(t);
    document.getElementById("myTr1").appendChild(z);

    
    var z = document.createElement("TR");
    var t = document.createTextNode("TCP Connection Local Address");
    z.appendChild(t);
    document.getElementById("myTr2").appendChild(z);

    
    var z = document.createElement("TR");
    var t = document.createTextNode("TCP Connection Local Port");
    z.appendChild(t);
    document.getElementById("myTr3").appendChild(z);

    var z = document.createElement("TR");
    var t = document.createTextNode("TCP Connection Remote Address");
    z.appendChild(t);
    document.getElementById("myTr4").appendChild(z);

    var z = document.createElement("TR");
    var t = document.createTextNode("TCP Connection Remote Port");
    z.appendChild(t);
    document.getElementById("myTr5").appendChild(z);
    ////////////////////////////////////////////////
  
    for(let i = 0 ; i < l ; i++){
        var z = document.createElement("TR");
    var t = document.createTextNode(i);
    z.appendChild(t);
    document.getElementById("myTr0").appendChild(z);
  
    var z = document.createElement("TR");
    var t = document.createTextNode(v1[i].split("INTEGER:")[1]);
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

    var z = document.createElement("TR");
    var t = document.createTextNode(v4[i].split("IpAddress:")[1]);
    z.appendChild(t);
    document.getElementById("myTr4").appendChild(z);

    var z = document.createElement("TR");
    var t = document.createTextNode(v5[i].split("INTEGER:")[1]);
    z.appendChild(t);
    document.getElementById("myTr5").appendChild(z);
    }

   


    
  }

fetch("Display_tcp.php")
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
             x = data
             // x = data;
            //  const myJSON = '["Ford", "BMW", "Fiat"]';
            //  const myArray = JSON.parse(myJSON);
             // console.log(x);
             
             // for(let i = 0 ; i < x[0].length ; i++){
              myFunction(x[0].length , x[0], x[1] , x[2] , x[3] , x[4]);
            
             // }
              
        })
        .catch((error) => {
             // This is where you handle errors.
        });
       