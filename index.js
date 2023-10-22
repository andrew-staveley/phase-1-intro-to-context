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
        return createEmployeeRecord(row)
    });
};

const createTimeInEvent = function(employee, dateTimeStamp) {
    const dateTimeStampObjectIn = dateTimeStamp.split(' ')
    const timeInObject = {
        type: 'TimeIn',
        date: dateTimeStampObjectIn[0],
        hour: parseInt(dateTimeStampObjectIn[1], 10)
    }
    employee.timeInEvents.push(timeInObject)
    return employee
}

const createTimeOutEvent = function(employee, dateTimeStamp) {
    const dateTimeStampObjectOut = dateTimeStamp.split(' ')
    const timeOutObject = {
        type: 'TimeOut',
        date: dateTimeStampObjectOut[0],
        hour: parseInt(dateTimeStampObjectOut[1], 10)
    }
    employee.timeOutEvents.push(timeOutObject)
    return employee
}

const hoursWorkedOnDate = function(employee, date) {
    for (let punch in employee.timeInEvents.date) {
        console.log(punch)
    }
}