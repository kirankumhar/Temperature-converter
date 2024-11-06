const convertTemperature = () =>{
    
    const tempValue = parseFloat(document.getElementById("tempValue").value);

    const formUnit = document.getElementById("unitFrom").value;

    const toUnit = document.getElementById("unitTo").value; 


    if(isNaN(tempValue)){
        alert("Please Enter a Valid Temperature");
    }

    if (formUnit === "Select one" || toUnit === "Select one") {
        alert("Please select both the units to convert from and to.");
        return;
    }


    if(formUnit === toUnit){
        document.getElementById("resultShow").textContent = `Result: ${tempValue}° ${toUnit}` ;
        return;
    }

    let result;
    switch (formUnit + " to " + toUnit) {
        case ("celsius to fahrenheit"):
            result = (tempValue * 9/5)+32 ;
            break;

        case ("celsius to kelvin"):
            result = tempValue + 273.15 ; 
            break;

        case ("fahrenheit to celsius"):
            result = (tempValue - 32)* 5/9 ;
            break;

        case ("fahrenheit to kelvin"):
            result = (tempValue - 32) *5/9 +273.15;
            break;

        case ("kelvin to celsius"):
            result = tempValue - 273.15;
            break;

        case ("kelvin to fahrenheit"):
            result = (tempValue -273.15)*9/5 +32;
            break;
        default:
            result = "Conversion not supported"
            break;
    }

    document.getElementById("resultShow").textContent = result;
}; 

