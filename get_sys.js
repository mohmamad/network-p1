var x = "hi";
var eD = "hi";
var tmp = "hi";
var hard = "aa";
var soft = "asd"
function setContact(){
    var data = document.getElementById("con").value;
    set_contact(data)
    setTimeout(()=>{
        document.location.reload();
    },2000)
}
function setName(){
    var data = document.getElementById("name").value;
    set_name(data)
    setTimeout(()=>{
        document.location.reload();
    },2000)
    
}
function setLocation(){
    var data = document.getElementById("loc").value;
    set_location(data)
    setTimeout(()=>{
        document.location.reload();
    },2000)
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
            console.log(data)
             // This is where you handle what to do with the response.
              x = data;
               tmp = x[0].split("-");
               hard = tmp[0].split('STRING: "')[1];
               soft = tmp[1].split("SOFTWARE:")
              
             
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

  


const set_name=async(data)=>{
      let result =await fetch("SetSystemG_name.php",{
        method:"POST",
        body: JSON.stringify({ Name: data})
      }
     )
        .then(response => response.json())
        .then(data => console.log(data.result))
        .catch(console.log("error"));
    
}
const set_contact=async(data)=>{
    let result =await fetch("SetSystemG_contact.php",{
      method:"POST",
      body: JSON.stringify({ Contact: data})
    }
   )
      .then(response => response.json())
      .then(data => console.log(data.result))
      .catch(console.log("error"));
  
}
const set_location=async(data)=>{
    let result =await fetch("SetSystemG_location.php",{
      method:"POST",
      body: JSON.stringify({ Location: data})
    }
   )
      .then(response => response.json())
      .then(data => console.log(data.result))
      .catch(console.log("error"));
  
}
  
  get_API()

  
    
       

