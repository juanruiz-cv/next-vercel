import Link from "next/link";
import MainLayout from "../../../components/Layouts/MainLayout/mainLayout.component";

export default function PricingPage() {
  return (
    <MainLayout>
      <h1>Pricing Page</h1>
      <h2 className={"title"}>
        Ir a <Link href="/">Home</Link>
      </h2>
      <div className={"center"}>
        <div className={"description"}>
          <p>
            Get started by editing&nbsp;
            <code className={"code"}>src/pages/pricing/index.tsx</code>
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
