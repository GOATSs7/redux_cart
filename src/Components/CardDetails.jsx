import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { DLT, ADD, REMOVE } from "../redux/actions/action";
const CardDetails = () => {
  const [data, setData] = useState([]);
  // useparam hook
  const { id } = useParams();
  // to navigate back to home
  const history = useNavigate();
  const dispatch = useDispatch();

  //get data from store
  const getdata = useSelector((state) => state.cartreducer.carts);

  // function for compair
  const compare = () => {
    let compairedData = getdata.filter((e) => {
      return e.id == id;
    });
    setData(compairedData);
  };
  //add data
  const send = (e) => {
    dispatch(ADD(e));
  };

  //delete the item
  const deleteItem = (id) => {
    dispatch(DLT(id));
    history("/");
  };
  //remove one
  const remove = (item) => {
    dispatch(REMOVE(item));
  };

  useEffect(() => {
    compare();
  }, [id, getdata]);
  //
  //
  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Meals Detail</h2>

        <section className="container mt-3">
          <div className="iteamsdetails">
            {data.map((ele) => {
              return (
                <div key={ele.id}>
                  <div className="items_img">
                    <img src={ele.imgdata} alt="" />
                  </div>

                  <div className="details">
                    <Table>
                      <tbody>
                        <tr>
                          <td>
                            <p>
                              {" "}
                              <strong>Restaurant</strong> : {ele.rname}
                            </p>
                            <p>
                              {" "}
                              <strong>Price</strong> : ₹{ele.price}
                            </p>
                            <p>
                              {" "}
                              <strong>Dishes</strong> : {ele.address}
                            </p>
                            <p>
                              {" "}
                              <strong>Total</strong> :₹ {ele.price * ele.qnty}
                            </p>
                            <div
                              className="mt-5 d-flex justify-content-between align-items-center"
                              style={{
                                width: 100,
                                cursor: "pointer",
                                background: "#ddd",
                                color: "#111",
                              }}
                            >
                              <span
                                style={{ fontSize: 24 }}
                                onClick={
                                  ele.qnty <= 1
                                    ? () => deleteItem(ele.id)
                                    : () => remove(ele)
                                }
                              >
                                -
                              </span>
                              <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                              <span
                                style={{ fontSize: 24 }}
                                onClick={() => send(ele)}
                              >
                                +
                              </span>
                            </div>
                          </td>
                          <td>
                            <p>
                              <strong>Rating :</strong>{" "}
                              <span
                                style={{
                                  background: "green",
                                  color: "#fff",
                                  padding: "2px 5px",
                                  borderRadius: "5px",
                                }}
                              >
                                {ele.rating} ★{" "}
                              </span>
                            </p>
                            <p>
                              <strong>Order Review :</strong>{" "}
                              <span>{ele.somedata} </span>
                            </p>
                            <p>
                              <strong>Remove :</strong>{" "}
                              <span>
                                <i
                                  className="fas fa-trash"
                                  onClick={() => deleteItem(ele.id)}
                                  style={{
                                    color: "red",
                                    fontSize: 20,
                                    cursor: "pointer",
                                  }}
                                ></i>{" "}
                              </span>
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default CardDetails;
