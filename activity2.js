function back()
{
    window.location="activity_1.html";
}
 function getscore()
 {
 score=localStorage.getItem("scorename");
    document.getElementById("update").innerHTML="<h1>Score : "+ score +"</h1>";
 }