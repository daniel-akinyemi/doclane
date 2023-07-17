import React from "react";

const page = () => {
  return (
    <div>
      <form className="space-y-4 w-10/12 mx-auto my-8">
        <div>
          <label htmlFor="title"></label>
          <input type="text" id="title" placeholder="Title" className="px-4 py-2 border-2 border-gray-500"/>
        </div>
        <div>
          <label htmlFor="description"></label>
          <input type="text" id="description" placeholder="Description" className="px-4 py-2 border-2 border-gray-500"/>
        </div>
        <div>
          <label htmlFor="body"></label>
          <input type="text" id="body" placeholder="Body" className="px-4 py-2 border-2 border-gray-500"/>
        </div>
      </form>
    </div>
  );
};

export default page;
