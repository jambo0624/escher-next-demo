import net from 'net';

export default (req, res) => {
  const descriptor = req.query.descriptor || 'All_IDopa'; // Accessing descriptor from query parameters

  const client = new net.Socket();
  client.connect(6000, '127.0.0.1', () => {
    client.write(JSON.stringify({
      type: 'flux_data',
      descriptor
    }));
  });

  client.on('data', (data) => {
    // data may arrive in chunks, so ensure complete data is received
    let receivedData = data.toString();  // Convert buffer to string
    const response = JSON.parse(receivedData);  // Parse the string to JSON
    res.status(200).json(response);

    // client.destroy();
  });

  client.on('close', () => {
    console.log('Connection closed');
  });

  client.on('error', (err) => {
    res.status(500).json({ error: 'Error connecting to the socket server', details: err.toString() });
  });
};