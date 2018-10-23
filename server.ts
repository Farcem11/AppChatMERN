import App from "./App"

const PORT = process.env.PORT || 8000;

App.server.listen(PORT, () => 
{
    console.log('Express server listening on port %s', PORT);
})

App.io.on('connect', socket =>
{
    console.log('Connected client on port %s.', PORT);

    socket.on('message', (m: String) => 
    {
        console.log('[server](message): %s', m);
        App.io.emit('message', 'Hi from server');
    });
})