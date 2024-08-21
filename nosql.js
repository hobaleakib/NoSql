use company;

// Create the Employee collection and insert 6 documents
db.Employee.insertMany([
    {
        name: "Akib Hobale",
        age: 34,
        department: { id: 1, name: "IT" },
        address: { street: "123 Elm St", city: "Springfield", state: "IL", pincode: "62704" },
        email: "akib.hobale@example.com",
        mobile_number: "555-1234"
    },
    {
        name: "Ajay Awale",
        age: 29,
        department: { id: 2, name: "HR" },
        address: { street: "456 Oak St", city: "Lincoln", state: "NE", pincode: "68508" },
        email: "ajay.awale@example.com",
        mobile_number: "555-5678"
    },
    {
        name: "Vivek Patil",
        age: 45,
        department: { id: 1, name: "IT" },
        address: { street: "789 Pine St", city: "Champaign", state: "IL", pincode: "61820" },
        email: "vivek.patil@example.com",
        mobile_number: "555-8765"
    },
    {
        name: "Rohit Mane",
        age: 38,
        department: { id: 3, name: "Finance" },
        address: { street: "101 Maple St", city: "Normal", state: "IL", pincode: "61761" },
        email: "rohit.mane@example.com",
        mobile_number: "555-4321"
    },
    {
        name: "Abhishake Awale",
        age: 50,
        department: { id: 4, name: "Marketing" },
        address: { street: "202 Birch St", city: "Peoria", state: "IL", pincode: "61602" },
        email: "abhishake.awale@example.com",
        mobile_number: "555-6789"
    },
    {
        name: "Akshay Patil",
        age: 42,
        department: { id: 1, name: "IT" },
        address: { street: "303 Cedar St", city: "Bloomington", state: "IL", pincode: "61701" },
        email: "akshay.patil@example.com",
        mobile_number: "555-9876"
    }
]);

// Find employees by email
db.Employee.find({ email: "akib.hobale@example.com" }).pretty();

// Find employees by age
db.Employee.find({ age: { $gte: 30 } }).pretty();

// Update employee's address and email
db.Employee.updateMany(
    { name: "Akib Hobale" },
    { $set: { "address.street": "999 Willow St", email: "hobale.akib@example.com" } }
);

// Find 2 employees who are more than 40 years old
db.Employee.find({ age: { $gt: 40 } }).limit(2).pretty();

// Delete employees whose department is not IT
db.Employee.deleteMany({ "department.name": { $ne: "IT" } });