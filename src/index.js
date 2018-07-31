import React from "react";
import ReactDOM from "react-dom";
import PackageDetails from "./PackageDetails";
import "semantic-ui-css/semantic.min.css";
import "./styles.css";

const packageId = 123;
const packageName = "PackageOne";
const isBVBrequired = true;
const selectedTypeId = 2;
const itemTypes = [
  {
    id: 1,
    name: "Accelerators",
    createdBy: null,
    updatedBy: null,
    createdDate: null,
    updatedDate: null,
    systemInd: "N",
    activeInd: "Y",
    noviceInd: "Y",
    itemTypeNVPs: [
      {
        id: 55,
        seq: 4,
        name: "Build",
        controlType: "Boolean",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 1
      },
      {
        id: 59,
        seq: 8,
        name: "Common Business Function",
        controlType: "Boolean",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 1
      },
      {
        id: 61,
        seq: 10,
        name: "Corporate",
        controlType: "Boolean",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 1
      },
      {
        id: 53,
        seq: 2,
        name: "Customer Challenge",
        controlType: "Long Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 1
      },
      {
        id: 56,
        seq: 5,
        name: "Deliver",
        controlType: "Boolean",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 1
      },
      {
        id: 62,
        seq: 11,
        name: "Industry Specific",
        controlType: "Boolean",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 1
      },
      {
        id: 54,
        seq: 3,
        name: "Plan",
        controlType: "Boolean",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 1
      },
      {
        id: 58,
        seq: 7,
        name: "Channels",
        controlType: "Boolean",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 1
      },
      {
        id: 52,
        seq: 1,
        name: "Architecture Summary",
        controlType: "Long Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 1
      },
      {
        id: 60,
        seq: 9,
        name: "Secure",
        controlType: "Boolean",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 1
      },
      {
        id: 57,
        seq: 6,
        name: "Run",
        controlType: "Boolean",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 1
      }
    ]
  },
  {
    id: 2,
    name: "Buying Roles",
    createdBy: null,
    updatedBy: null,
    createdDate: null,
    updatedDate: null,
    systemInd: "N",
    activeInd: "Y",
    noviceInd: "N",
    itemTypeNVPs: [
      {
        id: 101,
        seq: 1,
        name: "Source",
        controlType: "Short Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 2
      }
    ]
  },
  {
    id: 3,
    name: "Capabilities",
    createdBy: null,
    updatedBy: null,
    createdDate: null,
    updatedDate: null,
    systemInd: "N",
    activeInd: "Y",
    noviceInd: "Y",
    itemTypeNVPs: [
      {
        id: 21,
        seq: 1,
        name: "Abbreviation",
        controlType: "Short Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 3
      }
    ]
  },
  {
    id: 4,
    name: "Digital Use Cases",
    createdBy: null,
    updatedBy: null,
    createdDate: null,
    updatedDate: null,
    systemInd: "N",
    activeInd: "Y",
    noviceInd: "Y",
    itemTypeNVPs: []
  },
  {
    id: 5,
    name: "Metrics",
    createdBy: null,
    updatedBy: null,
    createdDate: null,
    updatedDate: null,
    systemInd: "N",
    activeInd: "Y",
    noviceInd: "N",
    itemTypeNVPs: [
      {
        id: 186,
        seq: 2,
        name: "Flag",
        controlType: "Short Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 5
      },
      {
        id: 143,
        seq: 1,
        name: "Improvement",
        controlType: "Short Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 5
      }
    ]
  },
  {
    id: 261,
    name: "Recommendations",
    createdBy: null,
    updatedBy: null,
    createdDate: null,
    updatedDate: null,
    systemInd: "N",
    activeInd: "Y",
    noviceInd: "N",
    itemTypeNVPs: [
      {
        id: 301,
        seq: 1,
        name: "Where to Start",
        controlType: "Long Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 261
      }
    ]
  },
  {
    id: 6,
    name: "Data Flows",
    createdBy: null,
    updatedBy: null,
    createdDate: null,
    updatedDate: null,
    systemInd: "N",
    activeInd: "Y",
    noviceInd: "N",
    itemTypeNVPs: []
  },
  {
    id: 102,
    name: "BMC ESO Pillar",
    createdBy: null,
    updatedBy: null,
    createdDate: null,
    updatedDate: null,
    systemInd: "N",
    activeInd: "Y",
    noviceInd: "N",
    itemTypeNVPs: [
      {
        id: 162,
        seq: 1,
        name: "Pillar Leader",
        controlType: "Short Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 102
      }
    ]
  },
  {
    id: 7,
    name: "Outcomes",
    createdBy: null,
    updatedBy: null,
    createdDate: null,
    updatedDate: null,
    systemInd: "N",
    activeInd: "Y",
    noviceInd: "N",
    itemTypeNVPs: [
      {
        id: 142,
        seq: 1,
        name: "Category",
        controlType: "Short Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 7
      }
    ]
  },
  {
    id: 8,
    name: "Personas",
    createdBy: null,
    updatedBy: null,
    createdDate: null,
    updatedDate: null,
    systemInd: "N",
    activeInd: "Y",
    noviceInd: "N",
    itemTypeNVPs: [
      {
        id: 64,
        seq: 2,
        name: "Typical Titles",
        controlType: "Long Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 8
      },
      {
        id: 68,
        seq: 6,
        name: "Typical Struggles Before BMC Solutions",
        controlType: "Long Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 8
      },
      {
        id: 69,
        seq: 7,
        name: "Typical Gains after BMC Solutions",
        controlType: "Long Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 8
      },
      {
        id: 66,
        seq: 4,
        name: "Success Factors",
        controlType: "Long Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 8
      },
      {
        id: 65,
        seq: 3,
        name: "Responsibilities",
        controlType: "Long Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 8
      },
      {
        id: 75,
        seq: 13,
        name: "Reports To",
        controlType: "Short Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 8
      },
      {
        id: 71,
        seq: 9,
        name: "Relevant Sales Plays",
        controlType: "Long Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 8
      },
      {
        id: 74,
        seq: 12,
        name: "Relationship to BMC Competitors",
        controlType: "Short Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 8
      },
      {
        id: 72,
        seq: 10,
        name: "Purchase Authority",
        controlType: "Long Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 8
      },
      {
        id: 81,
        seq: 19,
        name: "Persona URL",
        controlType: "Short Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 8
      },
      {
        id: 63,
        seq: 1,
        name: "Persona",
        controlType: "Short Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 8
      },
      {
        id: 80,
        seq: 18,
        name: "Perceived Barriers To Purchase",
        controlType: "Long Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 8
      },
      {
        id: 70,
        seq: 8,
        name: "Motivations",
        controlType: "Short Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 8
      },
      {
        id: 78,
        seq: 16,
        name: "Initiatives/Business Triggers",
        controlType: "Long Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 8
      },
      {
        id: 76,
        seq: 14,
        name: "Digital Use Cases",
        controlType: "Short Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 8
      },
      {
        id: 67,
        seq: 5,
        name: "Decision Drivers",
        controlType: "Long Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 8
      },
      {
        id: 77,
        seq: 15,
        name: "Buyer Type",
        controlType: "Short Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 8
      },
      {
        id: 73,
        seq: 11,
        name: "Attitudes to BMC",
        controlType: "Short Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 8
      },
      {
        id: 79,
        seq: 17,
        name: "Influence",
        controlType: "Long Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 8
      }
    ]
  },
  {
    id: 9,
    name: "Products",
    createdBy: null,
    updatedBy: null,
    createdDate: null,
    updatedDate: null,
    systemInd: "N",
    activeInd: "Y",
    noviceInd: "Y",
    itemTypeNVPs: [
      {
        id: 84,
        seq: 1,
        name: "Pillar",
        controlType: "Short Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 9
      }
    ]
  },
  {
    id: 41,
    name: "Industries",
    createdBy: null,
    updatedBy: null,
    createdDate: null,
    updatedDate: null,
    systemInd: "N",
    activeInd: "Y",
    noviceInd: "N",
    itemTypeNVPs: []
  },
  {
    id: 10,
    name: "Value Cases",
    createdBy: null,
    updatedBy: null,
    createdDate: null,
    updatedDate: null,
    systemInd: "N",
    activeInd: "Y",
    noviceInd: "N",
    itemTypeNVPs: [
      {
        id: 145,
        seq: 2,
        name: "Pillar",
        controlType: "Short Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 10
      },
      {
        id: 144,
        seq: 1,
        name: "ID",
        controlType: "Short Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 10
      }
    ]
  },
  {
    id: 42,
    name: "Benchmarks",
    createdBy: null,
    updatedBy: null,
    createdDate: null,
    updatedDate: null,
    systemInd: "N",
    activeInd: "Y",
    noviceInd: "N",
    itemTypeNVPs: [
      {
        id: 181,
        seq: 8,
        name: "Focus",
        controlType: "Short Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 42
      },
      {
        id: 104,
        seq: 3,
        name: "Source Published (Year)",
        controlType: "Number",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 42
      },
      {
        id: 103,
        seq: 4,
        name: "Source Title",
        controlType: "Long Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 42
      },
      {
        id: 102,
        seq: 5,
        name: "Status",
        controlType: "Short Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 42
      },
      {
        id: 182,
        seq: 9,
        name: "Tags",
        controlType: "Short Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 42
      },
      {
        id: 108,
        seq: 6,
        name: "URL",
        controlType: "Long Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 42
      },
      {
        id: 105,
        seq: 7,
        name: "Valid Until (Year)",
        controlType: "Number",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 42
      },
      {
        id: 185,
        seq: 11,
        name: "Comments",
        controlType: "Long Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 42
      },
      {
        id: 184,
        seq: 10,
        name: "Bibliography",
        controlType: "Long Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 42
      },
      {
        id: 106,
        seq: 1,
        name: "Author",
        controlType: "Long Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 42
      },
      {
        id: 107,
        seq: 2,
        name: "Publisher",
        controlType: "Long Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 42
      }
    ]
  },
  {
    id: 11,
    name: "Product Capabilities",
    createdBy: null,
    updatedBy: null,
    createdDate: null,
    updatedDate: null,
    systemInd: "N",
    activeInd: "Y",
    noviceInd: "N",
    itemTypeNVPs: []
  },
  {
    id: 12,
    name: "Solution Use Cases",
    createdBy: null,
    updatedBy: null,
    createdDate: null,
    updatedDate: null,
    systemInd: "N",
    activeInd: "Y",
    noviceInd: "N",
    itemTypeNVPs: [
      {
        id: 281,
        seq: 8,
        name: "Benefit - Cost (Yes/No)",
        controlType: "Short Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 12
      },
      {
        id: 283,
        seq: 10,
        name: "Benefit - Revenue (Yes/No)",
        controlType: "Short Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 12
      },
      {
        id: 282,
        seq: 9,
        name: "Benefit - Risk (Yes/No)",
        controlType: "Short Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 12
      },
      {
        id: 284,
        seq: 11,
        name: "Benefit - Strategy (Yes/No)",
        controlType: "Short Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 12
      },
      {
        id: 264,
        seq: 4,
        name: "Dependencies",
        controlType: "Long Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 12
      },
      {
        id: 262,
        seq: 2,
        name: "Goal",
        controlType: "Long Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 12
      },
      {
        id: 265,
        seq: 5,
        name: "Key Factors",
        controlType: "Long Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 12
      },
      {
        id: 261,
        seq: 1,
        name: "Objective",
        controlType: "Long Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 12
      },
      {
        id: 263,
        seq: 3,
        name: "Prerequisites",
        controlType: "Long Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 12
      },
      {
        id: 266,
        seq: 6,
        name: "Steps",
        controlType: "Long Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 12
      },
      {
        id: 267,
        seq: 7,
        name: "Success Criteria",
        controlType: "Long Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 12
      }
    ]
  },
  {
    id: 301,
    name: "Customer Stories",
    createdBy: null,
    updatedBy: null,
    createdDate: null,
    updatedDate: null,
    systemInd: "N",
    activeInd: "Y",
    noviceInd: "N",
    itemTypeNVPs: [
      {
        id: 326,
        seq: 6,
        name: "Value Driver 01",
        controlType: "Short Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 301
      },
      {
        id: 327,
        seq: 7,
        name: "Value Driver 02",
        controlType: "Short Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 301
      },
      {
        id: 328,
        seq: 8,
        name: "Value Driver 03",
        controlType: "Short Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 301
      },
      {
        id: 324,
        seq: 4,
        name: "Customer Quote",
        controlType: "Long Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 301
      },
      {
        id: 329,
        seq: 9,
        name: "Company Size",
        controlType: "Short Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 301
      },
      {
        id: 323,
        seq: 3,
        name: "Business Impact",
        controlType: "Long Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 301
      },
      {
        id: 321,
        seq: 1,
        name: "Business Challenge",
        controlType: "Long Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 301
      },
      {
        id: 322,
        seq: 2,
        name: "BMC Solution",
        controlType: "Long Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 301
      },
      {
        id: 325,
        seq: 5,
        name: "Quote Source (Name/Title)",
        controlType: "Short Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 301
      }
    ]
  },
  {
    id: 81,
    name: "Use Case Target",
    createdBy: null,
    updatedBy: null,
    createdDate: null,
    updatedDate: null,
    systemInd: "N",
    activeInd: "Y",
    noviceInd: "N",
    itemTypeNVPs: []
  },
  {
    id: 82,
    name: "Use Case Infrastructure",
    createdBy: null,
    updatedBy: null,
    createdDate: null,
    updatedDate: null,
    systemInd: "N",
    activeInd: "Y",
    noviceInd: "N",
    itemTypeNVPs: []
  },
  {
    id: 21,
    name: "IT4IT Value Streams",
    createdBy: null,
    updatedBy: null,
    createdDate: null,
    updatedDate: null,
    systemInd: "N",
    activeInd: "Y",
    noviceInd: "N",
    itemTypeNVPs: [
      {
        id: 82,
        seq: 1,
        name: "Abbreviation",
        controlType: "Short Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 21
      },
      {
        id: 83,
        seq: 2,
        name: "Objective",
        controlType: "Short Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 21
      }
    ]
  },
  {
    id: 281,
    name: "Solution Use Case Groups",
    createdBy: null,
    updatedBy: null,
    createdDate: null,
    updatedDate: null,
    systemInd: "N",
    activeInd: "Y",
    noviceInd: "N",
    itemTypeNVPs: []
  },
  {
    id: 62,
    name: "Sales Play",
    createdBy: null,
    updatedBy: null,
    createdDate: null,
    updatedDate: null,
    systemInd: "N",
    activeInd: "Y",
    noviceInd: "Y",
    itemTypeNVPs: [
      {
        id: 121,
        seq: 1,
        name: "Market Driver",
        controlType: "Long Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 62
      },
      {
        id: 187,
        seq: 2,
        name: "URL",
        controlType: "Short Text",
        markup: null,
        requiredInd: "N",
        activeInd: "Y",
        typeId: 62
      }
    ]
  }
];

const rootElement = document.getElementById("root");
ReactDOM.render(
  <PackageDetails
    packageId={packageId}
    packageName={packageName}
    isBVBrequired={isBVBrequired}
    selectedTypeId={selectedTypeId}
    itemTypes={itemTypes}
  />,
  rootElement
);
