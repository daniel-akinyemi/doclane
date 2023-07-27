const SingleDocuments = ({ document,index }) => {
  return (
    <div>
      <div className="flex space-x-12 bg-gray-200 rounded-lg py-4 px-8 my-4">
        <div className="font-bold">{index + 1}</div>
        <div className="font-bold">{document.title}</div>
        <span className="hidden">{document._id}</span>
      </div>
    </div>
  );
};

export default SingleDocuments;
