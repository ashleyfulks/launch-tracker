// This is responsible for showing the appropriate resources based on conditions met
function updateResources(engineObject) {
  console.log("updating resources");

  if (engineObject["flash"] == true) {
    $("#summary-resources").append("<a target='blank' href='https://app.getguru.com/card/Tk4dEdzc/Flash-Sales-Reporting-a-flash-sale?q=flash'>Reporting a Flash sale</a>")
  };
}
