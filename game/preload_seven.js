
(function() {


  if (typeof Module == 'undefined') Module = {};
  if (!Module['preRun']) Module['preRun'] = [];
  Module["preRun"].push(function() {


function assert(check, msg) {
  if (!check) throw msg + new Error().stack;
}
Module['FS_createPath']('/', 'packages', true, true);
Module['FS_createPath']('/packages', 'gk', true, true);
Module['FS_createPath']('/packages/gk', 'future', true, true);
Module['FS_createPath']('/packages/gk/future', 'skysfJPG', true, true);
Module['FS_createPath']('/packages/gk', 'modern', true, true);
Module['FS_createPath']('/packages/gk/modern', 'bunker_wall_gk_05', true, true);
Module['FS_createPath']('/packages/gk/modern', 'bunker_wall_gk_03', true, true);
Module['FS_createPath']('/packages/gk/modern', 'bunker_wall_gk_01', true, true);
Module['FS_createPath']('/packages/gk/modern', 'bunker_wall_gk_04', true, true);
Module['FS_createPath']('/packages/gk/modern', 'bunker_wall_gk_08', true, true);
Module['FS_createPath']('/packages/gk/modern', 'bunker_wall_gk_02', true, true);
Module['FS_createPath']('/packages/gk/modern', 'bunker_wall_gk_07', true, true);
Module['FS_createPath']('/packages/gk/modern', 'bunker_wall_gk_06', true, true);
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
    filePreload0.open('GET', 'packages/gk/future/skysfJPG/skysfJ_bk.jpg', true);
    filePreload0.responseType = 'arraybuffer';
    filePreload0.onload = function() {
      var arrayBuffer = filePreload0.response;
      assert(arrayBuffer, 'Loading file packages/gk/future/skysfJPG/skysfJ_bk.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/future/skysfJPG', 'skysfJ_bk.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/future/skysfJPG/skysfJ_bk.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/future/skysfJPG/skysfJ_bk.jpg');
    filePreload0.send(null);

    var filePreload1 = new DataRequest();
    filePreload1.open('GET', 'packages/gk/future/skysfJPG/skysfJ_ft.jpg', true);
    filePreload1.responseType = 'arraybuffer';
    filePreload1.onload = function() {
      var arrayBuffer = filePreload1.response;
      assert(arrayBuffer, 'Loading file packages/gk/future/skysfJPG/skysfJ_ft.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/future/skysfJPG', 'skysfJ_ft.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/future/skysfJPG/skysfJ_ft.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/future/skysfJPG/skysfJ_ft.jpg');
    filePreload1.send(null);

    var filePreload2 = new DataRequest();
    filePreload2.open('GET', 'packages/gk/future/skysfJPG/skysfJ_rt.jpg', true);
    filePreload2.responseType = 'arraybuffer';
    filePreload2.onload = function() {
      var arrayBuffer = filePreload2.response;
      assert(arrayBuffer, 'Loading file packages/gk/future/skysfJPG/skysfJ_rt.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/future/skysfJPG', 'skysfJ_rt.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/future/skysfJPG/skysfJ_rt.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/future/skysfJPG/skysfJ_rt.jpg');
    filePreload2.send(null);

    var filePreload3 = new DataRequest();
    filePreload3.open('GET', 'packages/gk/future/skysfJPG/skysfJ_lf.jpg', true);
    filePreload3.responseType = 'arraybuffer';
    filePreload3.onload = function() {
      var arrayBuffer = filePreload3.response;
      assert(arrayBuffer, 'Loading file packages/gk/future/skysfJPG/skysfJ_lf.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/future/skysfJPG', 'skysfJ_lf.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/future/skysfJPG/skysfJ_lf.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/future/skysfJPG/skysfJ_lf.jpg');
    filePreload3.send(null);

    var filePreload4 = new DataRequest();
    filePreload4.open('GET', 'packages/gk/future/skysfJPG/skysfJ_dn.jpg', true);
    filePreload4.responseType = 'arraybuffer';
    filePreload4.onload = function() {
      var arrayBuffer = filePreload4.response;
      assert(arrayBuffer, 'Loading file packages/gk/future/skysfJPG/skysfJ_dn.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/future/skysfJPG', 'skysfJ_dn.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/future/skysfJPG/skysfJ_dn.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/future/skysfJPG/skysfJ_dn.jpg');
    filePreload4.send(null);

    var filePreload5 = new DataRequest();
    filePreload5.open('GET', 'packages/gk/future/skysfJPG/skysfJ_up.jpg', true);
    filePreload5.responseType = 'arraybuffer';
    filePreload5.onload = function() {
      var arrayBuffer = filePreload5.response;
      assert(arrayBuffer, 'Loading file packages/gk/future/skysfJPG/skysfJ_up.jpg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/future/skysfJPG', 'skysfJ_up.jpg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/future/skysfJPG/skysfJ_up.jpg');

      });
    };
    Module['addRunDependency']('fp packages/gk/future/skysfJPG/skysfJ_up.jpg');
    filePreload5.send(null);

    var filePreload6 = new DataRequest();
    filePreload6.open('GET', 'packages/gk/modern/bunker_wall_gk_05/package.cfg', true);
    filePreload6.responseType = 'arraybuffer';
    filePreload6.onload = function() {
      var arrayBuffer = filePreload6.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_05/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_05', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_05/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_05/package.cfg');
    filePreload6.send(null);

    var filePreload7 = new DataRequest();
    filePreload7.open('GET', 'packages/gk/modern/bunker_wall_gk_03/package.cfg', true);
    filePreload7.responseType = 'arraybuffer';
    filePreload7.onload = function() {
      var arrayBuffer = filePreload7.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_03/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_03', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_03/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_03/package.cfg');
    filePreload7.send(null);

    var filePreload8 = new DataRequest();
    filePreload8.open('GET', 'packages/gk/modern/bunker_wall_gk_01/package.cfg', true);
    filePreload8.responseType = 'arraybuffer';
    filePreload8.onload = function() {
      var arrayBuffer = filePreload8.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_01/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_01', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_01/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_01/package.cfg');
    filePreload8.send(null);

    var filePreload9 = new DataRequest();
    filePreload9.open('GET', 'packages/gk/modern/bunker_wall_gk_04/package.cfg', true);
    filePreload9.responseType = 'arraybuffer';
    filePreload9.onload = function() {
      var arrayBuffer = filePreload9.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_04/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_04', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_04/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_04/package.cfg');
    filePreload9.send(null);

    var filePreload10 = new DataRequest();
    filePreload10.open('GET', 'packages/gk/modern/bunker_wall_gk_08/package.cfg', true);
    filePreload10.responseType = 'arraybuffer';
    filePreload10.onload = function() {
      var arrayBuffer = filePreload10.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_08/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_08', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_08/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_08/package.cfg');
    filePreload10.send(null);

    var filePreload11 = new DataRequest();
    filePreload11.open('GET', 'packages/gk/modern/bunker_wall_gk_02/package.cfg', true);
    filePreload11.responseType = 'arraybuffer';
    filePreload11.onload = function() {
      var arrayBuffer = filePreload11.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_02/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_02', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_02/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_02/package.cfg');
    filePreload11.send(null);

    var filePreload12 = new DataRequest();
    filePreload12.open('GET', 'packages/gk/modern/bunker_wall_gk_07/package.cfg', true);
    filePreload12.responseType = 'arraybuffer';
    filePreload12.onload = function() {
      var arrayBuffer = filePreload12.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_07/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_07', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_07/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_07/package.cfg');
    filePreload12.send(null);

    var filePreload13 = new DataRequest();
    filePreload13.open('GET', 'packages/gk/modern/bunker_wall_gk_06/package.cfg', true);
    filePreload13.responseType = 'arraybuffer';
    filePreload13.onload = function() {
      var arrayBuffer = filePreload13.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_06/package.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_06', 'package.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_06/package.cfg');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_06/package.cfg');
    filePreload13.send(null);

    var filePreload14 = new DataRequest();
    filePreload14.open('GET', 'packages/gk/modern/bunker_wall_gk_01/bunker_wall_gk_01_cc.png', true);
    filePreload14.responseType = 'arraybuffer';
    filePreload14.onload = function() {
      var arrayBuffer = filePreload14.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_01/bunker_wall_gk_01_cc.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_01', 'bunker_wall_gk_01_cc.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_01/bunker_wall_gk_01_cc.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_01/bunker_wall_gk_01_cc.png');
    filePreload14.send(null);

    var filePreload15 = new DataRequest();
    filePreload15.open('GET', 'packages/gk/modern/bunker_wall_gk_01/bunker_wall_gk_01_hm.png', true);
    filePreload15.responseType = 'arraybuffer';
    filePreload15.onload = function() {
      var arrayBuffer = filePreload15.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_01/bunker_wall_gk_01_hm.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_01', 'bunker_wall_gk_01_hm.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_01/bunker_wall_gk_01_hm.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_01/bunker_wall_gk_01_hm.png');
    filePreload15.send(null);

    var filePreload16 = new DataRequest();
    filePreload16.open('GET', 'packages/gk/modern/bunker_wall_gk_01/bunker_wall_gk_01_nm.png', true);
    filePreload16.responseType = 'arraybuffer';
    filePreload16.onload = function() {
      var arrayBuffer = filePreload16.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_01/bunker_wall_gk_01_nm.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_01', 'bunker_wall_gk_01_nm.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_01/bunker_wall_gk_01_nm.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_01/bunker_wall_gk_01_nm.png');
    filePreload16.send(null);

    var filePreload17 = new DataRequest();
    filePreload17.open('GET', 'packages/gk/modern/bunker_wall_gk_01/bunker_wall_gk_01_sc.png', true);
    filePreload17.responseType = 'arraybuffer';
    filePreload17.onload = function() {
      var arrayBuffer = filePreload17.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_01/bunker_wall_gk_01_sc.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_01', 'bunker_wall_gk_01_sc.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_01/bunker_wall_gk_01_sc.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_01/bunker_wall_gk_01_sc.png');
    filePreload17.send(null);

    var filePreload18 = new DataRequest();
    filePreload18.open('GET', 'packages/gk/modern/bunker_wall_gk_02/bunker_wall_gk_02_cc.png', true);
    filePreload18.responseType = 'arraybuffer';
    filePreload18.onload = function() {
      var arrayBuffer = filePreload18.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_02/bunker_wall_gk_02_cc.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_02', 'bunker_wall_gk_02_cc.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_02/bunker_wall_gk_02_cc.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_02/bunker_wall_gk_02_cc.png');
    filePreload18.send(null);

    var filePreload19 = new DataRequest();
    filePreload19.open('GET', 'packages/gk/modern/bunker_wall_gk_02/bunker_wall_gk_02_hm.png', true);
    filePreload19.responseType = 'arraybuffer';
    filePreload19.onload = function() {
      var arrayBuffer = filePreload19.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_02/bunker_wall_gk_02_hm.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_02', 'bunker_wall_gk_02_hm.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_02/bunker_wall_gk_02_hm.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_02/bunker_wall_gk_02_hm.png');
    filePreload19.send(null);

    var filePreload20 = new DataRequest();
    filePreload20.open('GET', 'packages/gk/modern/bunker_wall_gk_02/bunker_wall_gk_02_nm.png', true);
    filePreload20.responseType = 'arraybuffer';
    filePreload20.onload = function() {
      var arrayBuffer = filePreload20.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_02/bunker_wall_gk_02_nm.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_02', 'bunker_wall_gk_02_nm.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_02/bunker_wall_gk_02_nm.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_02/bunker_wall_gk_02_nm.png');
    filePreload20.send(null);

    var filePreload21 = new DataRequest();
    filePreload21.open('GET', 'packages/gk/modern/bunker_wall_gk_02/bunker_wall_gk_02_sc.png', true);
    filePreload21.responseType = 'arraybuffer';
    filePreload21.onload = function() {
      var arrayBuffer = filePreload21.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_02/bunker_wall_gk_02_sc.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_02', 'bunker_wall_gk_02_sc.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_02/bunker_wall_gk_02_sc.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_02/bunker_wall_gk_02_sc.png');
    filePreload21.send(null);

    var filePreload22 = new DataRequest();
    filePreload22.open('GET', 'packages/gk/modern/bunker_wall_gk_03/bunker_wall_gk_03_cc.png', true);
    filePreload22.responseType = 'arraybuffer';
    filePreload22.onload = function() {
      var arrayBuffer = filePreload22.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_03/bunker_wall_gk_03_cc.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_03', 'bunker_wall_gk_03_cc.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_03/bunker_wall_gk_03_cc.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_03/bunker_wall_gk_03_cc.png');
    filePreload22.send(null);

    var filePreload23 = new DataRequest();
    filePreload23.open('GET', 'packages/gk/modern/bunker_wall_gk_03/bunker_wall_gk_03_hm.png', true);
    filePreload23.responseType = 'arraybuffer';
    filePreload23.onload = function() {
      var arrayBuffer = filePreload23.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_03/bunker_wall_gk_03_hm.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_03', 'bunker_wall_gk_03_hm.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_03/bunker_wall_gk_03_hm.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_03/bunker_wall_gk_03_hm.png');
    filePreload23.send(null);

    var filePreload24 = new DataRequest();
    filePreload24.open('GET', 'packages/gk/modern/bunker_wall_gk_03/bunker_wall_gk_03_nm.png', true);
    filePreload24.responseType = 'arraybuffer';
    filePreload24.onload = function() {
      var arrayBuffer = filePreload24.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_03/bunker_wall_gk_03_nm.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_03', 'bunker_wall_gk_03_nm.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_03/bunker_wall_gk_03_nm.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_03/bunker_wall_gk_03_nm.png');
    filePreload24.send(null);

    var filePreload25 = new DataRequest();
    filePreload25.open('GET', 'packages/gk/modern/bunker_wall_gk_03/bunker_wall_gk_03_sc.png', true);
    filePreload25.responseType = 'arraybuffer';
    filePreload25.onload = function() {
      var arrayBuffer = filePreload25.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_03/bunker_wall_gk_03_sc.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_03', 'bunker_wall_gk_03_sc.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_03/bunker_wall_gk_03_sc.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_03/bunker_wall_gk_03_sc.png');
    filePreload25.send(null);

    var filePreload26 = new DataRequest();
    filePreload26.open('GET', 'packages/gk/modern/bunker_wall_gk_04/bunker_wall_gk_04_cc.png', true);
    filePreload26.responseType = 'arraybuffer';
    filePreload26.onload = function() {
      var arrayBuffer = filePreload26.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_04/bunker_wall_gk_04_cc.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_04', 'bunker_wall_gk_04_cc.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_04/bunker_wall_gk_04_cc.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_04/bunker_wall_gk_04_cc.png');
    filePreload26.send(null);

    var filePreload27 = new DataRequest();
    filePreload27.open('GET', 'packages/gk/modern/bunker_wall_gk_04/bunker_wall_gk_04_hm.png', true);
    filePreload27.responseType = 'arraybuffer';
    filePreload27.onload = function() {
      var arrayBuffer = filePreload27.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_04/bunker_wall_gk_04_hm.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_04', 'bunker_wall_gk_04_hm.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_04/bunker_wall_gk_04_hm.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_04/bunker_wall_gk_04_hm.png');
    filePreload27.send(null);

    var filePreload28 = new DataRequest();
    filePreload28.open('GET', 'packages/gk/modern/bunker_wall_gk_04/bunker_wall_gk_04_nm.png', true);
    filePreload28.responseType = 'arraybuffer';
    filePreload28.onload = function() {
      var arrayBuffer = filePreload28.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_04/bunker_wall_gk_04_nm.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_04', 'bunker_wall_gk_04_nm.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_04/bunker_wall_gk_04_nm.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_04/bunker_wall_gk_04_nm.png');
    filePreload28.send(null);

    var filePreload29 = new DataRequest();
    filePreload29.open('GET', 'packages/gk/modern/bunker_wall_gk_04/bunker_wall_gk_04_sc.png', true);
    filePreload29.responseType = 'arraybuffer';
    filePreload29.onload = function() {
      var arrayBuffer = filePreload29.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_04/bunker_wall_gk_04_sc.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_04', 'bunker_wall_gk_04_sc.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_04/bunker_wall_gk_04_sc.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_04/bunker_wall_gk_04_sc.png');
    filePreload29.send(null);

    var filePreload30 = new DataRequest();
    filePreload30.open('GET', 'packages/gk/modern/bunker_wall_gk_05/bunker_wall_gk_05_cc.png', true);
    filePreload30.responseType = 'arraybuffer';
    filePreload30.onload = function() {
      var arrayBuffer = filePreload30.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_05/bunker_wall_gk_05_cc.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_05', 'bunker_wall_gk_05_cc.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_05/bunker_wall_gk_05_cc.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_05/bunker_wall_gk_05_cc.png');
    filePreload30.send(null);

    var filePreload31 = new DataRequest();
    filePreload31.open('GET', 'packages/gk/modern/bunker_wall_gk_05/bunker_wall_gk_05_hm.png', true);
    filePreload31.responseType = 'arraybuffer';
    filePreload31.onload = function() {
      var arrayBuffer = filePreload31.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_05/bunker_wall_gk_05_hm.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_05', 'bunker_wall_gk_05_hm.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_05/bunker_wall_gk_05_hm.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_05/bunker_wall_gk_05_hm.png');
    filePreload31.send(null);

    var filePreload32 = new DataRequest();
    filePreload32.open('GET', 'packages/gk/modern/bunker_wall_gk_05/bunker_wall_gk_05_nm.png', true);
    filePreload32.responseType = 'arraybuffer';
    filePreload32.onload = function() {
      var arrayBuffer = filePreload32.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_05/bunker_wall_gk_05_nm.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_05', 'bunker_wall_gk_05_nm.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_05/bunker_wall_gk_05_nm.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_05/bunker_wall_gk_05_nm.png');
    filePreload32.send(null);

    var filePreload33 = new DataRequest();
    filePreload33.open('GET', 'packages/gk/modern/bunker_wall_gk_05/bunker_wall_gk_05_sc.png', true);
    filePreload33.responseType = 'arraybuffer';
    filePreload33.onload = function() {
      var arrayBuffer = filePreload33.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_05/bunker_wall_gk_05_sc.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_05', 'bunker_wall_gk_05_sc.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_05/bunker_wall_gk_05_sc.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_05/bunker_wall_gk_05_sc.png');
    filePreload33.send(null);

    var filePreload34 = new DataRequest();
    filePreload34.open('GET', 'packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_cc.png', true);
    filePreload34.responseType = 'arraybuffer';
    filePreload34.onload = function() {
      var arrayBuffer = filePreload34.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_cc.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_06', 'bunker_wall_gk_06_cc.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_cc.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_cc.png');
    filePreload34.send(null);

    var filePreload35 = new DataRequest();
    filePreload35.open('GET', 'packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_cc_a.png', true);
    filePreload35.responseType = 'arraybuffer';
    filePreload35.onload = function() {
      var arrayBuffer = filePreload35.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_cc_a.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_06', 'bunker_wall_gk_06_cc_a.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_cc_a.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_cc_a.png');
    filePreload35.send(null);

    var filePreload36 = new DataRequest();
    filePreload36.open('GET', 'packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_hm.png', true);
    filePreload36.responseType = 'arraybuffer';
    filePreload36.onload = function() {
      var arrayBuffer = filePreload36.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_hm.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_06', 'bunker_wall_gk_06_hm.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_hm.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_hm.png');
    filePreload36.send(null);

    var filePreload37 = new DataRequest();
    filePreload37.open('GET', 'packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_hm_a.png', true);
    filePreload37.responseType = 'arraybuffer';
    filePreload37.onload = function() {
      var arrayBuffer = filePreload37.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_hm_a.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_06', 'bunker_wall_gk_06_hm_a.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_hm_a.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_hm_a.png');
    filePreload37.send(null);

    var filePreload38 = new DataRequest();
    filePreload38.open('GET', 'packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_nm.png', true);
    filePreload38.responseType = 'arraybuffer';
    filePreload38.onload = function() {
      var arrayBuffer = filePreload38.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_nm.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_06', 'bunker_wall_gk_06_nm.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_nm.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_nm.png');
    filePreload38.send(null);

    var filePreload39 = new DataRequest();
    filePreload39.open('GET', 'packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_nm_a.png', true);
    filePreload39.responseType = 'arraybuffer';
    filePreload39.onload = function() {
      var arrayBuffer = filePreload39.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_nm_a.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_06', 'bunker_wall_gk_06_nm_a.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_nm_a.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_nm_a.png');
    filePreload39.send(null);

    var filePreload40 = new DataRequest();
    filePreload40.open('GET', 'packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_sc.png', true);
    filePreload40.responseType = 'arraybuffer';
    filePreload40.onload = function() {
      var arrayBuffer = filePreload40.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_sc.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_06', 'bunker_wall_gk_06_sc.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_sc.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_sc.png');
    filePreload40.send(null);

    var filePreload41 = new DataRequest();
    filePreload41.open('GET', 'packages/gk/modern/bunker_wall_gk_07/bunker_wall_gk_07_cc.png', true);
    filePreload41.responseType = 'arraybuffer';
    filePreload41.onload = function() {
      var arrayBuffer = filePreload41.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_07/bunker_wall_gk_07_cc.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_07', 'bunker_wall_gk_07_cc.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_07/bunker_wall_gk_07_cc.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_07/bunker_wall_gk_07_cc.png');
    filePreload41.send(null);

    var filePreload42 = new DataRequest();
    filePreload42.open('GET', 'packages/gk/modern/bunker_wall_gk_07/bunker_wall_gk_07_hm.png', true);
    filePreload42.responseType = 'arraybuffer';
    filePreload42.onload = function() {
      var arrayBuffer = filePreload42.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_07/bunker_wall_gk_07_hm.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_07', 'bunker_wall_gk_07_hm.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_07/bunker_wall_gk_07_hm.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_07/bunker_wall_gk_07_hm.png');
    filePreload42.send(null);

    var filePreload43 = new DataRequest();
    filePreload43.open('GET', 'packages/gk/modern/bunker_wall_gk_07/bunker_wall_gk_07_nm.png', true);
    filePreload43.responseType = 'arraybuffer';
    filePreload43.onload = function() {
      var arrayBuffer = filePreload43.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_07/bunker_wall_gk_07_nm.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_07', 'bunker_wall_gk_07_nm.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_07/bunker_wall_gk_07_nm.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_07/bunker_wall_gk_07_nm.png');
    filePreload43.send(null);

    var filePreload44 = new DataRequest();
    filePreload44.open('GET', 'packages/gk/modern/bunker_wall_gk_07/bunker_wall_gk_07_sc.png', true);
    filePreload44.responseType = 'arraybuffer';
    filePreload44.onload = function() {
      var arrayBuffer = filePreload44.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_07/bunker_wall_gk_07_sc.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_07', 'bunker_wall_gk_07_sc.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_07/bunker_wall_gk_07_sc.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_07/bunker_wall_gk_07_sc.png');
    filePreload44.send(null);

    var filePreload45 = new DataRequest();
    filePreload45.open('GET', 'packages/gk/modern/bunker_wall_gk_08/bunker_wall_gk_08_cc.png', true);
    filePreload45.responseType = 'arraybuffer';
    filePreload45.onload = function() {
      var arrayBuffer = filePreload45.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_08/bunker_wall_gk_08_cc.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_08', 'bunker_wall_gk_08_cc.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_08/bunker_wall_gk_08_cc.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_08/bunker_wall_gk_08_cc.png');
    filePreload45.send(null);

    var filePreload46 = new DataRequest();
    filePreload46.open('GET', 'packages/gk/modern/bunker_wall_gk_08/bunker_wall_gk_08_hm.png', true);
    filePreload46.responseType = 'arraybuffer';
    filePreload46.onload = function() {
      var arrayBuffer = filePreload46.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_08/bunker_wall_gk_08_hm.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_08', 'bunker_wall_gk_08_hm.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_08/bunker_wall_gk_08_hm.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_08/bunker_wall_gk_08_hm.png');
    filePreload46.send(null);

    var filePreload47 = new DataRequest();
    filePreload47.open('GET', 'packages/gk/modern/bunker_wall_gk_08/bunker_wall_gk_08_nm.png', true);
    filePreload47.responseType = 'arraybuffer';
    filePreload47.onload = function() {
      var arrayBuffer = filePreload47.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_08/bunker_wall_gk_08_nm.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_08', 'bunker_wall_gk_08_nm.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_08/bunker_wall_gk_08_nm.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_08/bunker_wall_gk_08_nm.png');
    filePreload47.send(null);

    var filePreload48 = new DataRequest();
    filePreload48.open('GET', 'packages/gk/modern/bunker_wall_gk_08/bunker_wall_gk_08_sc.png', true);
    filePreload48.responseType = 'arraybuffer';
    filePreload48.onload = function() {
      var arrayBuffer = filePreload48.response;
      assert(arrayBuffer, 'Loading file packages/gk/modern/bunker_wall_gk_08/bunker_wall_gk_08_sc.png failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/gk/modern/bunker_wall_gk_08', 'bunker_wall_gk_08_sc.png', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/gk/modern/bunker_wall_gk_08/bunker_wall_gk_08_sc.png');

      });
    };
    Module['addRunDependency']('fp packages/gk/modern/bunker_wall_gk_08/bunker_wall_gk_08_sc.png');
    filePreload48.send(null);

    var filePreload49 = new DataRequest();
    filePreload49.open('GET', 'packages/base/mo.ogz', true);
    filePreload49.responseType = 'arraybuffer';
    filePreload49.onload = function() {
      var arrayBuffer = filePreload49.response;
      assert(arrayBuffer, 'Loading file packages/base/mo.ogz failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/base', 'mo.ogz', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/base/mo.ogz');

      });
    };
    Module['addRunDependency']('fp packages/base/mo.ogz');
    filePreload49.send(null);

    var filePreload50 = new DataRequest();
    filePreload50.open('GET', 'packages/base/mo.cfg', true);
    filePreload50.responseType = 'arraybuffer';
    filePreload50.onload = function() {
      var arrayBuffer = filePreload50.response;
      assert(arrayBuffer, 'Loading file packages/base/mo.cfg failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/base', 'mo.cfg', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/base/mo.cfg');

      });
    };
    Module['addRunDependency']('fp packages/base/mo.cfg');
    filePreload50.send(null);

    var filePreload51 = new DataRequest();
    filePreload51.open('GET', 'packages/base/mo.wpt', true);
    filePreload51.responseType = 'arraybuffer';
    filePreload51.onload = function() {
      var arrayBuffer = filePreload51.response;
      assert(arrayBuffer, 'Loading file packages/base/mo.wpt failed.');
      var byteArray = !arrayBuffer.subarray ? new Uint8Array(arrayBuffer) : arrayBuffer;
      
      Module['FS_createPreloadedFile']('/packages/base', 'mo.wpt', byteArray, true, true, function() {
        Module['removeRunDependency']('fp packages/base/mo.wpt');

      });
    };
    Module['addRunDependency']('fp packages/base/mo.wpt');
    filePreload51.send(null);

    if (!Module.expectedDataFileDownloads) {
      Module.expectedDataFileDownloads = 0;
      Module.finishedDataFileDownloads = 0;
    }
    Module.expectedDataFileDownloads++;

    var dataFile = new XMLHttpRequest();
    dataFile.onprogress = function(event) {
      var url = 'seven.data';
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
    dataFile.open('GET', 'seven.data', true);
    dataFile.responseType = 'arraybuffer';
    dataFile.onload = function() {
      Module.finishedDataFileDownloads++;
      var arrayBuffer = dataFile.response;
      assert(arrayBuffer, 'Loading data file failed.');
      var byteArray = new Uint8Array(arrayBuffer);
      var curr;
      
        curr = DataRequest.prototype.requests['packages/gk/future/skysfJPG/skysfJ_bk.jpg'];
        curr.response = byteArray.subarray(0,198544);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/future/skysfJPG/skysfJ_ft.jpg'];
        curr.response = byteArray.subarray(198544,376475);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/future/skysfJPG/skysfJ_rt.jpg'];
        curr.response = byteArray.subarray(376475,545673);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/future/skysfJPG/skysfJ_lf.jpg'];
        curr.response = byteArray.subarray(545673,716646);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/future/skysfJPG/skysfJ_dn.jpg'];
        curr.response = byteArray.subarray(716646,911844);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/future/skysfJPG/skysfJ_up.jpg'];
        curr.response = byteArray.subarray(911844,1019298);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_05/package.cfg'];
        curr.response = byteArray.subarray(1019298,1019959);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_03/package.cfg'];
        curr.response = byteArray.subarray(1019959,1020620);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_01/package.cfg'];
        curr.response = byteArray.subarray(1020620,1021281);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_04/package.cfg'];
        curr.response = byteArray.subarray(1021281,1021942);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_08/package.cfg'];
        curr.response = byteArray.subarray(1021942,1022603);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_02/package.cfg'];
        curr.response = byteArray.subarray(1022603,1023264);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_07/package.cfg'];
        curr.response = byteArray.subarray(1023264,1023925);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_06/package.cfg'];
        curr.response = byteArray.subarray(1023925,1025190);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_01/bunker_wall_gk_01_cc.png'];
        curr.response = byteArray.subarray(1025190,3220517);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_01/bunker_wall_gk_01_hm.png'];
        curr.response = byteArray.subarray(3220517,3901634);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_01/bunker_wall_gk_01_nm.png'];
        curr.response = byteArray.subarray(3901634,6341396);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_01/bunker_wall_gk_01_sc.png'];
        curr.response = byteArray.subarray(6341396,7949425);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_02/bunker_wall_gk_02_cc.png'];
        curr.response = byteArray.subarray(7949425,8523617);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_02/bunker_wall_gk_02_hm.png'];
        curr.response = byteArray.subarray(8523617,8744497);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_02/bunker_wall_gk_02_nm.png'];
        curr.response = byteArray.subarray(8744497,9349391);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_02/bunker_wall_gk_02_sc.png'];
        curr.response = byteArray.subarray(9349391,10085603);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_03/bunker_wall_gk_03_cc.png'];
        curr.response = byteArray.subarray(10085603,10382130);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_03/bunker_wall_gk_03_hm.png'];
        curr.response = byteArray.subarray(10382130,10479528);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_03/bunker_wall_gk_03_nm.png'];
        curr.response = byteArray.subarray(10479528,10745250);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_03/bunker_wall_gk_03_sc.png'];
        curr.response = byteArray.subarray(10745250,10945369);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_04/bunker_wall_gk_04_cc.png'];
        curr.response = byteArray.subarray(10945369,11834974);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_04/bunker_wall_gk_04_hm.png'];
        curr.response = byteArray.subarray(11834974,12218447);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_04/bunker_wall_gk_04_nm.png'];
        curr.response = byteArray.subarray(12218447,13491644);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_04/bunker_wall_gk_04_sc.png'];
        curr.response = byteArray.subarray(13491644,14364074);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_05/bunker_wall_gk_05_cc.png'];
        curr.response = byteArray.subarray(14364074,14627375);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_05/bunker_wall_gk_05_hm.png'];
        curr.response = byteArray.subarray(14627375,14753605);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_05/bunker_wall_gk_05_nm.png'];
        curr.response = byteArray.subarray(14753605,15015312);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_05/bunker_wall_gk_05_sc.png'];
        curr.response = byteArray.subarray(15015312,15179256);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_cc.png'];
        curr.response = byteArray.subarray(15179256,17894015);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_cc_a.png'];
        curr.response = byteArray.subarray(17894015,20459821);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_hm.png'];
        curr.response = byteArray.subarray(20459821,21050575);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_hm_a.png'];
        curr.response = byteArray.subarray(21050575,21693422);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_nm.png'];
        curr.response = byteArray.subarray(21693422,24241498);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_nm_a.png'];
        curr.response = byteArray.subarray(24241498,26734561);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_06/bunker_wall_gk_06_sc.png'];
        curr.response = byteArray.subarray(26734561,28547015);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_07/bunker_wall_gk_07_cc.png'];
        curr.response = byteArray.subarray(28547015,28850192);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_07/bunker_wall_gk_07_hm.png'];
        curr.response = byteArray.subarray(28850192,28946116);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_07/bunker_wall_gk_07_nm.png'];
        curr.response = byteArray.subarray(28946116,29221966);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_07/bunker_wall_gk_07_sc.png'];
        curr.response = byteArray.subarray(29221966,29340889);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_08/bunker_wall_gk_08_cc.png'];
        curr.response = byteArray.subarray(29340889,30508173);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_08/bunker_wall_gk_08_hm.png'];
        curr.response = byteArray.subarray(30508173,30836492);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_08/bunker_wall_gk_08_nm.png'];
        curr.response = byteArray.subarray(30836492,32101271);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/gk/modern/bunker_wall_gk_08/bunker_wall_gk_08_sc.png'];
        curr.response = byteArray.subarray(32101271,33500289);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/base/mo.ogz'];
        curr.response = byteArray.subarray(33500289,38240666);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/base/mo.cfg'];
        curr.response = byteArray.subarray(38240666,38241320);
        curr.onload();
      
        curr = DataRequest.prototype.requests['packages/base/mo.wpt'];
        curr.response = byteArray.subarray(38241320,38247797);
        curr.onload();
                Module['removeRunDependency']('datafile_seven.data');

    };
    Module['addRunDependency']('datafile_seven.data');
    dataFile.send(null);
    if (Module['setStatus']) Module['setStatus']('Downloading...');
  
  });


})();

