function scuberGreetingForFeet(distanceInFeet) {
  if (distanceInFeet <= 400) {
    return "This one is on me!";
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else if (distanceInFeet > 2500) {
    return "No can do.";
  }
}