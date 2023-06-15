import { InMemoryDbService } from "angular-in-memory-web-api";

export class AllModulesData implements InMemoryDbService {
  createDb() {
    // Apps Module Contacts Database

     let datatablesList = [
      {
        id: 1,
        name: "Airi Satou",
        position: "Accountant",
        office: "Tokyo",
        age: "33",
        startdate: "2008/11/28",
        salary: "162,700"
      },
       {
        id: 2,
        name: "Angelica Ramos",
        position: "Chief Executive Officer(CEO)",
        office: "London",
        age: "47",
        startdate: "2009/10/09",
        salary: "1,200,000"
      },
       {
        id: 3,
        name: "Ashoton Cox",
        position: "Junior Technical Author",
        office: "San Francisco",
        age: "66",
        startdate: "2009/01/12",
        salary: "86,000"
      },
       {
        id: 4,
        name: "Bradley Greer",
        position: "Software Engineer",
        office: "London",
        age: "41",
        startdate: "2012/10/13",
        salary: "132,000"
      },
       {
        id: 5,
        name: "Brenden Wagner",
        position: "Software Engineer",
        office: "San Francisco",
        age: "28",
        startdate: "2011/06/07",
        salary: "206,850"
      },
    ];
    let activitiesList = [
      {
        id: 1,
        subject: "Call",
        deal: "Ansanio tech",
        contactperson: "Cravo Ansanio",
        email: "anson@gmail.com",
        phone: "9874565464",
        companies: "Soylent Corp"
      },
       {
        id: 2,
        subject: "Phone",
        deal: "Feneldo",
        contactperson: "Willliams",
        email: "willliams@gmail.com",
        phone: "9874565464",
        companies: "Umbrella"
      },
       {
        id: 3,
        subject: "Lunch",
        deal: "Bensolet",
        contactperson: "John Doe",
        email: "johndoe@gmail.com",
        phone: "9874565464",
        companies: "Acme Corporation"
      },
       {
        id: 4,
        subject: "Call",
        deal: "Ansanio tech",
        contactperson: "Cravo Ansanio",
        email: "anson@gmail.com",
        phone: "9874565464",
        companies: "Soylent Corp"
      },
       {
        id: 5,
        subject: "Phone",
        deal: "Feneldo",
        contactperson: "Willliams",
        email: "willliams@gmail.com",
        phone: "9874565464",
        companies: "Umbrella"
      },
      {
        id: 6,
        subject: "Phone",
        deal: "Feneldo",
        contactperson: "Willliams",
        email: "willliams@gmail.com",
        phone: "9874565464",
        companies: "Umbrella"
      },
      {
        id: 7,
        subject: "Lunch",
        deal: "Bensolet",
        contactperson: "John Doe",
        email: "Johndoe@gmail.com",
        phone: "9874565464",
        companies: "Acme Corporation"
      },
      ];
      let companiesList = [
      {
        id: 1,
        company: "Clampett Oil and Gas Corp.",
        phone: "8754554531",
        billingstreet: "Escalon Street",
        billingcity: "Palo Alto",
        billingstate: "CA",
        billingcountry: "United States"
      },
       {
        id: 2,
        company: "Acme Corporation",
        phone: "8754554531",
        billingstreet: "1000 Escalon Street",
        billingcity: "Palo Alto",
        billingstate: "CA",
        billingcountry: "USA"
      },
       {
        id: 3,
        company: "Soylent Corp",
        phone: "8754554531",
        billingstreet: "Havier Street",
        billingcity: "Soylent Corp",
        billingstate: "CA",
        billingcountry: "India"
      },
       {
        id: 4,
        company: "umbrella",
        phone: "8754554531",
        billingstreet: "1000 Escalon Street",
        billingcity: "Umbrella",
        billingstate: "CA",
        billingcountry: "Europe"
      },
       {
        id: 5,
        company: "Clampett Oil and Gas Corp.",
        phone: "8754554531",
        billingstreet: "Nephew Street",
        billingcity: "Palo Alto",
        billingstate: "CA",
        billingcountry: "United States"
      },
      {
        id: 6,
        company: "Silicon Valley",
        phone: "8754554531",
        billingstreet: "Albert Street",
        billingcity: "Palo Alto",
        billingstate: "-",
        billingcountry: "India"
      },
      {
        id: 7,
        company: "Fringe",
        phone: "8754554531",
        billingstreet: "RVN Road",
        billingcity: "Umbrella",
        billingstate: "CA",
        billingcountry: "USA"
      },
    ];
    let contactsList = [
      {
        id: 1,
        fullname: "Wilmer Deluna",
        title: "Facility Manager",
        phone: "875455453",
        email: "wilmer@gmail.com",
        taglist: "Sample_data"
      },
       {
        id: 2,
        fullname: "John Doe",
        title: "Manager",
        phone: "875455453",
        email: "john@gmail.com",
        taglist: "Sample_data"
      },
       {
        id: 3,
        fullname: "John Smith",
        title: "CMO",
        phone: "875455453",
        email: "smith@gmail.com",
        taglist: "Sample_data"
      },
       {
        id: 4,
        fullname: "Wilmer Deluna",
        title: "Property Manager",
        phone: "875455453",
        email: "john@gmail.com",
        taglist: "Sample_data"
      },
       {
        id: 5,
        fullname: "Wilmer Deluna",
        title: "Facility Manager",
        phone: "875455453",
        email: "wilmer@gmail.com",
        taglist: "Sample_data"
      },
      {
        id: 6,
       fullname: "John Doe",
        title: "Manager",
        phone: "875455453",
        email: "john@gmail.com",
        taglist: "Sample_data"
      },
      {
        id: 7,
        fullname: "Vinson JK",
        title: "Facility Manager",
        phone: "875455453",
        email: "wilmer@gmail.com",
        taglist: "Sample_data"
      },
    ];
let dealsList = [
      {
        id: 1,
        symbol: "B",
        dealname: "Bensolet",
        company: "Globex",
        forecaseclosedate: "06-Aug-20",
        userresponsible: "John Doe",
        dealvalue: "USD $180"
      },
       {
        id: 2,
        symbol: "W",
        dealname: "Whirligig G990",
        company: "Massive",
        forecaseclosedate: "01-May-18",
        userresponsible: "John Doe",
        dealvalue: "USD $180"
      },
       {
        id: 3,
        symbol: "A",
        dealname: "Ansanio tech",
        company: "Vehement",
        forecaseclosedate: "02-Jan-19",
        userresponsible: "John Doe",
        dealvalue: "USD $180"
      },
       {
        id: 4,
        symbol: "S",
        dealname: "Sensored Lector",
        company: "Hooli",
        forecaseclosedate: "12-Jul-20",
        userresponsible: "Williams",
        dealvalue: "USD $180"
      },
       {
        id: 5,
        symbol: "H",
        dealname: "Hentry Dio",
        company: "Umbrella",
        forecaseclosedate: "03-Jul-20",
        userresponsible: "David Cravo",
        dealvalue: "USD $180"
      },
      {
        id: 6,
       symbol: "F",
        dealname: "Feneldo",
        company: "Initech",
        forecaseclosedate: "03-Jul-20",
        userresponsible: "Siphen David",
        dealvalue: "USD $180"
      },
      {
        id: 7,
        symbol: "I",
        dealname: "Iresope Meldo",
        company: "Soylent Corp",
        forecaseclosedate: "03-Jul-20",
        userresponsible: "John Smith",
        dealvalue: "USD $180"
      },
    ];
    let leadsList = [
      {
        id: 1,
        symbol: "A",
        fullname: "Anne Lynch",
        title: "VP of Sales",
        company: "Umbrella",
        phone: "(406) 653-3860",
        emailaddress: "abc@gmail.com",
        leadstatus: "OPEN-NotContacted",
        leadcreated: "03-Jun-20 1:14 AM",
        leadowner: "John Doe"
      },
       {
        id: 2,
        symbol: "B",
        fullname: "Benneth",
        title: "VP of Sales",
        company: "Acme Corporation",
        phone: "(406) 653-3860",
        emailaddress: "abc@gmail.com",
        leadstatus: "OPEN-NotContacted",
        leadcreated: "03-Jun-20 1:14 AM",
        leadowner: "John Doe"
      },
       {
        id: 3,
        symbol: "C",
        fullname: "Cravo",
        title: "VP of Sales",
        company: "Acme Corporation",
        phone: "(406) 653-3860",
        emailaddress: "abc@gmail.com",
        leadstatus: "OPEN-NotContacted",
        leadcreated: "03-Jun-20 1:14 AM",
        leadowner: "John Doe"
      },
       {
        id: 4,
        symbol: "C",
        fullname: "Cravo",
        title: "VP of Sales",
        company: "Soylent Corp",
        phone: "(406) 653-3860",
        emailaddress: "abc@gmail.com",
        leadstatus: "OPEN-NotContacted",
        leadcreated: "03-Jun-20 1:14 AM",
        leadowner: "John Doe"
      },
       {
        id: 5,
        symbol: "D",
        fullname: "Des Ignayshun",
        title: "VP of Sales",
        company: "Howe-Blanda LLC",
        phone: "(406) 653-3860",
        emailaddress: "abc@gmail.com",
        leadstatus: "OPEN-NotContacted",
        leadcreated: "03-Jun-20 1:14 AM",
        leadowner: "John Doe"
      },
      {
        id: 6,
        symbol: "J",
        fullname: "Jen Tile",
        title: "VP of Sales",
        company: "Howe-Blanda LLC",
        phone: "(406) 653-3860",
        emailaddress: "abc@gmail.com",
        leadstatus: "OPEN-NotContacted",
        leadcreated: "03-Jun-20 1:14 AM",
        leadowner: "John Doe"
      },
      {
        id: 7,
        symbol: "J",
        fullname: "Jacob",
        title: "Sales",
        company: "Blanda",
        phone: "(406) 653-3860",
        emailaddress: "abc@gmail.com",
        leadstatus: "OPEN-NotContacted",
        leadcreated: "03-Jun-20 1:14 AM",
        leadowner: "Anderson"
      },
    ];
    let projectsList = [
      {
        id: 1,
        symbol: "A",
        projectname: "Astronaut",
        projectstatus: "In Progress",
        userresponsible: "John Doe",
        projectcategory: "Phone Call",
        projectcreated: "03-Jun-20 1:14 AM"
      },
       {
        id: 2,
         symbol: "B",
        projectname: "Barcelona",
        projectstatus: "Completed",
        userresponsible: "David Milton",
        projectcategory: "-",
        projectcreated: "03-Jun-20 1:14 AM"
      },
       {
        id: 3,
         symbol: "C",
        projectname: "Casanova",
        projectstatus: "Not Started",
        userresponsible: "John Doe",
        projectcategory: "Meeting",
        projectcreated: "03-Jun-20 1:14 AM"
      },
       {
        id: 4,
         symbol: "C",
        projectname: "Charming",
        projectstatus: "Completed",
        userresponsible: "Micheal",
        projectcategory: "-",
        projectcreated: "03-Jun-20 1:14 AM"
      },
       {
        id: 5,
         symbol: "F",
        projectname: "Fireball",
        projectstatus: "In Progress",
        userresponsible: "John Smith",
        projectcategory: "Follow up",
        projectcreated: "03-Jun-20 1:14 AM"
      },
      {
        id: 6,
         symbol: "G",
        projectname: "Gray Panthers",
        projectstatus: "In Progress",
        userresponsible: "Samsun David",
        projectcategory: "Email",
        projectcreated: "03-Jun-20 1:14 AM"
      },
      {
        id: 7,
         symbol: "G",
        projectname: "Gray Panthers",
        projectstatus: "In Progress",
        userresponsible: "Samsun David",
        projectcategory: "Email",
        projectcreated: "03-Jun-20 1:14 AM"
      },
    ];
    let reportsList = [
      {
        id: 1,
        reportname: "Evaluation",
        datecreated: "02,June 2020",
        createdby: "John Doe"
      },
       {
        id: 2,
        reportname: "Inventry",
        datecreated: "07,Aug 2020",
        createdby: "John Doe"
      },
       {
        id: 3,
        reportname: "Project Management",
        datecreated: "02,April 2020",
        createdby: "John Doe"
      }
    ];

 let tasksList = [
      {
        id: 1,
        taskname: "Add your customers",
        responsibleuser: "John Doe",
        duedate: "02,Jan 2020",
        taskowner: "John Doe",
        status: "Not Started"
      },
       {
        id: 2,
        taskname: "Invite your team",
        responsibleuser: "James amen",
        duedate: "02,Jan 2020",
        taskowner: "James amen",
        status: "Not Started"
      },
       {
        id: 3,
       taskname: "Save your emails",
        responsibleuser: "Willliams",
        duedate: "02,Jan 2020",
        taskowner: "Willliams",
        status: "Not Started"
      },
       {
        id: 4,
        taskname: "Connect to your files",
        responsibleuser: "John smith",
        duedate: "02,Jan 2020",
        taskowner: "John Smith",
        status: "Not Started"
      },
       {
        id: 5,
        taskname: "Customers Meeting",
        responsibleuser: "John Smith",
        duedate: "02,Jan 2020",
        taskowner: "John Smith",
        status: "Not Started"
      },
      {
        id: 6,
        taskname: "Personalize your account",
        responsibleuser: "David cravo",
        duedate: "02,Jan 2020",
        taskowner: "David cravo",
        status: "Not Started"
      },
      {
        id: 7,
        taskname: "Personalize your account",
        responsibleuser: "David cravo",
        duedate: "02,Jan 2020",
        taskowner: "David cravo",
        status: "Not Started"
      },
    ];

    return {
      datatablesList: datatablesList,
      activitiesList: activitiesList,
      companiesList: companiesList,
      contactsList: contactsList,
      dealsList: dealsList,
      leadsList: leadsList,
      projectsList: projectsList,
      reportsList: reportsList,
      tasksList: tasksList
    };
  }
}
