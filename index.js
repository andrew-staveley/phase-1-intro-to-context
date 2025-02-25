//Assessment Code
const createEmployeeRecord = function(employeeArray) {
    return {
        firstName: employeeArray[0],
        familyName: employeeArray[1],
        title: employeeArray[2],
        payPerHour: employeeArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
};
const createEmployeeRecords = function(employeeRows) {
    return employeeRows.map(function(row) {
        return createEmployeeRecord(row);
    });
};
const createTimeInEvent = function(employee, dateTimeStamp) {
    const dateTimeStampObjectIn = dateTimeStamp.split(' ');
    const timeInObject = {
        type: 'TimeIn',
        date: dateTimeStampObjectIn[0],
        hour: parseInt(dateTimeStampObjectIn[1], 10)
    }
    employee.timeInEvents.push(timeInObject);
    return employee;
};
const createTimeOutEvent = function(employee, dateTimeStamp) {
    const dateTimeStampObjectOut = dateTimeStamp.split(' ');
    const timeOutObject = {
        type: 'TimeOut',
        date: dateTimeStampObjectOut[0],
        hour: parseInt(dateTimeStampObjectOut[1], 10)
    }
    employee.timeOutEvents.push(timeOutObject);
    return employee;
};
const hoursWorkedOnDate = function(employee, date) {
    const punchIn = employee.timeInEvents.find(function(x) {
        return x.date === date;
    })

    const punchOut = employee.timeOutEvents.find(function(y) {
        return y.date === date;
    })
    return (punchOut.hour - punchIn.hour) / 100
};
const wagesEarnedOnDate = function(employee, date) {
    const wageUnits = hoursWorkedOnDate(employee, date) * employee.payPerHour;
    return wageUnits
};
const allWagesFor = function(employee) {
    const shifts = employee.timeInEvents.map(function(x) {
        return x.date
    });
    let total = shifts.reduce(function(y, z) {
        return y + wagesEarnedOnDate(employee, z)
    }, 0);
    return total;
};
const calculatePayroll = function(employees) {
    let total = 0;
    for (let key of employees) {
        total = total + allWagesFor(key);
        console.log(total);
    };
    return total;
};