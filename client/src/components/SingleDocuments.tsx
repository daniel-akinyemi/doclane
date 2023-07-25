const SingleDocuments = ({ document }) => {
  return (
    <div>
      <div className="flex space-x-12 bg-gray-200 rounded-lg py-4 px-8 my-4">
        <div className="font-bold">{document._id}</div>
        <div className="font-bold">{document.title}</div>
      </div>
    </div>
  );
};

export default SingleDocuments;
