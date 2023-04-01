const express = require('express');
const app = express();
const port = 4000;



app.listen(port, function() {
    console.log('The server is running, ' +
        ' please, open your browser at http://localhost:%s', 
        port);
  });
  // Middleware Verify Time
const verifTime = (req, res, next) => {
    let time = new Date();
    if (
      time.getDay() <= 4 &&
      time.getDay() >= 1 &&
      time.getHours() <= 17 &&
      time.getHours() >= 9
    )  {   console.log("is open");
           next();      } 
      else res.sendFile("C:/Users/Labo-14 Fatma/Desktop/gomycode folder/gomycode/Checkpoint23_express/components/closed.html"), { time: time.toUTCString() }        };
      
      // app.use(verifTime);  


     /*    console.log("is open");
      next();
    } else { console.log("closed") ;
       
  }};
  
  
  
 app.get("/" , verifTime,(req,res)=> {console.log("hello world")}) */
  
 app.get('/home.html',verifTime,(req, res) => {
  // res.sendFile(__dirname+'/home.html') });
res.sendFile('C:/Users/Labo-14 Fatma/Desktop/gomycode folder/gomycode/Checkpoint23_express/components/home.html') 
});
    
    
    app.get('/services.html',verifTime,(req, res) => { 
     
      res.sendFile('C:/Users/Labo-14 Fatma/Desktop/gomycode folder/gomycode/Checkpoint23_express/components/services.html')
    });
      
      app.get('/contact.html',verifTime,(req, res) => { 
        // res.sendFile("C:/Users/ASUS-X550J/Desktop/express/myapp/Our Services.html")  }); 
        res.sendFile('C:/Users/Labo-14 Fatma/Desktop/gomycode folder/gomycode/Checkpoint23_express/components/contact.html')
      });


  