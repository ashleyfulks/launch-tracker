// exports.default = function() {
//   var template =
//     {
//     "user": "Josh Bitossi",
//     "case_id": {
//       "case_status": "open",
//       "merchant_name": "Name of the merchant",
//       "last_updated": "Manual field for when the merchant was last contact",
//       "last_updated": "Automatically updated any time the merchant record is changed",
//       "business_summary": {
//         "region" : {
//           "label" : "Regions:",
//           "type" : "dropdown"
//         },
//         "annual_revenue" : "",
//         "timezone / region": "",
//         "offline_revenue" : "",
//         "retail_locations" : "0",
//         "regions_current_selling" : "",
//         "regions_planning_to_sell_to" : "",
//         "reasons_for_plus" : "",
//         "headless" : false,
//         "stakeholders" : [
//             {
//               "primary" : false,
//               "name" : "",
//               "email" : "",
//               "company" : "",
//               "phone" : "",
//               "role" : ""
//             }
//         ],
//         "agency": {
//           "has_agency": true,
//           "ongoing_after_launch": false,
//           "internal_developers": "false",
//           "comments": ""
//         },
//         "techstack" : {
//           "erp" : {"label": "ERP", "type" : "input"},
//           "wip" : {"label": "WIP / WMS", "type" : "input"},
//           "pim" : {"label": "PIM", "type" : "input"},
//           "ims" : {"label": "IMS / OMS", "type" : "input"},
//           "email_marketing" : {"label": "email_marketing", "type" : "input"},
//           "loyalty" : {"label": "loyalty", "type" : "input"},
//           "finance_accounting" : {"label": "Finance / Accounting", "type" : "input"},
//           "retail" : {"label": "Retail", "type" : "input"},
//           "other" : {"label": "Other", "type" : "input"},
//         },
//       },
//       "pre_launch_information": {
//         "checklist" : {
//           "flash" : {"title" : "Does the merchant do high volume sales", "value" : false},
//           "currency" : {"title" : "Does the merchant have business registration for country you want to recieve payouts in?", "value" : false},
//           "previous_platform" : ""
//         }
//       },
//       "launch_information": {
//         "expected_launch_date": "",
//         "launch health": ""
//         "launch_milestones" : [ // for multiple expansion stores etc
//           {
//             "milestone_name" : "",
//             "milestone_date" : ""
//           }
//         ]
//       },
//       "platform_adoption": {
//         "flow": {
//           "using" : false
//           "comments" : ""
//         },
//         "scripts": {
//           "using" : false
//           "comments" : ""
//         },
//         "multipass": {
//           "using" : false
//           "comments" : ""
//         },
//         "transporter" :{
//           "using" : false
//           "comments" : ""
//         },
//         "bulk_account_inviter" :{
//           "using" : false
//           "comments" : ""
//         },
//         "wholesale" : {
//           "using" : false
//           "comments" : ""
//         },
//         "increase_api_calls" : {
//           "using" : false
//           "comments" : ""
//         }
//       },
//
//       "migration": {
//         "migration_required" : false, // if no migration required, this isn't necessarily
//         "migration_complete" : false, // this overrides checklist
//         "entities" : {
//           "products" : "",
//           "Reviews" : "",
//           "Customers" : "",
//           "Orders" : "",
//           "gift_vouchers" : "",
//           "discounts" : "",
//           "blogs" : "",
//           "pages" : "",
//           "metadata" : "",
//           "redirects" : ""
//         },
//         "checklist" : {
//           "products" : {"title" : "Products Imported", "value" : false},
//           "customers" : {"title" : "Customers Imported", "value" : false},
//           "orders" : {"title" : "Orders Imported", "value" : false},
//           "settings" : {"title" : "Settings Imported", "value" : false},
//           "redirects" : {"title" : "Redirects Imported", "value" : false}
//         }
//       },
//       "build": {
//         "theme" : {
//           "theme" : {"title" : "What's important and notable in the theme?", "value" : ""},
//           "checkout" : {"title" : "What checkout customisations have been made?", "value" : ""},
//
//         },
//         "products" : {
//           "bundling" : {"title" : "Are you bundling products?", "value" : false},
//           "upsells" : {"title" : "Are you upselling at the cart or checkout?", "value" : false},
//           "additional_information" : {"title" : "Do products require additional information?", "value" : false},
//           "customisation" : {"title" : "Do any products require customisation?", "value" : false},
//           "regional_pricing" : {"title" : "Do you have regional based pricing?", "value" : false},
//           "comments" : {"title" : "Other comments on products?", "value" : false},
//         },
//         "orders" : {
//           "preordering" : {"title" : "preordering", "value" : false},
//           "comments" : {"title" : "preordering", "value" : false},
//         },
//         "checkout" : {
//           "third_party_gateways" : {"title" : "Will you use third party gateways?", "value" : false}, // can lead to overselling
//         },
//         "taxes" : {
//           "avalara" : {"title" : "Do you require Avalara", "value" : false}, // can lead to overselling
//         },
//         "shipping" : {
//           "click_and_collect" : {"title" : "Are you implementing click and collect?", "value" : false},
//           "carrier_service" : {"title" : "Are you implementing click and collect?", "value" : false},
//           "apps" : {"title" : "Are you using an app for your shipping", "value" : false},
//           "comments" : {"title" : "Other comments for shipping?", "value" : false}
//         },
//         "fulfillment" : {
//           "apps" : {"title" : "Are you using an app for your shipping", "value" : false},
//           "comments" : {"title" : "Other comments for shipping?", "value" : false}
//         },
//         "integrations" : {
//           "store-sync" : {"title" : "Are you syncing information between sites?", "value" : ""},
//           "ERP" : {"title" : "Are you syncing information with an ERP?", "value" : ""},
//           "WIP/WMS" : {"title" : "Are you syncing information between sites?", "value" : ""},
//           "PIM" : {"title" : "Are you syncing information between sites?", "value" : ""},
//           "IMS/OMS" : {"title" : "Are you syncing information between sites?", "value" : ""},
//           "email_marketing" : {"title" : "Are you syncing information between sites?", "value" : ""},
//           "loyalty" : {"title" : "Are you syncing information between sites?", "value" : ""},
//           "finance_accounting" : {"title" : "Are you syncing information between sites?", "value" : ""},
//           "retail" : {"title" : "Are you syncing information between sites?", "value" : ""},
//           "other" : {"title" : "Are you syncing information between sites?", "value" : ""}
//         },
//         "checklist" : {
//           "theme" : {"title" : "Theme design complete", "value" : false},
//           "taxes" : {"title" : "Taxes have been configured", "value" : false},
//           "shipping" : {"title" : "Shipping settings configured", "value" : false},
//           "payments" : {"title" : "Payments are configured", "value" : false}
//           "payment_verification" : {"title" : "Payment verification is provided", "value" : false}
//         }
//       },
//       "testing": {
//         "payment_gateyway" : {"title" : "Payment Gateway Tested", "value" : false}
//       },
//       "pre_launch": {
//         "pre_launch_complete" : false,
//         "checklist": [
//           "dns_access_confirmed" : false,
//           "ssl_preprovisioned" : false,
//           "ev_cert_notified" : false,
//           "launch_checklist_sent" : false,
//           "customer_account_activation_strategy" : false,
//           "404_monitoring_tool" : false
//         ],
//         "comments" : ""
//       },
//       "launch" : {
//
//       },
//       "post_launch" : {
//         "goals" : [
//           {
//             "goal_description" : "",
//           }
//         ],
//         "sales goals" : "",
//         "quick_wins" : [
//           {"win_description"}
//         ],
//         "additional_requirements" : ""
//       }
//     }
//   }
//
// return template;
// };

