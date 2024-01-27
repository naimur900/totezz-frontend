const UserInfo = ({ userData }: any) => {
  console.log("Jodd", userData);
  return (
    <>
      <div className="flex flex-col gap-5 h-screen p-16 w-1/2">
        <h1 className="text-lg">Personal Information</h1>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center gap-7">
            <h1 className="text-base">Name: {userData.firstName}</h1>
            <button className="btn btn-warning">Change</button>
          </div>
          <div className="flex justify-between items-center gap-7">
            <h1 className="text-base">Email: {userData.email}</h1>
            <button className="btn btn-warning">Change</button>
          </div>
          <div className="flex justify-between items-center gap-7">
            <h1 className="text-base">
              Contact Number: {userData.contactNumber}
            </h1>
            <button className="btn btn-warning">Change</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
