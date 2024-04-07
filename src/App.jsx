import { useEffect, useState } from "react";
import io from "socket.io-client";

// const socket = io("wss://stream.binance.com:9443/ws/ethusdt@trade");

// socket.on("connect", function () {
//   console.log("Соединение установлено");
// });

// console.log(socket);

function App() {
  const [eth, setEth] = useState();
  const [btc, setBtc] = useState();
  const [sol, setSol] = useState();
  const [xrp, setXrp] = useState();
  const [near, setNear] = useState();

  let socketEth = new WebSocket(
    "wss://stream.binance.com:9443/ws/ethusdt@trade"
  );
  let socketBtc = new WebSocket(
    "wss://stream.binance.com:9443/ws/btcusdt@trade"
  );
  let socketSol = new WebSocket(
    "wss://stream.binance.com:9443/ws/solusdt@trade"
  );
  let socketXrp = new WebSocket(
    "wss://stream.binance.com:9443/ws/xrpusdt@trade"
  );
  let socketNear = new WebSocket(
    "wss://stream.binance.com:9443/ws/nearusdt@trade"
  );
  useEffect(() => {
    socketEth.onmessage = (event) => {
      const coursesEth = JSON.parse(event.data);
      setEth(coursesEth.p);
    };
    socketBtc.onmessage = (event) => {
      const coursesBtc = JSON.parse(event.data);
      setBtc(coursesBtc.p);
    };
    socketSol.onmessage = (event) => {
      const coursesSol = JSON.parse(event.data);
      setSol(coursesSol.p);
    };
    socketXrp.onmessage = (event) => {
      const coursesXrp = JSON.parse(event.data);
      setXrp(coursesXrp.p);
    };
    socketNear.onmessage = (event) => {
      const coursesNear = JSON.parse(event.data);
      setNear(coursesNear.p);
    };
  }, []);

  return (
    <div>
      {/* <p>eth: {eth}</p>
      <p>btc: {btc}</p>
      <p>sol: {sol}</p>
      <p>xrp: {xrp}</p>
      <p>near: {near}</p> */}
      <p>
        Если коэффициент увеличивается надо покупать то что дешевле,
        <br /> если коэффициент уменьшается надо продавать то что дешевле
      </p>
      <p>
        Если коэффициент увеличивается надо продавать то что дороже,
        <br /> если коэффициент уменьшается надо покупать то что дороже
      </p>

      <p>btc / eth: {parseFloat(btc / eth).toFixed(2)} начальная 20</p>
      <p>{btc / eth > 21 ? "продавать btc покупать eth" : ""}</p>
      <p>{btc / eth < 19 ? "продавать eth покупать btc" : ""}</p>
      <p>btc / sol: {parseFloat(btc / sol).toFixed(2)} начальная 390</p>
      <p>
        btc / xrp: {parseFloat(btc / xrp).toFixed(2)} начальная 116330(1000)
      </p>
      <p>btc / near: {parseFloat(btc / near).toFixed(2)} начальная 9940(100)</p>
      <p>eth / sol: {parseFloat(eth / sol).toFixed(2)} начальная 19</p>
      <p>eth / xrp: {parseFloat(eth / xrp).toFixed(2)} начальная 5687</p>
      <p>eth / near: {parseFloat(eth / near).toFixed(2)} начальная 476</p>
      <p>sol / xrp: {parseFloat(sol / xrp).toFixed(2)} начальная 300</p>
      <p>sol / near: {parseFloat(sol / near).toFixed(2)} начальная 25.6(0.5)</p>
      <p>near / xrp: {parseFloat(near / xrp).toFixed(2)} начальная 11.8</p>
    </div>
  );
}

export default App;