exports.example = function() {
  // This isn't actually used here. But saved here as a reference. See merchants/example.json
  var template =
    {
    "user": "Josh Bitossi",
      "case_status": {"title" : "Case Status", "value" : "open"},
      "merchant_name": {"title" : "Merchant Name", "value" : "Bitossi Wholesale Test Store"},
      "last_updated": {"title" : "Last Updated", "value" : "01/01/2020"},
      "business_summary": {
        "annual_revenue" : {"title" : "Annual Revenue", "value" : "100,000"},
        "timezone / region": {"title" : "Region / Timezone", "value" : "Brisbane/Australia"},
        "offline_revenue" : {"title" : "Offline Revenue", "value" : "0"},
        "retail_locations" : {"title" : "Retail Locations", "value" : "2"},
        "regions_current_selling" : {"title" : "Regions Selling To:", "value" : ["Australia", "New Zealand"]},
        "regions_planning_to_sell_to" : {"title" : "", "value" : ["Australia", "United States", "New Zealand"]},
        "reasons_for_plus" : {"title" : "Reasons for Plus", "value" : "Flow, Checkout, Rates"},
        "previous_platform" : {"title" : "Previous Platform", "value" : "Magento"},
        "segmentation" : {
          "headless" : {"title" : "Headless", "value" : "false"},
          "flash" : {"title" : "Flash Seller", "value" : "false"},
          "large_merchant" : {"title" : "Large Merchant", "value" : "false"},
        },
        "industry" : {"title" : "Industry", "value" : "fashion"},
        "stakeholders" : [
            {
              "primary" : false,
              "name" : "",
              "email" : "",
              "company" : "",
              "phone" : "",
              "role" : ""
            }
        ],
        "agency": {
          "has_agency": true,
          "ongoing_after_launch": false,
          "internal_developers": "false",
          "comments": ""
        },
        "techstack" : {
          "erp" : {"label": "ERP", "type" : "input"},
          "wip" : {"label": "WIP / WMS", "type" : "input"},
          "pim" : {"label": "PIM", "type" : "input"},
          "ims" : {"label": "IMS / OMS", "type" : "input"},
          "email_marketing" : {"label": "email_marketing", "type" : "input"},
          "loyalty" : {"label": "loyalty", "type" : "input"},
          "finance_accounting" : {"label": "Finance / Accounting", "type" : "input"},
          "retail" : {"label": "Retail", "type" : "input"},
          "other" : {"label": "Other", "type" : "input"},
        },
        "comments" : {"title" : "Comments", "value" : ""},
      },
      "launch_information": {
        "expected_launch_date": {"title" : "Expected Launch Date", "value" : "01/01/2020"},
        "launch health": {"title" : "Launch Health", "value" : "Green"},
        "launch_milestones" : [
          {
            "milestone_name" : {"title" : "Milestone Name", "value" : "Installed Shopify Payments"},
            "milestone_date" : {"title" : "Milestone Date", "value" : "01/01/2020"}
          }
        ]
      },
      "platform_adoption": {
        "flow": {"title" : "Shopify Flow", "value": false, "comments" : ""},
        "scripts": {"title" : "Shopify Scripts", "value": true, "comments" : ""},
        "multipass":  {"title" : "Multipass", "value": false, "comments" : ""},
        "transporter" : {"title" : "Transporter", "value": false, "comments" : ""},
        "bulk_account_inviter" :  {"title" : "Bulk Account Inviter", "value": true, "comments" : ""},
        "wholesale" :  {"title" : "Wholesale Channel", "value": true, "comments" : ""},
        "increase_api_calls" :  {"title" : "Increased API Calls", "value": false, "comments" : ""},
      },
      "migration": {
        "migration_complete" : {"title" : "Migration Complete" , "value": true, "comments" : ""}, // this overrides checklist
        "entities" : {
          "products" : {"title" : "Products", "value": "123","comments" : ""},
          "Reviews" : {"title" : "Reviews", "value": "123", "comments" : ""},
          "Customers" : {"title" : "Customers", "value": "123", "comments" : ""},
          "Orders" : {"title" : "Orders", "value": "123", "comments" : ""},
          "gift_vouchers" : {"Gift Vouchers" : "Products", "value": "123", "comments" : ""},
          "discounts" : {"title" : "Discounts", "value": "123", "comments" : ""},
          "blogs" : {"title" : "Blogs", "value": "123", "comments" : ""},
          "pages" : {"title" : "Pages", "value": "123", "comments" : ""},
          "metadata" : {"title" : "Metadata", "value": "123", "comments" : ""},
          "redirects" : {"title" : "Redirects", "value": "123", "comments" : ""}
        },
        "checklist" : {
          "products" : {"title" : "Products Imported", "value" : false},
          "customers" : {"title" : "Customers Imported", "value" : false},
          "orders" : {"title" : "Orders Imported", "value" : false},
          "settings" : {"title" : "Settings Imported", "value" : false},
          "redirects" : {"title" : "Redirects Imported", "value" : false}
        }
      },
      "build": {
        "theme" : {
          "theme" : {"title" : "What's important and notable in the theme?", "comment" : ""},
          "checkout" : {"title" : "What checkout customisations have been made?", "comment" : ""},
        },
        "products" : {
          "bundling" : {"title" : "Are you bundling products?", "value" : false, "comments" : ""},
          "upsells" : {"title" : "Are you upselling at the cart or checkout?", "value" : false, "comments" : ""},
          "additional_information" : {"title" : "Do products require additional information?", "value" : false, "comments" : ""},
          "customisation" : {"title" : "Do any products require customisation?", "value" : false, "comments" : ""},
          "regional_pricing" : {"title" : "Do you have regional based pricing?", "value" : false, "comments" : ""},
          "comments" : {"title" : "Other comments on products?", "value" : false, "comments" : ""},
        },
        "orders" : {
          "preordering" : {"title" : "preordering", "value" : false, "comments" : ""},
          "comments" : {"title" : "preordering", "value" : false, "comments" : ""},
        },
        "checkout" : {
          "third_party_gateways" : {"title" : "Will you use third party gateways?", "value" : false, "comments" : ""}, // can lead to overselling
        },
        "taxes" : {
          "avalara" : {"title" : "Do you require Avalara", "value" : false}, // can lead to overselling
        },
        "shipping" : {
          "click_and_collect" : {"title" : "Are you implementing click and collect?", "value" : false, "comments" : ""},
          "carrier_service" : {"title" : "Are you implementing click and collect?", "value" : false, "comments" : ""},
          "apps" : {"title" : "Are you using an app for your shipping", "value" : false, "comments" : ""},
          "comments" : {"title" : "Other comments for shipping?", "value" : false, "comments" : ""}
        },
        "fulfillment" : {
          "apps" : {"title" : "Are you using an app for your shipping", "value" : false},
          "comments" : {"title" : "Other comments for shipping?", "value" : false}
        },
        "integrations" : {
          "store-sync" : {"title" : "Are you syncing information between sites?", "value" : false, "comments" : ""},
          "ERP" : {"title" : "Are you syncing information with an ERP?", "value" : false, "comments" : ""},
          "WIP/WMS" : {"title" : "Are you syncing information between sites?", "value" : false, "comments" : ""},
          "PIM" : {"title" : "Are you syncing information between sites?", "value" : false, "comments" : ""},
          "IMS/OMS" : {"title" : "Are you syncing information between sites?", "value" : false, "comments" : ""},
          "email_marketing" : {"title" : "Are you syncing information between sites?", "value" : false, "comments" : ""},
          "loyalty" : {"title" : "Are you syncing information between sites?", "value" : false, "comments" : ""},
          "finance_accounting" : {"title" : "Are you syncing information between sites?", "value" : false, "comments" : ""},
          "retail" : {"title" : "Are you syncing information between sites?", "value" : false, "comments" : ""},
          "other" : {"title" : "Are you syncing information between sites?", "value" : false, "comments" : ""}
        },
        "checklist" : {
          "theme" : {"title" : "Theme design complete", "value" : false},
          "taxes" : {"title" : "Taxes have been configured", "value" : false},
          "shipping" : {"title" : "Shipping settings configured", "value" : false},
          "payments" : {"title" : "Payments are configured", "value" : false},
          "payment_verification" : {"title" : "Payment verification is provided", "value" : false},
          "integrations" : {"title" : "Integrations are complete", "value" : false}
        }
      },
      "testing": {
        "checklist" : {
          "payment_gateyway" : {"title" : "Payment Gateway Tested", "value" : false},
          "test_order" : {"title" : "Test order has been complete", "value" : false},
          "shipping_origin" : {"title" : "Shipping origin address has been reviewed", "value" : false},
          "shipping_rates" : {"title" : "Shipping rates have been reviewed", "value" : false},
          "tax_rates" : {"title" : "Tax rates have been reviewed", "value" : false},
          "redirects" : {"title" : "Redirects are working", "value" : false},
          "navigation" : {"title" : "Navigation links are working properly", "value" : false},
          "mobile" : {"title" : "Tested on mobile", "value" : false},
          "notifications" : {"title" : "Notifications have been tested and edited to be on brand", "value" : false}
        },
        "comments" : {"title" : "comments", "value" : false}
      },
      "pre_launch": {
        "checklist": {
          "dns_access_confirmed" : {"title" : "DNS Access Confirmed", "value" : false},
          "ssl_preprovisioned" : {"title" : "SSL Preprovisioned", "value" : false},
          "launch_checklist_sent" : {"title" : "Launch checklist sent", "value" : false},
          "customer_account_activation_strategy" : {"title" : "Customer Account Activation Strategy", "value" : false},
          "404_monitoring_tool" : {"title" : "404 Monitoring Tool in place", "value" : false},
          "payment_gateway_enabled" : {"title" : "Payment Gateway Enabled", "value" : false}
        },
        "comments" : {"title" : "comments", "value" : false}
      },
      "launch" : {
        "checklist" : {
          "ev_cert_notified" : {"title" : "Redirects are working", "value" : false},
        }
      },
      "post_launch" : {
        "goals" : [
            {"title" : "Goal title", "description" : "Smash some awesome goals"}
        ],
        "sales goals" : "",
        "quick_wins" : [
          {"title" : "Quick Win Goal", "description" : "Install flow for fraud analysis"}
        ],
        "additional_requirements" : {"title" : "Additional Comments", "description" : "Comments"}
      }
    };
    return template;

  }
