import { useState } from "react";
// import { transactionList } from "../../../../fakedata";
import search from "../../../shared/images/search.svg";
import TransactionApprovalModal from "../../components/modals/TransactionApprovalModal";
import { useGetAllTransactions } from "../../api";
import { TransactionProps } from "../../../shared/types";

export default function TransactionList() {
  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const [selectedId, setSelectedId] = useState(0);
  const { data: transactions } = useGetAllTransactions();

  return (
    <div className="grow flex justify-center relative z-10">
      <div className="mt-20 w-90%">
        <h1 className="font-bold text-2xl">Incoming Transaction</h1>
        <div className="bg-white rounded mt-5 w-full overflow-x-auto">
          <table className="table-fixed w-auto min-[502px]:w-full">
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
              {transactions && transactions.length ? (
                transactions.map(
                  (transaction: TransactionProps, index: any) => (
                    <tr
                      key={transaction.id}
                      className={`${
                        index % 2 === 0 ? "bg-transparent" : "bg-#F9F9F9"
                      } border-b border-#B7B7B7 text-sm`}
                    >
                      <td className="pl-3 py-3">{index + 1}</td>
                      <td className="pl-3 py-3">{transaction.customer.name}</td>
                      <td className="pl-3 py-3">{transaction.trip.title}</td>
                      <td className="pl-3 py-3">
                        {transaction.attachment
                          ? transaction.attachment.split("/").pop()
                          : "None"}
                      </td>
                      <td
                        className={`${
                          transaction.status === "waiting approve"
                            ? "text-#F7941E"
                            : transaction.status === "approved"
                            ? "text-#0ACF83"
                            : "text-#FF0742"
                        } pl-3 py-3 capitalize font-medium`}
                      >
                        {transaction.status}
                      </td>
                      <td className="pl-3 py-3">
                        <img
                          src={search}
                          onClick={() => {
                            setSelectedId(transaction.id);
                            setShowApprovalModal(true);
                          }}
                          className="cursor-pointer"
                        />
                      </td>
                    </tr>
                  )
                )
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="text-center py-5 tracking-wide uppercase"
                  >
                    No Incoming Transaction
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {showApprovalModal && (
        <TransactionApprovalModal
          transactionId={selectedId}
          setShowApprovalModal={setShowApprovalModal}
        />
      )}
    </div>
  );
}
