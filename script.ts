document.getElementById("resumeForm")?.addEventListener("submit",function(event){
    event.preventDefault()

 const profilepictureInput = document.getElementById("profilePicture")as HTMLInputElement;
const nameElement = document.getElementById("name")as HTMLInputElement;
const emailElement = document.getElementById("email")as HTMLInputElement;
const phoneElement = document.getElementById("phone")as HTMLInputElement|null;
const educationElement = document.getElementById("education")as HTMLInputElement;
const experienceElement = document.getElementById("experience")as HTMLInputElement;
const skillsElement = document.getElementById("skills")as HTMLInputElement;

if(profilepictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){
   const name= nameElement.value;
   const email= emailElement.value;
   const phone= phoneElement.value;
   const experience= experienceElement.value;
   const education= educationElement.value;
   const Skills= skillsElement.value;


   //profile picture

   const profilepicturefile=profilepictureInput.files?.[0]
   const profilepictureURL= profilepicturefile ? URL.createObjectURL(profilepicturefile) : "";

    const resumeOutput = `
    <h2>Resume<h2>
    ${profilepictureURL ? `<img src="${profilepictureURL}"alt="profile picture" class="profile picture"size="20">`:''}
    <p><strong>Name:</strong> ${name} </p>
    <p><strong>email:</strong> ${email} </p>
    <p><strong>phone Number:</strong> ${phone} </p>


    <h3>Education<h3>
   <p>${education}</p>

   
    <h4>Experience<h4>
   <p>${experience}</p>
  
   
    <h5>Skills<h5>
   <p>${Skills}</p>
   ` ;

   const resumeOutputElement = document.getElementById("resumeOutput")
   if(resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput

   }else{
    console.error('the resume output elements are missing');
    
   }
}else{
    console.error('one or more output elements are missing');
   }   

})
