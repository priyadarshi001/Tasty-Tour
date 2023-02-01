// contains a set of configuration variables or settings that can be used throughout the application. e.g., URLs, client IDs for authentication, and other values that need to be referenced in multiple places in the application


export const IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

export const FETCH_MENU_URL =
  "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=";

export const restaurantList = [
  // ? got from FETCH_MENU_URL
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "73011",
      name: "KFC",
      uuid: "27ff4155-fe46-418e-9862-ab98953bf953",
      city: "22",
      area: "Anand Vihar Colony",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      cuisines: ["American", "Snacks", "Biryani"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "â‚¹300 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 6.199999809265137,
      slugs: {
        restaurant: "kfc-chukkuwala-chukkuwala",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "KFC Restaurant, Khasra No 1281/1291, Opp Dr Manish Jain hospital, Chakrata road, Dehradun-248001",
      locality: "Clock Tower",
      parentId: 547,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to â‚¹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to â‚¹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5698075~p=1~eid=00000185-8b09-7c92-0e51-a04b00dc0124",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "73011",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 6.199999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.0",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "542132",
      name: "Domnik Pizza",
      uuid: "f2ee37f5-9ab0-4903-9420-6cae020b0a38",
      city: "22",
      area: "Majra    Bansal Home",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "sboh9oor0cvp6ztsyhvj",
      cuisines: ["Pizzas", "Italian", "Fast Food", "Snacks", "Beverages"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "â‚¹300 FOR TWO",
      deliveryTime: 33,
      minDeliveryTime: 33,
      maxDeliveryTime: 33,
      slaString: "33 MINS",
      lastMileTravel: 0.6000000238418579,
      slugs: {
        restaurant: "domnik-pizza-patel-nagar-patel-nagar-2",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "28/3 Sewala Chandravani Road, Arcedia Grant, Dehradun Rural, Dehradun, Uttarakhand",
      locality: "Patel Nagar",
      parentId: 22321,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to â‚¹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to â‚¹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "542132",
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        lastMileTravel: 0.6000000238418579,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.8",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "321517",
      name: "FOOD PLANET RESTAURANT",
      uuid: "899d5dd4-200a-48b2-a321-391bb9486ec2",
      city: "22",
      area: "Majra",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "ykboewqeoxnne8fgrnui",
      cuisines: ["Indian", "Chinese", "Tandoor", "Thalis", "Fast Food"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "â‚¹200 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 0.699999988079071,
      slugs: {
        restaurant: "food-planet-restaurant-patel-nagar-patel-nagar",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "157/11, Chandra Parisar Chandra Bani Rd, Ekta Enclave, Doon Enclave, Majra, Dehradun, Uttarakhand 248171",
      locality: "Patel Nagar",
      parentId: 81850,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to â‚¹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to â‚¹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "321517",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 0.699999988079071,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "2.8",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "311806",
      name: "Burger King",
      uuid: "162a4dc4-50de-452a-82cf-751e18ac9952",
      city: "22",
      area: "Anand Vihar Colony",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "iqh7ew5ldfgvpd5dpz60",
      cuisines: ["Burgers", "American"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "â‚¹350 FOR TWO",
      deliveryTime: 39,
      minDeliveryTime: 39,
      maxDeliveryTime: 39,
      slaString: "39 MINS",
      lastMileTravel: 6.300000190734863,
      slugs: {
        restaurant: "burger-king-chakrata-road-ballupur",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "5/5,4/4 & 3/3, GROUND FLOOR, CHAKRATA ROAD, DEHRADUN, UTTRAKHAND",
      locality: "CHAKRATA ROAD",
      parentId: 166,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use STEALDEAL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to â‚¹120 | Use code STEALDEAL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use STEALDEAL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to â‚¹120 | Use code STEALDEAL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5700193~p=4~eid=00000185-8b09-7c92-0e51-a04c00dc0405",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "311806",
        deliveryTime: 39,
        minDeliveryTime: 39,
        maxDeliveryTime: 39,
        lastMileTravel: 6.300000190734863,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.2",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "132460",
      name: "Annapurna Andhra Mess",
      uuid: "c6460418-904b-4371-9e04-0ce8b1b46cae",
      city: "22",
      area: "Dehradun",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "zw4qx2szsy9kbszk9n3d",
      cuisines: ["South Indian", "Biryani", "North Indian"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "â‚¹200 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 1.399999976158142,
      slugs: {
        restaurant: "annapurna-andhra-mess-subhash-nagar-subhash-nagar",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "keshav enclave sewla khurd chandrabani road behind uttranchal PG college",
      locality: "Patel Nagar",
      parentId: 33997,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to â‚¹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to â‚¹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "132460",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 1.399999976158142,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "496677",
      name: "Uncle Ji Restaurant",
      uuid: "e652ab57-22c2-4226-b5ea-a5caa26ee0f8",
      city: "22",
      area: "Patel Nagar",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "kx2ghnwagcnqjtmd5jbc",
      cuisines: ["North Indian", "Snacks", "Beverages"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "â‚¹300 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 0.800000011920929,
      slugs: {
        restaurant: "uncle-ji-restaurant-patel-nagar-patel-nagar",
        city: "dehradun",
      },
      cityState: "22",
      address: "348 santosh tower, majra road gram majra dehradun 248001",
      locality: "Patel Nagar",
      parentId: 298209,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to â‚¹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to â‚¹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "496677",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 0.800000011920929,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "--",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
  {
  "type": "restaurant",
"data": {
"type": "F",
"id": "642768",
"name": "Gramin",
"uuid": "3ed41b7a-975f-4fda-a1c9-5c620ff44fd6",
"city": "1",
"area": "Koramangala",
"totalRatingsString": "50+ ratings",
"cloudinaryImageId": "a1a9d7e5f95158b0760841d49e91894f",
"cuisines": [
"North Indian",
"Healthy Food",
"Beverages",
"Tandoor",
"Indian",
"Jain"
],
"tags": [],
"costForTwo": 35000,
"costForTwoString": "₹350 FOR TWO",
"deliveryTime": 30,
"minDeliveryTime": 30,
"maxDeliveryTime": 30,
"slaString": "30 MINS",
"lastMileTravel": 1.399999976158142,
"slugs": {
"restaurant": "gramin-koramangala-koramangala",
"city": "bangalore"
},
"cityState": "1",
"address": "139/140, Ground, Ganapathi Temple Rd, near Forum Mall, 7th Block, Bengaluru, Karnataka 560095",
"locality": "7th Block",
"parentId": 89682,
"unserviceable": false,
"veg": false,
"select": false,
"favorite": false,
"tradeCampaignHeaders": [],
"aggregatedDiscountInfo": {
"header": "50% off",
"shortDescriptionList": [
{
"meta": "50% off | Use WELCOME50",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"descriptionList": [
{
"meta": "50% off up to ₹100 | Use code WELCOME50",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"subHeader": "",
"headerType": 0,
"superFreedel": ""
},
"aggregatedDiscountInfoV2": {
"header": "50% OFF",
"shortDescriptionList": [
{
"meta": "Use WELCOME50",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"descriptionList": [
{
"meta": "50% off up to ₹100 | Use code WELCOME50",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"subHeader": "",
"headerType": 0,
"superFreedel": ""
},
"ribbon": [
{
"type": "PROMOTED"
}
],
"chain": [],
"feeDetails": {
"fees": [],
"totalFees": 0,
"message": "",
"title": "",
"amount": "",
"icon": ""
},
"availability": {
"opened": true,
"nextOpenMessage": "",
"nextCloseMessage": ""
},
"longDistanceEnabled": 0,
"rainMode": "NONE",
"thirdPartyAddress": false,
"thirdPartyVendor": "",
"adTrackingID": "cid=5579453~p=4~eid=00000185-fc4a-b219-1fde-a79900ba0437",
"badges": {
"imageBased": [],
"textBased": [],
"textExtendedBadges": []
},
"lastMileTravelString": "1.3 kms",
"hasSurge": false,
"sla": {
"restaurantId": "642768",
"deliveryTime": 30,
"minDeliveryTime": 30,
"maxDeliveryTime": 30,
"lastMileTravel": 1.399999976158142,
"lastMileDistance": 0,
"serviceability": "SERVICEABLE",
"rainMode": "NONE",
"longDistance": "NOT_LONG_DISTANCE",
"preferentialService": false,
"iconType": "EMPTY"
},
"promoted": true,
"avgRating": "4.4",
"totalRatings": 50,
"new": false
},
"subtype": "basic"
},
{
"type": "restaurant",
"data": {
"type": "F",
"id": "492159",
"name": "Roti Wala",
"uuid": "ada41f9b-cca3-4197-805c-8c43798919e9",
"city": "1",
"area": "Koramangala",
"totalRatingsString": "100+ ratings",
"cloudinaryImageId": "51f52730c0a08dc89dca3df021370477",
"cuisines": [
"Home Food",
"North Indian",
"Thalis"
],
"tags": [],
"costForTwo": 20000,
"costForTwoString": "₹200 FOR TWO",
"deliveryTime": 31,
"minDeliveryTime": 31,
"maxDeliveryTime": 31,
"slaString": "31 MINS",
"lastMileTravel": 1,
"slugs": {
"restaurant": "new-roti-wala-koramangala-koramangala",
"city": "bangalore"
},
"cityState": "1",
"address": "No 18 ,MIG, KHB Colony, 5th Block, Koramangala, Bengaluru, Karnataka 560095, India",
"locality": "5th Block",
"parentId": 171678,
"unserviceable": false,
"veg": false,
"select": false,
"favorite": false,
"tradeCampaignHeaders": [],
"aggregatedDiscountInfo": {
"header": "50% off",
"shortDescriptionList": [
{
"meta": "50% off | Use WELCOME50",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"descriptionList": [
{
"meta": "50% off up to ₹100 | Use code WELCOME50",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"subHeader": "",
"headerType": 0,
"superFreedel": ""
},
"aggregatedDiscountInfoV2": {
"header": "50% OFF",
"shortDescriptionList": [
{
"meta": "Use WELCOME50",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"descriptionList": [
{
"meta": "50% off up to ₹100 | Use code WELCOME50",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"subHeader": "",
"headerType": 0,
"superFreedel": ""
},
"chain": [],
"feeDetails": {
"fees": [],
"totalFees": 0,
"message": "",
"title": "",
"amount": "",
"icon": ""
},
"availability": {
"opened": true,
"nextOpenMessage": "",
"nextCloseMessage": ""
},
"longDistanceEnabled": 0,
"rainMode": "NONE",
"thirdPartyAddress": false,
"thirdPartyVendor": "",
"adTrackingID": "",
"badges": {
"imageBased": [],
"textBased": [],
"textExtendedBadges": []
},
"lastMileTravelString": "1 kms",
"hasSurge": false,
"sla": {
"restaurantId": "492159",
"deliveryTime": 31,
"minDeliveryTime": 31,
"maxDeliveryTime": 31,
"lastMileTravel": 1,
"lastMileDistance": 0,
"serviceability": "SERVICEABLE",
"rainMode": "NONE",
"longDistance": "NOT_LONG_DISTANCE",
"preferentialService": false,
"iconType": "EMPTY"
},
"promoted": false,
"avgRating": "4.3",
"totalRatings": 100,
"new": false
},
"subtype": "basic"
},
{
"type": "restaurant",
"data": {
"type": "F",
"id": "425",
"name": "Hotel Empire",
"uuid": "cf522c0c-38fc-47c6-bb3a-071d40dd22e3",
"city": "1",
"area": "Koramangala",
"totalRatingsString": "1000+ ratings",
"cloudinaryImageId": "un4omn7rcunkmlw6vikr",
"cuisines": [
"North Indian",
"Kebabs",
"Biryani"
],
"tags": [],
"costForTwo": 45000,
"costForTwoString": "₹450 FOR TWO",
"deliveryTime": 29,
"minDeliveryTime": 29,
"maxDeliveryTime": 29,
"slaString": "29 MINS",
"lastMileTravel": 1.2999999523162842,
"slugs": {
"restaurant": "hotel-empire-5th-block-koramangala",
"city": "bangalore"
},
"cityState": "1",
"address": "103, Industrial Area, 5th Block, Near Jyothi Nivas College, Koramangala 5th Block, Bangalore",
"locality": "Koramangala",
"parentId": 475,
"unserviceable": false,
"veg": false,
"select": false,
"favorite": false,
"tradeCampaignHeaders": [],
"aggregatedDiscountInfo": {
"header": "50% off",
"shortDescriptionList": [
{
"meta": "50% off | Use WELCOME50",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"descriptionList": [
{
"meta": "50% off up to ₹100 | Use code WELCOME50",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"subHeader": "",
"headerType": 0,
"superFreedel": ""
},
"aggregatedDiscountInfoV2": {
"header": "50% OFF",
"shortDescriptionList": [
{
"meta": "Use WELCOME50",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"descriptionList": [
{
"meta": "50% off up to ₹100 | Use code WELCOME50",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"subHeader": "",
"headerType": 0,
"superFreedel": ""
},
"chain": [],
"feeDetails": {
"fees": [],
"totalFees": 0,
"message": "",
"title": "",
"amount": "",
"icon": ""
},
"availability": {
"opened": true,
"nextOpenMessage": "",
"nextCloseMessage": ""
},
"longDistanceEnabled": 0,
"rainMode": "NONE",
"thirdPartyAddress": false,
"thirdPartyVendor": "",
"adTrackingID": "",
"badges": {
"imageBased": [],
"textBased": [],
"textExtendedBadges": []
},
"lastMileTravelString": "1.2 kms",
"hasSurge": false,
"sla": {
"restaurantId": "425",
"deliveryTime": 29,
"minDeliveryTime": 29,
"maxDeliveryTime": 29,
"lastMileTravel": 1.2999999523162842,
"lastMileDistance": 0,
"serviceability": "SERVICEABLE",
"rainMode": "NONE",
"longDistance": "NOT_LONG_DISTANCE",
"preferentialService": false,
"iconType": "EMPTY"
},
"promoted": false,
"avgRating": "4.1",
"totalRatings": 1000,
"new": false
},
"subtype": "basic"
},
{
"type": "restaurant",
"data": {
"type": "F",
"id": "410683",
"name": "Soul Rasa",
"uuid": "5fddc67b-5287-45a0-a252-c34eb9b290d1",
"city": "1",
"area": "Koramangala",
"totalRatingsString": "1000+ ratings",
"cloudinaryImageId": "xoth5ysuv2r6ctizaso5",
"cuisines": [
"Indian",
"Healthy Food",
"Home Food",
"South Indian",
"North Indian"
],
"tags": [],
"costForTwo": 40000,
"costForTwoString": "₹400 FOR TWO",
"deliveryTime": 27,
"minDeliveryTime": 27,
"maxDeliveryTime": 27,
"slaString": "27 MINS",
"lastMileTravel": 2.0999999046325684,
"slugs": {
"restaurant": "hb-koramangala-koramangala",
"city": "bangalore"
},
"cityState": "1",
"address": "88/1,Ward No.66, Sajjapura Road, Madiwala, Jakkasandra Village Bangalore-South, 560034",
"locality": "Jakkasandra",
"parentId": 239281,
"unserviceable": false,
"veg": false,
"select": false,
"favorite": false,
"tradeCampaignHeaders": [],
"aggregatedDiscountInfo": {
"header": "50% off",
"shortDescriptionList": [
{
"meta": "50% off | Use WELCOME50",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"descriptionList": [
{
"meta": "50% off up to ₹100 | Use code WELCOME50",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"subHeader": "",
"headerType": 0,
"superFreedel": ""
},
"aggregatedDiscountInfoV2": {
"header": "50% OFF",
"shortDescriptionList": [
{
"meta": "Use WELCOME50",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"descriptionList": [
{
"meta": "50% off up to ₹100 | Use code WELCOME50",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"subHeader": "",
"headerType": 0,
"superFreedel": ""
},
"ribbon": [
{
"type": "PROMOTED"
}
],
"chain": [],
"feeDetails": {
"fees": [],
"totalFees": 0,
"message": "",
"title": "",
"amount": "",
"icon": ""
},
"availability": {
"opened": true,
"nextOpenMessage": "",
"nextCloseMessage": ""
},
"longDistanceEnabled": 0,
"rainMode": "NONE",
"thirdPartyAddress": false,
"thirdPartyVendor": "",
"adTrackingID": "cid=5782555~p=7~eid=00000185-fc4a-b219-1fde-a79a00ba076b",
"badges": {
"imageBased": [],
"textBased": [],
"textExtendedBadges": []
},
"lastMileTravelString": "2 kms",
"hasSurge": false,
"sla": {
"restaurantId": "410683",
"deliveryTime": 27,
"minDeliveryTime": 27,
"maxDeliveryTime": 27,
"lastMileTravel": 2.0999999046325684,
"lastMileDistance": 0,
"serviceability": "SERVICEABLE",
"rainMode": "NONE",
"longDistance": "NOT_LONG_DISTANCE",
"preferentialService": false,
"iconType": "EMPTY"
},
"promoted": true,
"avgRating": "4.3",
"totalRatings": 1000,
"new": false
},
"subtype": "basic"
},
{
"type": "restaurant",
"data": {
"type": "F",
"id": "527091",
"name": "Donne Biriyani Mane",
"uuid": "8ca9d65b-e2d6-4e24-b2ed-f7e33c034f99",
"city": "1",
"area": "Koramangala",
"totalRatingsString": "500+ ratings",
"cloudinaryImageId": "xv6whbsjrmwayvnrbjjo",
"cuisines": [
"Biryani",
"Kebabs"
],
"tags": [],
"costForTwo": 30000,
"costForTwoString": "₹300 FOR TWO",
"deliveryTime": 14,
"minDeliveryTime": 14,
"maxDeliveryTime": 14,
"slaString": "14 MINS",
"lastMileTravel": 0.8999999761581421,
"slugs": {
"restaurant": "donne-biriyani-mane-koramangala-koramangala",
"city": "bangalore"
},
"cityState": "1",
"address": "NO 3/1 SONY WORLD SINGAL, 80 FEET ROAD, AVS LAYOUT, NEAR GKB OPTICALS 4TH BLOCK KORAMANGALA, BANGALORE, BTM Layout , B.B.M.P South, Karnataka - 560034",
"locality": "Avs Layout",
"parentId": 5628,
"unserviceable": false,
"veg": false,
"select": false,
"favorite": false,
"tradeCampaignHeaders": [],
"aggregatedDiscountInfo": {
"header": "50% off",
"shortDescriptionList": [
{
"meta": "50% off | Use WELCOME50",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"descriptionList": [
{
"meta": "50% off up to ₹100 | Use code WELCOME50",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"subHeader": "",
"headerType": 0,
"superFreedel": ""
},
"aggregatedDiscountInfoV2": {
"header": "50% OFF",
"shortDescriptionList": [
{
"meta": "Use WELCOME50",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"descriptionList": [
{
"meta": "50% off up to ₹100 | Use code WELCOME50",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"subHeader": "",
"headerType": 0,
"superFreedel": ""
},
"ribbon": [
{
"type": "PROMOTED"
}
],
"chain": [],
"feeDetails": {
"fees": [],
"totalFees": 0,
"message": "",
"title": "",
"amount": "",
"icon": ""
},
"availability": {
"opened": true,
"nextOpenMessage": "",
"nextCloseMessage": ""
},
"longDistanceEnabled": 0,
"rainMode": "NONE",
"thirdPartyAddress": false,
"thirdPartyVendor": "",
"adTrackingID": "cid=5777398~p=10~eid=00000185-fc4a-b219-1fde-a79b00ba0a01",
"badges": {
"imageBased": [],
"textBased": [],
"textExtendedBadges": []
},
"lastMileTravelString": "0.8 kms",
"hasSurge": false,
"sla": {
"restaurantId": "527091",
"deliveryTime": 14,
"minDeliveryTime": 14,
"maxDeliveryTime": 14,
"lastMileTravel": 0.8999999761581421,
"lastMileDistance": 0,
"serviceability": "SERVICEABLE",
"rainMode": "NONE",
"longDistance": "NOT_LONG_DISTANCE",
"preferentialService": false,
"iconType": "EMPTY"
},
"promoted": true,
"avgRating": "4.0",
"totalRatings": 500,
"new": false
},
"subtype": "basic"
},
{
"type": "restaurant",
"data": {
"type": "F",
"id": "428",
"name": "Biryani Pot",
"uuid": "6db20a8b-dd85-4148-b750-107169f7f826",
"city": "1",
"area": "Btm Layout",
"totalRatingsString": "1000+ ratings",
"cloudinaryImageId": "mdipoyzfzsa7n7igskht",
"cuisines": [
"North Indian",
"Biryani"
],
"tags": [],
"costForTwo": 50000,
"costForTwoString": "₹500 FOR TWO",
"deliveryTime": 21,
"minDeliveryTime": 21,
"maxDeliveryTime": 21,
"slaString": "21 MINS",
"lastMileTravel": 1.899999976158142,
"slugs": {
"restaurant": "biryani-pot-madiwala-junction-btm",
"city": "bangalore"
},
"cityState": "1",
"address": "14th Cross, 4th link Road Maruthi Nagar Madiwala Bangalore 68",
"locality": "Maruti Nagar",
"parentId": 21798,
"unserviceable": false,
"veg": false,
"select": false,
"favorite": false,
"tradeCampaignHeaders": [],
"aggregatedDiscountInfo": {
"header": "50% off",
"shortDescriptionList": [
{
"meta": "50% off | Use WELCOME50",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"descriptionList": [
{
"meta": "50% off up to ₹100 | Use code WELCOME50",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"subHeader": "",
"headerType": 0,
"superFreedel": ""
},
"aggregatedDiscountInfoV2": {
"header": "50% OFF",
"shortDescriptionList": [
{
"meta": "Use WELCOME50",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"descriptionList": [
{
"meta": "50% off up to ₹100 | Use code WELCOME50",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"subHeader": "",
"headerType": 0,
"superFreedel": ""
},
"chain": [],
"feeDetails": {
"fees": [],
"totalFees": 0,
"message": "",
"title": "",
"amount": "",
"icon": ""
},
"availability": {
"opened": true,
"nextOpenMessage": "",
"nextCloseMessage": ""
},
"longDistanceEnabled": 0,
"rainMode": "NONE",
"thirdPartyAddress": false,
"thirdPartyVendor": "",
"adTrackingID": "",
"badges": {
"imageBased": [],
"textBased": [],
"textExtendedBadges": []
},
"lastMileTravelString": "1.8 kms",
"hasSurge": false,
"sla": {
"restaurantId": "428",
"deliveryTime": 21,
"minDeliveryTime": 21,
"maxDeliveryTime": 21,
"lastMileTravel": 1.899999976158142,
"lastMileDistance": 0,
"serviceability": "SERVICEABLE",
"rainMode": "NONE",
"longDistance": "NOT_LONG_DISTANCE",
"preferentialService": false,
"iconType": "EMPTY"
},
"promoted": false,
"avgRating": "3.8",
"totalRatings": 1000,
"new": false
},
"subtype": "basic"
},
{
"type": "restaurant",
"data": {
"type": "F",
"id": "201224",
"name": "Asha tiffins",
"uuid": "e32381cf-6468-4c10-9bad-47fa08e898a8",
"city": "1",
"area": "HSR Layout",
"totalRatingsString": "1000+ ratings",
"cloudinaryImageId": "n15vckntsiboiod3gpco",
"cuisines": [
"Indian",
"South Indian",
"Beverages"
],
"tags": [],
"costForTwo": 20000,
"costForTwoString": "₹200 FOR TWO",
"deliveryTime": 28,
"minDeliveryTime": 28,
"maxDeliveryTime": 28,
"slaString": "28 MINS",
"lastMileTravel": 4.400000095367432,
"slugs": {
"restaurant": "asha-tiffins-hsr-hsr-2",
"city": "bangalore"
},
"cityState": "1",
"address": "Asha Tiffins, 5th Main Road, Sector 7, HSR Layout, Bengaluru, Karnataka, India",
"locality": "7th Sector",
"parentId": 236243,
"unserviceable": false,
"veg": true,
"select": false,
"favorite": false,
"tradeCampaignHeaders": [],
"aggregatedDiscountInfo": {
"header": "50% off",
"shortDescriptionList": [
{
"meta": "50% off | Use WELCOME50",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"descriptionList": [
{
"meta": "50% off up to ₹100 | Use code WELCOME50",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"subHeader": "",
"headerType": 0,
"superFreedel": ""
},
"aggregatedDiscountInfoV2": {
"header": "50% OFF",
"shortDescriptionList": [
{
"meta": "Use WELCOME50",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"descriptionList": [
{
"meta": "50% off up to ₹100 | Use code WELCOME50",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"subHeader": "",
"headerType": 0,
"superFreedel": ""
},
"chain": [],
"feeDetails": {
"fees": [],
"totalFees": 0,
"message": "",
"title": "",
"amount": "",
"icon": ""
},
"availability": {
"opened": true,
"nextOpenMessage": "",
"nextCloseMessage": ""
},
"longDistanceEnabled": 0,
"rainMode": "NONE",
"thirdPartyAddress": false,
"thirdPartyVendor": "",
"adTrackingID": "",
"badges": {
"imageBased": [],
"textBased": [],
"textExtendedBadges": []
},
"lastMileTravelString": "4.4 kms",
"hasSurge": false,
"sla": {
"restaurantId": "201224",
"deliveryTime": 28,
"minDeliveryTime": 28,
"maxDeliveryTime": 28,
"lastMileTravel": 4.400000095367432,
"lastMileDistance": 0,
"serviceability": "SERVICEABLE",
"rainMode": "NONE",
"longDistance": "NOT_LONG_DISTANCE",
"preferentialService": false,
"iconType": "EMPTY"
},
"promoted": false,
"avgRating": "4.4",
"totalRatings": 1000,
"new": false
},
"subtype": "basic"
},
{
"type": "restaurant",
"data": {
"type": "F",
"id": "65797",
"name": "Leon's - Burgers & Wings (Leon Grill)",
"uuid": "b5747bab-748b-4f2d-8856-25cd9a49efb3",
"city": "1",
"area": "Koramangala",
"totalRatingsString": "1000+ ratings",
"cloudinaryImageId": "r4ufflqojich0r29efvc",
"cuisines": [
"American",
"Snacks",
"Turkish",
"Portuguese",
"Continental"
],
"tags": [],
"costForTwo": 30000,
"costForTwoString": "₹300 FOR TWO",
"deliveryTime": 24,
"minDeliveryTime": 24,
"maxDeliveryTime": 24,
"slaString": "24 MINS",
"lastMileTravel": 1.2999999523162842,
"slugs": {
"restaurant": "leon-grill-koramangala-koramangala",
"city": "bangalore"
},
"cityState": "1",
"address": "Plot No.123 K.H.B Colony, 5th Block , Koramangala , Bangalore -95",
"locality": "KHB Colony",
"parentId": 371281,
"unserviceable": false,
"veg": false,
"select": false,
"favorite": false,
"tradeCampaignHeaders": [],
"aggregatedDiscountInfo": {
"header": "50% off",
"shortDescriptionList": [
{
"meta": "50% off | Use SPECIALS",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"descriptionList": [
{
"meta": "50% off up to ₹100 on select items | Use code SPECIALS",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"subHeader": "",
"headerType": 0,
"superFreedel": ""
},
"aggregatedDiscountInfoV2": {
"header": "50% OFF",
"shortDescriptionList": [
{
"meta": "Use SPECIALS",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"descriptionList": [
{
"meta": "50% off up to ₹100 on select items | Use code SPECIALS",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"subHeader": "",
"headerType": 0,
"superFreedel": ""
},
"ribbon": [
{
"type": "PROMOTED"
}
],
"chain": [],
"feeDetails": {
"fees": [],
"totalFees": 0,
"message": "",
"title": "",
"amount": "",
"icon": ""
},
"availability": {
"opened": true,
"nextOpenMessage": "",
"nextCloseMessage": ""
},
"longDistanceEnabled": 0,
"rainMode": "NONE",
"thirdPartyAddress": false,
"thirdPartyVendor": "",
"adTrackingID": "cid=5791661~p=31~eid=00000185-fc4a-b219-1fde-a7a200ba1f76",
"badges": {
"imageBased": [],
"textBased": [],
"textExtendedBadges": []
},
"lastMileTravelString": "1.2 kms",
"hasSurge": false,
"sla": {
"restaurantId": "65797",
"deliveryTime": 24,
"minDeliveryTime": 24,
"maxDeliveryTime": 24,
"lastMileTravel": 1.2999999523162842,
"lastMileDistance": 0,
"serviceability": "SERVICEABLE",
"rainMode": "NONE",
"longDistance": "NOT_LONG_DISTANCE",
"preferentialService": false,
"iconType": "EMPTY"
},
"promoted": true,
"avgRating": "4.3",
"totalRatings": 1000,
"new": false
},
"subtype": "basic"
},
{
"type": "restaurant",
"data": {
"type": "F",
"id": "223",
"name": "Truffles",
"uuid": "8250cc38-4752-4f42-928b-4da5f01e5cbe",
"city": "1",
"area": "Koramangala",
"totalRatingsString": "1000+ ratings",
"cloudinaryImageId": "cd832b6167eb9f88aeb1ccdebf38d942",
"cuisines": [
"American",
"Continental",
"Desserts",
"Italian"
],
"tags": [],
"costForTwo": 45000,
"costForTwoString": "₹450 FOR TWO",
"deliveryTime": 35,
"minDeliveryTime": 35,
"maxDeliveryTime": 35,
"slaString": "35 MINS",
"lastMileTravel": 1.600000023841858,
"slugs": {
"restaurant": "truffles-ice-spice-5th-block-koramangala",
"city": "bangalore"
},
"cityState": "1",
"address": "93/A, Appek Building, 'A' Wing, 4th 'B' Cross, Koramangala Industrial Layout, 5th Block, Koramangala, Bangalore - 560 095",
"locality": "5th Block",
"parentId": 218065,
"unserviceable": false,
"veg": false,
"select": false,
"favorite": false,
"tradeCampaignHeaders": [],
"aggregatedDiscountInfo": {
"header": "50% off",
"shortDescriptionList": [
{
"meta": "50% off | Use WELCOME50",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"descriptionList": [
{
"meta": "50% off up to ₹100 | Use code WELCOME50",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"subHeader": "",
"headerType": 0,
"superFreedel": ""
},
"aggregatedDiscountInfoV2": {
"header": "50% OFF",
"shortDescriptionList": [
{
"meta": "Use WELCOME50",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"descriptionList": [
{
"meta": "50% off up to ₹100 | Use code WELCOME50",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"subHeader": "",
"headerType": 0,
"superFreedel": ""
},
"chain": [],
"feeDetails": {
"fees": [],
"totalFees": 0,
"message": "",
"title": "",
"amount": "",
"icon": ""
},
"availability": {
"opened": true,
"nextOpenMessage": "",
"nextCloseMessage": ""
},
"longDistanceEnabled": 0,
"rainMode": "NONE",
"thirdPartyAddress": false,
"thirdPartyVendor": "",
"adTrackingID": "",
"badges": {
"imageBased": [],
"textBased": [],
"textExtendedBadges": []
},
"lastMileTravelString": "1.6 kms",
"hasSurge": false,
"sla": {
"restaurantId": "223",
"deliveryTime": 35,
"minDeliveryTime": 35,
"maxDeliveryTime": 35,
"lastMileTravel": 1.600000023841858,
"lastMileDistance": 0,
"serviceability": "SERVICEABLE",
"rainMode": "NONE",
"longDistance": "NOT_LONG_DISTANCE",
"preferentialService": false,
"iconType": "EMPTY"
},
"promoted": false,
"avgRating": "4.4",
"totalRatings": 1000,
"new": false
},
"subtype": "basic"
},
{
"type": "restaurant",
"data": {
"type": "F",
"id": "319530",
"name": "Malnad Donne Biriyani MDB",
"uuid": "f8807990-e389-4693-bfd8-103636ae1156",
"city": "1",
"area": "Bommanahalli",
"totalRatingsString": "500+ ratings",
"cloudinaryImageId": "kamm1so6elz9i1usjosv",
"cuisines": [
"Biryani",
"Chinese",
"South Indian"
],
"tags": [],
"costForTwo": 19900,
"costForTwoString": "₹199 FOR TWO",
"deliveryTime": 37,
"minDeliveryTime": 37,
"maxDeliveryTime": 37,
"slaString": "37 MINS",
"lastMileTravel": 5,
"slugs": {
"restaurant": "malnad-donne-biriyani-mdb-btm-btm",
"city": "bangalore"
},
"cityState": "1",
"address": "#60/3 ganesh towers kodichikanahalli main road ",
"locality": "Kodichikanahalli Main Road",
"parentId": 130946,
"unserviceable": false,
"veg": false,
"select": false,
"favorite": false,
"tradeCampaignHeaders": [],
"aggregatedDiscountInfo": {
"header": "50% off",
"shortDescriptionList": [
{
"meta": "50% off | Use WELCOME50",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"descriptionList": [
{
"meta": "50% off up to ₹100 | Use code WELCOME50",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"subHeader": "",
"headerType": 0,
"superFreedel": ""
},
"aggregatedDiscountInfoV2": {
"header": "50% OFF",
"shortDescriptionList": [
{
"meta": "Use WELCOME50",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"descriptionList": [
{
"meta": "50% off up to ₹100 | Use code WELCOME50",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"subHeader": "",
"headerType": 0,
"superFreedel": ""
},
"chain": [],
"feeDetails": {
"fees": [],
"totalFees": 0,
"message": "",
"title": "",
"amount": "",
"icon": ""
},
"availability": {
"opened": true,
"nextOpenMessage": "",
"nextCloseMessage": ""
},
"longDistanceEnabled": 0,
"rainMode": "NONE",
"thirdPartyAddress": false,
"thirdPartyVendor": "",
"adTrackingID": "",
"badges": {
"imageBased": [],
"textBased": [],
"textExtendedBadges": []
},
"lastMileTravelString": "5 kms",
"hasSurge": false,
"sla": {
"restaurantId": "319530",
"deliveryTime": 37,
"minDeliveryTime": 37,
"maxDeliveryTime": 37,
"lastMileTravel": 5,
"lastMileDistance": 0,
"serviceability": "SERVICEABLE",
"rainMode": "NONE",
"longDistance": "NOT_LONG_DISTANCE",
"preferentialService": false,
"iconType": "EMPTY"
},
"promoted": false,
"avgRating": "4.1",
"totalRatings": 500,
"new": false
},
"subtype": "basic"
},
];
