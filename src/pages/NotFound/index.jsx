import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import Container from "../../components/common/Container";

function NotFound() {
  return (
    <Container>
      <div className="min-h-[60vh] flex items-center sm:justify-center">
        <div className="flex flex-col sm:gap-4 sm:flex-row">
          <h2 className="font-bold text-2xl">404</h2>
          <article>
            <div className="sm:px-4 sm:border-l-2">
              <h3 className="font-bold text-2xl">Page Not Found.</h3>
              <p>Sorry, we couldn't find the page you are looking for.</p>
            </div>
            <Link
              to="/"
              className="inline-flex gap-1 items-center font-bold capitalize mt-6 py-2 px-2 rounded sm:px-4 hover:bg-gray-100"
            >
              <ArrowLeftIcon className="h-5" />
              <span>go back home</span>
            </Link>
          </article>
        </div>
      </div>
    </Container>
  );
}

export default NotFound;
