import React, { useEffect, useState } from 'react';
import './App.css';
import io from 'socket.io-client';
import _uniqBy from 'lodash.uniqby';
import SimpleTable from './table';
import Data from './data.json';
const socket = io('https://wss.live-rates.com/');

socket.on('connect', () => {
  const instruments = ['EURUSD', 'USDJPY', 'BTCUSD', 'ETH'];
  socket.emit('instruments', instruments);
  socket.emit('key', 'trial');
});

const cache = new Map();
function App () {
  const [data, setData] = useState([]);

  const update = React.useCallback((obj) => {
    if (!obj) {
      console.log('no data');
      return;
    }
    if (!obj.timestamp) {
      console.log('no timestamp', obj);
      return;
    }
    if (cache.has(obj.timestamp)) {
      console.log('has data ' + obj.timestamp);
    } else {
      console.log('no data ' + obj.timestamp);
      cache.set(obj.timestamp, obj);
    }
  }, []);

  useEffect(() => {
    socket.on('rates', (msg) => {
      try {
        const obj = JSON.parse(msg);
        update(obj);
      } catch (e) {
        console.log(msg);
      }
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const inter = _uniqBy([...Array.from(cache.values()), ...data], 'timestamp');
      setData([...inter]);
    }, 1500);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <>
      <SimpleTable headers={Data.tableLive} rows={data} key='timestamp'/>
    </>
  );
}

export default App;