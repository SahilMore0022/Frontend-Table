import ConfirmationPage from "../components/ConfirmationPage";

export default function Confirmation() {
  return  (
    <Suspense fallback={<div>Loading...</div>}>
      <ConfirmationPage />
    </Suspense>
  );
}
