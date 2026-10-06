import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="text-center">
        <img
          src={user.image}
          alt={`${user.firstName} ${user.lastName}`}
          className="mx-auto h-20 w-20 rounded-full object-cover"
        />

        <h2 className="mt-4 text-lg font-bold text-gray-900">
          {user.firstName} {user.lastName}
        </h2>

        <p className="mt-1 truncate text-sm text-gray-500">
          {user.email}
        </p>

        <span className="mt-3 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium capitalize text-gray-600">
          {user.role}
        </span>

        <button className="mt-5 w-full rounded-xl bg-gray-900 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-700 cursor-pointer">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default UserCard;