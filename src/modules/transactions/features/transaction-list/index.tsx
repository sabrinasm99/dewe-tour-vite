import { useState } from "react";
import { transactionList } from "../../../../fakedata";
import search from "../../../shared/images/search.svg";
import TransactionApprovalModal from "../../components/modals/TransactionApprovalModal";

export default function TransactionList() {
  const [showApprovalModal, setShowApprovalModal] = useState(false);

  return (
    <div className="grow flex justify-center relative z-10">
      <div className="mt-20 w-90%">
        <h1 className="font-bold text-2xl">Incoming Transaction</h1>
        <div className="bg-white rounded mt-5 w-full overflow-x-auto">
          <table className="table-fixed w-auto sm:w-full">
            <thead>
              <tr className="border-b border-#B7B7B7">
                <th className="rounded-tl bg-#FFAF00 py-3 pl-3">No</th>
                <th className="bg-#FFAF00 py-3 pl-3">Name</th>
                <th className="bg-#FFAF00 py-3 pl-3">Trip</th>
                <th className="bg-#FFAF00 py-3 pl-3">Payment Proof</th>
                <th className="bg-#FFAF00 py-3 pl-3">Payment Status</th>
                <th className="rounded-tr bg-#FFAF00 py-3 pl-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {transactionList.map((val, index) => (
                <tr
                  key={val.id}
                  className={`${
                    val.id % 2 === 0 ? "bg-transparent" : "bg-#F9F9F9"
                  } border-b border-#B7B7B7 text-sm`}
                >
                  <td className="pl-3 py-3">{index + 1}</td>
                  <td className="pl-3 py-3">{val.name}</td>
                  <td className="pl-3 py-3">{val.trip}</td>
                  <td className="pl-3 py-3">{val.attachment}</td>
                  <td
                    className={`${
                      val.status === "Waiting Approve"
                        ? "text-#F7941E"
                        : val.status === "Approve"
                        ? "text-#0ACF83"
                        : "text-#FF0742"
                    } pl-3 py-3`}
                  >
                    {val.status}
                  </td>
                  <td className="pl-3 py-3">
                    <img
                      src={search}
                      onClick={() => setShowApprovalModal(true)}
                      className="cursor-pointer"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {showApprovalModal && (
        <TransactionApprovalModal setShowApprovalModal={setShowApprovalModal} />
      )}
    </div>
  );
}
