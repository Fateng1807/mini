import React, { useState } from "react";
import logo from "./logo.png"; // import รูปภาพโลโก้

const WaterElectricityCalculator = () => {
  const [waterUsage, setWaterUsage] = useState(""); //เก็บค่าน้ำ
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [res_naem, setRes_Name] = useState("");
  const [res_tel, setRes_Tel] = useState("");
  const [res_unit, setRes_Unit] = useState("");
  const [res_water, setRes_Water] = useState("");
  const [electricityUsage, setElectricityUsage] = useState(""); //เก็บค่าไฟ้
  const [waterCost, setWaterCost] = useState(0);
  const [electricityCost, setElectricityCost] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [water, setWater] = useState(0);

  const waterCostValue = parseFloat(waterUsage) * water; // 5 บาทต่อหน่วย
  const electricityCostValue = parseFloat(electricityUsage) * 7; // 7 บาทต่อหน่วย
  const totalCostValue = waterCostValue;

  const onResult = () => {
    if (name === "") {
      alert("กรุณากรอกชื่อ");
    } else if (tel === "") {
      alert("กรุณากรอกเบอร์โทร");
    } else if (waterUsage === "") {
      alert("กรุณากรอกปริมาณการใช้น้ำ");
    } else if (water === "") {
      alert("กรุณากรอกราคาน้ำ/หน่วย");
    } else {
      setWaterCost(waterCostValue);
      setTotalCost(totalCostValue);
      setWaterUsage("");
      setRes_Name(name);
      setRes_Tel(tel);
      setRes_Water(water);
      setRes_Unit(waterUsage);
      setName("");
      setTel("");
    }
  };

  return (
    <div style={styles.container}>
      <img
        src={logo}
        alt="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fpwa.pathumthani%2Fphotos%2Fa.417273115013606%2F1063804733693771%2F%3Ftype%3D3&psig=AOvVaw1hZRipw3hlUC1xvz_D3A7V&ust=1710685661143000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKiT_vH--IQDFQAAAAAdAAAAABAD"
        style={{ width: "100px", height: "100px" }}
      />{" "}
      {/* เพิ่มรูปโลโก้ */}
      <h1
        style={{
          fontSize: 25,
          fontWeight: "bold",
          padding: 10,
          textAlign: "center",
          paddingBottom: 20,
        }}
      >
        ระบบคิดค่าน้ำ
      </h1>
      <div style={{ paddingTop: 20 }} />
      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <label style={styles.label}>ชื่อผู้ใช้: </label>
        <input
          placeholder="ชื่อ"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <br></br>
        <label style={styles.label}>เบอร์โทร: </label>
        <input
          placeholder="เบอร์โทร"
          type="tel"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
          style={styles.input}
        />
        
        <br></br>
        <label style={styles.label}>ป้อนปริมาณการใช้น้ำ (หน่วย): </label>
        <input
          type="number"
          placeholder="ป้อนปริมาณการใช้น้ำ"
          value={waterUsage}
          onChange={(e) => setWaterUsage(e.target.value)}
          style={styles.input}
        />
        <br></br>

        <label style={styles.label}>ป้อนราคาน้ำ/หน่วย: </label>
        <input
          type="number"
          placeholder="ป้อนปริมาณการใช้น้ำ"
          onChange={(e) => setWater(e.target.value)}
          style={styles.input}
        />

        <br></br>
        <button
          onClick={() => onResult()}
          style={{
            backgroundColor: "#87CEFA",
            borderRadius: "15px",
            fontSize: 18,
            padding: 15,
            fontWeight: "bold",
            borderWidth: 3,
          }}
        >
          คำนวณ
        </button>
      </div>
      {res_naem ? (
        <div style={{ paddingTop: 10, paddingHorizontal: 20 }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: 25,
              paddingTop: 10,
              borderBottomWidth: 1,
            }}
          >
            สรุปผลการคำนวณ
          </h2>
          <p style={styles.result}>ชื่อ: {res_naem} </p>
          <p style={styles.result}>เบอร์โทร: {res_tel} </p>
          <p style={styles.result}>หน่วยการใช้: {res_unit} หน่วย</p>
          <p style={styles.result}>ค่าน้ำ: {waterCost} บาท</p>
          <p style={styles.result}>รวมทั้งสิ้น: {totalCost} บาท</p>
        </div>
      ) : null}
    </div>
  );
};

const styles = {
  container: {
    padding: 16,
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "#87CEFA",
    backgroundColor: "#eee",
    borderWidth: 2,
    marginBottom: 25,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  result: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
    textAlign: "center",
  },
};

export default WaterElectricityCalculator;
