function scuberGreetingForFeet(feet){ 
  let price;

  if (feet <= 400){
    price = 0;
    console.log('This one is on me!'); 
  } else if(feet>2000 && feet <=2500){
    price = 30;
    console.log('I will gladly take your thirty bucks.');
  } else if (feet > 2500){
    price = 30;
    console.log('No can do.');
  }

  return price;
}
scuberGreetingForFeet(199);

scuberGreetingForFeet(2001);

scuberGreetingForFeet(2501);




function ternaryCheckCity(city){  

  city == 'NYC' ? "Ok, sounds good." : "No go.";

  return city;
}
ternaryCheckCity('NYC');




function switchOnCharmFromTip(tip){
  switch (tip){
    case 'generous':
      console.log("Thank you so much.");
      break;

    case 'not as generous':
      console.log("Thank you.");
      break;

    default:
      console.log("Bye.");
      break;
  }

  return tip;
}
switchOnCharmFromTip('generous');