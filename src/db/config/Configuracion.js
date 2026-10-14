const config = {
  server: "(localdb)\\MSSQLLocalDB",
  database: "autonoma",
  options: {
    trustedConnection: true, // Set to true if using Windows Authentication
    trustServerCertificate: true, // Set to true if using self-signed certificates
  },
  driver: "ODBC Driver 18 for SQL Server", // Uncomment to use specific driver
};

module.exports = config;