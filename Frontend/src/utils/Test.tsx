
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const OrdersDisplayComponent = () => {
  const orders = useSelector((state: RootState) => state.order);

  return (
    <div>
      <h1>Orders</h1>
      <ul>
          <li key={orders.id}>
            <img src={orders.image_url} alt={orders.name} />
            <h2>{orders.name}</h2>
            <p>{orders.price}</p>
          </li>
      </ul>
    </div>
  );
};

export default OrdersDisplayComponent;
