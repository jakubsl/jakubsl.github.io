/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Novel',
            type:'rect',
            rect:['-7px','630px','auto','auto','auto','auto'],
            transform:[]
         },
         {
            id:'Cover',
            type:'rect',
            rect:['-7px','15px','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'Cover',
            symbolName:'Cover'
         },
         {
            id:'Novel',
            symbolName:'Novel'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Text}": [
            ["style", "left", '632px'],
            ["style", "top", '8370px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "min-width", '0px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '8360px'],
            ["style", "width", '980px']
         ],
         "${_Novel}": [
            ["style", "top", '630px'],
            ["style", "left", '-7px']
         ],
         "${_Cover}": [
            ["style", "left", '-7px'],
            ["style", "top", '15px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         labels: {
            "halt": 0
         },
         timeline: [
         ]
      }
   }
},
"Novel": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Panel01',
      type: 'rect',
      rect: ['0','15','auto','auto','auto','auto']
   },
   {
      id: 'Panel02',
      type: 'rect',
      rect: ['0','430','auto','auto','auto','auto']
   },
   {
      id: 'Panel03',
      type: 'rect',
      rect: ['0','845','auto','auto','auto','auto']
   },
   {
      id: 'Panel04',
      type: 'rect',
      rect: ['0','1260','auto','auto','auto','auto']
   },
   {
      id: 'Panel05',
      type: 'rect',
      rect: ['0','1675','auto','auto','auto','auto']
   },
   {
      id: 'Panel06',
      type: 'rect',
      rect: ['0','2090','auto','auto','auto','auto']
   },
   {
      id: 'Panel07',
      type: 'rect',
      rect: ['0','2505','auto','auto','auto','auto']
   },
   {
      id: 'Panel08',
      type: 'rect',
      rect: ['0','2920','auto','auto','auto','auto']
   },
   {
      id: 'Panel09',
      type: 'rect',
      rect: ['0','3335','auto','auto','auto','auto']
   },
   {
      id: 'Panel10',
      type: 'rect',
      rect: ['0','3750','auto','auto','auto','auto']
   },
   {
      id: 'Panel11',
      type: 'rect',
      rect: ['0','4165','auto','auto','auto','auto']
   },
   {
      id: 'Panel12',
      type: 'rect',
      rect: ['0px','5665px','auto','auto','auto','auto']
   },
   {
      id: 'Panel13',
      type: 'rect',
      rect: ['0','6180px','auto','auto','auto','auto']
   },
   {
      id: 'Panel14',
      type: 'rect',
      rect: ['0','6695px','auto','auto','auto','auto']
   },
   {
      id: 'Panel15',
      type: 'rect',
      rect: ['0','7215px','auto','auto','auto','auto']
   },
   {
      rect: ['83px','2063px','720px','24px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      transform: [{},['-35deg']],
      id: 'laser',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(202,30,24,1)']
   },
   {
      rect: ['0px','2045px','980px','15px','auto','auto'],
      id: 'divisionp',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   }],
   symbolInstances: [
   {
      id: 'Panel08',
      symbolName: 'Panel08'
   },
   {
      id: 'Panel04',
      symbolName: 'Panel04'
   },
   {
      id: 'Panel07',
      symbolName: 'Panel07'
   },
   {
      id: 'Panel11',
      symbolName: 'Panel11'
   },
   {
      id: 'Panel15',
      symbolName: 'Panel15'
   },
   {
      id: 'Panel12',
      symbolName: 'Panel12'
   },
   {
      id: 'Panel01',
      symbolName: 'Panel01'
   },
   {
      id: 'Panel06',
      symbolName: 'Panel06'
   },
   {
      id: 'Panel09',
      symbolName: 'Panel09'
   },
   {
      id: 'Panel14',
      symbolName: 'Panel14'
   },
   {
      id: 'Panel02',
      symbolName: 'Panel02'
   },
   {
      id: 'Panel03',
      symbolName: 'Panel03'
   },
   {
      id: 'Panel05',
      symbolName: 'Panel05'
   },
   {
      id: 'Panel13',
      symbolName: 'Panel13'
   },
   {
      id: 'Panel10',
      symbolName: 'Panel10'
   }   ]
   },
   states: {
      "Base State": {
         "${_divisionp}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '2045px'],
            ["style", "height", '15px']
         ],
         "${_Panel07}": [
            ["style", "top", '3090px']
         ],
         "${_Panel10}": [
            ["style", "top", '4635px']
         ],
         "${_Panel12}": [
            ["style", "left", '0px'],
            ["style", "top", '5665px']
         ],
         "${_Panel03}": [
            ["style", "top", '1030px']
         ],
         "${symbolSelector}": [
            ["style", "height", '7715px'],
            ["style", "width", '980px'],
            ["style", "overflow", 'visible']
         ],
         "${_Panel01}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${_Panel14}": [
            ["style", "top", '6695px']
         ],
         "${_laser}": [
            ["style", "top", '1840px'],
            ["color", "background-color", 'rgba(202,30,24,0.50)'],
            ["transform", "rotateZ", '-33deg'],
            ["style", "height", '20.133333206177px'],
            ["style", "opacity", '1'],
            ["style", "left", '736.63px'],
            ["style", "width", '5.8056543321104px']
         ],
         "${_Panel13}": [
            ["style", "top", '6180px']
         ],
         "${_Panel09}": [
            ["style", "top", '4120px']
         ],
         "${_Panel11}": [
            ["style", "top", '5150px']
         ],
         "${_Panel06}": [
            ["style", "top", '2575px']
         ],
         "${_Panel15}": [
            ["style", "top", '7215px']
         ],
         "${_Panel02}": [
            ["style", "top", '515px']
         ],
         "${_Panel08}": [
            ["style", "top", '3605px']
         ],
         "${_Panel05}": [
            ["style", "top", '2060px']
         ],
         "${_Panel04}": [
            ["style", "top", '1545px'],
            ["style", "left", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 18524,
         autoPlay: false,
         timeline: [
            { id: "eid710", tween: [ "style", "${_laser}", "left", '495.9px', { fromValue: '736.63px'}], position: 15607, duration: 1076 },
            { id: "eid712", tween: [ "style", "${_laser}", "left", '82.35px', { fromValue: '495.9px'}], position: 16683, duration: 1841 },
            { id: "eid1165", tween: [ "style", "${_Panel01}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid708", tween: [ "style", "${_laser}", "height", '20.116666793823px', { fromValue: '20.133333206177px'}], position: 15607, duration: 2917 },
            { id: "eid1166", tween: [ "style", "${_Panel02}", "top", '515px', { fromValue: '515px'}], position: 0, duration: 0 },
            { id: "eid1171", tween: [ "style", "${_Panel06}", "top", '2575px', { fromValue: '2575px'}], position: 0, duration: 0 },
            { id: "eid1173", tween: [ "style", "${_Panel08}", "top", '3605px', { fromValue: '3605px'}], position: 0, duration: 0 },
            { id: "eid1041", tween: [ "style", "${symbolSelector}", "height", '6195px', { fromValue: '7715px'}], position: 0, duration: 18512 },
            { id: "eid709", tween: [ "style", "${_laser}", "top", '1910px', { fromValue: '1840px'}], position: 15607, duration: 1076 },
            { id: "eid713", tween: [ "style", "${_laser}", "top", '2032px', { fromValue: '1910px'}], position: 16683, duration: 1841 },
            { id: "eid1174", tween: [ "style", "${_Panel09}", "top", '4120px', { fromValue: '4120px'}], position: 0, duration: 0 },
            { id: "eid1167", tween: [ "style", "${_Panel03}", "top", '1030px', { fromValue: '1030px'}], position: 0, duration: 0 },
            { id: "eid1170", tween: [ "style", "${_Panel05}", "top", '2060px', { fromValue: '2060px'}], position: 0, duration: 0 },
            { id: "eid711", tween: [ "style", "${_laser}", "width", '720.23497355191px', { fromValue: '5.8056543321104px'}], position: 15607, duration: 2917 },
            { id: "eid1172", tween: [ "style", "${_Panel07}", "top", '3090px', { fromValue: '3090px'}], position: 0, duration: 0 },
            { id: "eid1169", tween: [ "style", "${_Panel04}", "top", '1545px', { fromValue: '1545px'}], position: 0, duration: 0 },
            { id: "eid1176", tween: [ "style", "${_Panel11}", "top", '5150px', { fromValue: '5150px'}], position: 0, duration: 0 },
            { id: "eid1175", tween: [ "style", "${_Panel10}", "top", '4635px', { fromValue: '4635px'}], position: 0, duration: 0 }         ]
      }
   }
},
"Cover": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'cover',
      type: 'image',
      rect: ['0px','0px','980px','600px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cover.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '600px'],
            ["style", "width", '980px']
         ],
         "${_cover}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"Panel01": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'panelbg',
      type: 'image',
      rect: ['747','276','980px','500px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panelbg.svg','0px','0px']
   },
   {
      id: 'Sharon',
      type: 'rect',
      rect: ['-815','157','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'Sharon',
      symbolName: 'Sharon'
   }   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '500px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '980px']
         ],
         "${_panelbg}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Sharon}": [
            ["style", "top", '248px'],
            ["style", "left", '-815px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4501,
         autoPlay: false,
         timeline: [
            { id: "eid208", tween: [ "style", "${_Sharon}", "left", '114px', { fromValue: '-815px'}], position: 0, duration: 4501 },
            { id: "eid267", tween: [ "style", "${symbolSelector}", "height", '500px', { fromValue: '500px'}], position: 0, duration: 0 }         ]
      }
   }
},
"Panel02": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'panelbg',
      type: 'image',
      rect: ['-501px','-249px','2041px','1041px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panelbg.svg','0px','0px']
   },
   {
      rect: ['358px','50px','500px','400px','auto','auto'],
      id: 'tripodnoeye',
      transform: [{1:0,0:0},{},{},['1.312','1.312']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/tripodnoeye.svg','0px','0px']
   },
   {
      rect: ['957px','162px','66px','66px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'eye',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,234,37,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_eye}": [
            ["style", "top", '146px'],
            ["style", "height", '88px'],
            ["color", "background-color", 'rgba(255,234,37,1)'],
            ["style", "left", '833px'],
            ["style", "width", '107.7333984375px']
         ],
         "${_tripodnoeye}": [
            ["style", "top", '50.4px'],
            ["transform", "scaleX", '1.312'],
            ["transform", "scaleY", '1.312'],
            ["style", "left", '692px']
         ],
         "${_panelbg}": [
            ["style", "height", '1041.3890780337px'],
            ["style", "top", '-251.37px'],
            ["style", "left", '-251.07px'],
            ["style", "width", '2041.0999755859px']
         ],
         "${symbolSelector}": [
            ["style", "height", '500px'],
            ["style", "width", '980px'],
            ["style", "overflow", 'hidden']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 11998,
         autoPlay: false,
         timeline: [
            { id: "eid435", tween: [ "color", "${_eye}", "background-color", 'rgba(223,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,234,37,1)'}], position: 6238, duration: 3028 },
            { id: "eid436", tween: [ "style", "${_tripodnoeye}", "left", '584px', { fromValue: '692px'}], position: 4998, duration: 9 },
            { id: "eid422", tween: [ "style", "${_tripodnoeye}", "left", '402px', { fromValue: '584px'}], position: 5016, duration: 2993 },
            { id: "eid417", tween: [ "style", "${_panelbg}", "left", '-1061.08px', { fromValue: '-251.07px'}], position: 5026, duration: 6972 },
            { id: "eid437", tween: [ "style", "${_eye}", "left", '725px', { fromValue: '833px'}], position: 4998, duration: 9 },
            { id: "eid423", tween: [ "style", "${_eye}", "left", '547px', { fromValue: '725px'}], position: 5007, duration: 2993 }         ]
      }
   }
},
"Panel03": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'panelbg',
      type: 'image',
      rect: ['-174px','-266px','2105px','1074px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panelbg.svg','0px','0px']
   },
   {
      id: 'kennynopupils',
      type: 'image',
      rect: ['-37px','-123px','675px','908px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/kennynopupils.svg','0px','0px']
   },
   {
      rect: ['211px','208px','30px','30px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Pupils',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(4,4,4,1)']
   },
   {
      rect: ['349px','208px','30px','30px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'PupilsCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(4,4,4,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_PupilsCopy}": [
            ["style", "height", '30px'],
            ["style", "top", '184px'],
            ["style", "left", '366px'],
            ["style", "width", '30px']
         ],
         "${symbolSelector}": [
            ["style", "height", '500px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '980px']
         ],
         "${_kennynopupils}": [
            ["style", "top", '-123.02px'],
            ["style", "height", '908.04942714295px'],
            ["style", "left", '-37px'],
            ["style", "width", '675px']
         ],
         "${_panelbg}": [
            ["style", "top", '-266px'],
            ["style", "height", '1074px'],
            ["style", "left", '-996.02px'],
            ["style", "width", '2105.0238837165px']
         ],
         "${_Pupils}": [
            ["style", "top", '184px'],
            ["style", "height", '30px'],
            ["style", "left", '204px'],
            ["style", "width", '30px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 16029,
         autoPlay: false,
         timeline: [
            { id: "eid484", tween: [ "style", "${_Pupils}", "left", '185px', { fromValue: '204px'}], position: 10017, duration: 3262 },
            { id: "eid496", tween: [ "style", "${_PupilsCopy}", "top", '168px', { fromValue: '184px'}], position: 10017, duration: 3262 },
            { id: "eid478", tween: [ "style", "${_Pupils}", "height", '70px', { fromValue: '30px'}], position: 10017, duration: 3262 },
            { id: "eid480", tween: [ "style", "${_Pupils}", "width", '70px', { fromValue: '30px'}], position: 10017, duration: 3262 },
            { id: "eid475", tween: [ "style", "${_PupilsCopy}", "height", '70px', { fromValue: '30px'}], position: 10017, duration: 3262 },
            { id: "eid483", tween: [ "style", "${_PupilsCopy}", "left", '347px', { fromValue: '366px'}], position: 10017, duration: 3262 },
            { id: "eid495", tween: [ "style", "${_Pupils}", "top", '168px', { fromValue: '184px'}], position: 10017, duration: 3262 },
            { id: "eid477", tween: [ "style", "${_PupilsCopy}", "width", '70px', { fromValue: '30px'}], position: 10017, duration: 3262 },
            { id: "eid467", tween: [ "style", "${_panelbg}", "left", '-542.07px', { fromValue: '-996.02px'}], position: 9005, duration: 7024 }         ]
      }
   }
},
"Panel04": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'panelbg',
      type: 'image',
      rect: ['-363px','0px','1343px','685px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panelbg.svg','0px','0px']
   },
   {
      id: 'tripod_side',
      type: 'image',
      rect: ['723px','180px','356px','367px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tripod%20-%20side.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_tripod_side}": [
            ["style", "top", '180px'],
            ["style", "left", '723px']
         ],
         "${_panelbg}": [
            ["style", "top", '0px'],
            ["style", "height", '685.38330078125px'],
            ["style", "left", '-363.32px'],
            ["style", "width", '1343.3329101863px']
         ],
         "${symbolSelector}": [
            ["style", "height", '500px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '980px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"Panel05": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'panelbg2',
      type: 'image',
      rect: ['-36px','-254px','1623px','828px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panelbg.svg','0px','0px']
   },
   {
      id: 'KennyDeath',
      type: 'rect',
      rect: ['0px','160px','auto','auto','auto','auto']
   },
   {
      id: 'sharonship',
      type: 'image',
      rect: ['-1679px','68px','2082px','734px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/sharonship.svg','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'KennyDeath',
      symbolName: 'KennyDeath'
   }   ]
   },
   states: {
      "Base State": {
         "${_panelbg2}": [
            ["style", "top", '-254px'],
            ["style", "height", '828px'],
            ["style", "left", '-36px'],
            ["style", "width", '1622.8667085788px']
         ],
         "${_KennyDeath}": [
            ["style", "top", '160px'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '500px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '980px']
         ],
         "${_sharonship}": [
            ["style", "top", '68px'],
            ["style", "height", '734px'],
            ["style", "left", '-1679px'],
            ["style", "width", '2082.2601572266px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Panel06": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'panelbg',
      type: 'image',
      rect: ['-36px','-254px','1623px','828px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panelbg.svg','0px','0px']
   },
   {
      id: 'kennyskeleton',
      type: 'image',
      rect: ['-12px','154px','230px','309px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/kennyskeleton.svg','0px','0px']
   },
   {
      id: 'sharonship',
      type: 'image',
      rect: ['-1679px','68px','2082px','734px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/sharonship.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_sharonship}": [
            ["style", "height", '734px'],
            ["style", "top", '68px'],
            ["style", "left", '-1679px'],
            ["style", "width", '2082.2601572266px']
         ],
         "${_panelbg}": [
            ["style", "height", '828px'],
            ["style", "top", '-254px'],
            ["style", "left", '-36px'],
            ["style", "width", '1622.8667085788px']
         ],
         "${_kennyskeleton}": [
            ["style", "top", '154px'],
            ["transform", "rotateZ", '2deg'],
            ["style", "height", '309px'],
            ["style", "left", '-12px'],
            ["style", "width", '229.69249394673px']
         ],
         "${symbolSelector}": [
            ["style", "height", '500px'],
            ["style", "width", '980px'],
            ["style", "overflow", 'hidden']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 27976,
         autoPlay: false,
         timeline: [
            { id: "eid764", tween: [ "transform", "${_kennyskeleton}", "rotateZ", '-78deg', { fromValue: '0deg'}], position: 24406, duration: 3570 },
            { id: "eid757", tween: [ "style", "${_kennyskeleton}", "left", '-36px', { fromValue: '-12px'}], position: 24432, duration: 3518 },
            { id: "eid756", tween: [ "style", "${_kennyskeleton}", "top", '392px', { fromValue: '154px'}], position: 24432, duration: 3518 }         ]
      }
   }
},
"Panel07": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'panelbg',
      type: 'image',
      rect: ['0','0px','980px','500px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panelbg.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'cartmanscared',
      rect: ['-33px','178px','480px','430px','auto','auto'],
      transform: [{1:0,0:0},{},{},['0.358','0.358']],
      fill: ['rgba(0,0,0,0)','images/cartmanscared.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'stanscared',
      rect: ['169px','152px','300px','460px','auto','auto'],
      transform: [{1:0,0:0},{},{},['0.335','0.335']],
      fill: ['rgba(0,0,0,0)','images/stanscared.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'kylescared',
      rect: ['464px','154px','344px','434px','auto','auto'],
      transform: [{1:0,0:0},['0deg'],['0','0deg'],['-0.372','0.372']],
      fill: ['rgba(0,0,0,0)','images/kylescared.svg','0px','0px']
   },
   {
      type: 'text',
      rect: ['72px','226px','502px','112px','auto','auto'],
      id: 'killedKenny',
      text: 'THEY KILLED KENNY!',
      align: 'left',
      font: ['Arial Black, Gadget, sans-serif',40,'rgba(255,255,255,1.00)','400','none','italic']
   },
   {
      id: 'sharonship',
      type: 'image',
      rect: ['85px','270px','800px','282px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/sharonship.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_killedKenny}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '-492px'],
            ["style", "font-size", '40px'],
            ["style", "top", '226px'],
            ["style", "text-align", 'left'],
            ["style", "height", '112px'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Arial Black, Gadget, sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "width", '502px']
         ],
         "${_stanscared}": [
            ["transform", "scaleX", '0.33478'],
            ["style", "top", '152px'],
            ["transform", "scaleY", '0.33478'],
            ["style", "left", '169px']
         ],
         "${symbolSelector}": [
            ["style", "height", '500px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '980px']
         ],
         "${_cartmanscared}": [
            ["transform", "scaleX", '0.35814'],
            ["style", "top", '178px'],
            ["transform", "scaleY", '0.35814'],
            ["style", "left", '-33px']
         ],
         "${_kylescared}": [
            ["style", "top", '154px'],
            ["transform", "scaleY", '0.3725'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '-0.3725'],
            ["style", "left", '464.07px']
         ],
         "${_panelbg}": [
            ["style", "top", '0px']
         ],
         "${_sharonship}": [
            ["style", "left", '85px'],
            ["style", "top", '270px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 31600,
         autoPlay: false,
         timeline: [
            { id: "eid783", tween: [ "style", "${_killedKenny}", "left", '-450px', { fromValue: '-492px'}], position: 27006, duration: 84 },
            { id: "eid779", tween: [ "style", "${_killedKenny}", "left", '980px', { fromValue: '-430px'}], position: 27095, duration: 4505 }         ]
      }
   }
},
"Panel08": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'panelbg',
      type: 'image',
      rect: ['-57px','-282px','1603px','818px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panelbg.svg','0px','0px']
   },
   {
      id: 'cartmanscared',
      type: 'rect',
      rect: ['-228','-150','auto','auto','auto','auto']
   },
   {
      rect: ['273px','396px','74px','66px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'bubble',
      stroke: [1,'rgb(0, 0, 0)','solid'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'text',
      rect: ['291px','410px','397px','45px','auto','auto'],
      id: 'Text',
      text: 'IS ALL HOPE LOST??',
      align: 'left',
      font: ['\'Arial Black\', Gadget, sans-serif',40,'rgba(0,0,0,1.00)','normal','none','italic']
   }],
   symbolInstances: [
   {
      id: 'cartmanscared',
      symbolName: 'Cartmanscare'
   }   ]
   },
   states: {
      "Base State": {
         "${_Text}": [
            ["style", "top", '369px'],
            ["style", "width", '396.69879518072px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '45.429718875502px'],
            ["style", "left", '264px'],
            ["style", "font-size", '4px']
         ],
         "${_bubble}": [
            ["style", "top", '342px'],
            ["style", "left", '253px'],
            ["style", "height", '66px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '5px'],
            ["style", "width", '74px']
         ],
         "${_panelbg}": [
            ["style", "height", '818px'],
            ["style", "top", '-282px'],
            ["style", "left", '-57px'],
            ["style", "width", '1603.2610833062px']
         ],
         "${symbolSelector}": [
            ["style", "height", '500px'],
            ["style", "width", '980px'],
            ["style", "overflow", 'hidden']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 36111,
         autoPlay: true,
         timeline: [
            { id: "eid786", tween: [ "style", "${_Text}", "font-size", '30px', { fromValue: '4px'}], position: 31020, duration: 2712 },
            { id: "eid795", tween: [ "style", "${_bubble}", "left", '477.17px', { fromValue: '253px'}], position: 31020, duration: 1500 },
            { id: "eid804", tween: [ "style", "${_bubble}", "left", '570px', { fromValue: '477.17px'}], position: 32520, duration: 1176 },
            { id: "eid806", tween: [ "style", "${_bubble}", "left", '816px', { fromValue: '570px'}], position: 33696, duration: 2415 },
            { id: "eid797", tween: [ "style", "${_bubble}", "width", '394px', { fromValue: '74px'}], position: 31020, duration: 2676 },
            { id: "eid796", tween: [ "style", "${_bubble}", "top", '294.42px', { fromValue: '342px'}], position: 31020, duration: 1500 },
            { id: "eid805", tween: [ "style", "${_bubble}", "top", '135px', { fromValue: '294.42px'}], position: 32520, duration: 1176 },
            { id: "eid807", tween: [ "style", "${_bubble}", "top", '-237px', { fromValue: '135px'}], position: 33696, duration: 2415 },
            { id: "eid794", tween: [ "style", "${_Text}", "left", '491px', { fromValue: '264px'}], position: 31020, duration: 1500 },
            { id: "eid802", tween: [ "style", "${_Text}", "left", '600px', { fromValue: '491px'}], position: 32520, duration: 1197 },
            { id: "eid808", tween: [ "style", "${_Text}", "left", '846px', { fromValue: '600px'}], position: 33717, duration: 2394 },
            { id: "eid798", tween: [ "style", "${_bubble}", "height", '220.39357429719px', { fromValue: '66px'}], position: 31020, duration: 2953 },
            { id: "eid793", tween: [ "style", "${_Text}", "top", '365.88px', { fromValue: '369px'}], position: 31020, duration: 1500 },
            { id: "eid803", tween: [ "style", "${_Text}", "top", '227.38px', { fromValue: '365.88px'}], position: 32520, duration: 1197 },
            { id: "eid809", tween: [ "style", "${_Text}", "top", '-144.63px', { fromValue: '227.38px'}], position: 33717, duration: 2394 }         ]
      }
   }
},
"Panel09": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'panelbg',
      type: 'image',
      rect: ['-2px','-472px','2238px','1142px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panelbg.svg','0px','0px']
   },
   {
      id: 'Thunderchild',
      type: 'rect',
      rect: ['-2385px','-221px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'Thunderchild',
      symbolName: 'Thunderchild'
   }   ]
   },
   states: {
      "Base State": {
         "${_Thunderchild}": [
            ["style", "left", '-2385px'],
            ["style", "top", '-221px']
         ],
         "${_panelbg}": [
            ["style", "top", '-472px'],
            ["style", "height", '1142px'],
            ["style", "left", '0px'],
            ["style", "width", '2238.2929578331px']
         ],
         "${symbolSelector}": [
            ["style", "height", '500px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '980px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 41980,
         autoPlay: true,
         timeline: [
            { id: "eid897", tween: [ "style", "${_Thunderchild}", "left", '-753px', { fromValue: '-2385px'}], position: 35021, duration: 4688 },
            { id: "eid900", tween: [ "style", "${_Thunderchild}", "left", '-289px', { fromValue: '-753px'}], position: 39709, duration: 2271 },
            { id: "eid904", tween: [ "style", "${_panelbg}", "left", '-1220px', { fromValue: '0px'}], position: 32777, duration: 9150 }         ]
      }
   }
},
"Panel10": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'panelbg',
      type: 'image',
      rect: ['0px','-434px','2686px','1386px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panelbg.svg','0px','0px']
   },
   {
      id: 'Thunderchild',
      type: 'rect',
      rect: ['407','374','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'Thunderchild',
      symbolName: 'Thunderchild'
   }   ]
   },
   states: {
      "Base State": {
         "${_panelbg}": [
            ["style", "height", '1386.3666992188px'],
            ["style", "top", '-434.32px'],
            ["style", "left", '-3px'],
            ["style", "width", '2685.8340553359px']
         ],
         "${_Thunderchild}": [
            ["style", "top", '-93.5px'],
            ["transform", "scaleX", '0.55949'],
            ["transform", "scaleY", '0.55949'],
            ["style", "left", '-1454.62px']
         ],
         "${symbolSelector}": [
            ["style", "height", '500px'],
            ["style", "width", '980px'],
            ["style", "overflow", 'hidden']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 44313,
         autoPlay: true,
         timeline: [
            { id: "eid1007", tween: [ "style", "${_panelbg}", "left", '-1705.83px', { fromValue: '-3px'}], position: 37370, duration: 6943 }         ]
      }
   }
},
"Panel11": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'panelbgbot',
      type: 'image',
      rect: ['-1028px','-105px','2082px','1062px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panelbg.svg','0px','0px']
   },
   {
      id: 'panelbgtop',
      type: 'image',
      rect: ['-1070px','-812px','2082px','1062px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panelbg.svg','0px','0px']
   },
   {
      rect: ['617px','-16px','676px','568px','auto','auto'],
      id: 'tripodhd',
      type: 'image',
      clip: ['rect(260px 791px 606px 10px)'],
      fill: ['rgba(0,0,0,0)','images/tripodhd.svg','0px','148px']
   },
   {
      rect: ['-483px','-48px','376px','650px','auto','auto'],
      transform: {},
      id: 'Ned',
      type: 'image',
      clip: ['rect(0px 376.3166809082031px 298.183349609375px 0px)'],
      fill: ['rgba(0,0,0,0)','images/Ned.svg','0px','0px']
   },
   {
      rect: ['-260px','-234px','605px','1090px','auto','auto'],
      transform: [{1:0,0:0},{},{},['0.957','0.957']],
      id: 'Jimbohd',
      type: 'image',
      clip: ['rect(0px 605px 483.2769470214844px 0px)'],
      fill: ['rgba(0,0,0,0)','images/Jimbohd.svg','0px','0px']
   },
   {
      rect: ['-63px','243px','1098px','15px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_tripodhd}": [
            ["style", "top", '-16px'],
            ["style", "left", '980px'],
            ["style", "height", '568px'],
            ["style", "clip", [260,791,606,10], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "background-position", [0,148], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '676.23170731707px']
         ],
         "${_Ned}": [
            ["style", "top", '-48px'],
            ["style", "height", '650.18868340106px'],
            ["style", "left", '-711.32px'],
            ["style", "clip", [0,376.3166809082031,298.183349609375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '376.3166809082px']
         ],
         "${_Jimbohd}": [
            ["style", "top", '-233.92px'],
            ["transform", "scaleY", '0.95702'],
            ["style", "height", '1089.751552795px'],
            ["transform", "scaleX", '0.95702'],
            ["style", "left", '-488px'],
            ["style", "clip", [0,605,483.2769470214844,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '605px']
         ],
         "${_panelbgbot}": [
            ["style", "top", '-105px'],
            ["style", "height", '1062px'],
            ["style", "left", '-1028px'],
            ["style", "width", '2081.5047786318px']
         ],
         "${_Rectangle}": [
            ["style", "height", '15px'],
            ["style", "top", '242.5px']
         ],
         "${_panelbgtop}": [
            ["style", "height", '1062px'],
            ["style", "top", '-812px'],
            ["style", "left", '-1070px'],
            ["style", "width", '2081.5047786318px']
         ],
         "${symbolSelector}": [
            ["style", "height", '500px'],
            ["style", "width", '980px'],
            ["style", "overflow", 'hidden']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 50026,
         autoPlay: true,
         timeline: [
            { id: "eid1012", tween: [ "style", "${_tripodhd}", "left", '401.4px', { fromValue: '980px'}], position: 42026, duration: 3893 },
            { id: "eid1037", tween: [ "style", "${_tripodhd}", "left", '-705.22px', { fromValue: '401.4px'}], position: 45919, duration: 4107 },
            { id: "eid1014", tween: [ "style", "${_Jimbohd}", "left", '117.15px', { fromValue: '-488px'}], position: 42026, duration: 3934 },
            { id: "eid1039", tween: [ "style", "${_Jimbohd}", "left", '247px', { fromValue: '117.15px'}], position: 45960, duration: 483 },
            { id: "eid1057", tween: [ "style", "${_Jimbohd}", "left", '1219.27px', { fromValue: '247px'}], position: 46443, duration: 3583 },
            { id: "eid1015", tween: [ "style", "${_Ned}", "left", '-106.17px', { fromValue: '-711.32px'}], position: 42026, duration: 3934 },
            { id: "eid1038", tween: [ "style", "${_Ned}", "left", '36.75px', { fromValue: '-106.17px'}], position: 45960, duration: 483 },
            { id: "eid1058", tween: [ "style", "${_Ned}", "left", '995.95px', { fromValue: '36.75px'}], position: 46443, duration: 3583 }         ]
      }
   }
},
"Panel12": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'panelbg',
      type: 'image',
      rect: ['0px','0px','980px','500px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panelbg.svg','0px','0px']
   },
   {
      rect: ['68px','373px','60px','56px','auto','auto'],
      id: 'flames2',
      transform: [{1:0,0:0},['-4deg'],{},['0.072','0.31']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/flames.svg','0px','0px']
   },
   {
      id: 'bullet',
      type: 'image',
      rect: ['163px','361px','45px','30px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bullet.svg','0px','0px']
   },
   {
      id: 'Ned',
      type: 'image',
      rect: ['89px','354px','74px','128px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Ned.svg','0px','0px']
   },
   {
      id: 'bazooka',
      type: 'image',
      rect: ['89px','341px','128px','154px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bazooka.svg','0px','0px']
   },
   {
      id: 'thunderchild',
      type: 'image',
      rect: ['-105px','405px','547px','122px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/thunderchild.svg','0px','0px']
   },
   {
      id: 'tripod',
      type: 'image',
      rect: ['659px','61px','434px','447px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tripod%20-%20side.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_bazooka}": [
            ["style", "top", '341px'],
            ["style", "height", '153.83765968516px'],
            ["style", "left", '89px'],
            ["style", "width", '128.44999694824px']
         ],
         "${_Ned}": [
            ["style", "top", '354px'],
            ["style", "height", '127.81666564941px'],
            ["style", "left", '89px'],
            ["style", "width", '73.969968908102px']
         ],
         "${_panelbg}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '500px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '980px']
         ],
         "${_tripod}": [
            ["style", "top", '61px'],
            ["style", "height", '447px'],
            ["style", "left", '659px'],
            ["style", "width", '433.57961355601px']
         ],
         "${_flames2}": [
            ["style", "top", '373.25px'],
            ["transform", "scaleY", '0.30997'],
            ["transform", "rotateZ", '-4deg'],
            ["style", "height", '56.041929151162px'],
            ["transform", "scaleX", '0.07177'],
            ["style", "left", '68.25px'],
            ["style", "width", '60.283355712891px']
         ],
         "${_bullet}": [
            ["style", "top", '363px'],
            ["style", "height", '30px'],
            ["style", "left", '163px'],
            ["style", "width", '45px']
         ],
         "${_thunderchild}": [
            ["style", "top", '404.6px'],
            ["style", "height", '122.4007585335px'],
            ["style", "left", '-105px'],
            ["style", "width", '547px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 51962.351898955,
         autoPlay: true,
         timeline: [
            { id: "eid1077", tween: [ "transform", "${_flames2}", "scaleX", '0.74647', { fromValue: '0.07177'}], position: 48627, duration: 1373 },
            { id: "eid1079", tween: [ "style", "${_flames2}", "left", '50.25px', { fromValue: '68.25px'}], position: 48627, duration: 1373 },
            { id: "eid1059", tween: [ "style", "${_bullet}", "top", '345.62px', { fromValue: '363px'}], position: 49459, duration: 237 },
            { id: "eid1081", tween: [ "style", "${_bullet}", "top", '311px', { fromValue: '345.62px'}], position: 49696, duration: 707 },
            { id: "eid1083", tween: [ "style", "${_bullet}", "top", '171px', { fromValue: '311px'}], position: 50403, duration: 1559 },
            { id: "eid1080", tween: [ "style", "${_flames2}", "top", '383.92px', { fromValue: '373.25px'}], position: 48627, duration: 1373 },
            { id: "eid1078", tween: [ "transform", "${_flames2}", "scaleY", '0.92217', { fromValue: '0.30997'}], position: 48627, duration: 1373 },
            { id: "eid1060", tween: [ "style", "${_bullet}", "left", '360.12px', { fromValue: '163px'}], position: 49459, duration: 945 },
            { id: "eid1082", tween: [ "style", "${_bullet}", "left", '680px', { fromValue: '360.12px'}], position: 50403, duration: 1559 }         ]
      }
   }
},
"Sharon": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Cartman',
      type: 'rect',
      rect: ['39','66','auto','auto','auto','auto']
   },
   {
      id: 'Kenny',
      type: 'rect',
      rect: ['629','11','auto','auto','auto','auto']
   },
   {
      id: 'Kyle',
      type: 'rect',
      rect: ['487','19','auto','auto','auto','auto']
   },
   {
      id: 'Stan',
      type: 'rect',
      rect: ['173','49','auto','auto','auto','auto']
   },
   {
      id: 'sharonship',
      type: 'image',
      rect: ['694px','175px','800px','282px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/sharonship.svg','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'Kyle',
      symbolName: 'Kyle'
   },
   {
      id: 'Stan',
      symbolName: 'Stan'
   },
   {
      id: 'Kenny',
      symbolName: 'Kenny'
   },
   {
      id: 'Cartman',
      symbolName: 'Cartman'
   }   ]
   },
   states: {
      "Base State": {
         "${_Kyle}": [
            ["style", "top", '-4px'],
            ["style", "left", '488px']
         ],
         "${_Stan}": [
            ["style", "top", '30px']
         ],
         "${_sharonship}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_Kenny}": [
            ["style", "top", '-10px']
         ],
         "${symbolSelector}": [
            ["style", "height", '282px'],
            ["style", "width", '800px']
         ],
         "${_Cartman}": [
            ["style", "top", '47px'],
            ["style", "left", '37px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
            { id: "eid518", tween: [ "style", "${_Kyle}", "top", '-4px', { fromValue: '-4px'}], position: 0, duration: 0 },
            { id: "eid519", tween: [ "style", "${_Kenny}", "top", '-10px', { fromValue: '-10px'}], position: 0, duration: 0 },
            { id: "eid857", tween: [ "style", "${_Kyle}", "left", '488px', { fromValue: '488px'}], position: 0, duration: 0 },
            { id: "eid523", tween: [ "style", "${_Cartman}", "left", '37px', { fromValue: '37px'}], position: 0, duration: 0 },
            { id: "eid516", tween: [ "style", "${_Stan}", "top", '30px', { fromValue: '30px'}], position: 0, duration: 0 },
            { id: "eid525", tween: [ "style", "${_Cartman}", "top", '47px', { fromValue: '47px'}], position: 0, duration: 0 }         ]
      }
   }
},
"Cartman": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Cartbody',
      type: 'image',
      rect: ['4px','68px','148px','67px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Cartbody.svg','0px','0px']
   },
   {
      id: 'Carthead',
      type: 'image',
      rect: ['21px','0px','109px','90px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Carthead.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Cartbody}": [
            ["style", "top", '68.27px'],
            ["style", "height", '66.704466413856px'],
            ["style", "left", '4px'],
            ["style", "width", '147.56206375368px']
         ],
         "${_Carthead}": [
            ["style", "top", '0px'],
            ["style", "height", '89.77392263512px'],
            ["style", "left", '21px'],
            ["style", "width", '109.13333129883px']
         ],
         "${symbolSelector}": [
            ["style", "height", '136.30000305176px'],
            ["style", "width", '152.16667175293px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 750,
         autoPlay: true,
         labels: {
            "Carthead": 0
         },
         timeline: [
            { id: "eid336", tween: [ "style", "${_Carthead}", "top", '5px', { fromValue: '0px'}], position: 0, duration: 400 },
            { id: "eid351", tween: [ "style", "${_Carthead}", "top", '0px', { fromValue: '5px'}], position: 400, duration: 347 }         ]
      }
   }
},
"Kenny": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Kennybody',
      type: 'image',
      rect: ['8px','107px','103px','52px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Kennybody.svg','0px','0px']
   },
   {
      id: 'Kennyhead',
      type: 'image',
      rect: ['1px','9px','115px','112px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Kennyhead.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Kennyhead}": [
            ["style", "top", '9px'],
            ["style", "height", '112px'],
            ["style", "left", '1px'],
            ["style", "width", '114.61333333333px']
         ],
         "${_Kennybody}": [
            ["style", "top", '107.12px'],
            ["style", "height", '51.893333333333px'],
            ["style", "left", '8px'],
            ["style", "width", '103.04px']
         ],
         "${symbolSelector}": [
            ["style", "height", '161px'],
            ["style", "width", '119.66666412354px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 750,
         autoPlay: true,
         labels: {
            "Kennyhead": 0
         },
         timeline: [
            { id: "eid352", tween: [ "style", "${_Kennyhead}", "top", '16px', { fromValue: '9px'}], position: 0, duration: 373 },
            { id: "eid354", tween: [ "style", "${_Kennyhead}", "top", '9px', { fromValue: '16px'}], position: 373, duration: 373 }         ]
      }
   }
},
"Stan": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Stanbody',
      type: 'image',
      rect: ['-1px','-1px','105px','161px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Stanbody.svg','0px','0px']
   },
   {
      id: 'Stanhead',
      type: 'image',
      rect: ['0px','0px','105px','112px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Stanhead.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Stanhead}": [
            ["style", "top", '0px'],
            ["style", "height", '111.61455609639px'],
            ["style", "left", '0px'],
            ["style", "width", '104.96666717529px']
         ],
         "${_Stanbody}": [
            ["style", "top", '-1px'],
            ["style", "height", '160.94888966878px'],
            ["style", "left", '-1px'],
            ["style", "width", '104.96666717529px']
         ],
         "${symbolSelector}": [
            ["style", "height", '161px'],
            ["style", "width", '104.98332977295px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 750,
         autoPlay: true,
         labels: {
            "Stanhead": 0
         },
         timeline: [
            { id: "eid358", tween: [ "style", "${_Stanhead}", "top", '5px', { fromValue: '0px'}], position: 0, duration: 373 },
            { id: "eid360", tween: [ "style", "${_Stanhead}", "top", '0px', { fromValue: '5px'}], position: 373, duration: 373 }         ]
      }
   }
},
"Kyle": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Kylebody',
      type: 'image',
      rect: ['12px','97px','101px','64px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Kylebody.svg','0px','0px']
   },
   {
      id: 'Kylehead',
      type: 'image',
      rect: ['1px','5px','128px','106px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Kylehead.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Kylehead}": [
            ["style", "top", '5px'],
            ["style", "height", '105.70149537994px'],
            ["style", "left", '1px'],
            ["style", "width", '127.59999847412px']
         ],
         "${symbolSelector}": [
            ["style", "height", '161px'],
            ["style", "width", '127.59999847412px']
         ],
         "${_Kylebody}": [
            ["style", "top", '96.83px'],
            ["style", "height", '64.169855715987px'],
            ["style", "left", '12px'],
            ["style", "width", '101.26323879611px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 750,
         autoPlay: true,
         labels: {
            "Kylehead": 0
         },
         timeline: [
            { id: "eid364", tween: [ "style", "${_Kylehead}", "top", '11px', { fromValue: '5px'}], position: 0, duration: 500 },
            { id: "eid368", tween: [ "style", "${_Kylehead}", "top", '5px', { fromValue: '11px'}], position: 500, duration: 247 }         ]
      }
   }
},
"KennyDeath": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'kenny',
      type: 'image',
      rect: ['0px','0px','204px','275px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/kenny.svg','0px','0px']
   },
   {
      id: 'kennyskeleton',
      type: 'image',
      rect: ['10px','14px','194px','261px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/kennyskeleton.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_kenny}": [
            ["style", "top", '0px'],
            ["style", "height", '274.6833190918px'],
            ["style", "opacity", '0.8'],
            ["style", "left", '0px'],
            ["style", "width", '204.16679444063px']
         ],
         "${_kennyskeleton}": [
            ["style", "top", '14.37px'],
            ["style", "height", '260.64999389648px'],
            ["style", "opacity", '0'],
            ["style", "left", '10.27px'],
            ["style", "width", '193.74365864046px']
         ],
         "${symbolSelector}": [
            ["style", "height", '274.69176px'],
            ["style", "width", '204.14204660339px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 23941,
         autoPlay: false,
         timeline: [
            { id: "eid555", tween: [ "style", "${_kennyskeleton}", "opacity", '0.8', { fromValue: '0.000000'}], position: 18525, duration: 543 },
            { id: "eid613", tween: [ "style", "${_kennyskeleton}", "opacity", '0', { fromValue: '0.8'}], position: 19068, duration: 542 },
            { id: "eid616", tween: [ "style", "${_kennyskeleton}", "opacity", '0.8', { fromValue: '0'}], position: 19610, duration: 549 },
            { id: "eid617", tween: [ "style", "${_kennyskeleton}", "opacity", '0', { fromValue: '0.8'}], position: 20159, duration: 529 },
            { id: "eid615", tween: [ "style", "${_kennyskeleton}", "opacity", '0.8', { fromValue: '0'}], position: 20688, duration: 545 },
            { id: "eid741", tween: [ "style", "${_kennyskeleton}", "opacity", '0', { fromValue: '0.8'}], position: 21233, duration: 545 },
            { id: "eid740", tween: [ "style", "${_kennyskeleton}", "opacity", '0.8', { fromValue: '0'}], position: 21778, duration: 529 },
            { id: "eid739", tween: [ "style", "${_kennyskeleton}", "opacity", '0', { fromValue: '0.8'}], position: 22307, duration: 549 },
            { id: "eid738", tween: [ "style", "${_kennyskeleton}", "opacity", '0.8', { fromValue: '0'}], position: 22856, duration: 542 },
            { id: "eid737", tween: [ "style", "${_kennyskeleton}", "opacity", '0.000000', { fromValue: '0.8'}], position: 23398, duration: 543 }         ]
      }
   }
},
"Cartmanscare": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'cartmanscarednoeyes',
      type: 'image',
      rect: ['0px','0px','998px','894px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cartmanscarednoeyes.svg','0px','0px']
   },
   {
      rect: ['461px','326px','20px','20px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'righteye',
      stroke: [5,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      rect: ['641px','326px','20px','20px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'lefteye',
      stroke: [5,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(0,0,0,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_cartmanscarednoeyes}": [
            ["style", "height", '894.05745551783px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '998.03332519531px']
         ],
         "${_righteye}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '459.5px'],
            ["style", "top", '326px']
         ],
         "${_lefteye}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '639.5px'],
            ["style", "top", '326px']
         ],
         "${symbolSelector}": [
            ["style", "height", '894.04998779297px'],
            ["style", "width", '998.01666259766px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 406.11318795268,
         autoPlay: true,
         timeline: [
            { id: "eid891", tween: [ "style", "${_lefteye}", "left", '641.48px', { fromValue: '639.5px'}], position: 0, duration: 202 },
            { id: "eid895", tween: [ "style", "${_lefteye}", "left", '639.5px', { fromValue: '641.48px'}], position: 202, duration: 204 },
            { id: "eid892", tween: [ "style", "${_righteye}", "left", '461.5px', { fromValue: '459.5px'}], position: 0, duration: 200 },
            { id: "eid896", tween: [ "style", "${_righteye}", "left", '459.5px', { fromValue: '461.5px'}], position: 200, duration: 200 }         ]
      }
   }
},
"Thunderchild": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Jimbo',
      type: 'image',
      rect: ['1622px','-82px','331px','611px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Jimbo.svg','0px','0px']
   },
   {
      id: 'Ned',
      type: 'image',
      rect: ['1466px','-38px','293px','506px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Ned.svg','0px','0px']
   },
   {
      id: 'thunderchild',
      type: 'image',
      rect: ['0px','0px','3225px','956px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/thunderchild.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Jimbo}": [
            ["style", "top", '-82px'],
            ["style", "left", '1622px']
         ],
         "${_Ned}": [
            ["style", "top", '-37.78px'],
            ["style", "height", '505.90002441406px'],
            ["style", "left", '1466px'],
            ["style", "width", '292.80101579401px']
         ],
         "${symbolSelector}": [
            ["style", "height", '955.75px'],
            ["style", "width", '3224.9333496094px']
         ],
         "${_thunderchild}": [
            ["style", "height", '955.75541538227px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '3224.9333496094px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Panel13": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'panelbg3',
      type: 'image',
      rect: ['0px','-246px','1462px','746px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panelbg.svg','0px','0px']
   },
   {
      id: 'tripodhd',
      type: 'image',
      rect: ['99px','-36px','894px','746px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tripodhd.svg','0px','0px']
   },
   {
      rect: ['312px','120px','306px','259px','auto','auto'],
      id: 'flamesyor',
      opacity: 1,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/flamesyor.svg','0px','0px']
   },
   {
      id: 'flamesyel',
      type: 'image',
      rect: ['440px','223px','50px','42px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/flamesyel.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_tripodhd}": [
            ["style", "top", '-36px'],
            ["style", "height", '746px'],
            ["style", "left", '99px'],
            ["style", "width", '893.5981595092px']
         ],
         "${_flamesyor}": [
            ["style", "top", '120px'],
            ["style", "height", '259.21294370253px'],
            ["style", "opacity", '0'],
            ["style", "left", '372px'],
            ["style", "width", '306.43333435059px']
         ],
         "${symbolSelector}": [
            ["style", "height", '500px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '980px']
         ],
         "${_panelbg3}": [
            ["style", "top", '-246px'],
            ["style", "height", '746px'],
            ["style", "left", '0px'],
            ["style", "width", '1462.16px']
         ],
         "${_flamesyel}": [
            ["style", "top", '223px'],
            ["style", "height", '42.25px'],
            ["style", "left", '500.03px'],
            ["style", "width", '49.952438818399px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 58054,
         autoPlay: true,
         timeline: [
            { id: "eid1085", tween: [ "style", "${_flamesyor}", "top", '-257.82px', { fromValue: '120px'}], position: 51005, duration: 2981 },
            { id: "eid1110", tween: [ "style", "${_flamesyor}", "top", '-1104.5px', { fromValue: '-257.82px'}], position: 53986, duration: 4068 },
            { id: "eid1086", tween: [ "style", "${_flamesyor}", "width", '1164.3379227255px', { fromValue: '306.43333435059px'}], position: 51005, duration: 2981 },
            { id: "eid1111", tween: [ "style", "${_flamesyor}", "width", '2726.4833984375px', { fromValue: '1164.3379227255px'}], position: 53986, duration: 4068 },
            { id: "eid1084", tween: [ "style", "${_flamesyor}", "height", '984.86669921875px', { fromValue: '259.21294370253px'}], position: 51005, duration: 2981 },
            { id: "eid1109", tween: [ "style", "${_flamesyor}", "height", '2306.2077359979px', { fromValue: '984.86669921875px'}], position: 53986, duration: 4068 },
            { id: "eid1100", tween: [ "style", "${_flamesyor}", "opacity", '1', { fromValue: '0'}], position: 51005, duration: 40 },
            { id: "eid1095", tween: [ "style", "${_flamesyel}", "width", '1503.6321907898px', { fromValue: '49.952438818399px'}], position: 51050, duration: 6913 },
            { id: "eid1093", tween: [ "style", "${_flamesyel}", "height", '1271.8476797143px', { fromValue: '42.25px'}], position: 51050, duration: 6913 },
            { id: "eid1094", tween: [ "style", "${_flamesyel}", "top", '-434.22px', { fromValue: '223px'}], position: 51050, duration: 6913 },
            { id: "eid1096", tween: [ "style", "${_flamesyel}", "left", '-289.42px', { fromValue: '500.03px'}], position: 51050, duration: 6913 },
            { id: "eid1087", tween: [ "style", "${_flamesyor}", "left", '-748.22px', { fromValue: '372px'}], position: 51005, duration: 7049 }         ]
      }
   }
},
"Panel14": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'panelbg',
      type: 'image',
      rect: ['-595px','-338px','1764px','900px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panelbg.svg','0px','0px']
   },
   {
      id: 'Jimbonoeyebrows',
      type: 'image',
      rect: ['-364px','-545px','1303px','2446px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Jimbonoeyebrows.svg','0px','0px']
   },
   {
      rect: ['79px','44px','164px','3px','auto','auto'],
      transform: [{1:0,0:0},['-18deg']],
      id: 'righteyebrow',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      rect: ['255px','49px','164px','3px','auto','auto'],
      transform: [{1:0,0:0},['18deg']],
      id: 'lefteyebrow',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '500px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '980px']
         ],
         "${_righteyebrow}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["transform", "rotateZ", '-18deg'],
            ["style", "height", '3px'],
            ["style", "left", '79px'],
            ["style", "top", '43.5px']
         ],
         "${_Jimbonoeyebrows}": [
            ["style", "top", '-544.92px'],
            ["style", "height", '2445.9333496094px'],
            ["style", "left", '-364px'],
            ["style", "width", '1302.522627057px']
         ],
         "${_panelbg}": [
            ["style", "top", '-338px'],
            ["style", "height", '900px'],
            ["style", "left", '-595px'],
            ["style", "width", '1764px']
         ],
         "${_lefteyebrow}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["transform", "rotateZ", '18deg'],
            ["style", "height", '3px'],
            ["style", "left", '255px'],
            ["style", "top", '49.27px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 58333.457962651,
         autoPlay: true,
         timeline: [
            { id: "eid1116", tween: [ "transform", "${_lefteyebrow}", "rotateZ", '-23deg', { fromValue: '18deg'}], position: 56683, duration: 1650 },
            { id: "eid1117", tween: [ "transform", "${_righteyebrow}", "rotateZ", '28deg', { fromValue: '-18deg'}], position: 56683, duration: 1650 }         ]
      }
   }
},
"Panel15": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'panelbg',
      type: 'image',
      rect: ['0px','0px','980px','500px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panelbg.svg','0px','0px']
   },
   {
      id: 'ThunderchildDance',
      type: 'rect',
      rect: ['-21','356','auto','auto','auto','auto']
   },
   {
      id: 'SharonNoKenny',
      type: 'rect',
      transform: [{1:0,0:0},{},{},['0.885','0.885']],
      rect: ['283px','284px','auto','auto','auto','auto']
   },
   {
      id: 'end2',
      type: 'image',
      rect: ['107px','143px','742px','164px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/end.svg','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'ThunderchildDance',
      symbolName: 'ThunderchildDance'
   },
   {
      id: 'SharonNoKenny',
      symbolName: 'SharonNoKenny'
   }   ]
   },
   states: {
      "Base State": {
         "${_end2}": [
            ["style", "left", '107.22px'],
            ["style", "top", '143.37px']
         ],
         "${_SharonNoKenny}": [
            ["transform", "scaleX", '0.885'],
            ["style", "left", '283px'],
            ["transform", "scaleY", '0.885'],
            ["style", "top", '284px']
         ],
         "${_panelbg}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '500px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '980px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"SharonNoKenny": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Cartman',
      type: 'rect',
      rect: ['39','66','auto','auto','auto','auto']
   },
   {
      id: 'Kyle',
      type: 'rect',
      rect: ['487','19','auto','auto','auto','auto']
   },
   {
      id: 'Stan',
      type: 'rect',
      rect: ['637px','49','auto','auto','auto','auto']
   },
   {
      id: 'sharonship',
      type: 'image',
      rect: ['0px','175px','800px','282px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/sharonship.svg','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'Stan',
      symbolName: 'Stan'
   },
   {
      id: 'Kyle',
      symbolName: 'Kyle'
   },
   {
      id: 'Cartman',
      symbolName: 'Cartman'
   }   ]
   },
   states: {
      "Base State": {
         "${_Cartman}": [
            ["style", "top", '49px'],
            ["style", "left", '87px']
         ],
         "${_sharonship}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_Kyle}": [
            ["style", "top", '0px'],
            ["style", "left", '502px']
         ],
         "${_Stan}": [
            ["style", "top", '-4px'],
            ["style", "left", '637px']
         ],
         "${symbolSelector}": [
            ["style", "height", '282px'],
            ["style", "width", '800px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
            { id: "eid1124", tween: [ "style", "${_Kyle}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid1123", tween: [ "style", "${_Kyle}", "left", '502px', { fromValue: '502px'}], position: 0, duration: 0 },
            { id: "eid1119", tween: [ "style", "${_Cartman}", "left", '87px', { fromValue: '87px'}], position: 0, duration: 0 },
            { id: "eid1118", tween: [ "style", "${_Stan}", "top", '-4px', { fromValue: '-4px'}], position: 0, duration: 0 },
            { id: "eid1120", tween: [ "style", "${_Cartman}", "top", '49px', { fromValue: '49px'}], position: 0, duration: 0 }         ]
      }
   }
},
"ThunderchildDance": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['6px','-228px','312px','568px','auto','auto'],
      id: 'Nedbody',
      transform: [{1:0,0:0},{},{},['-0.258','0.258']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Nedbody.svg','0px','0px']
   },
   {
      rect: ['32px','-224px','483px','539px','auto','auto'],
      id: 'Jimbobody',
      transform: [{1:0,0:0},{},{},['-0.261','0.261']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Jimbobody.svg','0px','0px']
   },
   {
      rect: ['-58px','-13px','791px','177px','auto','auto'],
      id: 'thunderchild2',
      transform: [{1:0,0:0},{},{},['0.853','0.853']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/thunderchild.svg','0px','0px']
   },
   {
      rect: ['119px','-227px','303px','334px','auto','auto'],
      id: 'Jimbohead',
      transform: [{1:0,0:0},{},{},['0.3','0.3']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Jimbohead.svg','0px','0px']
   },
   {
      rect: ['-129px','-309px','584px','534px','auto','auto'],
      id: 'Nedhead',
      transform: [{1:0,0:0},{},{},['0.175','0.175']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/Nedhead.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_thunderchild2}": [
            ["transform", "scaleX", '0.85335'],
            ["style", "top", '-12.98px'],
            ["style", "left", '-58px'],
            ["transform", "scaleY", '0.85335']
         ],
         "${symbolSelector}": [
            ["style", "height", '151.04295px'],
            ["style", "width", '674.99985px']
         ],
         "${_Nedhead}": [
            ["style", "top", '-309px'],
            ["transform", "scaleX", '0.17476'],
            ["style", "left", '-128.97px'],
            ["transform", "scaleY", '0.17476']
         ],
         "${_Jimbohead}": [
            ["style", "top", '-227.12px'],
            ["transform", "scaleX", '0.30033'],
            ["style", "left", '119px'],
            ["transform", "scaleY", '0.30033']
         ],
         "${_Jimbobody}": [
            ["style", "top", '-224px'],
            ["transform", "scaleX", '-0.261'],
            ["style", "left", '32.47px'],
            ["transform", "scaleY", '0.261']
         ],
         "${_Nedbody}": [
            ["transform", "scaleX", '-0.25804'],
            ["style", "left", '6px'],
            ["transform", "scaleY", '0.25804'],
            ["style", "top", '-228px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 750,
         autoPlay: true,
         timeline: [
            { id: "eid1126", tween: [ "style", "${_Nedhead}", "top", '-304px', { fromValue: '-309px'}], position: 0, duration: 375 },
            { id: "eid1129", tween: [ "style", "${_Nedhead}", "top", '-309px', { fromValue: '-304px'}], position: 375, duration: 375 },
            { id: "eid1125", tween: [ "style", "${_Jimbohead}", "top", '-222.12px', { fromValue: '-227.12px'}], position: 0, duration: 375 },
            { id: "eid1130", tween: [ "style", "${_Jimbohead}", "top", '-227.12px', { fromValue: '-222.12px'}], position: 375, duration: 375 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-3575538");
