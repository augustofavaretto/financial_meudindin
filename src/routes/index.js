import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Home from '../pages/Home';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';

const Private = ({ Item, ...rest }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item {...rest} /> : <Signin />;
};

const RoutesApp = ({ income, expense, total, transactionsList, setTransactionsList, handleAdd }) => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route
            exact
            path="/home"
            element={
              <Private
                Item={Home}
                income={income}
                expense={expense}
                total={total}
                transactionsList={transactionsList}
                setTransactionsList={setTransactionsList}
                handleAdd={handleAdd}
              />
            }
          />
          <Route path="/" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="*" element={<Signin />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;

