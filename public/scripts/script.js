
$(document).ready(function() {


  /* {id : value}; // This is used by the engine to dictact which resources should be shown.
  It's updated anytime a field is changed
  */
  // Handle menu changes
  $(".Polaris-Tabs__Tab").click(function() {
    // Get the tab
    let tab = $(this).attr("id").split("-")[1];
    // Change the index

    // Remove selected class
    $(".Polaris-Tabs__Tab--selected").removeClass("Polaris-Tabs__Tab--selected");
    // Add to the selected one
    $(this).addClass("Polaris-Tabs__Tab--selected");
    // Change the view

    // Hide the current view
    $(".Polaris-Tabs__Panel").addClass("Polaris-Tabs__Panel--hidden");
    // Show the current view
    $("#tab-" + tab).removeClass("Polaris-Tabs__Panel--hidden");

    });
    // HANDLE FORM CHANGES
    // We always use the merchant record

    // console.log(tempMerchant["user"]["value"])
    function compareObjects(obj1, obj2) {
      /* obj1 (json), obj2 (json)
      Compares a temporary JSON record with previous JSON record to know which values need to be updated.
      Assumptions - the relevant value will always have the key "value"
      */
      if (!_.isEqual(obj1, obj2)) {
        $("#save-button").removeClass("Polaris-Button--disabled");
        $("#save-button").addClass("Polaris-Button");

      }
      return _.isEqual(obj1, obj2);
    };

    function setTempValue(id, value) {
      var engineObject = {};

      /* id (string), value (string)
      Finds the ID in tempMerchant and sets the value
      */
      for (var property in tempMerchant) {
        // Check first level keys
        // Add property value
        if(tempMerchant[property]["value"]) {
         engineObject[tempMerchant[property]["id"]] = tempMerchant[property]["value"]
        };

        // if (tempMerchant[property]["id"] && tempMerchant[property]["id"] == id) {
        //   // todo: handle top level values
        // };

        if (tempMerchant[property]["sections"]) {
          // Check sections -> fields
          tempMerchant[property]["sections"].forEach(function(sect, i) {
            section = i;

            tempMerchant[property]["sections"][i]["fields"].forEach(function(field, fi) {
              // Add field value

              if (field["id"] == id) {
                // Found in field
                tempMerchant[property]["sections"][i]["fields"][fi]["value"] = value;
              };
              engineObject[field["id"]] = field["value"];

            })
          })
          // If sections is false, check checklists
        };

        if (tempMerchant[property]["checklist"]) {
          // console.log("checklist")
          tempMerchant[property]["checklist"].forEach(function(item, i) {
            if (item["id"] == id) {
              tempMerchant[property]["checklist"][i]["value"] = value;
            };
            engineObject[item["id"]] = item["value"];

          })
        };
      };
      // console.log("change: ", compareObjects(merchant, tempMerchant));
      // console.log("temp:", JSON.stringify(tempMerchant))

      console.log("Engine Values: ", engineObject)
      console.log(tempMerchant)

      $.ajax({
        type: "POST",
        url: "/save/example",
        data: JSON.stringify(tempMerchant),
        contentType: "application/json",
        success: function(data) {
          console.log(data);
        }
      });
      updateResources(engineObject)
    };

    // console.log("compare object:", compareObjects(merchant, tempMerchant))

    $("input").keyup(function() {
      setTempValue($(this).attr('id'), $(this)[0]["value"]);
    });

    $("input").change(function() {
      setTempValue($(this).attr('id'), $(this)[0]["checked"]);
    });

  });
