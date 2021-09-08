// Write your solution in this file!

const employee = {
    name: "jiffy",
    streetAddress: "jiffy lane",
}

beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = {...employee};
    newObj[key]= value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee;
}
 const newEmp = destructivelyUpdateEmployeeWithKeyAndValue(employee, "Sam", "11 Broadway");
 newEmp;

 function deleteFromEmployeeByKey(employee, key){
    const {name, ...newEmployee} = employee;       //creates clone(newEmployee) of employee & will name name before it has been declared in employee
    return newEmployee;
 }

 function destructivelyDeleteFromEmployeeByKey(employee, key){
     
     employee[key] = undefined;
    return employee;
 }
const newEmployee = destructivelyDeleteFromEmployeeByKey(employee, "sam" );

