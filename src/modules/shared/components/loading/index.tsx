import BaseLayout from "../../layout/BaseLayout";

export default function Loading() {
  return (
    <BaseLayout>
      <div className="grow flex justify-center items-center text-2xl tracking-wider">
        Loading...
      </div>
    </BaseLayout>
  );
}
