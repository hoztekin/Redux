import { useSelector, useDispatch } from "react-redux";
import CourseItem from "./CourseItem";
import { clearCart } from "../control/CartSlice";

function CourseList() {
  const dispatch = useDispatch();
  const { cartItems, quantity, total } = useSelector((store) => store.cart);
  return (
    <>
      {quantity < 1 ? (
        <section className="cart">
          <header>
            <h2>Sepetim</h2>
            <h4>Bomboş</h4>
          </header>
        </section>
      ) : (
        <section className="cart">
          <header>
            <h2>Sepetim</h2>
          </header>
          <div>
            {cartItems.map((item) => {
              return <CourseItem {...item} key={item.id} />;
            })}
          </div>
          <footer>
            <hr />
            <div>
              <h4>
                Toplam Tutar <span>{total} TL</span>
              </h4>
            </div>
            <button className="btnDelete" onClick={() => dispatch(clearCart())}>
              Temizle
            </button>
          </footer>
        </section>
      )}
    </>
  );
}

export default CourseList;
