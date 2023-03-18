import { useState } from "react";
import { useForm } from "react-hook-form";


export default function AddSupplierPage() {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    const saveSupplier = async (data) => {
        
        const response = await fetch('/api/supplier', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: "same-origin", // include, *same-origin, omit
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            // redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            // serialisation
            body: JSON.stringify(data), // body data type must match "Content-Type" header
          });
        const result = await response.json();   // deserialise
        if (result.error) {
            alert("Error: " + result.error)
        } else {
            alert("Supplier saved")
            window.location.href = "/Supplier"
        }
        console.log(result)
        setData(JSON.stringify(data))
    }

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
        <form
          onSubmit={handleSubmit(saveSupplier)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "5px",
            boxShadow: "0 0 10px rgba(0,0,0,0.2)",
          }}
        >
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
            New Supplier
          </h1>
          <label htmlFor="name">Supplier name</label>
          <input
            id="name"
            {...register("name", { required: true })}
            placeholder="Supplier Name"
            style={{ margin: "10px 0", padding: "10px" }}
          />
  
          <label htmlFor="address">Address</label>
          <input
            id="address"
            {...register("address", { required: true })}
            placeholder="Address"
            style={{ margin: "10px 0", padding: "10px" }}
          />
  
          <label htmlFor="phonenumber">Phone number</label>
          <input
            id="phonenumber"
            {...register("phonenumber")}
            placeholder="Phone number"
            style={{ margin: "10px 0", padding: "10px" }}
          />
          <button
            type="submit"
            style={{
              margin: "20px 0",
              padding: "10px 20px",
              borderRadius: "5px",
              backgroundColor: "#007aff",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Save Supplier
          </button>
          <p style={{ textAlign: "center" }}>{data}</p>
        </form>
      </div>
        
    );
}

