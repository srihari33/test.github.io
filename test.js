	var template1= `<!DOCTYPE html>
<html>


<head>
<style>
body {background-color: white;}

</style>
</head>
<body>

<h2>Forms</h2>

<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form> 

</body>
</html>
`
/* document.getElementsByTagName("div")[0].innerHTML = "";
 */
var template2 = `<!DOCTYPE html>
<html>
<style>
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>
<body>


<div>
  <form action="/action_page.php">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name..">

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name..">

  
  
    <input type="submit" value="Submit">
  </form>
</div>

</body>
</html>
`

var template3 = `
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body>

<div class="container">
  <h2>Vertical (basic) Form</h2>
  <form>
    <div class="form-group">
      <label for="email">First Name:</label>
      <input type="text" class="form-control" id="email" placeholder="name">
    </div>
    <div class="form-group">
      <label for="pwd">Last Name:</label>
      <input type="password" class="form-control" id="pwd" placeholder="name">
    </div>
    <div class="checkbox">
      <label><input type="checkbox"> Remember me</label>
    </div>
    <button type="submit" class="btn btn-default">Submit</button>
  </form>
</div>

</body> 
</html>`

function dynamicLoad(){

Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
}
var value = [1, 2, 3].sample();
templateArray = {1: template1, 2: template2, 3: template3}
document.body.innerHTML= ""

document.write(templateArray[value]);
}
