(function(){

var brokerUrl = 'http://wrtcb.jit.su:80';

if (window.location.search) {
  var params = window.location.search.substring(1).split('&');
  for (var i = 0; i < params.length; ++ i) {
    if (params[i].match('^webrtc-broker')) {
      brokerUrl = params[i].split('=')[1];
    }
  }
}

document.querySelector('#broker-url').innerHTML = 'Broker: ' + brokerUrl;

var hosts = {};
var filter = {
  'metadata': {
    'name': '^BananaBread$'
  }
};

var listElement = document.querySelector('#list');
var listItemElement = listElement.querySelector('li');
listElement.removeChild(listItemElement);

var joinModal = document.querySelector('#join-modal');

var socket = io.connect(brokerUrl + '/list');
socket.on('connect', function() {
  socket.emit('list', filter);
});
socket.on('error', function(error) {
  console.error(error);
});
socket.on('truncate', function(list) {
  clear();
  append(list);
});
socket.on('append', function(host) {
  append([host]);
});
socket.on('update', function(host) {
  update([host]);
});
socket.on('remove', function(route) {
  remove([route]);
});

function setQuery(url, item) {
  var urlParts = url.split('?');
  if(urlParts.length < 2) {
    urlParts[1] = item;
  } else {
    var query = urlParts[1].split('&');
    query.push(item);
    urlParts[1] = query.join('&');
  }
  return urlParts.join('?');
};

function clear() {
  hosts = {};
  while(listElement.firstChild){
    listElement.removeChild(listElement.firstChild);
  }
}

function createListItemFromHost(host, element){
  var newListItem = element || listItemElement.cloneNode(true);
  newListItem.querySelector('.game-time').innerHTML = new Date(host['ctime']).toString();
  newListItem.querySelector('.game-users').innerHTML = host['metadata']['connected']
    + ' Player' + (host['metadata']['connected'] !== 1 ? 's' : '');
  newListItem.querySelector('.game-name').innerHTML = host['metadata']['name'] || '';
  
  //force onclick to be removed
  newListItem.onclick = null;

  newListItem.onclick = function(e) {
    var gameContainer = joinModal.querySelector('#join-game-container');
    var listItemContainer = newListItem.querySelector('.game-container').cloneNode(true);

    var oldListItemContainer = gameContainer.querySelector('.game-container');
    if (oldListItemContainer) {
      gameContainer.removeChild(oldListItemContainer);
    }

    // var joinButton = document.createElement('div');
    // joinButton.className = 'join-game-button join-button';
    // joinButton.href = setQuery(host['url'], 'webrtc-session=' + host['route']);

    // var cancelButton = document.createElement('div');
    // cancelButton.className = 'join-game-button cancel-button';
    // cancelButton.onclick = function(e) {
    //   joinModal.hidden = true;
    // };

    // listItemContainer.appendChild(joinButton);
    // listItemContainer.appendChild(cancelButton);

    gameContainer.appendChild(listItemContainer);

    joinModal.hidden = false;
  };

  return newListItem;
}

function append(list) {
  list = list || [];
  list.forEach(function(host) {
    hosts[host['route']] = host;
    var newListItem = createListItemFromHost(host);
    host.element = newListItem;
    listElement.appendChild(newListItem);
  });
}

function update(list) {
  list = list || [];
  list.forEach(function(host) {
    if(hosts[host['route']]) {
      createListItemFromHost(host, hosts[host['route']].element);
    }
  });
};

function remove(list) {
  list = list || [];
  list.forEach(function(route) {
    var host = hosts[route];
    var element = host.element;
    element.parentNode.removeChild(element);
    delete hosts[route];
  });
};

}());