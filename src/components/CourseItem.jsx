import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../control/CartSlice";

// eslint-disable-next-line react/prop-types
function CourseItem({ id, title, price, img, quantity }) {
  const dispatch = useDispatch();
  return (
    <div className="cardItem">
      <img src={img} alt="" />
      <div className="cardInfo">
        <h4>{title}</h4>
        <h4>{price} TL</h4>
        <div>
          <button
            className="cardQuantityBtn"
            onClick={() => {
              dispatch(increase(id));
            }}
          >
            <FaChevronUp />
          </button>
          <p className="cardQuantity">{quantity}</p>
          <button
            className="cardQuantityBtn"
            onClick={() => {
              dispatch(decrease(id));
            }}
          >
            <FaChevronDown />
          </button>
        </div>
        <button
          className="cardDeleteBtn"
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          Sil
        </button>
      </div>
    </div>
  );
}

export default CourseItem;
