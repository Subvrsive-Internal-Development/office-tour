var APP_DATA = {
  "scenes": [
    {
      "id": "0-office-front-1",
      "name": "Office Front 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.771903505670025,
        "pitch": -0.0743657700519691,
        "fov": 1.395287170018175
      },
      "linkHotspots": [
        {
          "yaw": 2.710734034578495,
          "pitch": 0.16071279176307485,
          "rotation": 0,
          "target": "2-office-entrance"
        },
        {
          "yaw": -2.293483071903811,
          "pitch": 0.15143932262945548,
          "rotation": 0,
          "target": "1-office-front-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-office-front-2",
      "name": "Office Front 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.068433110337587,
          "pitch": 0.17320666313612065,
          "rotation": 0,
          "target": "11-office-patio-2"
        },
        {
          "yaw": 1.320950369665093,
          "pitch": 0.20716084689454917,
          "rotation": 6.283185307179586,
          "target": "0-office-front-1"
        },
        {
          "yaw": -1.6410745317744109,
          "pitch": -0.086444377585849,
          "rotation": 0,
          "target": "14-breakfast"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-office-entrance",
      "name": "Office Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.3374416668441675,
          "pitch": 0.2652008489866269,
          "rotation": 6.283185307179586,
          "target": "0-office-front-1"
        },
        {
          "yaw": 0.4013911107358865,
          "pitch": 0.14902169599963777,
          "rotation": 0,
          "target": "3-office-desks-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-office-desks-1",
      "name": "Office Desks 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.740775038586884,
          "pitch": 0.09585437870623892,
          "rotation": 0,
          "target": "2-office-entrance"
        },
        {
          "yaw": -3.0838811841363114,
          "pitch": 0.180961027584555,
          "rotation": 0,
          "target": "0-office-front-1"
        },
        {
          "yaw": -0.16493119617803131,
          "pitch": 0.07956617746431682,
          "rotation": 0,
          "target": "4-office-desks-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-office-desks-2",
      "name": "Office Desks 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.05310913622871,
          "pitch": 0.2422376898555907,
          "rotation": 0,
          "target": "3-office-desks-1"
        },
        {
          "yaw": 0.7627257725065473,
          "pitch": 0.27173938830810584,
          "rotation": 6.283185307179586,
          "target": "8-office-lounge"
        },
        {
          "yaw": -0.42346479349994937,
          "pitch": 0.06777935674368152,
          "rotation": 0,
          "target": "7-office-kitchen"
        },
        {
          "yaw": 0.9998316679306054,
          "pitch": 0.1394696410638563,
          "rotation": 0,
          "target": "12-office-side-door"
        },
        {
          "yaw": 0.2277181782074198,
          "pitch": 0.11337545322269449,
          "rotation": 0,
          "target": "13-office-presentation"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-office-event-1",
      "name": "Office Event 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0232943894934152,
          "pitch": 0.37283590189088045,
          "rotation": 0,
          "target": "6-office-event-2"
        },
        {
          "yaw": 0.5545152238560167,
          "pitch": 0.14139059935923015,
          "rotation": 0,
          "target": "13-office-presentation"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-office-event-2",
      "name": "Office Event 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 3.0783406562014015,
        "pitch": 0.13543193970953382,
        "fov": 1.395287170018175
      },
      "linkHotspots": [
        {
          "yaw": 0.5404283171490807,
          "pitch": 0.08225427733154156,
          "rotation": 0,
          "target": "13-office-presentation"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-office-kitchen",
      "name": "Office Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1372104944505086,
          "pitch": 0.1641408430054323,
          "rotation": 0,
          "target": "8-office-lounge"
        },
        {
          "yaw": 2.6506786725794154,
          "pitch": 0.06476874652566167,
          "rotation": 0,
          "target": "4-office-desks-2"
        },
        {
          "yaw": 1.023739074547425,
          "pitch": 0.16290371145403526,
          "rotation": 0,
          "target": "13-office-presentation"
        },
        {
          "yaw": 1.8045798589431143,
          "pitch": 0.10106094839960633,
          "rotation": 0,
          "target": "12-office-side-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-office-lounge",
      "name": "Office Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.436776498590671,
          "pitch": 0.0559951285429392,
          "rotation": 0,
          "target": "4-office-desks-2"
        },
        {
          "yaw": 1.2230941544852083,
          "pitch": 0.16823929912031588,
          "rotation": 0,
          "target": "12-office-side-door"
        },
        {
          "yaw": -0.9994309357097269,
          "pitch": 0.04791878956672235,
          "rotation": 0,
          "target": "7-office-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-office-meeting-room",
      "name": "Office Meeting Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8749530750899837,
          "pitch": 0.056708123216580475,
          "rotation": 0,
          "target": "13-office-presentation"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-office-patio-1",
      "name": "Office Patio 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -3.1391125965474505,
        "pitch": 0.13765599100510784,
        "fov": 1.395287170018175
      },
      "linkHotspots": [
        {
          "yaw": -2.402144657372924,
          "pitch": 0.04954072754236982,
          "rotation": 0,
          "target": "12-office-side-door"
        },
        {
          "yaw": 1.7402005369383797,
          "pitch": 0.13953545990169935,
          "rotation": 0,
          "target": "11-office-patio-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-office-patio-2",
      "name": "Office Patio 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.5448476891944019,
        "pitch": 0.09772228630071922,
        "fov": 1.395287170018175
      },
      "linkHotspots": [
        {
          "yaw": -1.253904997515379,
          "pitch": 0.10854298260910156,
          "rotation": 0,
          "target": "1-office-front-2"
        },
        {
          "yaw": 1.7261855384175249,
          "pitch": 0.14627138760793912,
          "rotation": 0,
          "target": "10-office-patio-1"
        },
        {
          "yaw": 1.1594278129529272,
          "pitch": 0.03661998975051084,
          "rotation": 0,
          "target": "12-office-side-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-office-side-door",
      "name": "Office Side Door",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.750052915457708,
          "pitch": 0.04988650788733828,
          "rotation": 0,
          "target": "13-office-presentation"
        },
        {
          "yaw": -1.4667126319878623,
          "pitch": 0.006999650838540816,
          "rotation": 0,
          "target": "7-office-kitchen"
        },
        {
          "yaw": -1.929154574585528,
          "pitch": 0.1224993267202521,
          "rotation": 0,
          "target": "8-office-lounge"
        },
        {
          "yaw": 2.0777735765331666,
          "pitch": 0.08655849910569735,
          "rotation": 0,
          "target": "10-office-patio-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-office-presentation",
      "name": "Office Presentation",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1438395809112372,
          "pitch": 0.02910796701039331,
          "rotation": 0,
          "target": "9-office-meeting-room"
        },
        {
          "yaw": 2.518580500026818,
          "pitch": 0.09681518499067288,
          "rotation": 0,
          "target": "12-office-side-door"
        },
        {
          "yaw": -2.013777445750762,
          "pitch": 0.037006609988328165,
          "rotation": 0,
          "target": "7-office-kitchen"
        },
        {
          "yaw": -2.854979979611601,
          "pitch": 0.01971068878955684,
          "rotation": 0,
          "target": "4-office-desks-2"
        },
        {
          "yaw": -3.0399119640379855,
          "pitch": 1.3292105328816213,
          "rotation": 0,
          "target": "5-office-event-1"
        },
        {
          "yaw": 0.3817572470069912,
          "pitch": 0.1586656235680568,
          "rotation": 0,
          "target": "5-office-event-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-breakfast",
      "name": "Breakfast",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2262370719426237,
          "pitch": -0.039087078374514306,
          "rotation": 0,
          "target": "1-office-front-2"
        },
        {
          "yaw": 0.3812736388685938,
          "pitch": 0.034111830075666205,
          "rotation": 0,
          "target": "15-bridge-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.04626367998292835,
          "pitch": 0.6625427056267732,
          "title": "<h1 class=\"DUwDvf fontHeadlineLarge\">Carpenter Coffee Bar</h1>",
          "text": "This was a neat place to have coffee before I went over to Zilker Park. I also had yet another taco. Tacos seem pretty popular in Austin.<br>"
        }
      ]
    },
    {
      "id": "15-bridge-1",
      "name": "Bridge 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0844936874328486,
          "pitch": -0.21845105140997845,
          "rotation": 0,
          "target": "14-breakfast"
        },
        {
          "yaw": -0.03650795031195919,
          "pitch": 0.02760185945765059,
          "rotation": 0,
          "target": "16-bridge-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.8260321450930714,
          "pitch": 0.6304645056980256,
          "title": "It was hot and sunny<br>",
          "text": "I had also just finished riding a Lime bike about 10 miles around Zilker park.<br>"
        }
      ]
    },
    {
      "id": "16-bridge-2",
      "name": "Bridge 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.754603633242466,
          "pitch": 0.04779119282457245,
          "rotation": 0,
          "target": "15-bridge-1"
        },
        {
          "yaw": 1.5299388186397707,
          "pitch": -0.004752684972768151,
          "rotation": 0,
          "target": "17-trail"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-trail",
      "name": "Trail",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9005181026675757,
          "pitch": 0.00242906239731866,
          "rotation": 0,
          "target": "16-bridge-2"
        },
        {
          "yaw": -1.2716897612799336,
          "pitch": -0.008209207609663594,
          "rotation": 0,
          "target": "18-upstairs-at-caroline"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-upstairs-at-caroline",
      "name": "Upstairs at Caroline",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6032112632118967,
          "pitch": 0.004989000892363649,
          "rotation": 0,
          "target": "17-trail"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.9847354328135456,
          "pitch": 0.19642414912094708,
          "title": "Cheers",
          "text": "This 'Jalapeño for your Thoughts' was pretty good. I recommend you give it a try if you ever visit Upstairs at Caroline.<br>"
        }
      ]
    }
  ],
  "name": "Office Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
