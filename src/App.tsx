import { useEffect, useState } from 'react';
import Header from './components/Header.tsx';
import Button from './components/button.tsx';
import { calculateTotal, moneyFormatter } from './helpers';

function App() {

  const [ quantity, setQuantity ] = useState(10000);
  const [ months, setMonths ] = useState(6);
  const [ total, setTotal ] = useState(calculateTotal(quantity, months));
  const [ pay, setPay ] = useState(0);
  const MIN: number = 0;
  const MAX: number = 20000;
  const STEP: number = 100;

  useEffect(() => {
    setTotal(calculateTotal(quantity, months));
  }, [quantity, months, total]);

  useEffect(() => {
    setPay(total / months);
  }, [total])

  function handlePrice(e: React.ChangeEvent<HTMLInputElement>) {
    setQuantity(Number(e.target.value));
  }

  const handleClickDecrement = () => {
    const value = quantity - STEP;

    if(value < MIN) {
      return;
    }

    setQuantity(value);
  }

  const handleClickIncrement = () => {
    const value = quantity + STEP;

    if(value > MAX) {
      return;
    }

    setQuantity(value);
  }

  const handleSelectMonths = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMonths(Number(e.target.value));
  }

  return (
    <section>
      <article className="my-20 p-10 max-w-lg mx-auto bg-white rounded-lg">
        <Header />

        <div className='flex justify-between my-2'>
          <Button
            operator='-'
            handleClick={handleClickDecrement}
          />
          <Button
            operator='+'
            handleClick={handleClickIncrement}
          />
        </div>

        <input
          className='w-full h-6 mt-1 bg-gray-200 accent-sky-600 hover:accent-sky-700'
          type="range"
          name="price"
          id="priceInput"
          min={MIN}
          max={MAX}
          step={STEP}
          value={quantity}
          onChange={handlePrice}
        />
        <p className='text-center font-extrabold text-indigo-600 my-5 text-5xl'>{moneyFormatter(quantity)}</p>

        <h2
          className='text-2xl font-extrabold text-gray-500 text-center'
        >
          Choose a <span className="text-indigo-600">term</span> to pay
        </h2>

        <select
          className='mt-5 p-2 w-full bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500'
          value={months}
          onChange={handleSelectMonths}
        >
          <option value="6">6 Months</option>
          <option value="12">12 Months</option>
          <option value="24">24 Months</option>
        </select>

        <div className='my-5 space-y3 bg-gray-100 p-5 rounded-lg'>
          <h2
            className='text-2xl font-extrabold text-gray-500 text-center'
          >
          <span className="text-indigo-600">Payment</span> summary
          </h2>

          <p className='text-xl text-gray-500 text-center font-bold'>
          <span className='text-indigo-600'>{months}</span> Months
          </p>
          <p className='text-xl text-gray-500 text-center font-bold'>
          <span className='text-indigo-600'>{moneyFormatter(total)}</span> Total
          </p>
          <p className='text-xl text-gray-500 text-center font-bold'>
          <span className='text-indigo-600'>{moneyFormatter(pay)}</span> Monthly
          </p>
        </div>
      </article>
    </section>
  );
}

export default App
