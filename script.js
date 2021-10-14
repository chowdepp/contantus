function validation(){
  
    let name = document.getElementById("name").value;
    let subject = document.getElementById("subject").value;
    let phone= document.getElementById("phone").value;
    let message = document.getElementById("message").value;
    let error_message = document.getElementById("error_message");
    let text;


    error_message.style.padding = "10px";

    if(name.length <5){
     
        text = "Please Enter Valid Name";
        error_message.innerHTML= text;
        return false;

    }
   
    if(subject.length < 10){
     
        text = "Please Enter Correct Subject";
        error_message.innerHTML= text;
      return false;

    }
    if(isNAN(phone) || phone.length !=11){
     
        text = "Please Enter Valid Phone Number";
        error_message.innerHTML= text;
      return false;

    }
    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please Enter Valid Email";
        error_message.innerHTML= text;
      return false;

    }
    if(message.length <= 120){

        text = "Please Enter More Than 120 Characters";
        error_message.innerHTML= text;
        return false;
    }
    
alert("Form Submitted Successfully!")
    return true;

}
