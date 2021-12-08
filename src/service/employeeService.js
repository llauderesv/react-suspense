const employee = [
  {
    id: 1,
    first_name: "Antonetta",
    last_name: "Logg",
    email: "alogg0@google.ru",
    company: "Realblab",
    department: "Legal",
  },
  {
    id: 2,
    first_name: "Pincas",
    last_name: "Geffinger",
    email: "pgeffinger1@fastcompany.com",
    company: "Agivu",
    department: "Marketing",
  },
  {
    id: 3,
    first_name: "Sharla",
    last_name: "Cowins",
    email: "scowins2@npr.org",
    company: "Babblestorm",
    department: "Accounting",
  },
  {
    id: 4,
    first_name: "Broderick",
    last_name: "Heggman",
    email: "bheggman3@prweb.com",
    company: "Chatterbridge",
    department: "Sales",
  },
  {
    id: 5,
    first_name: "Jakob",
    last_name: "Stych",
    email: "jstych4@list-manage.com",
    company: "Browsetype",
    department: "Engineering",
  },
  {
    id: 6,
    first_name: "James",
    last_name: "Kinny",
    email: "jkinny5@unc.edu",
    company: "Kare",
    department: "Support",
  },
  {
    id: 7,
    first_name: "Bellanca",
    last_name: "Melville",
    email: "bmelville6@google.pl",
    company: "Meevee",
    department: "Accounting",
  },
  {
    id: 8,
    first_name: "Merridie",
    last_name: "Heamus",
    email: "mheamus7@smugmug.com",
    company: "Skalith",
    department: "Accounting",
  },
  {
    id: 9,
    first_name: "Gabie",
    last_name: "Northern",
    email: "gnorthern8@skype.com",
    company: "Browsecat",
    department: "Business Development",
  },
  {
    id: 10,
    first_name: "Sayer",
    last_name: "Oxenden",
    email: "soxenden9@github.com",
    company: "Skivee",
    department: "Accounting",
  },
];

const wrapPromise = (promise) => {
  let status = "pending";
  let result;
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
};

const getEmployee = () =>
  new Promise((r, e) => setTimeout(() => r(employee), 3000));

export const fetchEmployee = () => {
  return {
    employee: wrapPromise(getEmployee()),
  };
};
