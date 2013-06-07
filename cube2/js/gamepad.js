(function() {

function addGamepad(gamepad) {
  controllers[gamepad.index] = gamepad; var d = document.createElement("div");
};

function removeGamepad(gamepad) {
  delete controllers[gamepad.index];
};

var buttonStates = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0,
};

var buttonMap = {
  4: {type: 'key', value: 32}, // space
  5: {type: 'mouse', value: 0}, // mouse1
  2: {type: 'mouse', value: 4},
  3: {type: 'mouse', value: 3},
};

var axisStates = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
};

var axisMap = {
  0: {type: 'key', value: [65, 68]},
  1: {type: 'key', value: [87, 83]},
  3: {type: 'mouse', value: 'X'},
  4: {type: 'mouse', value: 'Y'},
};

function handleButtonEvent(event) {
  // do keydown/keyup
  if(!buttonMap.hasOwnProperty(event.button))
    return;

  var mapping = buttonMap[event.button];
  var type = mapping.type + (1 == event.value ? 'down' : 'up');

  if('key' == mapping.type) {
    _SDL_QueueEvent({
      type: type,
      keyCode: mapping.value
    });
  } else if ('mouse' == mapping.type) {
    _SDL_QueueEvent({
      type: type,
      button: mapping.value
    });
  }
};

var mouseState = {
  type: 'mousemove',
  movementX: 0,
  movementY: 0
};

function mouseTransform(value) {
  if(!value) return;

  var sign = value/Math.abs(value);
  return Math.log(Math.abs(value) * 10 + 1)  * sign;
};

function handleAxisEvent(event) {
  // do mousemove
  if(!axisMap.hasOwnProperty(event.axis))
    return;

  var axis = event.axis;
  var value = event.value;
  var mapping = axisMap[axis];

  if('key' == mapping.type) {
    if(axisStates[axis] < 0 && value >= 0) {
      _SDL_QueueEvent({
        type: 'keyup',
        keyCode: mapping.value[0]
      });
    } else if(axisStates[axis] > 0 && value <= 0) {
      _SDL_QueueEvent({
        type: 'keyup',
        keyCode: mapping.value[1]
      });
    }

    if(axisStates[axis] >= 0 && value < 0) {
      _SDL_QueueEvent({
        type: 'keydown',
        keyCode: mapping.value[0]
      });
    } else if(axisStates[axis] <= 0 && value > 0) {
      _SDL_QueueEvent({
        type: 'keydown',
        keyCode: mapping.value[1]
      });
    }
  } else if('mouse' == mapping.type) {
    mouseState['movement' + mapping.value] = mouseTransform(value);
  }
};

function updateGamepads() {
  var i, j;

  for (j in controllers) {
    var controller = controllers[j];

    for (i=0; i<controller.buttons.length; i++) {
      if(controller.buttons[i] != buttonStates[i]) {
        // button event
        handleButtonEvent({
          button: i,
          value: controller.buttons[i]
        });
        buttonStates[i] = controller.buttons[i];
      }
    }

    for (i=0; i<controller.axes.length; i++) {
      var value = Number(controller.axes[i].toFixed(1));
        // axis event
      handleAxisEvent({
        axis: i,
        value: value
      });
      axisStates[i] = value;
      if(mouseState.movementX != 0 || mouseState.movementY != 0) {
        _SDL_QueueEvent(mouseState);
      }
    }
  }
};

function handleGamepadConnected(event) {
  addGamepad(event.gamepad);
};

function handleGamepadDisconnected(event) {
  removeGamepad(event.gamepad);
};

var controllers = {};

window.addEventListener("gamepadconnected", handleGamepadConnected);
window.addEventListener("gamepaddisconnected", handleGamepadDisconnected);

window.updateGamepads = updateGamepads;

})();