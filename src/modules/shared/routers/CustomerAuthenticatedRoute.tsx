import React from "react";
import { Route } from "react-router-dom";

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
      return <Route path={path} Component={Component}></Route>;
    }
  }
}
