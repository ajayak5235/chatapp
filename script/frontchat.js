async function sendMsg(event) {
    event.preventDefault();

    const msg = event.target.msg.value;
    const userId = localStorage.getItem('userId');
    const usermsg = {
        msg,
        userId
    };

    console.log(usermsg);

    try {
        const res = await axios.post('http://localhost:4000/chat/chatmsg', usermsg);
        alert(res.data.msg);
        showmsg(msg);
    } catch (err) {
        console.log(err);
    }
    
    event.target.reset();
}


window.addEventListener('DOMContentLoaded', ()=>{
    axios.get('http://localhost:4000/chat/get-chatmsg').then(response=>{
     response.data.msg.forEach(msg =>{
        showmsg(msg);
     }).catch(err =>{
        console.log(err)
     })
    })
});



function showmsg(msg) {
    document.getElementById('msg').value = '';

    var messagesContainer = document.getElementById('messages');
    var messageElement = document.createElement('div');
    messageElement.textContent = 'You: ' + msg;
    messagesContainer.appendChild(messageElement);
}