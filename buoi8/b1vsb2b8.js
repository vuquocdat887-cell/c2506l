let ok = 10;

function getGrade(score) {
  if (score >= 85) {
    return "A";
  } else if (score >= 70) {
    return "B";
  } else if (score >= 50) {
    return "C";
  } else {
    return "D";
  }
}

function calculateElectricBill(kwh) {
  let bill = 0;

  if (kwh <= 50) {
    bill = kwh * 1500;
  } else if (kwh <= 100) {
    bill = 50 * 1500 + (kwh - 50) * 2000;
  } else {
    bill = 50 * 1500 + 50 * 2000 + (kwh - 100) * 3000;
  }

  return bill;
}

console.log(getGrade(ok), calculateElectricBill(ok));