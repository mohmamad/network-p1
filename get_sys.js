var x = "hi";
var eD = "hi";
var tmp = "hi";
var hard = "aa";
var soft = "asd"
function setContact(){
    var t = document.getElementById("con").value;
     console.log(t);
     
    
}
function setName(){
    var t = document.getElementById("name").value;
     console.log(t);
    
}
function setLocation(){
    var t = document.getElementById("loc").value;
     console.log(t);
}

    const get_API = async()=>{
        const result = await fetch("Display_sys_group.php")
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
               tmp = x[0].split("-");
               hard = tmp[0].split('STRING: "')[1];
               soft = tmp[1].split("SOFTWARE:")
              console.log(data);
             
              document.getElementById("sysDh").innerText = hard;
              document.getElementById("sysDs").innerText = soft;
              document.getElementById("sysO").innerText = x[1];
              document.getElementById("sysT").innerText = "UP Time: "+x[2];
              document.getElementById("sysC").innerText = "Contact: "+x[3];
              document.getElementById("sysN").innerText = "Name: " + x[4].split("STRING:")[1];
              document.getElementById("sysL").innerText = "Location: "+x[5];
              document.getElementById("sysS").innerText = "Services: "+x[6];
        })
        .catch((error) => {
             // This is where you handle errors.
        });
        //document.getElementById("con").Value
       // console.log("asd");
       // document.getElementById("btnC").onclick = "setContact()";
       
    //    Response.Write(JSON.stringify("asd"))

    }
    get_API();
       

