function netSalary() {

    // Request input 
    let basicSalary = parseFloatprompt("Enter basic salary:");
    let benefits = parseFloatprompt("Enter benefits:");

    basicSalary = Number(basicSalary);
    benefits = Number(benefits);

    const grossSalary = basicSalary + benefits;

    //  Tax calculator
    let payee;
    if (grossSalary <= 24000) {
        payee = grossSalary * 0.1; 
    } else if (grossSalary <= 32333) {
        payee = grossSalary * 0.25; 
    } else {
        payee = grossSalary * 0.3; 
    }

    // NHIF deduction calculator
    let nhif;
    if (grossSalary <= 5999) {
        nhif = 150;
    } else if (grossSalary <= 7999) {
        nhif = 300;
    } else {
        nhif = 400;
    }

    // NSSF deduction calculator
    const nssf = Math.min(grossSalary * 0.06, 1800);

    const netSalary = grossSalary - payee - nhif - nssf;
    // output
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`Payee (Tax): ${payee}`);
    console.log(`NHIF Deductions: ${nhif}`);
    console.log(`NSSF Deductions: ${nssf}`);
    console.log(`Net Salary: ${netSalary}`);
}

// calculate the called function
netSalary();
