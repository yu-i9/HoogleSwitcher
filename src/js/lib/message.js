module.exports.send = (function(){

  function sendMessage(label, body){
    var p = document.getElementById('message');
    p.className = '';
    p.classList.add('message', label);
    p.textContent = body;
  }

  return {'success': sendMessage.bind(null, 'message-success'),
          'error': sendMessage.bind(null, 'message-error')};
}());
