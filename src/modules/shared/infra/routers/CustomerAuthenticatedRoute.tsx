import React from "react";
import { Route } from "react-router-dom";
import HomePage from "../../../../pages";
import TransactionListPage from "../../../../pages/transaction-list";

type CustomerAuthenticatedRouteProps = {
  Component: React.ComponentType<any>;
  path: string;
};

export default function CustomerAuthenticatedRoute({
  Component,
  path,
}: CustomerAuthenticatedRouteProps) {
  const { token, isAdmin } = localStorage;

  if (token) {
    if (!isAdmin) {
      return <Route path={path} Component={Component} />;
    } else {
      return <Route path="/transaction-list" Component={TransactionListPage} />;
    }
  } else {
    return <Route path="/" Component={HomePage} />;
  }
}
