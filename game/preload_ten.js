
(function() {


  if (typeof Module == 'undefined') Module = {};
  if (!Module['preRun']) Module['preRun'] = [];
  Module["preRun"].push(function() {


function assert(check, msg) {
  if (!check) throw msg + new Error().stack;
}
Module['FS_createPath']('/', 'packages', true, true);
Module['FS_createPath']('/packages', 'gk', true, true);
Module['FS_createPath']('/packages/gk', 'fantasy', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'skyfantasy', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'castell_plaster_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'iron_intersection_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'castell_wall_gk_v02', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'castell_wall_gk_v03', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'castell_wall_trim_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'iron_plates_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'iron_trim_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'wooden_planks_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'rock_formation_gk_v02', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'castell_wall_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'rock_formation_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'wooden_roof_tiles_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'stone_ground_gk_v01', true, true);
Module['FS_createPath']('/packages/gk/fantasy', 'stone_ground_tiles_gk_v01', true, true);
Module['FS_createPath']('/packages', 'base', true, true);

    function DataRequest() {}
    DataRequest.prototype = {
      requests: {},
      open: function(mode, name) {
        this.requests[name] = this;
      },
      send: function() {}
    };
  
    var filePreload0 = new DataRequest();
    filePreload0.open('GET', 'packages/gk/fantasy/skyfantasy/skyfantasy_rt.png', true);
    filePreload0.responseType = 'arraybuffer';
    filePreload0.onload = function() {
      var arrayBuffer = filePreload0.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/skyfantasy/skyfantasy_rt.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/skyfantasy', 'skyfantasy_rt.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_rt.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_rt.png');
    filePreload0.send(null);

    var filePreload1 = new DataRequest();
    filePreload1.open('GET', 'packages/gk/fantasy/skyfantasy/skyfantasy_up.png', true);
    filePreload1.responseType = 'arraybuffer';
    filePreload1.onload = function() {
      var arrayBuffer = filePreload1.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/skyfantasy/skyfantasy_up.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/skyfantasy', 'skyfantasy_up.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_up.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_up.png');
    filePreload1.send(null);

    var filePreload2 = new DataRequest();
    filePreload2.open('GET', 'packages/gk/fantasy/skyfantasy/skyfantasy_bk.png', true);
    filePreload2.responseType = 'arraybuffer';
    filePreload2.onload = function() {
      var arrayBuffer = filePreload2.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/skyfantasy/skyfantasy_bk.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/skyfantasy', 'skyfantasy_bk.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_bk.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_bk.png');
    filePreload2.send(null);

    var filePreload3 = new DataRequest();
    filePreload3.open('GET', 'packages/gk/fantasy/skyfantasy/skyfantasy_lf.png', true);
    filePreload3.responseType = 'arraybuffer';
    filePreload3.onload = function() {
      var arrayBuffer = filePreload3.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/skyfantasy/skyfantasy_lf.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/skyfantasy', 'skyfantasy_lf.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_lf.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_lf.png');
    filePreload3.send(null);

    var filePreload4 = new DataRequest();
    filePreload4.open('GET', 'packages/gk/fantasy/skyfantasy/skyfantasy_ft.png', true);
    filePreload4.responseType = 'arraybuffer';
    filePreload4.onload = function() {
      var arrayBuffer = filePreload4.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/skyfantasy/skyfantasy_ft.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/skyfantasy', 'skyfantasy_ft.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_ft.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_ft.png');
    filePreload4.send(null);

    var filePreload5 = new DataRequest();
    filePreload5.open('GET', 'packages/gk/fantasy/skyfantasy/skyfantasy_dn.png', true);
    filePreload5.responseType = 'arraybuffer';
    filePreload5.onload = function() {
      var arrayBuffer = filePreload5.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/skyfantasy/skyfantasy_dn.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/skyfantasy', 'skyfantasy_dn.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_dn.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/skyfantasy/skyfantasy_dn.png');
    filePreload5.send(null);

    var filePreload6 = new DataRequest();
    filePreload6.open('GET', 'packages/gk/fantasy/castell_plaster_gk_v01/package.cfg', true);
    filePreload6.responseType = 'arraybuffer';
    filePreload6.onload = function() {
      var arrayBuffer = filePreload6.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_plaster_gk_v01/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_plaster_gk_v01', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_plaster_gk_v01/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_plaster_gk_v01/package.cfg');
    filePreload6.send(null);

    var filePreload7 = new DataRequest();
    filePreload7.open('GET', 'packages/gk/fantasy/iron_intersection_gk_v01/package.cfg', true);
    filePreload7.responseType = 'arraybuffer';
    filePreload7.onload = function() {
      var arrayBuffer = filePreload7.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/iron_intersection_gk_v01/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/iron_intersection_gk_v01', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/iron_intersection_gk_v01/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/iron_intersection_gk_v01/package.cfg');
    filePreload7.send(null);

    var filePreload8 = new DataRequest();
    filePreload8.open('GET', 'packages/gk/fantasy/castell_wall_gk_v02/package.cfg', true);
    filePreload8.responseType = 'arraybuffer';
    filePreload8.onload = function() {
      var arrayBuffer = filePreload8.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_gk_v02/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_gk_v02', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v02/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v02/package.cfg');
    filePreload8.send(null);

    var filePreload9 = new DataRequest();
    filePreload9.open('GET', 'packages/gk/fantasy/castell_wall_gk_v03/package.cfg', true);
    filePreload9.responseType = 'arraybuffer';
    filePreload9.onload = function() {
      var arrayBuffer = filePreload9.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_gk_v03/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_gk_v03', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v03/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v03/package.cfg');
    filePreload9.send(null);

    var filePreload10 = new DataRequest();
    filePreload10.open('GET', 'packages/gk/fantasy/castell_wall_trim_gk_v01/package.cfg', true);
    filePreload10.responseType = 'arraybuffer';
    filePreload10.onload = function() {
      var arrayBuffer = filePreload10.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_trim_gk_v01/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_trim_gk_v01', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_trim_gk_v01/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_trim_gk_v01/package.cfg');
    filePreload10.send(null);

    var filePreload11 = new DataRequest();
    filePreload11.open('GET', 'packages/gk/fantasy/iron_plates_gk_v01/package.cfg', true);
    filePreload11.responseType = 'arraybuffer';
    filePreload11.onload = function() {
      var arrayBuffer = filePreload11.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/iron_plates_gk_v01/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/iron_plates_gk_v01', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/iron_plates_gk_v01/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/iron_plates_gk_v01/package.cfg');
    filePreload11.send(null);

    var filePreload12 = new DataRequest();
    filePreload12.open('GET', 'packages/gk/fantasy/iron_trim_gk_v01/package.cfg', true);
    filePreload12.responseType = 'arraybuffer';
    filePreload12.onload = function() {
      var arrayBuffer = filePreload12.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/iron_trim_gk_v01/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/iron_trim_gk_v01', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/iron_trim_gk_v01/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/iron_trim_gk_v01/package.cfg');
    filePreload12.send(null);

    var filePreload13 = new DataRequest();
    filePreload13.open('GET', 'packages/gk/fantasy/wooden_planks_gk_v01/package.cfg', true);
    filePreload13.responseType = 'arraybuffer';
    filePreload13.onload = function() {
      var arrayBuffer = filePreload13.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/wooden_planks_gk_v01/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/wooden_planks_gk_v01', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/wooden_planks_gk_v01/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/wooden_planks_gk_v01/package.cfg');
    filePreload13.send(null);

    var filePreload14 = new DataRequest();
    filePreload14.open('GET', 'packages/gk/fantasy/rock_formation_gk_v02/package.cfg', true);
    filePreload14.responseType = 'arraybuffer';
    filePreload14.onload = function() {
      var arrayBuffer = filePreload14.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/rock_formation_gk_v02/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/rock_formation_gk_v02', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v02/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v02/package.cfg');
    filePreload14.send(null);

    var filePreload15 = new DataRequest();
    filePreload15.open('GET', 'packages/gk/fantasy/package.cfg', true);
    filePreload15.responseType = 'arraybuffer';
    filePreload15.onload = function() {
      var arrayBuffer = filePreload15.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/package.cfg');
    filePreload15.send(null);

    var filePreload16 = new DataRequest();
    filePreload16.open('GET', 'packages/gk/fantasy/castell_wall_gk_v01/package.cfg', true);
    filePreload16.responseType = 'arraybuffer';
    filePreload16.onload = function() {
      var arrayBuffer = filePreload16.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_gk_v01/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_gk_v01', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v01/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v01/package.cfg');
    filePreload16.send(null);

    var filePreload17 = new DataRequest();
    filePreload17.open('GET', 'packages/gk/fantasy/rock_formation_gk_v01/package.cfg', true);
    filePreload17.responseType = 'arraybuffer';
    filePreload17.onload = function() {
      var arrayBuffer = filePreload17.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/rock_formation_gk_v01/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/rock_formation_gk_v01', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v01/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v01/package.cfg');
    filePreload17.send(null);

    var filePreload18 = new DataRequest();
    filePreload18.open('GET', 'packages/gk/fantasy/wooden_roof_tiles_gk_v01/package.cfg', true);
    filePreload18.responseType = 'arraybuffer';
    filePreload18.onload = function() {
      var arrayBuffer = filePreload18.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/wooden_roof_tiles_gk_v01/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/wooden_roof_tiles_gk_v01', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/wooden_roof_tiles_gk_v01/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/wooden_roof_tiles_gk_v01/package.cfg');
    filePreload18.send(null);

    var filePreload19 = new DataRequest();
    filePreload19.open('GET', 'packages/gk/fantasy/stone_ground_gk_v01/package.cfg', true);
    filePreload19.responseType = 'arraybuffer';
    filePreload19.onload = function() {
      var arrayBuffer = filePreload19.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/stone_ground_gk_v01/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/stone_ground_gk_v01', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/stone_ground_gk_v01/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/stone_ground_gk_v01/package.cfg');
    filePreload19.send(null);

    var filePreload20 = new DataRequest();
    filePreload20.open('GET', 'packages/gk/fantasy/stone_ground_tiles_gk_v01/package.cfg', true);
    filePreload20.responseType = 'arraybuffer';
    filePreload20.onload = function() {
      var arrayBuffer = filePreload20.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/stone_ground_tiles_gk_v01/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/stone_ground_tiles_gk_v01', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/stone_ground_tiles_gk_v01/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/stone_ground_tiles_gk_v01/package.cfg');
    filePreload20.send(null);

    var filePreload21 = new DataRequest();
    filePreload21.open('GET', 'packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_cc.jpg', true);
    filePreload21.responseType = 'arraybuffer';
    filePreload21.onload = function() {
      var arrayBuffer = filePreload21.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_cc.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/rock_formation_gk_v01', 'rock_formation_gk_v01_cc.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_cc.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_cc.jpg');
    filePreload21.send(null);

    var filePreload22 = new DataRequest();
    filePreload22.open('GET', 'packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_nm.png', true);
    filePreload22.responseType = 'arraybuffer';
    filePreload22.onload = function() {
      var arrayBuffer = filePreload22.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_nm.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/rock_formation_gk_v01', 'rock_formation_gk_v01_nm.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_nm.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_nm.png');
    filePreload22.send(null);

    var filePreload23 = new DataRequest();
    filePreload23.open('GET', 'packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_sc.png', true);
    filePreload23.responseType = 'arraybuffer';
    filePreload23.onload = function() {
      var arrayBuffer = filePreload23.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_sc.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/rock_formation_gk_v01', 'rock_formation_gk_v01_sc.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_sc.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_sc.png');
    filePreload23.send(null);

    var filePreload24 = new DataRequest();
    filePreload24.open('GET', 'packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_hm.png', true);
    filePreload24.responseType = 'arraybuffer';
    filePreload24.onload = function() {
      var arrayBuffer = filePreload24.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_hm.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/rock_formation_gk_v01', 'rock_formation_gk_v01_hm.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_hm.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_hm.png');
    filePreload24.send(null);

    var filePreload25 = new DataRequest();
    filePreload25.open('GET', 'packages/gk/fantasy/rock_formation_gk_v02/rock_formation_gk_v02_cc.jpg', true);
    filePreload25.responseType = 'arraybuffer';
    filePreload25.onload = function() {
      var arrayBuffer = filePreload25.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/rock_formation_gk_v02/rock_formation_gk_v02_cc.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/rock_formation_gk_v02', 'rock_formation_gk_v02_cc.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v02/rock_formation_gk_v02_cc.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v02/rock_formation_gk_v02_cc.jpg');
    filePreload25.send(null);

    var filePreload26 = new DataRequest();
    filePreload26.open('GET', 'packages/gk/fantasy/rock_formation_gk_v02/rock_formation_gk_v02_nm.png', true);
    filePreload26.responseType = 'arraybuffer';
    filePreload26.onload = function() {
      var arrayBuffer = filePreload26.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/rock_formation_gk_v02/rock_formation_gk_v02_nm.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/rock_formation_gk_v02', 'rock_formation_gk_v02_nm.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v02/rock_formation_gk_v02_nm.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v02/rock_formation_gk_v02_nm.png');
    filePreload26.send(null);

    var filePreload27 = new DataRequest();
    filePreload27.open('GET', 'packages/gk/fantasy/rock_formation_gk_v02/rock_formation_gk_v02_sc.jpg', true);
    filePreload27.responseType = 'arraybuffer';
    filePreload27.onload = function() {
      var arrayBuffer = filePreload27.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/rock_formation_gk_v02/rock_formation_gk_v02_sc.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/rock_formation_gk_v02', 'rock_formation_gk_v02_sc.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v02/rock_formation_gk_v02_sc.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v02/rock_formation_gk_v02_sc.jpg');
    filePreload27.send(null);

    var filePreload28 = new DataRequest();
    filePreload28.open('GET', 'packages/gk/fantasy/rock_formation_gk_v02/rock_formation_gk_v02_hm.png', true);
    filePreload28.responseType = 'arraybuffer';
    filePreload28.onload = function() {
      var arrayBuffer = filePreload28.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/rock_formation_gk_v02/rock_formation_gk_v02_hm.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/rock_formation_gk_v02', 'rock_formation_gk_v02_hm.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v02/rock_formation_gk_v02_hm.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/rock_formation_gk_v02/rock_formation_gk_v02_hm.png');
    filePreload28.send(null);

    var filePreload29 = new DataRequest();
    filePreload29.open('GET', 'packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_cc.jpg', true);
    filePreload29.responseType = 'arraybuffer';
    filePreload29.onload = function() {
      var arrayBuffer = filePreload29.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_cc.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_gk_v01', 'castell_wall_gk_v01_cc.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_cc.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_cc.jpg');
    filePreload29.send(null);

    var filePreload30 = new DataRequest();
    filePreload30.open('GET', 'packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_nm.jpg', true);
    filePreload30.responseType = 'arraybuffer';
    filePreload30.onload = function() {
      var arrayBuffer = filePreload30.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_nm.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_gk_v01', 'castell_wall_gk_v01_nm.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_nm.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_nm.jpg');
    filePreload30.send(null);

    var filePreload31 = new DataRequest();
    filePreload31.open('GET', 'packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_sc.jpg', true);
    filePreload31.responseType = 'arraybuffer';
    filePreload31.onload = function() {
      var arrayBuffer = filePreload31.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_sc.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_gk_v01', 'castell_wall_gk_v01_sc.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_sc.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_sc.jpg');
    filePreload31.send(null);

    var filePreload32 = new DataRequest();
    filePreload32.open('GET', 'packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_hm.jpg', true);
    filePreload32.responseType = 'arraybuffer';
    filePreload32.onload = function() {
      var arrayBuffer = filePreload32.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_hm.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_gk_v01', 'castell_wall_gk_v01_hm.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_hm.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_hm.jpg');
    filePreload32.send(null);

    var filePreload33 = new DataRequest();
    filePreload33.open('GET', 'packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_cc.jpg', true);
    filePreload33.responseType = 'arraybuffer';
    filePreload33.onload = function() {
      var arrayBuffer = filePreload33.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_cc.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_gk_v02', 'castell_wall_gk_v02_cc.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_cc.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_cc.jpg');
    filePreload33.send(null);

    var filePreload34 = new DataRequest();
    filePreload34.open('GET', 'packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_nm.png', true);
    filePreload34.responseType = 'arraybuffer';
    filePreload34.onload = function() {
      var arrayBuffer = filePreload34.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_nm.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_gk_v02', 'castell_wall_gk_v02_nm.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_nm.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_nm.png');
    filePreload34.send(null);

    var filePreload35 = new DataRequest();
    filePreload35.open('GET', 'packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_sc.png', true);
    filePreload35.responseType = 'arraybuffer';
    filePreload35.onload = function() {
      var arrayBuffer = filePreload35.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_sc.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_gk_v02', 'castell_wall_gk_v02_sc.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_sc.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_sc.png');
    filePreload35.send(null);

    var filePreload36 = new DataRequest();
    filePreload36.open('GET', 'packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_hm.jpg', true);
    filePreload36.responseType = 'arraybuffer';
    filePreload36.onload = function() {
      var arrayBuffer = filePreload36.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_hm.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_gk_v02', 'castell_wall_gk_v02_hm.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_hm.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_hm.jpg');
    filePreload36.send(null);

    var filePreload37 = new DataRequest();
    filePreload37.open('GET', 'packages/gk/fantasy/castell_wall_gk_v03/castell_wall_gk_v03_cc.jpg', true);
    filePreload37.responseType = 'arraybuffer';
    filePreload37.onload = function() {
      var arrayBuffer = filePreload37.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_gk_v03/castell_wall_gk_v03_cc.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_gk_v03', 'castell_wall_gk_v03_cc.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v03/castell_wall_gk_v03_cc.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v03/castell_wall_gk_v03_cc.jpg');
    filePreload37.send(null);

    var filePreload38 = new DataRequest();
    filePreload38.open('GET', 'packages/gk/fantasy/castell_wall_gk_v03/castell_wall_gk_v03_nm.jpg', true);
    filePreload38.responseType = 'arraybuffer';
    filePreload38.onload = function() {
      var arrayBuffer = filePreload38.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_gk_v03/castell_wall_gk_v03_nm.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_gk_v03', 'castell_wall_gk_v03_nm.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v03/castell_wall_gk_v03_nm.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v03/castell_wall_gk_v03_nm.jpg');
    filePreload38.send(null);

    var filePreload39 = new DataRequest();
    filePreload39.open('GET', 'packages/gk/fantasy/castell_wall_gk_v03/castell_wall_gk_v03_sc.jpg', true);
    filePreload39.responseType = 'arraybuffer';
    filePreload39.onload = function() {
      var arrayBuffer = filePreload39.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_gk_v03/castell_wall_gk_v03_sc.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_gk_v03', 'castell_wall_gk_v03_sc.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v03/castell_wall_gk_v03_sc.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v03/castell_wall_gk_v03_sc.jpg');
    filePreload39.send(null);

    var filePreload40 = new DataRequest();
    filePreload40.open('GET', 'packages/gk/fantasy/castell_wall_gk_v03/castell_wall_gk_v03_hm.jpg', true);
    filePreload40.responseType = 'arraybuffer';
    filePreload40.onload = function() {
      var arrayBuffer = filePreload40.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_gk_v03/castell_wall_gk_v03_hm.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_gk_v03', 'castell_wall_gk_v03_hm.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v03/castell_wall_gk_v03_hm.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_gk_v03/castell_wall_gk_v03_hm.jpg');
    filePreload40.send(null);

    var filePreload41 = new DataRequest();
    filePreload41.open('GET', 'packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_cc.jpg', true);
    filePreload41.responseType = 'arraybuffer';
    filePreload41.onload = function() {
      var arrayBuffer = filePreload41.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_cc.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_trim_gk_v01', 'castell_wall_trim_gk_v01_cc.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_cc.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_cc.jpg');
    filePreload41.send(null);

    var filePreload42 = new DataRequest();
    filePreload42.open('GET', 'packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_nm.jpg', true);
    filePreload42.responseType = 'arraybuffer';
    filePreload42.onload = function() {
      var arrayBuffer = filePreload42.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_nm.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_trim_gk_v01', 'castell_wall_trim_gk_v01_nm.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_nm.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_nm.jpg');
    filePreload42.send(null);

    var filePreload43 = new DataRequest();
    filePreload43.open('GET', 'packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_sc.jpg', true);
    filePreload43.responseType = 'arraybuffer';
    filePreload43.onload = function() {
      var arrayBuffer = filePreload43.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_sc.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_trim_gk_v01', 'castell_wall_trim_gk_v01_sc.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_sc.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_sc.jpg');
    filePreload43.send(null);

    var filePreload44 = new DataRequest();
    filePreload44.open('GET', 'packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_hm.jpg', true);
    filePreload44.responseType = 'arraybuffer';
    filePreload44.onload = function() {
      var arrayBuffer = filePreload44.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_hm.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_wall_trim_gk_v01', 'castell_wall_trim_gk_v01_hm.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_hm.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_hm.jpg');
    filePreload44.send(null);

    var filePreload45 = new DataRequest();
    filePreload45.open('GET', 'packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_cc.jpg', true);
    filePreload45.responseType = 'arraybuffer';
    filePreload45.onload = function() {
      var arrayBuffer = filePreload45.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_cc.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/stone_ground_gk_v01', 'stone_ground_gk_v01_cc.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_cc.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_cc.jpg');
    filePreload45.send(null);

    var filePreload46 = new DataRequest();
    filePreload46.open('GET', 'packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_nm.png', true);
    filePreload46.responseType = 'arraybuffer';
    filePreload46.onload = function() {
      var arrayBuffer = filePreload46.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_nm.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/stone_ground_gk_v01', 'stone_ground_gk_v01_nm.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_nm.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_nm.png');
    filePreload46.send(null);

    var filePreload47 = new DataRequest();
    filePreload47.open('GET', 'packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_sc.jpg', true);
    filePreload47.responseType = 'arraybuffer';
    filePreload47.onload = function() {
      var arrayBuffer = filePreload47.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_sc.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/stone_ground_gk_v01', 'stone_ground_gk_v01_sc.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_sc.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_sc.jpg');
    filePreload47.send(null);

    var filePreload48 = new DataRequest();
    filePreload48.open('GET', 'packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_hm.jpg', true);
    filePreload48.responseType = 'arraybuffer';
    filePreload48.onload = function() {
      var arrayBuffer = filePreload48.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_hm.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/stone_ground_gk_v01', 'stone_ground_gk_v01_hm.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_hm.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_hm.jpg');
    filePreload48.send(null);

    var filePreload49 = new DataRequest();
    filePreload49.open('GET', 'packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_cc.jpg', true);
    filePreload49.responseType = 'arraybuffer';
    filePreload49.onload = function() {
      var arrayBuffer = filePreload49.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_cc.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/stone_ground_tiles_gk_v01', 'stone_ground_tiles_gk_v01_cc.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_cc.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_cc.jpg');
    filePreload49.send(null);

    var filePreload50 = new DataRequest();
    filePreload50.open('GET', 'packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_nm.jpg', true);
    filePreload50.responseType = 'arraybuffer';
    filePreload50.onload = function() {
      var arrayBuffer = filePreload50.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_nm.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/stone_ground_tiles_gk_v01', 'stone_ground_tiles_gk_v01_nm.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_nm.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_nm.jpg');
    filePreload50.send(null);

    var filePreload51 = new DataRequest();
    filePreload51.open('GET', 'packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_sc.jpg', true);
    filePreload51.responseType = 'arraybuffer';
    filePreload51.onload = function() {
      var arrayBuffer = filePreload51.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_sc.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/stone_ground_tiles_gk_v01', 'stone_ground_tiles_gk_v01_sc.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_sc.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_sc.jpg');
    filePreload51.send(null);

    var filePreload52 = new DataRequest();
    filePreload52.open('GET', 'packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_hm.jpg', true);
    filePreload52.responseType = 'arraybuffer';
    filePreload52.onload = function() {
      var arrayBuffer = filePreload52.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_hm.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/stone_ground_tiles_gk_v01', 'stone_ground_tiles_gk_v01_hm.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_hm.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_hm.jpg');
    filePreload52.send(null);

    var filePreload53 = new DataRequest();
    filePreload53.open('GET', 'packages/gk/fantasy/wooden_roof_tiles_gk_v01/wooden_roof_tiles_gk_v01_cc.jpg', true);
    filePreload53.responseType = 'arraybuffer';
    filePreload53.onload = function() {
      var arrayBuffer = filePreload53.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/wooden_roof_tiles_gk_v01/wooden_roof_tiles_gk_v01_cc.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/wooden_roof_tiles_gk_v01', 'wooden_roof_tiles_gk_v01_cc.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/wooden_roof_tiles_gk_v01/wooden_roof_tiles_gk_v01_cc.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/wooden_roof_tiles_gk_v01/wooden_roof_tiles_gk_v01_cc.jpg');
    filePreload53.send(null);

    var filePreload54 = new DataRequest();
    filePreload54.open('GET', 'packages/gk/fantasy/wooden_roof_tiles_gk_v01/wooden_roof_tiles_gk_v01_nm.jpg', true);
    filePreload54.responseType = 'arraybuffer';
    filePreload54.onload = function() {
      var arrayBuffer = filePreload54.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/wooden_roof_tiles_gk_v01/wooden_roof_tiles_gk_v01_nm.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/wooden_roof_tiles_gk_v01', 'wooden_roof_tiles_gk_v01_nm.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/wooden_roof_tiles_gk_v01/wooden_roof_tiles_gk_v01_nm.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/wooden_roof_tiles_gk_v01/wooden_roof_tiles_gk_v01_nm.jpg');
    filePreload54.send(null);

    var filePreload55 = new DataRequest();
    filePreload55.open('GET', 'packages/gk/fantasy/wooden_roof_tiles_gk_v01/wooden_roof_tiles_gk_v01_sc.jpg', true);
    filePreload55.responseType = 'arraybuffer';
    filePreload55.onload = function() {
      var arrayBuffer = filePreload55.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/wooden_roof_tiles_gk_v01/wooden_roof_tiles_gk_v01_sc.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/wooden_roof_tiles_gk_v01', 'wooden_roof_tiles_gk_v01_sc.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/wooden_roof_tiles_gk_v01/wooden_roof_tiles_gk_v01_sc.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/wooden_roof_tiles_gk_v01/wooden_roof_tiles_gk_v01_sc.jpg');
    filePreload55.send(null);

    var filePreload56 = new DataRequest();
    filePreload56.open('GET', 'packages/gk/fantasy/wooden_roof_tiles_gk_v01/wooden_roof_tiles_gk_v01_hm.jpg', true);
    filePreload56.responseType = 'arraybuffer';
    filePreload56.onload = function() {
      var arrayBuffer = filePreload56.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/wooden_roof_tiles_gk_v01/wooden_roof_tiles_gk_v01_hm.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/wooden_roof_tiles_gk_v01', 'wooden_roof_tiles_gk_v01_hm.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/wooden_roof_tiles_gk_v01/wooden_roof_tiles_gk_v01_hm.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/wooden_roof_tiles_gk_v01/wooden_roof_tiles_gk_v01_hm.jpg');
    filePreload56.send(null);

    var filePreload57 = new DataRequest();
    filePreload57.open('GET', 'packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_cc.png', true);
    filePreload57.responseType = 'arraybuffer';
    filePreload57.onload = function() {
      var arrayBuffer = filePreload57.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_cc.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/wooden_planks_gk_v01', 'wooden_planks_gk_v01_cc.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_cc.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_cc.png');
    filePreload57.send(null);

    var filePreload58 = new DataRequest();
    filePreload58.open('GET', 'packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_nm.png', true);
    filePreload58.responseType = 'arraybuffer';
    filePreload58.onload = function() {
      var arrayBuffer = filePreload58.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_nm.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/wooden_planks_gk_v01', 'wooden_planks_gk_v01_nm.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_nm.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_nm.png');
    filePreload58.send(null);

    var filePreload59 = new DataRequest();
    filePreload59.open('GET', 'packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_sc.png', true);
    filePreload59.responseType = 'arraybuffer';
    filePreload59.onload = function() {
      var arrayBuffer = filePreload59.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_sc.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/wooden_planks_gk_v01', 'wooden_planks_gk_v01_sc.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_sc.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_sc.png');
    filePreload59.send(null);

    var filePreload60 = new DataRequest();
    filePreload60.open('GET', 'packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_hm.png', true);
    filePreload60.responseType = 'arraybuffer';
    filePreload60.onload = function() {
      var arrayBuffer = filePreload60.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_hm.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/wooden_planks_gk_v01', 'wooden_planks_gk_v01_hm.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_hm.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_hm.png');
    filePreload60.send(null);

    var filePreload61 = new DataRequest();
    filePreload61.open('GET', 'packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_cc.jpg', true);
    filePreload61.responseType = 'arraybuffer';
    filePreload61.onload = function() {
      var arrayBuffer = filePreload61.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_cc.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_plaster_gk_v01', 'castell_plaster_gk_v01_cc.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_cc.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_cc.jpg');
    filePreload61.send(null);

    var filePreload62 = new DataRequest();
    filePreload62.open('GET', 'packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_nm.jpg', true);
    filePreload62.responseType = 'arraybuffer';
    filePreload62.onload = function() {
      var arrayBuffer = filePreload62.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_nm.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_plaster_gk_v01', 'castell_plaster_gk_v01_nm.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_nm.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_nm.jpg');
    filePreload62.send(null);

    var filePreload63 = new DataRequest();
    filePreload63.open('GET', 'packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_sc.jpg', true);
    filePreload63.responseType = 'arraybuffer';
    filePreload63.onload = function() {
      var arrayBuffer = filePreload63.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_sc.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_plaster_gk_v01', 'castell_plaster_gk_v01_sc.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_sc.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_sc.jpg');
    filePreload63.send(null);

    var filePreload64 = new DataRequest();
    filePreload64.open('GET', 'packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_hm.jpg', true);
    filePreload64.responseType = 'arraybuffer';
    filePreload64.onload = function() {
      var arrayBuffer = filePreload64.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_hm.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/castell_plaster_gk_v01', 'castell_plaster_gk_v01_hm.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_hm.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_hm.jpg');
    filePreload64.send(null);

    var filePreload65 = new DataRequest();
    filePreload65.open('GET', 'packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_cc.jpg', true);
    filePreload65.responseType = 'arraybuffer';
    filePreload65.onload = function() {
      var arrayBuffer = filePreload65.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_cc.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/iron_plates_gk_v01', 'iron_plates_gk_v01_cc.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_cc.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_cc.jpg');
    filePreload65.send(null);

    var filePreload66 = new DataRequest();
    filePreload66.open('GET', 'packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_nm.jpg', true);
    filePreload66.responseType = 'arraybuffer';
    filePreload66.onload = function() {
      var arrayBuffer = filePreload66.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_nm.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/iron_plates_gk_v01', 'iron_plates_gk_v01_nm.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_nm.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_nm.jpg');
    filePreload66.send(null);

    var filePreload67 = new DataRequest();
    filePreload67.open('GET', 'packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_sc.jpg', true);
    filePreload67.responseType = 'arraybuffer';
    filePreload67.onload = function() {
      var arrayBuffer = filePreload67.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_sc.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/iron_plates_gk_v01', 'iron_plates_gk_v01_sc.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_sc.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_sc.jpg');
    filePreload67.send(null);

    var filePreload68 = new DataRequest();
    filePreload68.open('GET', 'packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_hm.jpg', true);
    filePreload68.responseType = 'arraybuffer';
    filePreload68.onload = function() {
      var arrayBuffer = filePreload68.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_hm.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/iron_plates_gk_v01', 'iron_plates_gk_v01_hm.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_hm.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_hm.jpg');
    filePreload68.send(null);

    var filePreload69 = new DataRequest();
    filePreload69.open('GET', 'packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_cc.jpg', true);
    filePreload69.responseType = 'arraybuffer';
    filePreload69.onload = function() {
      var arrayBuffer = filePreload69.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_cc.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/iron_trim_gk_v01', 'iron_trim_gk_v01_cc.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_cc.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_cc.jpg');
    filePreload69.send(null);

    var filePreload70 = new DataRequest();
    filePreload70.open('GET', 'packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_nm.jpg', true);
    filePreload70.responseType = 'arraybuffer';
    filePreload70.onload = function() {
      var arrayBuffer = filePreload70.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_nm.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/iron_trim_gk_v01', 'iron_trim_gk_v01_nm.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_nm.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_nm.jpg');
    filePreload70.send(null);

    var filePreload71 = new DataRequest();
    filePreload71.open('GET', 'packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_sc.jpg', true);
    filePreload71.responseType = 'arraybuffer';
    filePreload71.onload = function() {
      var arrayBuffer = filePreload71.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_sc.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/iron_trim_gk_v01', 'iron_trim_gk_v01_sc.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_sc.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_sc.jpg');
    filePreload71.send(null);

    var filePreload72 = new DataRequest();
    filePreload72.open('GET', 'packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_hm.jpg', true);
    filePreload72.responseType = 'arraybuffer';
    filePreload72.onload = function() {
      var arrayBuffer = filePreload72.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_hm.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/iron_trim_gk_v01', 'iron_trim_gk_v01_hm.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_hm.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_hm.jpg');
    filePreload72.send(null);

    var filePreload73 = new DataRequest();
    filePreload73.open('GET', 'packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_cc.jpg', true);
    filePreload73.responseType = 'arraybuffer';
    filePreload73.onload = function() {
      var arrayBuffer = filePreload73.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_cc.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/iron_intersection_gk_v01', 'iron_intersection_gk_v01_cc.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_cc.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_cc.jpg');
    filePreload73.send(null);

    var filePreload74 = new DataRequest();
    filePreload74.open('GET', 'packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_nm.jpg', true);
    filePreload74.responseType = 'arraybuffer';
    filePreload74.onload = function() {
      var arrayBuffer = filePreload74.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_nm.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/iron_intersection_gk_v01', 'iron_intersection_gk_v01_nm.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_nm.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_nm.jpg');
    filePreload74.send(null);

    var filePreload75 = new DataRequest();
    filePreload75.open('GET', 'packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_sc.jpg', true);
    filePreload75.responseType = 'arraybuffer';
    filePreload75.onload = function() {
      var arrayBuffer = filePreload75.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_sc.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/iron_intersection_gk_v01', 'iron_intersection_gk_v01_sc.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_sc.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_sc.jpg');
    filePreload75.send(null);

    var filePreload76 = new DataRequest();
    filePreload76.open('GET', 'packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_hm.jpg', true);
    filePreload76.responseType = 'arraybuffer';
    filePreload76.onload = function() {
      var arrayBuffer = filePreload76.response;
      assert(arrayBuffer, 'Loading file packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_hm.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/fantasy/iron_intersection_gk_v01', 'iron_intersection_gk_v01_hm.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_hm.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_hm.jpg');
    filePreload76.send(null);

    var filePreload77 = new DataRequest();
    filePreload77.open('GET', 'packages/base/sky_low.ogz', true);
    filePreload77.responseType = 'arraybuffer';
    filePreload77.onload = function() {
      var arrayBuffer = filePreload77.response;
      assert(arrayBuffer, 'Loading file packages/base/sky_low.ogz failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/base', 'sky_low.ogz', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/base/sky_low.ogz');

      });
    };
    Module['addRunDependency']('fp packages/base/sky_low.ogz');
    filePreload77.send(null);

    var filePreload78 = new DataRequest();
    filePreload78.open('GET', 'packages/base/sky_low.cfg', true);
    filePreload78.responseType = 'arraybuffer';
    filePreload78.onload = function() {
      var arrayBuffer = filePreload78.response;
      assert(arrayBuffer, 'Loading file packages/base/sky_low.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/base', 'sky_low.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/base/sky_low.cfg');

      });
    };
    Module['addRunDependency']('fp packages/base/sky_low.cfg');
    filePreload78.send(null);

    var filePreload79 = new DataRequest();
    filePreload79.open('GET', 'packages/base/sky_low.wpt', true);
    filePreload79.responseType = 'arraybuffer';
    filePreload79.onload = function() {
      var arrayBuffer = filePreload79.response;
      assert(arrayBuffer, 'Loading file packages/base/sky_low.wpt failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/base', 'sky_low.wpt', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/base/sky_low.wpt');

      });
    };
    Module['addRunDependency']('fp packages/base/sky_low.wpt');
    filePreload79.send(null);

    if (!Module.expectedDataFileDownloads) {
      Module.expectedDataFileDownloads = 0;
      Module.finishedDataFileDownloads = 0;
    }
    Module.expectedDataFileDownloads++;

    var dataFile = new XMLHttpRequest();
    dataFile.onprogress = function(event) {
      var url = 'ten.data';
      if (event.loaded && event.total) {
        if (!dataFile.addedTotal) {
          dataFile.addedTotal = true;
          if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
          Module.dataFileDownloads[url] = {
            loaded: event.loaded,
            total: event.total
          };
        } else {
          Module.dataFileDownloads[url].loaded = event.loaded;
        }
        var total = 0;
        var loaded = 0;
        var num = 0;
        for (var download in Module.dataFileDownloads) {
          var data = Module.dataFileDownloads[download];
          total += data.total;
          loaded += data.loaded;
          num++;
        }
        total = Math.ceil(total * Module.expectedDataFileDownloads/num);
        Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
      } else if (!Module.dataFileDownloads) {
        Module['setStatus']('Downloading data...');
      }
    }
    dataFile.open('GET', 'ten.data', true);
    dataFile.responseType = 'arraybuffer';
    dataFile.onload = function() {
      Module.finishedDataFileDownloads++;
      var arrayBuffer = dataFile.response;
      assert(arrayBuffer, 'Loading data file failed.');
      var byteArray = new Uint8Array(arrayBuffer);
      var curr;
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/skyfantasy/skyfantasy_rt.png'];
        curr.response = byteArray.subarray(0,3500062);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/skyfantasy/skyfantasy_up.png'];
        curr.response = byteArray.subarray(3500062,6314489);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/skyfantasy/skyfantasy_bk.png'];
        curr.response = byteArray.subarray(6314489,9877531);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/skyfantasy/skyfantasy_lf.png'];
        curr.response = byteArray.subarray(9877531,13401248);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/skyfantasy/skyfantasy_ft.png'];
        curr.response = byteArray.subarray(13401248,17079655);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/skyfantasy/skyfantasy_dn.png'];
        curr.response = byteArray.subarray(17079655,21072872);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_plaster_gk_v01/package.cfg'];
        curr.response = byteArray.subarray(21072872,21073308);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/iron_intersection_gk_v01/package.cfg'];
        curr.response = byteArray.subarray(21073308,21073759);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_gk_v02/package.cfg'];
        curr.response = byteArray.subarray(21073759,21074458);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_gk_v03/package.cfg'];
        curr.response = byteArray.subarray(21074458,21075157);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_trim_gk_v01/package.cfg'];
        curr.response = byteArray.subarray(21075157,21075936);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/iron_plates_gk_v01/package.cfg'];
        curr.response = byteArray.subarray(21075936,21076618);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/iron_trim_gk_v01/package.cfg'];
        curr.response = byteArray.subarray(21076618,21077270);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/wooden_planks_gk_v01/package.cfg'];
        curr.response = byteArray.subarray(21077270,21077986);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/rock_formation_gk_v02/package.cfg'];
        curr.response = byteArray.subarray(21077986,21078414);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/package.cfg'];
        curr.response = byteArray.subarray(21078414,21078826);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_gk_v01/package.cfg'];
        curr.response = byteArray.subarray(21078826,21079525);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/rock_formation_gk_v01/package.cfg'];
        curr.response = byteArray.subarray(21079525,21079953);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/wooden_roof_tiles_gk_v01/package.cfg'];
        curr.response = byteArray.subarray(21079953,21080733);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/stone_ground_gk_v01/package.cfg'];
        curr.response = byteArray.subarray(21080733,21081145);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/stone_ground_tiles_gk_v01/package.cfg'];
        curr.response = byteArray.subarray(21081145,21081605);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_cc.jpg'];
        curr.response = byteArray.subarray(21081605,21428412);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_nm.png'];
        curr.response = byteArray.subarray(21428412,21627933);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_sc.png'];
        curr.response = byteArray.subarray(21627933,21685204);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/rock_formation_gk_v01/rock_formation_gk_v01_hm.png'];
        curr.response = byteArray.subarray(21685204,21730390);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/rock_formation_gk_v02/rock_formation_gk_v02_cc.jpg'];
        curr.response = byteArray.subarray(21730390,22046460);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/rock_formation_gk_v02/rock_formation_gk_v02_nm.png'];
        curr.response = byteArray.subarray(22046460,22289149);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/rock_formation_gk_v02/rock_formation_gk_v02_sc.jpg'];
        curr.response = byteArray.subarray(22289149,22339020);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/rock_formation_gk_v02/rock_formation_gk_v02_hm.png'];
        curr.response = byteArray.subarray(22339020,22384886);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_cc.jpg'];
        curr.response = byteArray.subarray(22384886,22517218);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_nm.jpg'];
        curr.response = byteArray.subarray(22517218,22665996);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_sc.jpg'];
        curr.response = byteArray.subarray(22665996,22826900);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_gk_v01/castell_wall_gk_v01_hm.jpg'];
        curr.response = byteArray.subarray(22826900,22857143);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_cc.jpg'];
        curr.response = byteArray.subarray(22857143,23070863);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_nm.png'];
        curr.response = byteArray.subarray(23070863,23310612);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_sc.png'];
        curr.response = byteArray.subarray(23310612,23349299);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_gk_v02/castell_wall_gk_v02_hm.jpg'];
        curr.response = byteArray.subarray(23349299,23375296);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_gk_v03/castell_wall_gk_v03_cc.jpg'];
        curr.response = byteArray.subarray(23375296,23598537);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_gk_v03/castell_wall_gk_v03_nm.jpg'];
        curr.response = byteArray.subarray(23598537,24699991);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_gk_v03/castell_wall_gk_v03_sc.jpg'];
        curr.response = byteArray.subarray(24699991,25129017);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_gk_v03/castell_wall_gk_v03_hm.jpg'];
        curr.response = byteArray.subarray(25129017,25333449);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_cc.jpg'];
        curr.response = byteArray.subarray(25333449,25388138);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_nm.jpg'];
        curr.response = byteArray.subarray(25388138,25441827);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_sc.jpg'];
        curr.response = byteArray.subarray(25441827,25460745);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_wall_trim_gk_v01/castell_wall_trim_gk_v01_hm.jpg'];
        curr.response = byteArray.subarray(25460745,25468158);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_cc.jpg'];
        curr.response = byteArray.subarray(25468158,25886959);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_nm.png'];
        curr.response = byteArray.subarray(25886959,26103693);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_sc.jpg'];
        curr.response = byteArray.subarray(26103693,26196478);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/stone_ground_gk_v01/stone_ground_gk_v01_hm.jpg'];
        curr.response = byteArray.subarray(26196478,26219862);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_cc.jpg'];
        curr.response = byteArray.subarray(26219862,26499838);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_nm.jpg'];
        curr.response = byteArray.subarray(26499838,26727889);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_sc.jpg'];
        curr.response = byteArray.subarray(26727889,26874534);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/stone_ground_tiles_gk_v01/stone_ground_tiles_gk_v01_hm.jpg'];
        curr.response = byteArray.subarray(26874534,26908029);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/wooden_roof_tiles_gk_v01/wooden_roof_tiles_gk_v01_cc.jpg'];
        curr.response = byteArray.subarray(26908029,27068040);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/wooden_roof_tiles_gk_v01/wooden_roof_tiles_gk_v01_nm.jpg'];
        curr.response = byteArray.subarray(27068040,27273654);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/wooden_roof_tiles_gk_v01/wooden_roof_tiles_gk_v01_sc.jpg'];
        curr.response = byteArray.subarray(27273654,27321419);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/wooden_roof_tiles_gk_v01/wooden_roof_tiles_gk_v01_hm.jpg'];
        curr.response = byteArray.subarray(27321419,27347181);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_cc.png'];
        curr.response = byteArray.subarray(27347181,27696421);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_nm.png'];
        curr.response = byteArray.subarray(27696421,28218918);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_sc.png'];
        curr.response = byteArray.subarray(28218918,28299855);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/wooden_planks_gk_v01/wooden_planks_gk_v01_hm.png'];
        curr.response = byteArray.subarray(28299855,28584995);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_cc.jpg'];
        curr.response = byteArray.subarray(28584995,28925163);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_nm.jpg'];
        curr.response = byteArray.subarray(28925163,29033233);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_sc.jpg'];
        curr.response = byteArray.subarray(29033233,29099135);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/castell_plaster_gk_v01/castell_plaster_gk_v01_hm.jpg'];
        curr.response = byteArray.subarray(29099135,29119463);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_cc.jpg'];
        curr.response = byteArray.subarray(29119463,29198975);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_nm.jpg'];
        curr.response = byteArray.subarray(29198975,29316041);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_sc.jpg'];
        curr.response = byteArray.subarray(29316041,29369960);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/iron_plates_gk_v01/iron_plates_gk_v01_hm.jpg'];
        curr.response = byteArray.subarray(29369960,29404072);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_cc.jpg'];
        curr.response = byteArray.subarray(29404072,29425785);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_nm.jpg'];
        curr.response = byteArray.subarray(29425785,29456463);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_sc.jpg'];
        curr.response = byteArray.subarray(29456463,29503010);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/iron_trim_gk_v01/iron_trim_gk_v01_hm.jpg'];
        curr.response = byteArray.subarray(29503010,29512609);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_cc.jpg'];
        curr.response = byteArray.subarray(29512609,29543312);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_nm.jpg'];
        curr.response = byteArray.subarray(29543312,29590437);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_sc.jpg'];
        curr.response = byteArray.subarray(29590437,29641181);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/fantasy/iron_intersection_gk_v01/iron_intersection_gk_v01_hm.jpg'];
        curr.response = byteArray.subarray(29641181,29646158);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/base/sky_low.ogz'];
        curr.response = byteArray.subarray(29646158,35898199);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/base/sky_low.cfg'];
        curr.response = byteArray.subarray(35898199,35899281);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/base/sky_low.wpt'];
        curr.response = byteArray.subarray(35899281,35905599);
        curr.onload();
                Module['removeRunDependency']('datafile_ten.data');

    };
    Module['addRunDependency']('datafile_ten.data');
    dataFile.send(null);
    if (Module['setStatus']) Module['setStatus']('Downloading...');
  
  });


})();

