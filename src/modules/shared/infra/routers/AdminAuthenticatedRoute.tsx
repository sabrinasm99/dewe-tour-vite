import React from "react";
import { Route } from "react-router-dom";
import HomePage from "../../../../pages";

type AdminAuthenticatedRouteProps = {
  Component: React.ComponentType<any>;
  path: string;
};

export default function AdminAuthenticatedRoute({
  Component,
  path,
}: AdminAuthenticatedRouteProps) {
  const { token, isAdmin } = localStorage;

  if (token) {
    if (isAdmin) {
      return <Route path={path} Component={Component} />;
    } else {
      return <Route path="/" Component={HomePage} />;
    }
  } else {
    return <Route path="/" Component={HomePage} />;
  }
}
