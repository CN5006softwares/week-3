const dateOfBirth = "12/12/2012"

const getstudentNumber = () =>
{
    return "sunny"
} 

const getCampusName = () =>
{
    return "Docklands"
}

exports.getName=getstudentNumber
exports.Location=getCampusName 
exports.dob=dateOfBirth

exports.Studentgrade = (marks) =>
{
if (marks<50 && marks <70) 
    {
        return "B grade"
    }
else
    {
        return "A grade"
    }
}