var APP_DATA = {
  "scenes": [
    {
      "id": "0-exterior",
      "name": "EXTERIOR",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.0419449176028337,
          "pitch": -0.004197133901964634,
          "rotation": 0,
          "target": "1-general"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-general",
      "name": "GENERAL",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0944246359494674,
          "pitch": 0.20025274679084148,
          "rotation": 0,
          "target": "0-exterior"
        },
        {
          "yaw": 0.7941817532203359,
          "pitch": 0.2265768986160026,
          "rotation": 0,
          "target": "2-kitchen"
        },
        {
          "yaw": 0.2825678678721939,
          "pitch": 0.1250643326072307,
          "rotation": 0,
          "target": "3-bathroom"
        },
        {
          "yaw": 0.031289879374240215,
          "pitch": 0.14827746924375518,
          "rotation": 0,
          "target": "4-bedroom"
        },
        {
          "yaw": -0.030857124029173733,
          "pitch": -0.43262238901377614,
          "rotation": 0,
          "target": "5-loft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "KITCHEN",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.14852604198267372,
          "pitch": 0.04033792663020286,
          "rotation": 0,
          "target": "1-general"
        },
        {
          "yaw": 2.6918745845106713,
          "pitch": 0.12075106891622944,
          "rotation": 0,
          "target": "3-bathroom"
        },
        {
          "yaw": 2.195008794215844,
          "pitch": 0.07077757277349228,
          "rotation": 0,
          "target": "4-bedroom"
        },
        {
          "yaw": 2.204494949726036,
          "pitch": -0.63497363205372,
          "rotation": 0,
          "target": "5-loft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bathroom",
      "name": "BATHROOM",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.012002703619877764,
          "pitch": 0.11386590597021495,
          "rotation": 0,
          "target": "2-kitchen"
        },
        {
          "yaw": 1.3470851265036679,
          "pitch": 0.13661672852607154,
          "rotation": 0,
          "target": "4-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bedroom",
      "name": "BEDROOM",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.019825221279099,
          "pitch": 0.08257668834820109,
          "rotation": 0,
          "target": "3-bathroom"
        },
        {
          "yaw": 3.008959973697623,
          "pitch": 0.16786005644474322,
          "rotation": 0,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-loft",
      "name": "LOFT",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3728501619432372,
          "pitch": 0.3140382888503801,
          "rotation": 0,
          "target": "1-general"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
