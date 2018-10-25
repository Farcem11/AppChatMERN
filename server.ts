import App from "./App"

const PORT = process.env.PORT || 8000;

App.server.listen(PORT, () => 
{
    console.log('Express server listening on port %s', PORT);
})

App.io.on('connection', socket =>
{
    console.log('Connected client on port %s: %s.', PORT, socket.id);
    
    socket.on('message', (text: String, userName : string) =>
    {
        let messageResponse : Object = 
        {
            userName,
            text
        }
        socket.broadcast.emit('message', messageResponse);
    });
})